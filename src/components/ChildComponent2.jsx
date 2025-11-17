import React from "react";

function ChildComponent2({ value, onIncrease }) {
    console.log("ChildComponent2 re-render");

    return (
        <div className="p-3 border rounded">
            <p>Child 2 Count: {value}</p>
            <button
                onClick={onIncrease}
                className="px-3 py-1 bg-green-500 text-white rounded cursor-pointer"
            >
                Tăng Count 2
            </button>
        </div>
    );
}

export default React.memo(ChildComponent2);
