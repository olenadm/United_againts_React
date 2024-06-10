import React from "react";
import classes from "./SectionHeader.module.css";
import anim from "./Animations.module.css";
import mask from "../img/mask.jpg";
import { useParallax } from "react-scroll-parallax";

export default function SectionHeader() {
  const parallax = useParallax({
    speed: -30,
  });
  return (
    <section className="section-header">
      <div className="container">
        <div className={classes.intro}>
          <div className="caption">
            <div className={anim.blockEntry}>
              <h1>Online abuse in sport webinar series</h1>
            </div>
          </div>
          <div
            className={`${classes.mask} `}
            style={{ backgroundImage: `url(${mask})` }}
            ref={parallax.ref}
          ></div>
        </div>
      </div>
    </section>
  );
}
