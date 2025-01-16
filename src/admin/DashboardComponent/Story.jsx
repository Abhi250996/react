import React, { useState, useEffect } from "react";
import { generateStory } from "../../resource/Service";

export const Story = () => {
  const [prompt, setPrompt] = useState("");
  const [storyTitle, setStoryTitle] = useState("");
  const [storyContent, setStoryContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [bookData, setBookData] = useState({ title: '' });
  const [isStory,setBorderVisible] = useState(false)

  const handleGenerateStory = async () => {
    if (!prompt) return;
    setLoading(true);
    try {
      const story = await generateStory(prompt);
      setStoryTitle(`Story Title: ${prompt}`);
      setStoryContent(story);
      const data = extractTitleAndAuthor(story);
      setBookData(data);
      setBorderVisible(story == "" ? false : true)
    } catch (error) {
      console.error("Failed to generate story", error);
      setStoryContent("Error: Unable to generate story. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  const extractTitleAndAuthor = (text) => {


    console.log(text)
    const titleMatch = text.match(/## (.*?)\n/);
    let title = "";

    if (titleMatch) {
      title = titleMatch[1];
    }

    let updatedText = text;
    if (title) {
      updatedText = updatedText.replace(`## ${title}\n`, '');
    }

    updatedText = updatedText.trim();
    return { title, updatedText };
  };




  return (
    <div className="p-5 font-sans">
      <form className="flex flex-col">
        <h1 className="text-2xl font-bold mb-4">Generate a Story</h1>
        <input
          type="text"
          placeholder="Enter a story prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="w-full md:w-1/3 p-2 mb-4 border text-white bg-black border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          onClick={handleGenerateStory}
          disabled={loading || !prompt}
          className={`w-full md:w-[10%] px-4 py-2 rounded ${loading || !prompt
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
        >
          {loading ? "Generating..." : "Generate Story"}
        </button>
        {(
          <div className="mt-6">


          </div>
        )}
        {(

          <div className="max-w-screen mt-10 flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold">{bookData.title}</h2>
            <div className={`md:w-1/2 self-center ${isStory ? 'border-2 border-black' : ''} mt-4`}>

              <p className="mt-4 font-semi-bold pl-4 pr-4 pb-4">{bookData.updatedText}</p>
            </div>
          </div>

        )}
      </form>
    </div>
  )
};