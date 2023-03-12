
import Image from "next/image";
import { useState } from "react";
import styles from "./carousel.module.css"
import ProgressCard from "../card/inprogress"
import { position } from '../../data/positions.js'


export default function RecommendedCarousel() {

    const [img, setImg] = useState(0); //start the image at 0

    const changeImage = (change) => { //this means, onChange, if someone clicks either of the two arrow buttons below, then run the if statement. 
        if (change == "backward") {
            setImg(img - 1);

            if (img == 0) {
                setImg(5)
            }
            console.log(img);
        } else if (change == "forward") {
            setImg(img + 1);

            if (img == 5) {
                setImg(0)
            }
            console.log(img);
        }
    }

    const [data, setData] = useState([...position.recommended]);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.body} style={{
                    backgroundImage: "url(/carousel-images/" + img + ".jpg)", //concatonation, it's inserting the useState image number, which matches with the image names.
                    backgroundSize: 'cover',
                    backgroundRepeat: "no-repeat",
                    width: "auto",
                    height: 150

                }}>
                    <div className={styles.positions}>
                        {data && data.map((info, index) => {
                            {
                                return (
                                    <div>
                                        <ProgressCard
                                            key={index}
                                            image={info.image}
                                            area={info.title}
                                        />
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <Image className={styles.imageL}
                        src={"/icons/leftArrow.png"}
                        alt={"/icons/leftArrow.png"}
                        width={25}
                        height={25}
                        onClick={() => changeImage("backward")}
                    />

                    <Image className={styles.imageR}
                        src={"/icons/rightArrow.png"}
                        alt={"/icons/rightArrow.png"}
                        width={25}
                        height={25}
                        onClick={() => changeImage("forward")}
                    />

                </div>
            </div>

        </>
    )
}