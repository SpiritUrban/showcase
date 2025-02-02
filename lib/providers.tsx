"use client"; // Делаем компонент клиентским

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";

export function Providers({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
