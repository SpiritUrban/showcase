import PaintingPreview from './../components/molecule/PaintingPreview';

export default function Home() {

  // fetch("/api/hello")
  // .then((res) => res.json())
  // .then((data) => console.log(data.message));


  interface PPProps {
    title: string;
    img: string;
  }

  const paintings: PPProps[] = [
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
    },
  ];



  return (
    <div style={{ height: "calc(100vh - 4rem)" }} className="p-8 pb-20 gap-16 sm:p-10 font-[family-name:var(--font-geist-sans)] w-full max-w-screen-2xl mx-auto">
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start h-full w-full">

        <div className="h-full w-45">
          {paintings.map((painting, i) => (
            <PaintingPreview key={painting.title + i} data={painting} />
          ))}

        </div>


        <div className="h-full w-full bg-gray-600 p-2">
          x
        </div>



      </main>
    </div>
  );
}

