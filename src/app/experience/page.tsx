import Link from 'next/link';
import styles from '../page.module.css';
import * as motion from "framer-motion/client"

export default function Experience() {
  interface ExperienceItem {
    name: string;
    description: string;
  }

  interface Experience {
    enterpriseName: string;
    period: string;
    description: ExperienceItem[];
    sites?: string[]; // Optional property as it's not present in every experience
    subDesc?:string;
  }

  const experience: Experience[] = [
    {
      enterpriseName: 'Moby Digital',
      period: 'May 2023 - Present',
      subDesc:'ICBC Mobile Banking',
      description: [
        {
          name: 'Investment Funds',
          description: 'I developed screens and business logic for the investment funds section, benefiting thousands of direct users.'
        },
        {
          name: 'Payments Module Refactoring',
          description: 'I carried out redesigns and refactoring in the payments module of the application, handling highly complex code. These improvements optimized user interaction with the platform, increasing efficiency and user experience.'
        },
        {
          name: 'Recharges module',
          description:'I contributed to develop most part of recharges module, separating this feature from Payments module to achieve cleaner code and simple structure.'
        },
        {
          name: 'Migration of Travel Notifications Functionality',
          description: 'I participated in the development and migration of the travel notifications feature, enabling users to activate the use of their cards abroad, improving their experience.'
        }
      ]
    },
    {
      enterpriseName: 'Folcode',
      period: 'July 2021 – May 2023',
      description: [
        {
          name: 'UI Implementation and Business Logic Development',
          description: 'Implemented user interface designs and developed business logic requirements for each frontend view.'
        },
        {
          name: 'Collaborative IT Development',
          description: 'Worked alongside other IT members to plan, design, and develop efficient and scalable solutions.'
        },
        {
          name: 'Customer-Focused Software Design',
          description: 'Designed and developed software that met client needs, ensuring high-quality delivery.'
        },
        {
          name: 'Unit Testing, API Integration, and Bug Fixing',
          description: 'Conducted unit tests, handled REST API development, and fixed bugs to ensure smooth functionality.'
        },
        {
          name: 'Database Analysis and Redesign',
          description: 'Analyzed and redesigned a database to align with the specific project requirements.'
        },
        {
          name: 'Endpoint Development',
          description: 'Developed API endpoints for consumption in the frontend, enhancing data flow and user experience.'
        }
      ],
      sites: [
        'https://elegibiencompramejor.gob.ar/landing',
        'https://capacitur.sanjuan.tur.ar',
        'https://plataforma.sanjuan.tur.ar',
        'https://plataforma.sanjuan.tur.ar',
        'https://servicios.inversionessanjuan.gov.ar'
      ]
    }
  ];
  return (
    <div className={styles.mainContainer}>



      <div className={`container d-grid ${styles.gridContainer}`}>
        <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.5 }} className='mt-4'>Experience</motion.h1>
        {
          experience.map((item, index) => (
            <div className="row mt-4" key={index}>
              <div className={`col-12`}>
                <div className={styles.colContainer}>
                  <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1 }} className={styles.authorName}>{item.enterpriseName}</motion.h1>
                  <motion.h4 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1 }}>{item.period}</motion.h4>
                  {
                    item.subDesc && (
                      <motion.h4 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1 }} className={styles.authorName}>{item.subDesc}</motion.h4>
                    )
                  }
                  <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.5 }}>
                    {
                      item.description.map((subItem, subIndex) => (
                        <ul key={subIndex}>
                          <li>

                            <h5 className={`${styles.authorName} ${styles.smallText}`}>{subItem.name}:</h5> <p className={styles.smallText}>{subItem.description}</p>


                          </li>

                        </ul>
                      ))
                    }

                  </motion.div>
                  <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1.8 }}>
                  {
                    item.sites && (
                      <h4>Sites</h4>

                    )

                  }
                  {
                    item.sites && (
                      item.sites.map((siteItem, siteIndex) => (

                        <ul key={siteIndex}>
                          <li>
                            <Link className={`${styles.authorName} ${styles.smallText}`} href={siteItem} target='_blank'>{siteItem}</Link>
                          </li>
                        </ul>
                      ))
                    )
                  }
                  </motion.div>
                  
                </div>



              </div>
            </div>
          ))
        }


      </div>
    </div>

  )
}