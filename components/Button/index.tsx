import { ShareButton, ShareButtonProps } from "./ShareButton";
import style from "./index.module.scss";

export interface ButtonProps {
  id?: string;
  type: "default";
  link: string;
  text: "blue" | "gray";
  theme: string;
}

export function Button(props: ButtonProps | ShareButtonProps) {
  if(props.type === "default") {
    const { link, text, theme } = props;
    return (
      <a 
        className={style.container}
        href={link}
        role={theme}
        target="_blank"
      >
        {text}
      </a>
    );
  } 

  return (
    <ShareButton {...props}/>
  );
}