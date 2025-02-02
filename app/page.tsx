import ClientPage from "./clientPage";
import { Painting } from '@/interfaces/painting';

export interface InitialState {
    paintings: Painting[];
}

export default async function Home() {
    // Данные, которые будут рендериться на сервере
    // Можно получить из API или базы данных

    const paintings: Painting[] = [
        {
            title: "Painting 1",
            img: "/img/paintings/001.jpg",
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum deserunt unde sapiente impedit assumenda. Deserunt obcaecati at cumque distinctio dolore quibusdam maxime optio aperiam deleniti alias laudantium, velit temporibus cupiditate.',
            sizeX: 20,
            sizeY: 30,
            price: 100
        }, {
            title: "Painting 1",
            img: "/img/paintings/002.jpg",
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum deserunt unde sapiente impedit assumenda. Deserunt obcaecati at cumque distinctio dolore quibusdam maxime optio aperiam deleniti alias laudantium, velit temporibus cupiditate.',
            sizeX: 20,
            sizeY: 30,
            price: 100
        }, {
            title: "Painting 1",
            img: "/img/paintings/003.jpg",
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum deserunt unde sapiente impedit assumenda. Deserunt obcaecati at cumque distinctio dolore quibusdam maxime optio aperiam deleniti alias laudantium, velit temporibus cupiditate.',
            sizeX: 20,
            sizeY: 30,
            price: 100
        }, {
            title: "Painting 1",
            img: "/img/paintings/004.jpg",
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum deserunt unde sapiente impedit assumenda. Deserunt obcaecati at cumque distinctio dolore quibusdam maxime optio aperiam deleniti alias laudantium, velit temporibus cupiditate.',
            sizeX: 20,
            sizeY: 30,
            price: 100
        }, {
            title: "Painting 1",
            img: "/img/paintings/005.jpg",
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum deserunt unde sapiente impedit assumenda. Deserunt obcaecati at cumque distinctio dolore quibusdam maxime optio aperiam deleniti alias laudantium, velit temporibus cupiditate.',
            sizeX: 20,
            sizeY: 30,
            price: 100
        }, {
            title: "Painting 1",
            img: "/img/paintings/006.jpg",
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum deserunt unde sapiente impedit assumenda. Deserunt obcaecati at cumque distinctio dolore quibusdam maxime optio aperiam deleniti alias laudantium, velit temporibus cupiditate.',
            sizeX: 20,
            sizeY: 30,
            price: 100
        }, {
            title: "Painting 1",
            img: "/img/paintings/007.jpg",
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum deserunt unde sapiente impedit assumenda. Deserunt obcaecati at cumque distinctio dolore quibusdam maxime optio aperiam deleniti alias laudantium, velit temporibus cupiditate.',
            sizeX: 20,
            sizeY: 30,
            price: 100
        },
    ];

    const initialState: InitialState = {
        paintings
    };

    return (
        <main>
            <ClientPage initialState={initialState} />
        </main>
    );
}


