"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { Comments, CommentCount } from "@hyvor/hyvor-talk-react";
import { CommentCounts } from "@hyvor/hyvor-talk-base";

const YOUR_WEBSITE_ID = 10787;
const UNIQUE_PAGE_ID = ""; // Use route or a unique identifier (string)

export default function Home() {
  // Run once on mount to load comment counts
  useEffect(() => {
    CommentCounts.load({
      "website-id": YOUR_WEBSITE_ID,
    });
  }, []);

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

        {/* Hyvor Talk Comments */}
        <Comments website-id={YOUR_WEBSITE_ID} page-id={UNIQUE_PAGE_ID} />

        {/* Comment Count */}
        <p>
          Total comments: <CommentCount page-id={UNIQUE_PAGE_ID} />
        </p>

        <p>
          Hyvor Talk is a privacy-focused comment system that can be easily
          integrated into React applications. This example demonstrates how to
          set up Hyvor Talk in a React application using the App Router.
        </p>
      </main>
    </div>
  );
}
