import { useContext, useState } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";

const Stories = () => {
  const { currentUser } = useContext(AuthContext);
  const queryClient = useQueryClient();

  // Fetch existing stories
  const { isLoading, error, data } = useQuery(["stories"], () =>
    makeRequest.get("/stories").then((res) => {
      return res.data;
    })
  );

  // State to handle multiple stories (for multiple files or text stories)
  const [newStories, setNewStories] = useState([]);

  // Mutation to add a new story
  const mutation = useMutation(
    (formData) => {
      return makeRequest.post("/stories", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Make sure the request is of the right type for file upload
        },
      });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch stories after a new one is added
        queryClient.invalidateQueries(["stories"]);
      },
    }
  );

  // Function to handle adding more stories (for file/image uploads)
  const handleAddStory = () => {
    if (newStories.length > 0) {
      const formData = new FormData();

      newStories.forEach((story, index) => {
        formData.append(`story_${index}`, story);
      });

      formData.append("userId", currentUser.id); // Add user data if necessary

      mutation.mutate(formData); // Submit form data with multiple files
    }
  };

  return (
    <div className="stories">
      {/* User's own story block */}
      <div className="story">
        <img src={"/upload/" + currentUser.profilePic} alt="" />
        <span>{currentUser.name}</span>
        <input
          type="file"
          multiple
          onChange={(e) => setNewStories([...e.target.files])} // Set multiple selected files
        />
        <button onClick={handleAddStory}>+</button>
      </div>

      {/* Display existing stories */}
      {error
        ? "Something went wrong"
        : isLoading
        ? "Loading..."
        : data.map((story) => (
            <div className="story" key={story.id}>
              <img src={story.img} alt={story.name} />
              <span>{story.name}</span>
            </div>
          ))}
    </div>
  );
};

export default Stories;
