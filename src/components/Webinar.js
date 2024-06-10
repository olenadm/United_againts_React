import React from "react";

export default function Webinar(props) {
  const { title, speaker, date, content, biography, next, img } = props.element;

  return (
    <>
      <div className="content">
        <h3>{title}</h3>
        <h4>{speaker}</h4>
        <time>{date}</time>
        <p>{content}</p>
        <h4>Presenter biography</h4>
        <p>{biography}</p>
        {next && (
          <a href="/" className="btn">
            Register for this webinar
          </a>
        )}
      </div>
      <aside>
        <img
          src={`./img/${img}`}
          alt={speaker}
          title={speaker}
          aria-labelledby={speaker}
        />
      </aside>
    </>
  );
}
