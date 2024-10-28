import './global.css';
import styles from './App.module.css';

import { Header } from "./components/header/Header";
import { Sidebar } from './components/sidebar/Sidebar';
import { Posts } from './components/posts/Posts';
import { dataPosts } from './infra/dada';
import { PostType } from './infra/type';

export const App = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {dataPosts.map((post: PostType) => {
            return (
              <Posts key={post.id_post} post={post} />
            )
          })}
        </main>
      </div>
    </>
  )
}
