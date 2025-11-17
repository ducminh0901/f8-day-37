import { forwardRef, useRef, useImperativeHandle } from "react";

const NewTextInput = forwardRef(function NewTextInput(
    { placeholder, value, onChange },
    ref
) {
    const inputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus() {
            inputRef.current?.focus();
        },
    }));

    return (
        <input
            ref={inputRef}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="border p-2 rounded"
        />
    );
});

export default NewTextInput;
