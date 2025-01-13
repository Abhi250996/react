import React, { useState, useEffect } from "react";
import { generateStory } from "../../resource/Service";

export const Story = () => {
  const [prompt, setPrompt] = useState("");
  const [storyTitle, setStoryTitle] = useState("");
  const [storyContent, setStoryContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerateStory = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const story = await generateStory(prompt); // Call imported function
      setStoryTitle(`Story Title: ${prompt}`);
      setStoryContent(story);
    } catch (error) {
      console.error("Failed to generate story", error);
      setStoryContent("Error: Unable to generate story. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 font-sans">
      <h1 className="text-2xl font-bold mb-4">Generate a Story</h1>
      <input
        type="text"
        placeholder="Enter a story prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="w-full p-2 mb-4 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleGenerateStory}
        disabled={loading || !prompt}
        className={`px-4 py-2 rounded ${
          loading || !prompt
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"
        }`}
      >
        {loading ? "Generating..." : "Generate Story"}
      </button>
      {storyTitle && (
        <div className="mt-6">
          <h2 className="text-xl font-semibold">{storyTitle}</h2>
          <p className="mt-4">{storyContent}</p>
        </div>
      )}
    </div>
  );
};

// import React,{useState} from "react";
// import { generateStory } from "../../resource/Service";

// export const Story = () => {

//     const [prompt, setPrompt] = useState(""); // State for user input
//     const [storyTitle, setStoryTitle] = useState("");
//     const [storyAuthor, setStoryAuthor] = useState("AI Author");
//     const [storyContent, setStoryContent] = useState("");
//     const [loading, setLoading] = useState(false);



//     const handleGenerateStory = async () => {
//       if (!prompt) return;
//       setLoading(true);
//       try {
//         const story = await generateStory(prompt);
//         setStoryTitle(`Story Title: ${prompt}`);
//         setStoryContent(story);
//       } catch (error) {
//         console.error("Failed to generate story", error);
//       } finally {
//         setLoading(false);
//       }
//     };


//     return (
//       <div className="p-5 font-sans">
//         <h1 className="text-2xl font-bold mb-4">Generate Story on Other Page</h1>
//         <input
//           type="text"
//           placeholder="Enter a story prompt"
//           value={prompt}
//           onChange={(e) => setPrompt(e.target.value)}
//           className="w-full p-2 mb-4 border text-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           onClick={handleGenerateStory}
//           disabled={loading || !prompt}
//           className={`px-4 py-2 rounded ${
//             loading || !prompt
//               ? "bg-gray-400 cursor-not-allowed"
//               : "bg-blue-500 hover:bg-blue-600 text-white"
//           }`}
//         >
//           {loading ? "Generating..." : "Generate Story"}
//         </button>
//         {storyTitle && (
//           <div className="mt-6">
//             <h2 className="text-xl font-semibold">{storyTitle}</h2>
//             <p className="mt-4">{storyContent}</p>
//           </div>
//         )}
//       </div>
//     );
//   };
  