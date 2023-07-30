"use client";
import style from "./index.module.scss";

export interface ShareButtonProps {
  id?: string;
  type: "share";
  link: string;
  text: string;
  theme: "blue" | "gray";
  title: string;
  content?: string;
  body: string;
}

export function ShareButton({ link, text, theme, content, title, body }: ShareButtonProps) {
  function onClick() {
    navigator.share({
      text: `*${title}\n\n*` + (content ?? body ?? "") + "\n\n",
      title,
      url: link
    });
  }

  return (
    <button
      className={style.container}
      onClick={onClick}
      role={theme}
    >
      {text}
    </button>
  );
}