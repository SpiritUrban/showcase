"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { increment, decrement, setValue } from "@/store/features/someSlice";
import { useEffect, useState } from "react";

export default function ClientPage({ initialValue }: { initialValue: number }) {
    const dispatch = useDispatch();
    const reduxValue = useSelector((state: RootState) => state.some.value);

    // Локальный стейт для отображения серверных данных перед обновлением из Redux
    const [clientValue, setClientValue] = useState(initialValue);

    // После монтирования компонента обновляем значение из Redux
    useEffect(() => {
        setClientValue(reduxValue);
    }, [reduxValue]);

    return (
        <div>
            <h1>О нас</h1>
            <h2>{clientValue}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(setValue(10))}>Set to 10</button>
        </div>
    );
}
