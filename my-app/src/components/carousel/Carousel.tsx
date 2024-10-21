"use client"
import React, { useState } from 'react';

import styles from './carousel.module.css';
import { IoIosArrowBack } from "react-icons/io";

import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image';
interface CarouselItem {
  id: number;
  title: string;
  content: string;
  name: string;
  job: string;
  img: string;
}

// Dummy data for the carousel
const items: CarouselItem[] = [
  { id: 1, title: 'Outstanding results everytime', content: 'I have been using Home Master for my home cleaning needs for over a year now and they consistently deliver outstanding results',
    name: "Hannover mike", job: "photographer", img: "/person1.jpg"
   },

  { id: 2, title: 'Outstanding results everytime', content: 'I have been using Home Master for my home cleaning needs for over a year now and they consistently deliver outstanding results',
    name: "John mayer", job: "journalist", img: "/person2.jpg"
   },
  { id: 3, title: 'Outstanding results everytime', content: 'I have been using Home Master for my home cleaning needs for over a year now and they consistently deliver outstanding results',
    name: "Mary winston", job: "writer", img: "/person3.jpg"
   },

  { id: 4, title: 'Outstanding results everytime', content: 'I have been using Home Master for my home cleaning needs for over a year now and they consistently deliver outstanding results',
    name: "Jack james", job: "painter", img: "/person4.jpg"
   },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number): void => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.carouselContainer}>
    <h1 className={styles.h1}>Hear What Our Customers Have To Say</h1>
      <div className={styles.carouselWrapper}>

        <div
          className={styles.carouselContent}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >

          {items.map((item) => (
            <div key={item.id} className={styles.carouselItem}>
              <div className={styles.carouselItemInner}>
                <div className={styles.flex}>
                    <div>
                        <Image src={item.img} alt="person" width={150} height={100}/>
                    </div>
                    <div>
                        <h2>{item.title}</h2>
                        <p className={styles.content}>{item.content}</p>
                        <p className={styles.content}>{item.name}</p>
                        <p>{item.job}</p>
                    </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      <button onClick={prevSlide} className={`${styles.carouselButton} ${styles.prev}`} aria-label="Previous slide">
      <IoIosArrowBack />
      </button>
      <button onClick={nextSlide} className={`${styles.carouselButton} ${styles.next}`} aria-label="Next slide">
      <IoIosArrowForward />
      </button>
      <div className={styles.carouselIndicators}>
        {items.map((_, index) => (
          <button
            key={index}
            className={`${styles.carouselIndicator} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
