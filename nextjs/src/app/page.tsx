"use client";
import { useEffect } from "react";
import styles from "./page.module.css";
import { Comments } from "@hyvor/hyvor-talk-react";
import { CommentCount } from "@hyvor/hyvor-talk-react";
import { CommentCounts } from "@hyvor/hyvor-talk-base";

const YOUR_WEBSITE_ID = 10787; // Replace with your actual Hyvor Talk website ID
const UNIQUE_PAGE_ID = "your-page-id"; // Replace with a unique identifier for the page

export default function Home() {
  useEffect(() => {
    CommentCounts.load({
      "website-id": YOUR_WEBSITE_ID,
    });
  }, []);
  return (
    <div className={styles.page}>
      <h2>Hyvor Talk + Next.js Integration</h2>
      <main className={styles.main}>
        <Comments website-id={YOUR_WEBSITE_ID} page-id={UNIQUE_PAGE_ID} />
        <CommentCount page-id={UNIQUE_PAGE_ID} />
        <div className={styles.ctas}>
          <p>
            Hyvor Talk is a privacy-focused comment system that can be easily
            integrated into Next.js applications. This example demonstrates how
            to set up Hyvor Talk in a Next.js application.
          </p>
        </div>
      </main>
    </div>
  );
}
