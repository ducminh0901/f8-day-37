import { useState, useEffect } from "react";

const defaultAvatar =
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541";

function EditAvatar() {
    const [preview, setPreview] = useState(null);

    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    const handleChange = (e) => {
        const file = e.target.files[0];
        if (!file) {
            setPreview(null);
            return;
        }

        const blobUrl = URL.createObjectURL(file);

        if (preview) URL.revokeObjectURL(preview);

        setPreview(blobUrl);
    };

    return (
        <div className="p-4">
            <h1 className="text-center text-xl font-bold mb-4">Edit Avatar</h1>

            <label className="cursor-pointer flex flex-col items-center gap-2">
                <img
                    src={preview || defaultAvatar}
                    alt="avatar"
                    className="w-32 h-32 rounded-full object-cover"
                />
                <span className="text-sm text-gray-500">Click để chọn ảnh</span>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    className="hidden"
                />
            </label>
        </div>
    );
}

export default EditAvatar;
