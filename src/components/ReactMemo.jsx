import { useState, useCallback } from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

function ReactMemo() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const increaseCount1 = useCallback(() => {
        setCount1((prev) => prev + 1);
    }, []);

    const increaseCount2 = useCallback(() => {
        setCount2((prev) => prev + 1);
    }, []);

    return (
        <div className="p-4 space-y-6">
            <h1 className="text-2xl font-bold">ReactMemo Demo</h1>

            <ChildComponent1 value={count1} onIncrease={increaseCount1} />
            <ChildComponent2 value={count2} onIncrease={increaseCount2} />
        </div>
    );
}

export default ReactMemo;
