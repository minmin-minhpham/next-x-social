"use client";

import { useEffect } from "react";

export default function Layout({ children }) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = "Sign up for X / X";

    return () => {
      document.title = prevTitle;
    };
  }, []);

  return <>{children}</>;
}
