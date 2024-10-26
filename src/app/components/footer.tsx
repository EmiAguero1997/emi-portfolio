import styles from '../page.module.css';
import Image from 'next/image';
import nextLogo from '/public/nextjsLogo.svg';
import reactLogo from '/public/reactLogo.svg';
import framerLogo from '/public/framer-motion.svg';
import bootstrapLogo from '/public/bootstrap.svg';

export default function Footer(){
    return(
        <div className="container p-4">
            <div className="row justify-content-center g-3">
            <div className={`col-auto align-content-center`}>
                <span className={styles.authorName}>Made with</span>
            </div>
            <div className="col-auto">
                <Image src={nextLogo} width={50} height={50} alt='nextLogo'></Image>
            </div>
            <div className="col-auto">
                <Image src={reactLogo} width={50} height={50} alt='nextLogo'></Image>
            </div>
            <div className="col-auto">
            <Image src={framerLogo} width={50} height={50} alt='nextLogo'></Image>
            </div>
            <div className="col-auto">
            <Image src={bootstrapLogo} width={50} height={50} alt='nextLogo'></Image>
            </div>
        </div>
        </div>
        
    )
}