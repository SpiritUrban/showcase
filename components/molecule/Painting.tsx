import Image from "next/image";
import styles from "./Painting.module.css";

interface PaintingProps {
    data: {
        title: string;
        img: string;
    };
}

export default function Painting({ data }: PaintingProps) {
    return (
        <div className="flex justify-center items-center mb-4">
            <div className="relative w-full">
                <div className={`flex justify-center items-center bg-gray-200 p-2 rounded-lg shadow-lg ${styles.container}`}>
                    <Image
                        className={`bg-gray-200  rounded-lg shadow-lg ${styles.img}`}
                        src={data.img}
                        alt="Next.js logo"
                        width={800}
                        height={800}
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
