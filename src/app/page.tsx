
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./components/navbar";
// import Image from 'react-bootstrap/Image';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <AppNavbar></AppNavbar>
      <div className={styles.page}>

        <div className={`container d-grid ${styles.gridContainer}`}>
          <div className="row mb-4">
            <div className="col-12 col-lg-4 col-md-6">
              
                <div className="d-flex align-content-center">
                  <h1>Emiliano.</h1>
                </div>
              
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-6">
              <p>Frontend Developer.</p>
              <h1>Hello, i am</h1>
              <h1>Emiliano Agüero</h1>
            </div>
            <div className="col-6">
            <Image src="/foto-cv.jpg" width={500}
      height={500}
      alt="Picture of the author"/>
            </div>
          </div>
        </div>
        <footer className={styles.footer}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum id molestias expedita facere molestiae cumque praesentium dolores vel incidunt a autem sequi numquam deserunt velit non quis, eveniet veritatis consectetur?
        </footer>
      </div>
    </>
  );
}
