"use client";

import PaintingPreview from '../components/molecule/PaintingPreview';
import Painting from '../components/molecule/Painting';
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Painting as PaintingType } from '@/interfaces/painting';

export default function ClientPage() {
  const reduxList: PaintingType[] = useSelector(
    (state: RootState) => state.paintings.list
  );
  const selectedPainting =
    useSelector((state: RootState) => state.paintings.selectedPainting) ||
    reduxList[0];

  // fetch("/api/hello")
  // .then((res) => res.json())
  // .then((data) => console.log(data.message));

  return (
    <div
      style={{ height: "calc(100vh - 4rem)" }}
      className="p-8 pb-0 sm:p-10 sm:pb-0 gap-16  font-[family-name:var(--font-geist-sans)] w-full max-w-screen-2xl mx-auto"
    >
      <main className="flex flex-row gap-8 row-start-2 items-center sm:items-start h-full w-full">
        {/* left side (paintings list ) */}
        <div className="h-full w-45 overflow-auto scrollbar-hide">
          {reduxList.map((painting, i) => (
            <PaintingPreview key={painting.title + i} data={painting} />
          ))}
        </div>

        {/* right side (content) */}
        <div className="h-full w-full overflow-auto scrollbar-hide">
          {/* top content (img) */}
          {selectedPainting && <Painting data={selectedPainting} />}

          {/* bottom content (info) */}
          {selectedPainting && (
            <div className="bg-gray-600 p-4 rounded-lg shadow-lg">
              <div>
                <b>{selectedPainting.title}</b>
              </div>
              <div>{selectedPainting.description}</div>
              <hr className="my-4 border-t border-gray-300" />

              <div className="flex flex-row justify-evenly">
                <div>
                  Size: {selectedPainting.sizeX}cm x {selectedPainting.sizeY}cm
                </div>
                <div>Price: {selectedPainting.price}€</div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Buy
                </button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

