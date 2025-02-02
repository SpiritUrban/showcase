import PaintingPreview from './../components/molecule/PaintingPreview';
import Painting from './../components/molecule/Painting';


export default function Home() {

  // fetch("/api/hello")
  // .then((res) => res.json())
  // .then((data) => console.log(data.message));


  interface PPProps {
    title: string;
    img: string;
  }

  const _paintings: PPProps[] = [
    {
      title: "Painting 1",
      img: "/img/paintings/001.jpg",
    }, {
      title: "Painting 1",
      img: "/img/paintings/002.jpg",
    }, {
      title: "Painting 1",
      img: "/img/paintings/003.jpg",
    }, {
      title: "Painting 1",
      img: "/img/paintings/004.jpg",
    }, {
      title: "Painting 1",
      img: "/img/paintings/005.jpg",
    }, {
      title: "Painting 1",
      img: "/img/paintings/006.jpg",
    }, {
      title: "Painting 1",
      img: "/img/paintings/007.jpg",
    },
  ];

  const paintings = _paintings.map((painting) => ({
    ...painting,
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum deserunt unde sapiente impedit assumenda. Deserunt obcaecati at cumque distinctio dolore quibusdam maxime optio aperiam deleniti alias laudantium, velit temporibus cupiditate.',
    sizeX: 20,
    sizeY: 30,
    price: 100
  }));


  return (
    <div style={{ height: "calc(100vh - 4rem)" }} className="p-8 pb-0 sm:p-10 sm:pb-0 gap-16  font-[family-name:var(--font-geist-sans)] w-full max-w-screen-2xl mx-auto">
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start h-full w-full">

        {/* left side (paintings list ) */}
        <div className="h-full w-45 overflow-auto scrollbar-hide">
          {paintings.map((painting, i) => (
            <PaintingPreview key={painting.title + i} data={painting} />
          ))}
        </div>

        {/* right side (content) */}
        <div className="h-full w-full overflow-auto scrollbar-hide">

          {/* top content (img) */}
          <Painting data={paintings[0]} />

          {/* bottom content (info) */}
          <div className="bg-gray-600 p-4 rounded-lg shadow-lg">
            <div><b>{paintings[0].title}</b></div>
            <div>{paintings[0].description}</div>
            <hr className="my-4 border-t border-gray-300" />

            <div className="flex flex-row justify-evenly">
              <div>Size: {paintings[0].sizeX}cm x {paintings[0].sizeY}cm</div>
              <div>Price: {paintings[0].price}€</div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Buy
              </button>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}

