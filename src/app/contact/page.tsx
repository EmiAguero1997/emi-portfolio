import styles from '../page.module.css';
import * as motion from "framer-motion/client";
import emailSvg from '/public/email.svg';
import phoneSvg from '/public/phone.svg';
import Image from "next/image";

export default function Contact() {
    const phoneNumber = '(+54) 2645810700';
    const email = "Emiaguero1997@gmail.com"
    return (
        <div className={styles.gridContainer}>
            <div className={`container ${styles.mainContainer}`}>
                <motion.div className="row mt-4" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                    <h1 className='mt-4'>Contact</h1>

                </motion.div>
                <div className="row mt-4">
                    <motion.div className="col-lg-6 col-md-6 col-12" initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                        <h3>
                            Thanks for your consideration! send me an inbox or call to my number!
                            I will respond as soon as i can!
                        </h3>
                        <h1 className={styles.authorName}>Greetings!</h1>

                    </motion.div>
                    <motion.div className="col-lg-6 col-md-6 col-12 d-flex justify-content-center" initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                        <div>
                        <div className="row">
                            <div className="col-2">
                                <Image src={emailSvg} width={50} height={50} alt='email'></Image>
                            </div>
                            <div className="col-10">
                                <h3>Email</h3>
                                <span>{email}</span>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-2">
                                <Image src={phoneSvg} width={50} height={50} alt='email'></Image>
                            </div>
                            <div className="col-10">
                                <h3>Phone</h3>
                                <span>{phoneNumber}</span>
                            </div>
                        </div>
                        </div>
                        
                    </motion.div>
                </div>
               
            </div>


        </div>
    )
}