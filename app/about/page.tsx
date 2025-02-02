import ClientPage from "./clientPage";

export default async function About() {
  // Данные, которые будут рендериться на сервере
  const initialValue = 5; // Можно получить из API или базы данных

  return (
    <main>
      <ClientPage initialValue={initialValue} />
    </main>
  );
}


