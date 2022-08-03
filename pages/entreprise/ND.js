import styles from '../../styles/Home.module.css'
import { Card, Content } from 'react-bulma-components'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.main}>Next decision : Mon entreprise</h1>
      <div className={styles.image}>
        <img w src="../../ND/ND_logo.png"></img>
      </div>
      <br />
      <div className={styles.article}>
        <p>
          Pour mon stage de fin d’année de B2 à Nantes Ynov Campus, je me suis
          dirigé vers l’entreprise Next Decision. Cette entreprise, d’origine
          nantaise, dont le siège ce situe au 31 rue Fouré à Nantes, a été créée
          en 2010 par deux associés : Olivier Marquis et Régis Boudaud.
          Aujourd’hui, son rayonnement s’étend sur toute la France avec plus de
          200 consultants et ses agences à Angers, Bordeaux, Brest, Lille, Lyon,
          Montpellier, Nantes, Nice, Paris, Toulouse et Rennes.{' '}
        </p>
        <div className={styles.image}>
          <img width="400" src="../../ND/agences.png"></img>
        </div>
        <p>
          Next Decision est une entreprise en constante évolution avec une
          croissance certaine comme l’illustre ce graphique de l’évolution du
          chiffre d’affaire ainsi que ces quelques données clés : <br />
        </p>
        <div className={styles.image}>
          <img width="800" src="../../ND/CA.png"></img>
        </div>
        <p>
          Next Decision est un cabinet de conseil en Buisness Inteligence, Big
          Data, MDM et élaboration budgétaire. L’ensemble de ses éléments rentre
          dans ce que l’on appelle « L’informatique Décisionnelle ». Il s’agit
          là d’un ensemble de solutions informatiques visant à tirer le meilleur
          parti des données d’une entreprise. L’objectif de l’informatique
          décisionnelle est de permettre un pilotage d’une entreprise, en
          fournissant notamment des tableaux de bord et des rapports sur
          lesquels les décideurs peuvent s'appuyer pour la prise de décisions.
          Pour dire simplement ce que fait globalement l’entreprise : sa mission
          consiste à analyser des données générées dans des Big Data (Google,
          Facebook, etc…) par chacun afin d’en tirer des conclusions marketing
          pour ses clients. De ce fait, ses clients sont des entreprises de
          toutes tailles se situant un peu partout sur le territoire français.
          <br />
          <br />
          Pour illustrer le poids de cette entreprise voici quelque références
          clients :
        </p>
        <div className={styles.image}>
          <img width="800" src="../../ND/clients.png"></img>
        </div>
        <p>Ainsi que leurs partenaires :</p>
        <div className={styles.image}>
          <img width="800" src="../../ND/partenaires.png"></img>
        </div>
        <br />
        <div>
          <Card.Content>
            <Content className={styles.experience}>
              <a className={styles.experience} href="/entreprise/experience">
                Expérience de mon stage
              </a>
            </Content>
          </Card.Content>
        </div>
        <br />
      </div>
    </div>
  )
}
