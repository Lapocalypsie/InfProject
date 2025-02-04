import { User } from "lucide-react";
import Button from "../Common/Button";
import { useState } from "react";

const CommentaryBox = ({ id }) => {
  const [value, setValue] = useState("");
  const [url, setUrl] = useState("");
  const [nom, setNom] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const getComments = () => {
    const data = sessionStorage.getItem(id);
    if (!data) return [];
    try {
      return JSON.parse(data);
    } catch (e) {
      console.error("Error parsing comments:", e);
      return [];
    }
  };

  const handleClick = () => {
    if (value.trim() === "") return;

    const newComment = {
      message: value.trim(),
      user: {
        name: nom.trim() || "User",
        profileUrl: url.trim() || null,
      },
      timestamp: new Date().toISOString(),
    };

    setIsSubmitting(true);

    const currentComments = getComments();
    sessionStorage.setItem(
      id,
      JSON.stringify([...currentComments, newComment])
    );

    setValue("");
    setUrl("");
    setTimeout(() => setIsSubmitting(false), 500);
  };

  const isValidUrl = (urlString) => {
    if (!urlString) return false;
    try {
      new URL(urlString);
      return true;
    } catch (_) {
      return false;
    }
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg mt-8 transition-all duration-300 hover:shadow-xl">
      <div className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6 leading-tight">
          Commentaires
        </h1>

        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center shadow-md transition-transform duration-300 hover:scale-105">
            <User className="w-6 h-6 text-blue-600 dark:text-gray-300" />
          </div>

          <div className="flex-1 space-y-4">
            <textarea
              name="comment"
              className="w-full p-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 min-h-[120px] hover:border-blue-300 dark:hover:border-blue-500"
              placeholder="Entrez votre commentaire ici..."
              value={value}
              onChange={(e) => setValue(e.target.value)}
            ></textarea>

            <input
              type="text"
              name="userName"
              className="w-full p-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500"
              placeholder="Entrez votre nom ici"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
            />

            <input
              type="url"
              name="userProfileUrl"
              className="w-full p-4 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-300 hover:border-blue-300 dark:hover:border-blue-500"
              placeholder="Mettez le lien vers votre photo de profil"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />

            <Button
              label={isSubmitting ? "Envoi..." : "Soumettre"}
              handleClick={handleClick}
              className={`px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                isSubmitting ? "opacity-75 cursor-wait" : ""
              }`}
              icon={null}
              disabled={isSubmitting || value.trim() === ""}
            />
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
          Commentaires précédents
        </h2>

        <div className="space-y-4">
          {getComments().length === 0 ? (
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-300 text-center">
              Aucun commentaire pour le moment
            </div>
          ) : (
            getComments()
              .reverse()
              .map((comment) => (
                <div
                  key={comment.timestamp}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 transition-all duration-300 hover:shadow-md hover:border-blue-300 dark:hover:border-blue-500"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-600 dark:to-gray-500 flex items-center justify-center">
                      {isValidUrl(comment.user.profileUrl) ? (
                        <img
                          src={comment.user.profileUrl}
                          alt={comment.user.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "block";
                          }}
                        />
                      ) : (
                        <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                      )}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {comment.user.name}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500">
                      {new Date(comment.timestamp).toLocaleString()}
                    </span>
                  </div>
                  <p className="pl-11">{comment.message}</p>
                </div>
              ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentaryBox;
