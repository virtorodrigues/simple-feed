import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, InvalidEvent, TextareaHTMLAttributes, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.css';

interface Author {
  avatarUrl: string;
  name: string;
  role: string;
};

interface Content {
  type: "link" | "paragraph";
  content: string;
};

export interface PostType {
  id: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
}

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {

  const [comments, setComments] = useState(['Que post massa, hein?!']);
  const [newCommentText, setNewCommentText] = useState('');

  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr
  });
  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  function handleNewCommentTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleCreateComment(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function handleDeleteComment(commentToDelete: string) {
    const commentsWithoutDeletedComment = comments
      .filter(comment => comment !== commentToDelete);

    setComments(commentsWithoutDeletedComment);
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>

          <Avatar src={post.author.avatarUrl} />

          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href='#'>{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={handleNewCommentTextChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>Publicar</button>
        </footer>

      </form>

      <div className={styles.commentList}>
        {comments.map(comment => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={handleDeleteComment}
          />
        ))}
      </div>
    </article>
  )
}