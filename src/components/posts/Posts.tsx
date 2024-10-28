import { ptBR } from 'date-fns/locale';
import styles from './Posts.module.css';
import { Avatar } from '../avatar/Avatar';
import { Comment } from './comment/Comment';
import { dataComments } from '../../infra/dada';
import { format, formatDistanceToNow } from 'date-fns';
import { Author, Content, Comments } from '../../infra/type';
import { ChangeEvent, FormEvent, InvalidEvent, useEffect, useState } from 'react';

interface PostsProps {
  id_post: number;
  author: Author;
  avatar: string;
  role: string;
  content: Content[];
  publishedAt: Date;
}

export const Posts = ({ id_post, author, avatar, role, content, publishedAt = new Date() }: PostsProps) => {
  const [comments, setComments] = useState<Comments[]>([]);
  const [newCommentText, setNewCommentText] = useState('');

  useEffect(() => {
    const initialComments: Comments[] = dataComments
      .filter((comment: Comments) =>
        comment.id_post === id_post);

    setComments(initialComments);
  }, [id_post]);

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();
    const newComment = {
      id_post,
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
          <Avatar src={avatar} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((line: Content) => {
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
