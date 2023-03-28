import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleAddLike() {
    setLikeCount(likeCount + 1);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://scontent.fppb7-1.fna.fbcdn.net/v/t1.6435-9/95752418_2714779098644871_5081992427762352128_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEYRuiwo92t6mFRDfGZlOuOtPW9LRNQozK09b0tE1CjMgQF6rchH-Np-FW5T-DyK5RBalVa39rH8zgLVjJagYp0&_nc_ohc=clY_lWZ68_EAX9ujHrT&_nc_ht=scontent.fppb7-1.fna&oh=00_AfAIHcjqvUl9vf_LSKLa90q19TfHr6WxCfZs299M589N1A&oe=6442DAE6" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.author}>
              <strong>Vitor Santos Rodrigues</strong>
              <time>Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleAddLike}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}