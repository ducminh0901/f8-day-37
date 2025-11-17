import React from "react";

function ChildComponent1({ value, onIncrease }) {
    console.log("ChildComponent1 re-render");

    return (
        <div className="p-3 border rounded">
            <p>Child 1 Count: {value}</p>
            <button
                onClick={onIncrease}
                className="px-3 py-1 bg-blue-500 text-white rounded cursor-pointer"
            >
                Tăng Count 1
            </button>
        </div>
    );
}

export default React.memo(ChildComponent1);
