"use client";

import { useEffect } from "react";

export default function Layout({ children }) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Login in to X / X";

    return () => {
      document.title = prevTitle;
    };
  }, []);

  return <>{children}</>;
}
