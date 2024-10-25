import * as motion from "framer-motion/client"
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
// import AppNavbar from "./components/navbar";
// import Image from 'react-bootstrap/Image';
import Image from "next/image";
import fotoCv from './assets/foto-cv.jpg';
import reactLogo from '/public/reactLogo.svg';

export default function Home() {
  const aboutMe = "A persistent and focused Frontend Developer with experience in object-oriented programming and web development using Angular TS, React/NextJs, Git, Bitbucket, HTML, CSS, and other related technologies. Proficient in Agile/Scrum methodologies, API integration, and deployment. Skilled in developing efficient solutions to meet client needs. Fluent in English."

  return (


    <div className={styles.mainContainer}>

      <div className={`container d-grid ${styles.gridContainer}`}>
        <div className="row mb-4 mt-4 justify-content-between">
          <div className="col-12 col-lg-6 col-md-6">

            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="d-flex align-content-center">
              <h1>Emiliano.</h1>
            </motion.div>

          </div>
          <div className="col-12 col-lg-6 col-md-6">
            <motion.div initial={{ x: 1000, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="d-flex align-content-center justify-content-center">
              <h1>Tecnologies</h1>
            </motion.div>
            <motion.div>
              <div className="row justify-content-center">
                <div className="col-auto">
                  <Image src={reactLogo} width={50} height={50} quality={100} alt="reactLogo"></Image>
                </div>
                <div className="col-auto">
                  <Image src={reactLogo} width={50} height={50} quality={100} alt="reactLogo"></Image>
                </div>
                <div className="col-auto">
                  <Image src={reactLogo} width={50} height={50} quality={100} alt="reactLogo"></Image>
                </div>
              </div>



            </motion.div>

          </div>
        </div>
        <div className="row mt-4 justify-content-between">
          <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className="col-12 col-lg-6 col-md-6">
            <p>Frontend Developer.</p>
            <h1>Hello, i am</h1>
            <h1 className={styles.authorName}>Emiliano Agüero</h1>
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href="/CV.docx"
              download="CV.docx"
              className="btn btn-secondary btn-lg mt-4"
            >
              Download CV
            </motion.a>
          </motion.div>

          <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }} className="col-12 col-lg-6 col-md-6 d-flex justify-content-center align-content-center">
            <Image src={fotoCv} className={styles.profileImg}
              width={350}
              height={250}
              quality={100}
              alt="Picture of the author"></Image>
          </motion.div>
        </div>
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1 }} className="row justify-content-center mt-4">
          <div className="d-flex justify-content-center">
            <h1>About me</h1>
          </div>
          <div className="col-12 col-lg-10 d-flex mt-4">
            <span >{aboutMe}</span>
          </div>

        </motion.div>
      </div>

    </div>

  );
}
