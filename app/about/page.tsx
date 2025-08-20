import ClientPage from "./clientPage";
import { Providers } from "@/lib/providers";
import { RootState } from "@/store/store";

export default async function About() {
  // Данные, которые будут рендериться на сервере
  const initialValue = 5; // Можно получить из API или базы данных

  const preloadedState: Partial<RootState> = {
    some: { value: initialValue },
  };

  return (
    <Providers initialState={preloadedState}>
      <main>
        <ClientPage />
      </main>
    </Providers>
  );
}


