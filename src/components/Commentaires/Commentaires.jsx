import { User } from "lucide-react";
import Button from "../Common/Button";
import { useState } from "react";

const CommentaryBox = ({ id }) => {
    const [value, setValue] = useState("");

    const handleClick = () => {
        if (value.includes("|")) {
            alert("Votre commentaire contient un caractère interdit ( | ) ");
            return;
        }
        const data = sessionStorage.getItem(id);
        data === null
            ? sessionStorage.setItem(id, value)
            : sessionStorage.setItem(id, data + "|" + value);
        setValue("");
    };

    return (
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md mt-6">
            <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4 leading-tight">
                    Commentaires
                </h1>
                <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                        <User className="w-6 h-6 text-gray-600 dark:text-gray-200" />
                    </div>
                    <textarea
                        name="comment"
                        className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
                        placeholder="Entrez votre commentaire ici..."
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    ></textarea>
                </div>
                <Button
                    label="Soumettre"
                    handleClick={handleClick}
                    className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-300"
                    icon={null}
                />
            </div>
            <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mt-6">
                    Commentaires précédents
                </h2>
                <div className="mt-4 space-y-4">
                    {sessionStorage.getItem(id) === null ? (
                        <p>Aucun commentaire pour le moment</p>
                    ) : (
                        sessionStorage
                            .getItem(id)
                            .split("|")
                            .map((comment, index) => (
                                <div
                                    key={index}
                                    className="p-2 bg-gray-100 dark:bg-gray-700 rounded-md"
                                >
                                    {comment}
                                </div>
                            ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommentaryBox;