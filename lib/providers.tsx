"use client"; // Делаем компонент клиентским

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { makeStore, RootState } from "@/store/store";

export function Providers({
  children,
  initialState,
}: {
  children: ReactNode;
  initialState?: Partial<RootState>;
}) {
  const store = makeStore(initialState);
  return <Provider store={store}>{children}</Provider>;
}
