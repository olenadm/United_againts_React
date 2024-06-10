import React from "react";

export default function Template(props) {
  const { brand, url } = props.element;

  return (
    <li>
      <a title={brand} href={url} target="_blank" rel="noreferrer">
        {brand}
        <i className="chevron"></i>
      </a>
    </li>
  );
}
