"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { increment, decrement, setValue } from "@/store/features/someSlice";
import { useEffect } from "react";

export default function ClientPage({ initialValue }: { initialValue: number }) {
    const dispatch = useDispatch();
    const reduxValue = useSelector((state: RootState) => state.some.value);

    useEffect(() => {
        dispatch(setValue(initialValue));
    }, [dispatch, initialValue]);

    return (
        <div>
            <h1>О нас</h1>
            <h2>{reduxValue ?? initialValue}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(setValue(10))}>Set to 10</button>
        </div>
    );
}
