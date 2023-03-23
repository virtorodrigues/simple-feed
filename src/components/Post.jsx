import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://scontent.fppb7-1.fna.fbcdn.net/v/t1.6435-9/95752418_2714779098644871_5081992427762352128_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEYRuiwo92t6mFRDfGZlOuOtPW9LRNQozK09b0tE1CjMgQF6rchH-Np-FW5T-DyK5RBalVa39rH8zgLVjJagYp0&_nc_ohc=clY_lWZ68_EAX9ujHrT&_nc_ht=scontent.fppb7-1.fna&oh=00_AfAIHcjqvUl9vf_LSKLa90q19TfHr6WxCfZs299M589N1A&oe=6442DAE6"
          />
          <div className={styles.authorInfo}>
            <strong>Vitor Rodrigues</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time>Públicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 <a href="#">jane.design/doctorcare</a></p>

        <p><a href="#">#novoprojeto #nlw #rocketseat </a></p>
      </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea
            placeholder='Deixe um comentário'
          />

          <footer>
            <button type='submit'>Publicar</button>
          </footer>

        </form>
    </article>
  )
}