import styles from '../../styles/Home.module.css'

export default function SoapAPI() {
  return (
    <div className={styles.container}>
      <h1 className={styles.main}>LES API SOAP AVEC .NET CORE</h1>
      <h2 className={styles.titleArticle}>Qu’est-ce qu’une API SOAP ?</h2>
      <div className={styles.article}>
        <p>
          SOAP (Simple Object Access Protocol), c’est un protocole standard pour
          l’échange de messages XML. Initialement conçu pour que des
          applications développées avec différents langages sur différentes
          plateformes puissent communiquer. Ce protocole est assez ancien, mais
          lisible par tous les langages. Une requête envoyée à une API SOAP peut
          être traitée par différents modes de communication : HTTP (pour le
          web), SMTP (pour les mails), TCP, etc… Tout cela est codifié dans le
          langage WSDL, c’est un peu comme l’exemple de ce que doit recevoir le
          serveur. Le WSDL est souvent expliqué comme un contrat entre le
          fournisseur et le consommateur du service. Le fait que ce soit un
          protocole, implique que des règles et standards de conformité sont
          intégrés notamment sur la sécurité. On l’utilise donc souvent pour des
          besoins de sécurité. SOAP possède sa propre gestion d’erreur.
        </p>
      </div>
      <h2 className={styles.titleArticle}>XML</h2>
      <div className={styles.article}>
        <p>
          Le XML (Extensible Markup Language) est un langage utilisé
          principalement pour faciliter les échanges d’informations sur le web.
          Ce langage de description a pour mission de formaliser des données
          textuelles, comme le HTML, il utilise un fonctionnement de balise. Le
          XML se classe dans la catégorie des langages de description (ni un
          langage de programmation, ni un langage de requêtes).
        </p>
      </div>
      <h2 className={styles.titleArticle}>WSDL</h2>
      <div className={styles.article}>
        <p>
          Le WSDL (Web Services Description Language) est un fichier qui
          spécifie ce que doit contenir un message de requête et l'apparence du
          message de réponse, il décrit la fonction d'un service web ainsi que
          ses limites. Le WSDL est basé sur le XML ou le schéma XML (XSD). Cela
          signifie que le WSDL utilise des éléments XML.
        </p>
      </div>
      <h2 className={styles.titleArticle}>SOAP VS REST</h2>
      <div className={styles.image}>
        <img src="../../soapVSREST.png"></img>
      </div>
      <div className={styles.article}>
        <p>
          On peut se demander quel est le meilleur système à utiliser pour
          traiter des API. Tout dépend de plusieurs critères :
          <ul>
            <li>Les besoins</li>
            <li>Les coûts</li>
            <li>Le contexte</li>
          </ul>
          D’un côté, REST (Representational State Transfer) qui est arrivé plus
          tard et considéré comme plus rapide est plus souvent utilisé pour les
          applications web. SOAP qui lui est plus ancien, fait que beaucoup de
          vieux systèmes reposent dessus. SOAP reste moins flexible que REST car
          comme c’est un protocole il possède beaucoup d’exigence comme les
          messages sous le format XML. REST lui utilise des formats de message
          plus légers comme JSON, par exemple. SOAP est peut-être plus pertinent
          lorsque l’on veut développer une application sécurisée, qui fait
          transiter des informations dites « sensibles ». Par exemple, les
          systèmes bancaires. REST peut être plus utile dans un contexte comme
          le développement d’application mobile, par exemple, lorsqu’il faut des
          échanges simples et précis. REST est plus léger donc plus adapté aux
          nouveaux concepts.
        </p>
      </div>
    </div>
  )
}
