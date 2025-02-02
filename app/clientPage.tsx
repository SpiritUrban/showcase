"use client";

import PaintingPreview from '../components/molecule/PaintingPreview';
import Painting from '../components/molecule/Painting';
import { InitialState } from './page';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { setPaintings } from "@/store/features/paintingsSlice";
import { useEffect, useState } from "react";

export default function ClientPage({ initialState }: { initialState: InitialState }) {
  const dispatch = useDispatch();
  const reduxList = useSelector((state: RootState) => state.paintings.list);
  const selectedPainting = useSelector((state: RootState) => state.paintings.selectedPainting);

  const [clientList, setClientList] = useState(initialState.paintings);
  const [clientSelectedPainting, setClientSelectedPainting] = useState(initialState.paintings[0]);

  useEffect(() => {
    dispatch(setPaintings(initialState.paintings));
  }, [dispatch, initialState.paintings]);


  useEffect(() => {
    setClientList(reduxList);
  }, [reduxList]);

  useEffect(() => {
    setClientSelectedPainting(selectedPainting ?? initialState.paintings[0]);
  }, [selectedPainting, initialState.paintings]);


  // fetch("/api/hello")
  // .then((res) => res.json())
  // .then((data) => console.log(data.message));

  return (
    <div style={{ height: "calc(100vh - 4rem)" }} className="p-8 pb-0 sm:p-10 sm:pb-0 gap-16  font-[family-name:var(--font-geist-sans)] w-full max-w-screen-2xl mx-auto">
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start h-full w-full">

        {/* left side (paintings list ) */}
        <div className="h-full w-45 overflow-auto scrollbar-hide">
          {clientList.map((painting, i) => (
            <PaintingPreview key={painting.title + i} data={painting} />
          ))}
        </div>

        {/* right side (content) */}
        <div className="h-full w-full overflow-auto scrollbar-hide">

          {/* top content (img) */}
          <Painting data={clientSelectedPainting} />

          {/* bottom content (info) */}
          <div className="bg-gray-600 p-4 rounded-lg shadow-lg">
            <div><b>{clientSelectedPainting.title}</b></div>
            <div>{clientSelectedPainting.description}</div>
            <hr className="my-4 border-t border-gray-300" />

            <div className="flex flex-row justify-evenly">
              <div>Size: {clientSelectedPainting.sizeX}cm x {clientSelectedPainting.sizeY}cm</div>
              <div>Price: {clientSelectedPainting.price}€</div>
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

