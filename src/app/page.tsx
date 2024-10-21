
import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <AppNavbar></AppNavbar>
      <div className={styles.page}>

        <div className="container d-grid">
          <div className="row">
            <div className={`col-12 col-lg-4 col-md-6 ${styles.header}`}>
              <div>
                <div>
                  <h1>Bienvenidos</h1>
                </div>
              </div>
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
