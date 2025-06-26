"use client";
import { useEffect } from "react";
import React from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { CommentCount } from "@hyvor/hyvor-talk-react";
import { CommentCounts } from "@hyvor/hyvor-talk-base";
import { Comments } from "@hyvor/hyvor-talk-react";

const YOUR_WEBSITE_ID = 10787; // Replace with your actual Hyvor Talk website ID
const UNIQUE_PAGE_ID = ""; // Replace with a unique identifier for the page

const App = () => {
  useEffect(() => {
    CommentCounts.load({
      "website-id": YOUR_WEBSITE_ID,
    });
  }, []);

  return (
    <div>
      <Comments website-id={YOUR_WEBSITE_ID} page-id={UNIQUE_PAGE_ID} />
      <CommentCount page-id={""} />
    </div>
  );
};

export default function Home() {
  return (
    <div className={styles.page}>
      <h2>Hyvor Talk + React Integration</h2>
      <main className={styles.main}>
        <Image
          className="image"
          src="/ht-react-integration.svg"
          alt="Hyvor Talk + React Integration logo"
          width={520}
          height={300}
          priority
        />
        <App />

        <p>
          Hyvor Talk is a privacy-focused comment system that can be easily
          integrated into React applications. This example demonstrates how to
          set up Hyvor Talk in a React application using the App Router.
        </p>
      </main>
    </div>
  );
}
