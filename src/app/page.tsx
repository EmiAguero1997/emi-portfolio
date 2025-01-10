import * as motion from "framer-motion/client"
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "next/image";
import fotoCv from '/public/noBgProfile2.png';
import reactLogo from '/public/reactLogo.svg';
import angularLogo from '/public/angularLogo.svg';
import nodejsLogo from '/public/nodejsLogo.svg';
import nextJsLogo from '/public/nextjsLogo.svg';
import linkedinLogo from '/public/linkedinLogo.svg';
import downloadIcon from '/public/downloadIcon.svg';

export default function Home() {
  const linkedinUrl = 'https://www.linkedin.com/in/aguero-emiliano';
  const aboutMe = "A persistent and focused Frontend Developer with experience in object-oriented programming and web development using Angular TS, React/NextJs, Git, Bitbucket, HTML, CSS, and other related technologies. Proficient in Agile/Scrum methodologies, API integration, and deployment. Skilled in developing efficient solutions to meet client needs. Fluent in English."

  return (


    <div className={styles.mainContainer}>

      <div className={`container d-grid ${styles.gridContainer}`}>
        <div className={`row mb-4 mt-4 justify-content-between ${styles.header}`}>
          <div className="col-12 col-lg-6 col-md-6">

            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="d-flex align-content-center">
              <h1>Emiliano</h1><h1 className={styles.authorName}>.</h1>
            </motion.div>

          </div>
          <div className="col-12 col-lg-6 col-md-6">
            <motion.div initial={{ x: 1000, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="d-flex align-content-center justify-content-center">
              <h1>Tecnologies</h1>
            </motion.div>
            <motion.div initial={{ x: 1000, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <h3>Main</h3>
                </div>
                <div className="col-auto">
                  <Image src={angularLogo} width={35} height={35} quality={100} alt="angularLogo"></Image>
                </div>
                

              </div>
              <div className="row justify-content-center">
              <div className="col-auto">
                  <h3>Others</h3>
                </div>
                <div className="col-auto">
                  <Image src={nextJsLogo} width={35} height={35} quality={100} alt="nextjsLogo"></Image>
                </div>
                <div className="col-auto">
                  <Image src={reactLogo} width={35} height={35} quality={100} alt="reactLogo"></Image>
                </div>
                <div className="col-auto">
                  <Image src={nodejsLogo} width={35} height={35} quality={100} alt="nodejsLogo"></Image>
                </div>
              </div>



            </motion.div>

          </div>
        </div>
        <div className="row mt-4 justify-content-between">
          <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="order-2 order-lg-1 order-md-1 col-12 col-lg-6 col-md-6">
            <p>Frontend Developer.</p>
            <h1 className={styles.bigTitle}>Hello, i am</h1>
            <h1 className={`${styles.authorName} ${styles.bigTitle}`}>Emiliano Agüero</h1>
            <div className="row g-5">
              <div className="col-auto">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="/EA-CV-HV.pdf"
                  download="EA-CV.pdf"
                  className="btn btn-secondary btn-lg mt-4"
                >
                  Download CV <Image src={downloadIcon} width={25} height={25} alt="download"></Image>
                </motion.a>
              </div>
              <div className="col-auto">
                <motion.div whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}>
                  <motion.a href={linkedinUrl} target="_blank">
                    <Image src={linkedinLogo} width={50} height={50} alt="linkedinLogo" className="mt-4"></Image>
                  </motion.a>
                </motion.div>

              </div>
            </div>
            <div className="mt-4">
              <span className={styles.smallText}>{aboutMe}</span>
            </div>





          </motion.div>

          <motion.div
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 1 }}
  className="order-1 order-lg-2 order-md-2 col-12 col-lg-6 col-md-6 d-flex justify-content-center align-items-center mb-4"
>
  <div className={styles.imageContainer}>
    <Image
      src={fotoCv}
      className={styles.profileImg}
      priority
      width={350}
      height={350}
      quality={100}
      alt="Picture of the author"
    />
    <motion.svg
      fill="transparent"
      viewBox="0 0 506 506"
      className={styles.circle}
    >
      <motion.circle
        cx={253}
        cy={253}
        r={250}
        stroke="#7fffd4"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{strokeDasharray: "24 10 0 0"}}
        animate={{
          strokeDasharray:["15 120 25 25", "16 25 92 72", "4 250 22 22"],
          rotate:[120,360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
    </motion.svg>
  </div>
</motion.div>
          
        </div>

      </div>

    </div>

  );
}
