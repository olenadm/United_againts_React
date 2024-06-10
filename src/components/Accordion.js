import React from "react";
import classes from "./Accordion.module.css";

export default function Accordion(props) {
  const { id } = props;
  return (
    <>
      <div className={classes.collapsibleAccordion}>
        <div className={classes.collapsibleItem}>
          <input
            type="checkbox"
            id={`tab${id}`}
            name="tab"
            role="button"
            aria-expanded="false"
            aria-controls={`panel${id}`}
          />
          <label htmlFor={`tab${id}`}>
            A timeline of online abuse in sports in social media (example)
          </label>
          <div
            className={classes.collapsibleItemContent}
            role="region"
            id={`panel${id}`}
          >
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
}
