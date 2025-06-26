import React, { useEffect } from "react";
import "./App.css";
import { Comments, CommentCount } from "@hyvor/hyvor-talk-react";
import { CommentCounts } from "@hyvor/hyvor-talk-base";
const YOUR_WEBSITE_ID = 10787; // Replace with your actual Hyvor Talk website ID
const UNIQUE_PAGE_ID = ""; // Replace with a unique identifier for the page

function App() {
  useEffect(() => {
    CommentCounts.load({
      "website-id": YOUR_WEBSITE_ID,
    });
  }, []);

  return (
    <>
      <div>
        <h1>React + Hyvor Talk Integration</h1>
      </div>
      <Comments website-id={YOUR_WEBSITE_ID} page-id={UNIQUE_PAGE_ID} />
      <CommentCount
        website-id={YOUR_WEBSITE_ID}
        page-id={UNIQUE_PAGE_ID}
      ></CommentCount>
      <p>
        Hyvor Talk is a privacy-focused comment system that can be easily
        integrated into React applications. This example demonstrates how to set
        up Hyvor Talk in a React application using the App Router.
      </p>
    </>
  );
}

export default App;
