import React from "react";
import anim from "./Animations.module.css";

export default function SectionContent(props) {
  const { title , previous} = props;
  return (
    <section className={`sectionContent ${previous ? 'previous' : ""}`}>
      {title && (
        <div className="container">
          <h2 className={anim.fadeInAnim}>{title}</h2>
        </div>
      )}

      <div className="container">{props.children}</div>
    </section>
  );
}
