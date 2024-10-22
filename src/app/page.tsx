
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./components/navbar";
// import Image from 'react-bootstrap/Image';
import Image from "next/image";
import fotoCv from './assets/foto-cv.jpg';
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <>

      <div className={styles.mainContainer}>
        <AppNavbar></AppNavbar>
        <div className={`container d-grid ${styles.gridContainer}`}>
          <div className="row mb-4 mt-4">
            <div className="col-12 col-lg-4 col-md-6">

              <div className="d-flex align-content-center">
                <h1>Emiliano.</h1>
              </div>

            </div>
          </div>
          <div className="row mt-4">
            <div className="col-12 col-lg-6 col-md-6">
              <p>Frontend Developer.</p>
              <h1>Hello, i am</h1>
              <h1 className={styles.authorName}>Emiliano Agüero</h1>
              <Button variant="secondary" size="lg" className="mt-4">
                Download CV
              </Button>
            </div>
            <div className="col-12 col-lg-6 col-md-6 d-flex justify-content-center align-content-center">
              <Image src={fotoCv} className={styles.profileImg}
                width={400}
                height={300}
                quality={100}
                alt="Picture of the author"></Image>
            </div>
          </div>
        </div>
        <footer className={`mt-4 text-center ${styles.footer}`}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum id molestias expedita facere molestiae cumque praesentium dolores vel incidunt a autem sequi numquam deserunt velit non quis, eveniet veritatis consectetur?
        </footer>
      </div>
    </>
  );
}
