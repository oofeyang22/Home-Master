"use client"
import styles from "./pricing.module.css"
import React, { useState } from 'react';
import { PiBroom } from "react-icons/pi";
import { Check } from "../check/Check";
// Dummy data for pricing packages
const pricingOffers = [
    {
      title: 'Residential',
      description: 'For small teams or office',
      monthlyPrice: 19,
      yearlyPrice: 199,
      benefits: ['Carpet Cleaning', 'Bathroom Cleaning', 'Floor Cleaning', 'Bedroom Cleaning']
    },
    {
      title: 'Buildings',
      description: 'For professional teams',
      monthlyPrice: 49,
      yearlyPrice: 499,
      benefits: ['Carpet Cleaning', 'Bathroom Cleaning', 'Floor Cleaning', 'Bedroom Cleaning']
    },
    {
      title: 'Commercial',
      description: 'For large scale enterprises',
      monthlyPrice: 99,
      yearlyPrice: 999,
      benefits: ['Carpet Cleaning', 'Bathroom Cleaning', 'Floor Cleaning', 'Bedroom Cleaning']
    }
  ];


const Pricing = () => {
    const [isYearly, setIsYearly] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.toggleFlex}>
                <h2>Special Pricing Package No Hidden Charge</h2>
                <div className={styles.toggleGroup}>
                    <button
                    onClick={() => setIsYearly(false)}
                    //onClick={handleFalse}
                    className={`${styles.toggleButton} ${!isYearly ? styles.active : ''}`}
                    >
                    Monthly
                    </button>
                    <button
                    onClick={() => setIsYearly(true)}
                   // onClick={handleTrue}
                    className={`${styles.toggleButton} ${isYearly ? styles.active : ''}`}
                    >
                    Yearly
                    </button>
                 </div>
            </div>
            <div className={styles.grid}>
              {pricingOffers.map((offer) => (

                <div className={styles.boxContainer} key={offer.title}>
                  <p className={styles.title}>{offer.title}</p>
                  <div className={styles.icon}>
                    <PiBroom size={24}/>
                  </div>
                  <div className={styles.priceChange}>
                    <div className={styles.price}>
                    ${isYearly ? offer.yearlyPrice : offer.monthlyPrice} 
                    <span className={styles.pricePeriod}>
                    /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                <div className={styles.benefits}>
                  {
                    offer.benefits.map((benefit, index) => (
                      <div className={styles.flex} key={index}>
                        <Check/>
                        <p>{benefit}</p>
                      </div>
                    ))
                  }
              </div>
              <button className={styles.button}>Get Service</button>

              </div>
            </div>
              ))}


          </div> 
        </div>
    )
}


export default Pricing;

