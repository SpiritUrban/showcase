import AboutContent from "./clientPage";

export default async function About() {
  // Данные, которые будут рендериться на сервере
  const initialValue = 5; // Можно получить из API или базы данных

  return (
    <main>
      <h1>О нас</h1>
      <AboutContent initialValue={initialValue} />
    </main>
  );
}


