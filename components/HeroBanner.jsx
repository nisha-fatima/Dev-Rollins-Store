/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "./HeroBanner.module.scss";

import { urlFor } from "../lib/client";

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className={styles.heroBannerContainer}>

      <div className={styles.left}>
        <div className={styles.imageDiv}>
        <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className={styles.heroBannerImage}
        />
        </div>
      </div>
      <div className={styles.right}>
      <p className={styles.beatsSolo}>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <div>
          <Link href={`/product/${heroBanner.product}`} passHref>
            <button type="button">{heroBanner.buttonText}</button>
          </Link>
          <div className={styles.desc}>
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
