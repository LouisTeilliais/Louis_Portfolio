import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Columns, Card, Content } from 'react-bulma-components'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import ContactsIcon from '@mui/icons-material/Contacts'

export default function Home() {
  return (
    <div className={styles.cardPresentation}>
      <h1 className={styles.main}>Bienvenue sur mon site personel</h1>
      <Card
        className={styles.presentation}
        style={{ width: '55rem', height: '30rem' }}
      >
        <h2>Qui-suis je ?</h2>
        <Card.Content>
          <Content className={styles.presentationImage}>
            <div>
              <img src="../../Louis.png"></img>
            </div>
            <div>
              <br />
              <p>Louis</p> <p className={styles.Name}>TEILLIAIS</p>
              <br />
              <br />
            </div>
          </Content>
          <Content className={styles.link}>
            <Link href="https://github.com/LouisTeilliais">
              <a target="_blank">
                <GitHubIcon />
              </a>
            </Link>
            <Link href="https://www.linkedin.com/in/louis-teilliais/">
              <a target="_blank">
                <LinkedInIcon />
              </a>
            </Link>
            <Link href="/contact">
              <a>
                <ContactsIcon />
              </a>
            </Link>
          </Content>
        </Card.Content>

        <Card.Content>
          <Content className={styles.textPresentation}>
            <p>
              Agé de 20 ans. Je suis étudiant à Nantes Ynov Campus en B2 dans la
              filière informatique. Je rentrerai à la rentrée prochaine en 3ème
              et dernière année de mon bachelor dans la spécialité
              "Développement". J'enchainerai surêment une fois mon bachelor
              validé, sur un mastère. J'ai réalisé mon stage de fin de deuxième
              année, dans l'entreprise Next Decision basé à Nantes.
            </p>

            <div className={styles.entrepriseButton}>
              <a href="/entreprise/ND">
                Next decision : Mon entreprise
                <div>
                  <img width="350" src="../../ND/ND_logo.png"></img>
                </div>
              </a>
            </div>
          </Content>
        </Card.Content>
      </Card>
    </div>
  )
}
