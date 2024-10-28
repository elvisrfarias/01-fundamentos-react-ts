import { Post } from "./type";

export const dataPosts: Post[] = [
    {
        id_post: 1,
        author: {
            avatarUrl: 'https://github.com/maiky.png',
            name: 'Maria Fernandes',
            role: 'CEO  - Abac'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: '👉 jane.design/doctorcare' },
        ],
        pusblishedAt: new Date('2024-10-20 19:06')
    },
    {
        id_post: 2,
        author: {
            avatarUrl: 'https://github.com/diego3g.png',
            name: 'Devon Lane',
            role: 'Dev Front-End'
        },
        content: [
            { type: 'paragraph', content: 'Fala pessoal 👋' },
            { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ' },
            { type: 'link', content: 'Acesse e deixe seu feedback 👉 devonlane.design' },
        ],
        pusblishedAt: new Date('2024-10-21 08:38:00')
    },
    {
        id_post: 3,
        author: {
            avatarUrl: 'https://github.com/maykbrito.png',
            name: 'Jonas Silva',
            role: 'Dev full stack'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋' },
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
            { type: 'link', content: '👉 jonas.dev/dash' },
        ],
        pusblishedAt: new Date('2024-10-04 08:38:00')
    }
];

export const dataComments = [
    { id: 1, id_post: 3, name: 'Maria Fernandes', content: 'Post muito bacana, hein?!', avatarUrl: 'https://github.com/maiky.png', },
    { id: 2, id_post: 1, name: 'Mayk Brito', content: 'Wow, simples e brilhante.', avatarUrl: 'https://github.com/maykbrito.png', },
    { id: 3, id_post: 1, name: 'Deiego3g', content: 'Parabéns Maria.', avatarUrl: 'https://github.com/diego3g.png', },
    { id: 4, id_post: 2, name: 'Mayk Brito', content: '👏👏', avatarUrl: 'https://github.com/maykbrito.png', },
    { id: 5, id_post: 2, name: 'Maria Fernandes', content: 'Parabéns, achei sensacional!', avatarUrl: 'https://github.com/maiky.png', },
];
