import { useState } from "react";

export const PublicationForm = () => {
    const [text, setText] = useState("");
    const [image, setImage] = useState(null);

    const handleTextChange = (e) => {
        setText(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission
        console.log("Text:", text);
        if (image) {
            console.log("Image:", URL.createObjectURL(image));
        }
    };

    return (
        <form onSubmit={handleSubmit} className="publication-form">
            <textarea value={text} onChange={handleTextChange} placeholder="What's on your mind?" />
            <input type="file" onChange={handleImageChange} accept="image/*" />
            <button type="submit">Publish</button>
        </form>
    );
};