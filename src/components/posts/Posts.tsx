import { ptBR } from 'date-fns/locale';
import styles from './Posts.module.css';
import { Avatar } from '../avatar/Avatar';
import { Comments, Content, PostType } from '../../infra/type';
import { Comment } from './comment/Comment';
import { dataComments } from '../../infra/dada';
import { format, formatDistanceToNow } from 'date-fns';
import { ChangeEvent, FormEvent, InvalidEvent, useEffect, useState } from 'react';

interface PostsProps {
  post: PostType;
}

export const Posts = ({ post }: PostsProps) => {
  const [comments, setComments] = useState<Comments[]>([]);
  const [newCommentText, setNewCommentText] = useState('');

  useEffect(() => {
    const initialComments: Comments[] = dataComments
      .filter((comment: Comments) =>
        comment.id_post === post.id_post);

    setComments(initialComments);
  }, [post.id_post]);

  const publishedDateFormatted = format(post.pusblishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(post.pusblishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();
    const newComment = {
      id_post: post.id_post,
      name: 'Elvis Farias',
      avatarUrl: 'https://github.com/elvisrfarias.png',
      content: newCommentText,
    };
    setComments([...comments, newComment]);
    setNewCommentText('');
  }

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  const handleNewCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('Este campo é obrigatório');
  }

  const deleteComment = (commentToDelete: string) => {
    const updatedComments = comments.filter((comment) => comment.content !== commentToDelete);
    setComments(updatedComments);
  };

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

        <time
          title={publishedDateFormatted}
          dateTime={post.pusblishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((line: Content) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
          return null;
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCreateNewComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe o seu comentário'
          value={newCommentText}
          required
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
        />

        <footer>
          <button type='submit' disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((content) => (
          <Comment
            key={content.id}
            content={content.content}
            avatarUrl={content.avatarUrl}
            name={content.name}
            onDeleteComment={() => deleteComment(content.content)}
          />
        ))}
      </div>
    </article>
  );
}
