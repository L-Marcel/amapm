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
  body?: {
    markdown: string;
  }
};

export function ShareButton({ link, text, theme, content, title, body }: ShareButtonProps) {
  function onClick() {
    navigator.share({
      text: (content ?? body?.markdown ?? "") + "\n",
      title,
      url: link
    })
    .then(() => alert("Obrigado por compartilhar!"))
		.catch((error) => {
      alert("Ocorreu um erro ao compartilhar!");
      console.error(error);
    });
  };

  return (
    <button
      className={style.container}
      onClick={onClick}
      role={theme}
    >
      {text}
    </button>
  );
};