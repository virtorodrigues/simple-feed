import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGV2ZWxvcGVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=40"
      />

      <div className={styles.profile}>
        <img
          className={styles.avatar}
          src="https://scontent.fppb7-1.fna.fbcdn.net/v/t1.6435-9/95752418_2714779098644871_5081992427762352128_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEYRuiwo92t6mFRDfGZlOuOtPW9LRNQozK09b0tE1CjMgQF6rchH-Np-FW5T-DyK5RBalVa39rH8zgLVjJagYp0&_nc_ohc=clY_lWZ68_EAX9ujHrT&_nc_ht=scontent.fppb7-1.fna&oh=00_AfAIHcjqvUl9vf_LSKLa90q19TfHr6WxCfZs299M589N1A&oe=6442DAE6"
        />

        <strong>Vitor Rodrigues</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar perfil</a>
      </footer>
    </aside>
  )
}