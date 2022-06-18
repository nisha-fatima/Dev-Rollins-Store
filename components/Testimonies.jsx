import React, {useRef, useLayoutEffect, useState} from 'react'
import styles from './Testimonies.module.scss';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import AOS from "aos";
import "aos/dist/aos.css";


const Testimonies = () => {

    useLayoutEffect(() => {
          AOS.init({ duration: 800 });
        }, []);
      

  return (
    <section className={styles.overall}>
        <div className={styles.header}>
            <p>Recent Testimonies</p>
        </div>
        <main className={styles.mainView}>
            <section className={styles.card}  data-aos="fade-right">
                <div className={styles.imageDiv}>
                    <Image src="/real2.jpg" alt="" layout='fill' />
                </div>
                <div className={styles.username}>
                    Collins Rollins
                </div>
                <div className={styles.texts}>
                    Such a wonderful service I was able to recieve from them. I never knew it was all legit until I tried them. Very fast and reliable.
                </div>
                <div className={styles.stars}>
                    <AiFillStar fill='#1f2dc2' />
                    <AiFillStar  fill='#1f2dc2'  />
                    <AiFillStar  fill='#1f2dc2'  />
                    <AiFillStar  fill='#1f2dc2'  />
                    <AiFillStar  fill='#1f2dc2'  />
                </div>
            </section>
            <section className={styles.card}  data-aos="fade-right">
                <div className={styles.imageDiv}>
                    <Image src="/test1.jpg" alt="" layout='fill' />
                </div>
                <div className={styles.username}>
                    Pearl Lopez
                </div>
                <div className={styles.texts}>
                    I dont leave reviews but I will do so here. I was able to get the best gadgets with a very low price! Just not entirely impressed with their help desk though.
                </div>
                <div className={styles.stars}>
                    <AiFillStar fill='#1f2dc2' />
                    <AiFillStar  fill='#1f2dc2'  />
                    <AiFillStar  fill='#1f2dc2'  />
                    <AiFillStar  fill='#1f2dc2'  />
                    <AiOutlineStar  fill='#1f2dc2'  />
                </div>
            </section>

            <section className={styles.card}  data-aos="fade-right">
                <div className={styles.imageDiv}>
                    <Image src="/test2.webp" alt="" layout='fill' />
                </div>
                <div className={styles.username}>
                    Aaron Smith
                </div>
                <div className={styles.texts}>
                   Fascinating is what i will call the delivery service. What I love most about this site is the ability to pay using crypto. Incredible and fast!!!
                </div>
                <div className={styles.stars}>
                    <AiFillStar fill='#1f2dc2' />
                    <AiFillStar  fill='#1f2dc2'  />
                    <AiFillStar  fill='#1f2dc2'  />
                    <AiFillStar  fill='#1f2dc2'  />
                    <AiFillStar  fill='#1f2dc2'  />
                </div>
            </section>
        </main> 

    </section>
  )
}

export default Testimonies