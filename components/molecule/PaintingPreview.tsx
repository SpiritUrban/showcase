import Image from "next/image";
import styles from "./PaintingPreview.module.css";

interface PPProps {
    data: {
        title: string;
        img: string;
    }
}

export default function PaintingPreview({ data }: PPProps) {
    return (
        <div className="flex justify-center items-center mb-4">
            <div className="relative w-full max-w-md">
                <div className={`flex justify-center items-center bg-gray-200 p-2 rounded-lg shadow-lg ${styles.container}`}>
                    <Image
                        className={`bg-gray-200  rounded-lg shadow-lg ${styles.img}`}
                        src={data.img}
                        alt="Next.js logo"
                        width={180}
                        height={38}
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
