import './global.css'
import styles from './App.module.css'

import { Header } from "./components/header/Header"
import { Sidebar } from './components/sidebar/Sidebar'
import { Posts } from './components/posts/Posts'
import { dataPosts } from './infra/dada'
import { Post } from './infra/type'

export const App = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {dataPosts.map((post: Post) => {
            return (
              <Posts
                key={post.id_post}
                id_post={post.id_post}
                avatar={post.author.avatarUrl}
                author={post.author}
                role={post.author.role}
                publishedAt={post.pusblishedAt}
                content={post.content}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}
