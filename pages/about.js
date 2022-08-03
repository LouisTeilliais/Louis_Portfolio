import styles from '../styles/Home.module.css'
import { Card, Content } from 'react-bulma-components'

function About() {
  return (
    <div className={styles.cardInfo}>
      <h1 className={styles.main}>Quelques infos sur moi</h1>
      <Card className={styles.info} style={{ width: '55rem', height: '30rem' }}>
        <Card.Content>
          <Content className={styles.caracteristics}>
            <h2>Mes caractéristiques</h2>
            <ul>
              <li>
                <strong>Age</strong>
                <p>20 ans</p>
              </li>
              <li>
                <strong>Pays</strong>
                <p>France</p>
              </li>
              <li>
                <strong>Ville</strong>
                <p>Couëron</p>
              </li>
              <li>
                <strong>Étudiant</strong>
                <p>Ynov Nantes Campus</p>
              </li>
            </ul>
          </Content>
        </Card.Content>
        <Card.Content>
          <Content className={styles.caracteristics}>
            <h2>Mon parcours</h2>
            <ul>
              <li>
                <strong>Collège Paul Langevin </strong>
                <p>Couëron</p>
              </li>
              <li>
                <strong>Lycée Eugène Livet </strong> <p>Nantes</p>
              </li>
              <li>
                <strong>Nantes Ynov Campus </strong>
                <p>Nantes</p>
              </li>
            </ul>
          </Content>
        </Card.Content>
        <Card.Content>
          <Content className={styles.skill}>
            <h2>Quelques connaissances</h2>
            <ul>
              <li>
                <strong>Développement</strong>
                <p>Javascript</p>
                <p>C#</p>
                <p>PHP</p>
                <p>C/C++</p>
                <p>Python</p>
              </li>
              <li>
                <strong>Framework</strong>
                <p>ReactJS</p>
                <p>VueJS</p>
                <p>Laravel</p>
                <p>.NET</p>
                <p>ReactJS</p>
              </li>
              <li>
                <strong>Base de données</strong>
                <p>MongoDB</p>
                <p>SQL Server</p>
                <p>MySQL</p>
              </li>
              <li>
                <strong>Systèmes</strong>
                <p>Windows</p>
                <p>Linux</p>
              </li>
              <li>
                <strong>Langues</strong>
                <p>Français (maternelle)</p>
                <p>Anglais (bonne maîtrise)</p>
              </li>
            </ul>
          </Content>
        </Card.Content>
        <Card.Content>
          <Content className={styles.CV}>
            <a href="../../CV/CV_Louis_TEILLIAIS.pdf" target="_blank">
              Consulter mon CV
            </a>
          </Content>
        </Card.Content>
      </Card>
      {/* <Link href="/contact">Me contacter</Link> */}
    </div>
  )
}

export default About
