"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { increment, decrement, setValue } from "@/store/features/someSlice";

export default function ClientPage() {
    const dispatch = useDispatch();
    const reduxValue = useSelector((state: RootState) => state.some.value);
    const arr = [
        {
            name: "Сайт",
            href: "https://showcase-rose-psi.vercel.app",
        },
        {
            name: "GitHub",
            href: "https://github.com/SpiritUrban/showcase",
        },
        {
            name: "Telegram",
            href: "https://t.me/oooclanoooo",
        },
    ];

    return (
        <div className="max-w-xl mx-auto mt-12 p-8 bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg flex flex-col items-center gap-8">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">О нас</h1>

            <ul className="w-full flex flex-col gap-3 mb-4">
                {arr.map(({ name, href }) => (
                    <li key={href}>
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block px-4 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-medium transition dark:bg-blue-900 dark:hover:bg-blue-800 dark:text-blue-200"
                        >
                            {name}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="flex flex-col items-center gap-3">
                <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">{reduxValue}</h2>
                <div className="flex gap-2">
                    <button
                        onClick={() => dispatch(increment())}
                        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition font-semibold"
                    >
                        +
                    </button>
                    <button
                        onClick={() => dispatch(decrement())}
                        className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition font-semibold"
                    >
                        -
                    </button>
                    <button
                        onClick={() => dispatch(setValue(10))}
                        className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition font-semibold"
                    >
                        Set to 10
                    </button>
                </div>
            </div>
        </div>
    );
}
