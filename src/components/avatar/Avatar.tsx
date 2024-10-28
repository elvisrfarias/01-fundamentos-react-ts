import styles from './Avatar.module.css'

interface AvatarProps {
    src: string;
    alt?: string;
    hasBorder?: boolean;
}

export const Avatar = ({ src, alt = "", hasBorder = true }: AvatarProps) => {
    return (
        <img
            src={src}
            alt={alt}
            className={hasBorder
                ? styles.avatarComBorda
                : styles.avatar}
        />
    )
}
