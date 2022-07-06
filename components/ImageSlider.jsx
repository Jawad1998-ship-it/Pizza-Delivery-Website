import React from 'react'
import Image from 'next/image'
import styles from '../styles/ImageSlider.module.css'
import data from './SliderData'
import {useState} from 'react'


const ImageSlider = () => {


    const [current, setCurrent] = useState(0)
    const length = data.length

    const nextSlide = () => {
        setCurrent(current < length - 1 ? current + 1 : 0)
    }

    const prevSlide = () => {
        setCurrent(current > 0 ? current - 1 : length - 1)
    }

    if(!Array.isArray(data) || data.length <= 0)
    {
        return null;
    }


    return (

        <>   
            <div className={styles.container} >
                <div className={styles.arrowContainer} style={{left:0}} >
                    <Image src="/img/arrowl.png" alt='' layout="fill" className="left-arrow" onClick={prevSlide}  objectFit="contain" />
                </div>

                <div className={styles.wrapper} style={{transform:`translateX(${-100*current}vw)`}} >              
                        {data.map((image, index) => (
                            <div className={styles.imgContainer} key={index} >
                                <Image src={image} alt="Pizza"  layout='fill' objectFit='contain' className={styles.img} />         
                            </div>                                
                        ))}
                </div>

                <div className={styles.arrowContainer} style={{right:0}} >
                    <Image src="/img/arrowr.png" alt='' layout="fill" className="right-arrow" onClick={nextSlide} objectFit="contain"  />
                </div>
            </div>
        </>

        )
        
}

export default ImageSlider