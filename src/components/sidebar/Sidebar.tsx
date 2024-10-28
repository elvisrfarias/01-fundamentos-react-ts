import { PencilLine } from 'phosphor-react'
import styles from './Sidebar.module.css'
import { Avatar } from '../avatar/Avatar'

export const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1493675889407-39032c3f13a0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fHw%3D" alt="Imagem de fundo"
            />

            <div className={styles.profile}>
                <Avatar src="http://github.com/elvisrfarias.png" />
                <strong>Elvis Farias</strong>
                <span>Web Developer Junior</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
