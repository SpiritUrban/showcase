"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { increment, decrement, setValue } from "@/store/features/someSlice";

export default function ClientPage() {
    const dispatch = useDispatch();
    const reduxValue = useSelector((state: RootState) => state.some.value);

    return (
        <div>
            <h1>О нас</h1>
            <h2>{reduxValue}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(setValue(10))}>Set to 10</button>
        </div>
    );
}
