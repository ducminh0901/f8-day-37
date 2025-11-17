import { forwardRef } from "react";

const TextInput = forwardRef(function TextInput(
    { placeholder = "", value, onChange },
    ref
) {
    return (
        <input
            ref={ref}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="border p-2 rounded w-full"
            type="text"
        />
    );
});

export default TextInput;
