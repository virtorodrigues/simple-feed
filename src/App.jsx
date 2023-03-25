import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://scontent.fppb7-1.fna.fbcdn.net/v/t1.6435-9/95752418_2714779098644871_5081992427762352128_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEYRuiwo92t6mFRDfGZlOuOtPW9LRNQozK09b0tE1CjMgQF6rchH-Np-FW5T-DyK5RBalVa39rH8zgLVjJagYp0&_nc_ohc=clY_lWZ68_EAX9ujHrT&_nc_ht=scontent.fppb7-1.fna&oh=00_AfAIHcjqvUl9vf_LSKLa90q19TfHr6WxCfZs299M589N1A&oe=6442DAE6',
      name: 'Vitor Santos Rodrigues',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-03-25 15:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://scontent.fppb7-1.fna.fbcdn.net/v/t1.6435-9/95752418_2714779098644871_5081992427762352128_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEYRuiwo92t6mFRDfGZlOuOtPW9LRNQozK09b0tE1CjMgQF6rchH-Np-FW5T-DyK5RBalVa39rH8zgLVjJagYp0&_nc_ohc=clY_lWZ68_EAX9ujHrT&_nc_ht=scontent.fppb7-1.fna&oh=00_AfAIHcjqvUl9vf_LSKLa90q19TfHr6WxCfZs299M589N1A&oe=6442DAE6',
      name: 'Vitor Santos Rodrigues',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2023-03-25 10:00:00')
  },
]

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  )
}

export default App
