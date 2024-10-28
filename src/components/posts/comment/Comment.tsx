import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css';
import { Avatar } from '../../avatar/Avatar'
import { useState } from 'react';
import { ptBR } from 'date-fns/locale';
import { addHours, formatDistanceToNow } from 'date-fns';

interface CommentProps {
    content: string;
    avatarUrl: string;
    name: string;
    onDeleteComment: (cmt: string) => void;
}

export const Comment = ({ content, avatarUrl, name, onDeleteComment }: CommentProps) => {
    const [likeCount, setLikeCount] = useState(0);

    const handleDeleteComment = () => {
        onDeleteComment(content);
    }

    const handleLikeComment = () => {
        setLikeCount(prev => prev + 1);
    }

    const momentoAtual = new Date();

    const infoData = formatDistanceToNow(addHours(momentoAtual, 4), {
        locale: ptBR,
        addSuffix: true,
    });

    return (
        <main className={styles.comment}>
            <Avatar
                src={avatarUrl}
                hasBorder={false}
            />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{name}</strong>
                            <time title='19 de Outubro às 14:18h' dateTime='2024-10-19 15:18:00'>{infoData}</time>
                        </div>

                        <button title='Deletar comentário' onClick={handleDeleteComment}>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div >
        </main >
    )
}
