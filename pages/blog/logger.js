import styles from '../../styles/Home.module.css'

export default function Logger() {
  return (
    <div className={styles.container}>
      <h1 className={styles.main}>METTRE EN PLACE UN LOGGER AVEC .NET CORE </h1>
      <h1 className={styles.titleArticle}>.NET CORE </h1>
      <h2 className={styles.titleArticle}>Qu'est-ce que .Net Core </h2>
      <div className={styles.article}>
        <p>
          .Net Core est un framework de développement multiplateforme, développé
          par Microsoft. Il est souvent utilisé pour créer un nombreux type
          d’applications car il repose sur un runtime de haute performance. Il
          est utilisé pour créer des applications cloud, qu’elles soient natives
          de consoles ou web. Des applications multiplateformes, comme des
          applications de bureau, mobile ou encore des jeux. Mais aussi, des
          applications des services Windows, du machine learning ou de l’IOT.
          .NET Core se base principalement sur le langage C#.
        </p>
        {/* <div className={styles.image}>
          <img src="../../APIM.png"></img>
        </div> */}
      </div>
      <h2 className={styles.titleArticle}>Qu'est-ce qu'un logger ? </h2>
      <div className={styles.article}>
        Le but d’un « logger » est de prévenir le développeur de l’état de son
        application et des potentiels problèmes qu’il peut rencontrer. Les
        loggers peuvent être sous forme de fichiers ou alors plus simplement
        afficher dans la console. Ils servent principalement à montrer d’où
        viennent les erreurs et leurs gravités (information, erreur, critique…).{' '}
      </div>
      <h1 className={styles.titleArticle}>MISE EN PLACE </h1>
      <div className={styles.article}>
        <p>
          Nous allons ici, montrer comment mettre en place un logger dans la
          console grâce à .Net Core et C#.
        </p>
      </div>
      <h2 className={styles.titleArticle}>Configuration </h2>
      <div className={styles.article}>
        Pour commencer, il va falloir configurer nos loggers. Nous allons créer
        un dossier /ConsoleLogger dans lequel on va créer un fichier
        ColorConsoleLoggerConfiguration Dans ce fichier, on va initialiser les
        couleurs que l’on veut pour les différents niveaux de gravité du log.
      </div>
      <div className={styles.image}>
        <br />
        <img width="600" src="../../logger/config.png"></img>
      </div>
      <h2 className={styles.titleArticle}>Color </h2>
      <div className={styles.article}>
        <p>
          Ensuite, nous allons implémenter notre vrai logger. Dans un fichier
          qui se nomme ColorConsoleLogger, on va utiliser les configurations
          faites précédemment puis ajouter à quoi va ressembler notre log grâce
          à une classe InfoToLog où on y mettra les informations que l’on veut
          envoyer.
        </p>
        <div className={styles.image}>
          <br />
          <img width="550" src="../../logger/color.png"></img>
        </div>
        <p>
          On doit initialiser notre logger, avec les paramètres obligatoires que
          prend la méthode Log.
        </p>
        <div className={styles.image}>
          <br />
          <img width="500" src="../../logger/color2.png"></img>
        </div>
        <p>
          Il faudra rajouter un système de queue pour que les informations
          arrivent une à une et pas toutes en même temps. Sinon cela n’affichera
          que le dernier log et « écraserai » les autres.
        </p>
        <div className={styles.image}>
          <br />
          <img width="500" src="../../logger/queue.png"></img>
        </div>
      </div>
      <h2 className={styles.titleArticle}>3- Provider </h2>
      <div className={styles.article}>
        <p>
          Le troisième fichier que nous allons créer va être un provider qui a
          pour but d’aller chercher les configurations que l’on va rentrer dans
          appsettings.Development.json. Avant de créer le provider on va
          rajouter dans le fichier de configuration, pour pouvoir définir les
          niveaux de logs par défaut.
        </p>
        <div className={styles.image}>
          <br />
          <img width="400" src="../../logger/provider.png"></img>
        </div>
        <p>
          Et ensuite pour pouvoir utiliser ces paramètres, il nous faut comme
          dit ci-dessus, créer un logger provider. On va donc créer un fichier
          ColorConsoleLoggerProvider.cs.
        </p>
        <div className={styles.image}>
          <br />
          <img width="600rem" src="../../logger/provider2.png"></img>
        </div>
      </div>
      <h2 className={styles.titleArticle}>Extension </h2>
      <div className={styles.article}>
        <p>
          Pour finir, il faudra ajouter une extension qui va avoir pour rôle de
          nous faire ajouter dans la console nos loggers, avec une fonction
          AddColorConsoleLogger que l’on utilisera dans notre fichier
          Program.cs.
        </p>
        <div className={styles.image}>
          <br />
          <img width="600rem" src="../../logger/extension.png"></img>
        </div>
        <p>
          Maintenant, on va utiliser tout notre logger dans le fichier cité
          ci-dessus Program.cs en utilisant la méthode que l’on a créer
          précédemment.
        </p>
        <div className={styles.image}>
          <br />
          <img width="600rem" src="../../logger/extension2.png"></img>
        </div>
        <p>
          On va tester si tout cela fonctionne. Pour cela, on va ajouter un
          fichier, qui servira de service, Application.cs où on va ajouter
          quelque logger avec un _logger.LogTrace par exemple.
        </p>
        <div className={styles.image}>
          <br />
          <img width="600rem" src="../../logger/extension3.png"></img>
        </div>
        <p>Finalement on va ajouter le service dans Program.cs. </p>
        <div className={styles.image}>
          <br />
          <img width="400" src="../../logger/extension4.png"></img>
        </div>
        <p>
          On va tester cela dans la console en lançant la commande dotnet run
          pour démarrer l’application. Ici on va voir que tout fonctionne car
          les logs s’affichent bien dans la console avec les informations que
          l’on voulait.
        </p>
        <div className={styles.image}>
          <br />
          <img width="500" src="../../logger/extension5.png"></img>
        </div>
        <br />
      </div>
    </div>
  )
}
