/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import styles from "./FooterBanner.module.scss";

import { urlFor } from "../lib/client";

const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className={styles.footerBannerContainer}>
      <div className={styles.bannerDesc}>
        <div className={styles.left}>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className={styles.imageDiv}>
            <img src={urlFor(image)} className={styles.footerBannerImage} />
        </div>
        <div className={styles.right}>
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`} passHref>
            <button type="button">{buttonText}</button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default FooterBanner;
