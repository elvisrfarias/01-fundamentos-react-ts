export interface PostType {
    id_post: number;
    author: Author;
    content: Content[];
    pusblishedAt: Date;
}

export interface Author {
    avatarUrl: string;
    name: string;
    role: string;
}

export interface Content {
    type: 'paragraph' | 'link';
    content: string;
}

export interface Comments {
    id?: number;
    id_post: number;
    content: string;
    avatarUrl: string;
    name: string;
}