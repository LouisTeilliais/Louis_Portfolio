import styles from '../../styles/Home.module.css'

export default function Gravitee() {
  return (
    <div className={styles.container}>
      <h1 className={styles.main}>L'APIM GRAVITEE</h1>
      <h1 className={styles.titleArticle}>Qu’est-ce que Gravitee ?</h1>
      <h2 className={styles.titleArticle}>Présentation</h2>
      <div className={styles.article}>
        <p>
          Pour faire simple Gravitee est un outil de gestion d’API. Il se base
          sur une interface web utilisateur assez simple et intuitive. Pour ce
          qui est du serveur, Gravitee va utiliser Elasticsearch et une base de
          données MongoDB. Pour ce qui est du côté client, l’interface de
          management (APIM) est simple et rapide. Elle facilite grandement la
          gestion des APIs.
        </p>
        <div className={styles.image}>
          <img width="800" src="../../Gravitee/APIM.png"></img>
        </div>
        <p>
          Pour gérer les applications que l’on peut avoir en lien avec les APIs,
          nous avons aussi accès à un portail de gestion, qui lui aussi est très
          simple d’utilisation.
        </p>
        <div className={styles.image}>
          <img width="800" src="../../Gravitee/portal.png"></img>
        </div>
      </div>
      <h2 className={styles.titleArticle}>
        Comment mettre en place l'APIM de Gravitee
      </h2>
      <h2 className={styles.titleArticle}>Les prérequis</h2>
      <div className={styles.article}>
        <p>
          Tout d’abord, nous allons commencer par installer les prérequis pour
          pouvoir faire l’installation complète sans problème.
        </p>
        <h3 className={styles.titleArticle}>JDK</h3>
        <p>
          Tout d’abord, nous allons commencer par installer Java. L’APIM
          Gravitee requiert au moins la version 11 de JDK. On va donc prendre la
          dernière version en date disponible, soit la 18.0.1.1 sur ce{' '}
          <a target="_blank" href="https://jdk.java.net/archive/">
            lien
          </a>
          . Une fois JDK téléchargé, il faudra ajouter, une variable dans les
          variables d’environnement de votre PC. Comme ceci :
          <br />
          <br />
          <div className={styles.image}>
            <img src="../../Gravitee/jdk.png"></img>
          </div>
          <br /> Une fois ceci fait, nous allons redémarrer le PC pour qu’il
          prenne en compte la nouvelle variable. <br /> Puis pour tester que
          java est bien installé, ouvrez un terminal et tapez la commande :{' '}
          <strong>java –version</strong>
        </p>
      </div>
      <div className={styles.article}>
        <h3 className={styles.titleArticle}>MongoDB</h3>
        <p>
          Dans un second temps, il sera nécessaire d’avoir mongoDB car c’est la
          base de données utilisé par Gravitee. Pour l’installer, il faudra
          suivre ce{' '}
          <a
            target="_blank"
            href="https://www.mongodb.com/try/download/enterprise"
          >
            lien
          </a>{' '}
          . Et de prendre la version actuelle, ici la 5.0.9.
        </p>
      </div>
      <div className={styles.article}>
        <h3 className={styles.titleArticle}>Elastic</h3>
        <p>
          Pour finir dans les prérequis, il sera obligatoire aussi d’avoir
          elasticsearch et de télécharger une version compatible à l’APIM
          Gravitee c’est-à-dire la 7.17.4.{' '}
          <a
            target="_blank"
            href="https://www.elastic.co/fr/downloads/past-releases/elasticsearch-7-17-4"
          >
            Ici
          </a>
          .
        </p>
      </div>
      <div className={styles.article}>
        <h2 className={styles.titleArticle}>Télécharger le fichier Zip</h2>
        <p>
          Juste avant de faire cela, il va falloir créer dans les documents un
          fichier <strong>gravitee</strong> par exemple.
        </p>
        <h3 className={styles.titleArticle}>Fichier zip</h3>
        <p>
          Pour télécharger, le fichier zip contenant tous les services de l’APIM
          (Gateway, Console, API et Portail). Il faudra se rendre sur ce{' '}
          <a
            target="_blank"
            href="https://download.gravitee.io/graviteeio-apim/distributions/graviteeio-full-3.17.3.zip"
          >
            lien
          </a>
          . Une fois ceci fait, il faudra dézipper le fichier que l’on vient de
          prendre dans celui que l’on à créer ultérieurement. Il faudra
          également y glisser le fichier dézipper d’Elastic.
        </p>
      </div>
      <div className={styles.article}>
        <h2 className={styles.titleArticle}> Les services APIM</h2>
        <h3 className={styles.titleArticle}>Elastic</h3>
        <p>
          Pour lancer elastic, il faudra se rendre dans un terminal Visual
          Studio Code ou un invite de commande simple, et se rendre dans le
          fichier en question. En faisant, simplement la commande{' '}
          <strong>d \gravitee\elasticsearch-7.17.4.\bin</strong>c. Puis de faire
          simplement la commande : <strong>./elasticsearch.bat</strong>. <br />
          Elastic est lancé.
        </p>
      </div>
      <div className={styles.article}>
        <h3 className={styles.titleArticle}>APIM Gateway</h3>
        <p>
          Pour lancer la gateway, c’est un peu le même principe il faudra se
          mettre dans le fichier en question. Avec les deux commandes suivantes
          on se mettra dans le dossier puis on lancera la gateway.
        </p>
        <div className={styles.image}>
          <img width="500" src="../../Gravitee/gateway.png"></img>
        </div>
        <p>
          Pour vérifier que tout fonctionne bien on va se rendre sur l’adresse :
          http://localhost:8082. Celle-ci devrait normalement renvoyer : No
          context-path matches the request URI. Donc tout fonctionne bien.
        </p>
      </div>
      <div className={styles.article}>
        <h3 className={styles.titleArticle}>APIM API</h3>
        <p>
          Pour lancer l’API, c’est un peu le même principe il faudra se mettre
          dans le fichier en question. Avec les deux commandes suivantes on se
          mettra dans le dossier puis on lancera l’API.
          <br />
          <br />
          <div className={styles.image}>
            <img width="500" src="../../Gravitee/api.png"></img>
          </div>
          <br />
          Pour vérifier que tout fonctionne bien on va se rendre sur l’adresse :{' '}
          <br />
          <a
            target="_blank"
            href="http://localhost:8083/management/organizations/DEFAULT/environments/DEFAULT/apis"
          >
            http://localhost:8083/management/organizations/DEFAULT/environments/DEFAULT/apis
          </a>
          <br />
          Celle-ci devrait normalement renvoyer : [ ].
        </p>
      </div>
      <div className={styles.article}>
        <h3 className={styles.titleArticle}>APIM Console</h3>
        <p>
          Pour la console c’est un peu différent, c’est un serveur que nous
          avons besoin de lancer. Il suffira de lancer les commandes suivantes.
          <br />
          <br />
          <div className={styles.image}>
            <img width="500" src="../../Gravitee/console.png"></img>
          </div>
          <p>
            La console sera donc lancer sur l’adresse :{' '}
            <a target="_blank" href="http://localhost:8000">
              http://localhost:8000
            </a>
            . Pour se connecter en tant qu’admin. Les identifiants sont
            admin/admin.
          </p>
        </p>
      </div>
      <div className={styles.article}>
        <h3 className={styles.titleArticle}>APIM Portail</h3>
        <p>
          Pour finir, le portail de l’APIM. Il y’aura juste le serveur à
          installer et à lancer.
          <br />
          <br />
          <div className={styles.image}>
            <img width="500" src="../../Gravitee/apim_portail.png"></img>
          </div>
          <p>
            Pour vérifier si tout fonctionne bien on se rendra sur l’adresse :{' '}
            <a target="_blank" href="http://localhost:8080">
              http://localhost:8080
            </a>{' '}
            et on aura accès au portail une fois que l’on aura rentrés nos
            identifiants (idem que pour la console). Une fois que toute ces
            étapes auront été respectées, l’APIM est installé. <br />
            Vous pouvez commencer à manipuler et exposer vos API.
          </p>
        </p>
      </div>
    </div>
  )
}
