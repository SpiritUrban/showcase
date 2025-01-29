import Image from "next/image";

export default function Home() {

  fetch("/api/hello")
    .then((res) => res.json())
    .then((data) => console.log(data.message));


  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

        <h1>Contact</h1>


      </main>


    </div>
  );
}
