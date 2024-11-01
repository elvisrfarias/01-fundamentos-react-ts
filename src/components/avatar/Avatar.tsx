import styles from './Avatar.module.css';
import { ImgHTMLAttributes } from 'react';

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;
}

export const Avatar = ({ hasBorder = true, ...props }: AvatarProps) => {
    return (
        <img
            className={hasBorder
                ? styles.avatarComBorda
                : styles.avatar}
            {...props}
        />
    )
}
