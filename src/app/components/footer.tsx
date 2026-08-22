import styles from '../page.module.css';
import Image from 'next/image';

export default function Footer(){
    return(
        <div className="container p-4">
            <div className="row justify-content-center g-3">
            <div className={`col-12 align-content-center d-flex justify-content-center`}>
                <span className={styles.authorName}>Made with</span>
            </div>
            <div className="col-auto">
                <Image src="/nextjsLogo.svg" width={50} height={50} alt='nextLogo'></Image>
            </div>
            <div className="col-auto">
                <Image src="/reactLogo.svg" width={50} height={50} alt='nextLogo'></Image>
            </div>
            <div className="col-auto">
            <Image src="/framer-motion.svg" width={50} height={50} alt='nextLogo'></Image>
            </div>
            <div className="col-auto">
            <Image src="/bootstrap.svg" width={50} height={50} alt='nextLogo'></Image>
            </div>
        </div>
        </div>
        
    )
}