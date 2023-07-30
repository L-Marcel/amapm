import { ReactNode } from "react";
import { Button, ButtonProps } from "../Button";
import { ShareButtonProps } from "../Button/ShareButton";
import { Markdown } from "../Markdown";
import style from "./index.module.scss";

export type PanelData = {
  id?: string;
  createdAt: string;
  title: string;
  inHome: boolean;
  description: {
    markdown: string;
  };
  panel_button: ButtonProps;
  share_button?: ShareButtonProps;
  children?: ReactNode;
};

export function Panel({ 
  description, 
  panel_button, 
  title, 
  inHome = false, 
  share_button,
  children
}: PanelData) {
  return (
    <section className={inHome? style.container_in_home:style.container}>
      <h2>{title}</h2>
      <Markdown 
        content={description?.markdown ?? ""}
      />
      <div role="button-group">
        <Button {...panel_button}/>
        { share_button && <Button {...share_button}/>}
      </div>
      {children}
    </section>
  );
}