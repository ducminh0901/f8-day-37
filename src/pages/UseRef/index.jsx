import { useRef, useState } from "react";
import TextInput from "../../components/TextInput";
import NewTextInput from "../../components/NewTextInput";

export function ClickCounterButton() {
    const countRef = useRef(0);

    const inputRef = useRef(null);

    const handleClick = () => {
        countRef.current++;

        if (countRef.current % 5 === 0) {
            alert(`Click ${countRef.current} lần!`);
        }
    };

    return (
        <div>
            <button
                onClick={handleClick}
                className="px-4 py-2 bg-blue-500 text-white rounded cursor-pointer"
            >
                Click me
            </button>

            <input ref={inputRef} type="" />
        </div>
    );
}

export function DemoTextInput() {
    const inputRef = useRef(null);
    const [text, setText] = useState("");

    const handleFocus = () => {
        inputRef.current?.focus();
    };

    const handleRemove = () => {
        if (inputRef.current) {
            inputRef.current.remove();
            inputRef.current = null;
        }
    };

    return (
        <div className="space-y-3 p-4">
            <TextInput
                ref={inputRef}
                placeholder="Enter..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button
                className="px-3 py-2 bg-blue-500 text-white rounded cursor-pointer"
                onClick={handleFocus}
            >
                Focus
            </button>

            <button
                className="px-3 py-2 bg-red-500 text-white rounded cursor-pointer"
                onClick={handleRemove}
            >
                Remove
            </button>
        </div>
    );
}

export function DemoNewInput() {
    const newInputRef = useRef(null);
    const [txt, setTxt] = useState("");

    const handleFocus = () => {
        newInputRef.current?.focus();
    };

    return (
        <div className="space-y-3 p-4">
            <NewTextInput
                ref={newInputRef}
                placeholder="New input..."
                value={txt}
                onChange={(e) => setTxt(e.target.value)}
            />

            <button
                className="px-3 py-2 bg-purple-500 text-white rounded cursor-pointer"
                onClick={handleFocus}
            >
                Focus
            </button>
        </div>
    );
}
