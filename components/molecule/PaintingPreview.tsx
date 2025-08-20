import Image from "next/image";
import styles from "./PaintingPreview.module.css";
import { Painting } from '@/interfaces/painting';
import { useDispatch } from "react-redux";
import { setSelectedPainting } from "@/store/features/paintingsSlice";

interface PPProps {
    data: Painting
}

export default function PaintingPreview({ data }: PPProps) {
    const dispatch = useDispatch();

    const select = () => {
        dispatch(setSelectedPainting(data));
    };
    return (
        <div className="flex justify-center items-center mb-4" onClick={select}>
            <div className="relative w-full max-w-md">
                <div className={`flex justify-center items-center bg-gray-200 p-2 rounded-lg shadow-lg ${styles.container}`}>
                    <Image
                        className={`bg-gray-200 rounded-lg shadow-lg ${styles.img}`}
                        src={data.img}
                        alt={data.title}
                        width={3716}
                        height={2960}
                        priority
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>
            </div>
        </div>
    );
}
