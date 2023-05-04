import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';
import profileImg from '../assets/img-profile.jpg';

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
          src={profileImg}
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