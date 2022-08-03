import styles from '../../styles/Home.module.css'

export default function Elastic() {
  return (
    <div className={styles.container}>
      <h1 className={styles.main}>Mettre en place un dashboard Kibana </h1>
      <h1 className={styles.titleArticle}>Créer des logs</h1>
      <div className={styles.article}>
        <p>
          Pour pouvoir visualiser des logs sur Kibana, il nous en faut. Pour
          cela, on va supposer que vous envoyez déjà des données sur l’addresse
          : <strong>http://elastic:9200/logs/_doc</strong>avec des logs qui
          ressemble à ce que vous voulez.
          <br />
          Pour voir s’ils sont bien créés, on peut soit se rendre sur l’url :{' '}
          <a href="http://localhost:9200/_cat/indices/logs">
            http://localhost:9200/_cat/indices/logs
          </a>{' '}
          ou alors dans l’outils Dev Tools de Kibana et exécuter la requête{' '}
          <strong>GET /logs/_search</strong>.
        </p>
      </div>
      <h1 className={styles.titleArticle}>Créer un index sur Kibana</h1>
      <div className={styles.article}>
        <p>
          Dans le Dashboard de Kibana nous allons créer un index. Pour cela, il
          faut se rendre dans l’onglet <strong>Stack Management</strong>, puis{' '}
          <strong>Index patterns</strong>.{' '}
        </p>
      </div>
      <div className={styles.image}>
        <br />
        <img src="../../Elastic/stack.png"></img>
      </div>
      <div className={styles.article}>
        <p>
          Une fois sur cet onglet, il faudra tout simplement créer un index en
          suivant les indications de Kibana.
        </p>
      </div>
      <div className={styles.image}>
        <br />
        <img src="../../Elastic/pattern.png"></img>
        <br />
      </div>
      <div className={styles.article}>
        <p>
          Dans la création de l’index, on devra associez le nom de notre index
          au nom des logs que l’on a envoyés pour que cela « match » entre les
          deux. Ainsi que sélectionné notre « timestamp ».
        </p>
      </div>
      <div className={styles.image}>
        <br />
        <img src="../../Elastic/create_index.png"></img>
        <br />
      </div>
      <h1 className={styles.titleArticle}>Visualiser notre index</h1>
      <div className={styles.article}>
        <p>
          Pour pouvoir visualisez notre index, nous allons créer des graphiques
          pour que les informations soient plus lisibles et visuelles. Dans
          notre cas, on va donc se rendre dans l’onglet{' '}
          <strong>Visualize Library</strong>.
        </p>
      </div>
      <div className={styles.image}>
        <br />
        <img src="../../Elastic/vizualize.png"></img>
        <br />
      </div>
      <div className={styles.article}>
        <p>
          Il faudra créer une visualisation et choisir{' '}
          <strong>Aggregation based</strong>. <br /> De nombreux choix s’offre à
          nous.
          <br /> On va en voir quelques-uns ici. Par exemple, on pourra avoir un
          indicateur qui va nous montrer le nombre total de logs qui sont
          arrivés sur l’application. Pour cela :
        </p>
      </div>
      <div className={styles.image}>
        <br />
        <img src="../../Elastic/new_visualize.png"></img>
        <br />
      </div>
      <p className={styles.article}>
        On va obtenir un simple chiffre/nombre correspondant au nombre de logs
        envoyés.
      </p>
      <div className={styles.image}>
        <br />
        <img src="../../Elastic/metric.png"></img>
        <br />
      </div>
      <div className={styles.article}>
        <p>
          Pour avoir plus de précision sur les logs on va pouvoir se rendre sur{' '}
          <strong>Buckets --&gt; Add</strong>.
        </p>
      </div>
      <div className={styles.image}>
        <br />
        <img src="../../Elastic/add bucket.png"></img>
        <br />
      </div>
      <div className={styles.article}>
        <p>
          Une fois dans<strong> Split group : </strong>.
        </p>
      </div>
      <div className={styles.image}>
        <br />
        <img src="../../Elastic/agg.png"></img>
        <br />
      </div>
      <div className={styles.article}>
        <p>Le résultat donnera cela :</p>
      </div>
      <div className={styles.image}>
        <br />
        <img src="../../Elastic/metrics.png"></img>
        <br />
      </div>
      <div className={styles.article}>
        On pourra donc sauvegarder notre visualisation pour pouvoir les utiliser
        plus tard dans notre dashboard.
      </div>
      <div className={styles.image}>
        <br />
        <img width="500" src="../../Elastic/save.png"></img>
        <br />
      </div>
      <div className={styles.article}>
        <p>
          Ainsi avec le même schéma de création on pourra créer toute sorte de
          visualisation, que ce soit des camemberts, des graphiques ou encore
          des tableaux. <br /> <br /> Exemple :
        </p>
      </div>
      <div className={styles.image}>
        <br />
        <img width="700" src="../../Elastic/example.png"></img>
        <br />
      </div>
      <h1 className={styles.titleArticle}>Création du Dashboard</h1>
      <div className={styles.article}>
        <p>
          Une fois que toutes les visualisations que l’on souhaite sont créer.
          Nous allons créer un dashboard. Il faudra se rendre dans l’onglet
          <strong>Dashboard</strong>.
        </p>
      </div>
      <div className={styles.image}>
        <br />
        <img src="../../Elastic/dashboard.png"></img>
        <br />
      </div>
      <div className={styles.article}>
        <p>Puis pour avoir accès au dashboard :</p>
      </div>
      <div className={styles.image}>
        <br />
        <img src="../../Elastic/create.png"></img>
        <br />
      </div>
      <div className={styles.article}>
        <p>
          Une fois dans le dashboard il faudra ajouter les virtualisations que
          l’on a créé auparavant.{' '}
        </p>
      </div>
      <div className={styles.image}>
        <br />
        <img width="700" src="../../Elastic/add_library.png"></img>
        <br />
      </div>
      <div className={styles.article}>
        <p>
          En les sélectionnant on pourra les ajouter au dashboard et avoir tout
          notre panel d’informations devant nous. On pourra aussi le
          sauvegarder.
        </p>
      </div>
    </div>
  )
}
