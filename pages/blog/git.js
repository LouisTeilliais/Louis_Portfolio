import styles from '../../styles/Home.module.css'

export default function Git() {
  return (
    <div className={styles.container}>
      <h1 className={styles.main}>GIT ET SES PRINCIPALES COMMANDES </h1>
      <h1 className={styles.titleArticle}>Git en quelques mots </h1>
      <div className={styles.article}>
        Git est un système de contrôle de version open source. Dit autrement
        c’est un outil qui permet de « traquer » tous les fichiers de notre
        projet. Git va, en fait nous permettre de savoir qui à touché à quel
        fichier et à quel moment sur notre projet. Il va permettre à chaque
        développeur de travailler de son côté avec un système de branche, qui
        sera fusionné à la fin. L’historique des fichiers est aussi présent sur
        toutes les machines où se trouve le projet, plus pratique qu’une
        architecture centralisée.
      </div>
      <h1 className={styles.titleArticle}>Comment ça marche?</h1>
      <div className={styles.article}>
        Pour faire simple, Git est séparé en trois zones de travail bien
        distinctes.{' '}
        <ul>
          <li>Zone de travail (workplace)</li>
          <li>Zone de transit (stage) </li>
          <li>Dépôt (git) </li>
        </ul>
      </div>
      <div className={styles.article}>
        <p>
          La « zone de travail » est en fait là où notre dossier est cloné,
          c’est ici où l’on va travailler pour pouvoir modifier nos fichiers.
          Pour passez à la seconde version, il faudra « pousser » notre fichier
          dedans. Pour cela on fera un{' '}
          <strong>git push « nom_du_fichier »</strong>.<br />
          <br />
          La « zone de transit », c’est l’étape intermédiaire. C’est un peu
          l’entrepôt où est stocké notre projet avant de l’envoyer. C’est ici où
          l’on va versionner les fichiers envoyés, avec la commande{' '}
          <strong>git commit -m « nom_de_version »</strong>. <br />
          <br />
          Le « dépôt », c’est ici tout le projet sera stocké, c’est la version
          finale de notre projet. Chaque commit que l’on va faire va créer une
          version unique de notre projet. Pour atteindre cette « zone » il
          suffira de faire un <strong>git push</strong> après les deux dernières
          commandes. Un petit schéma pour illustrer tout ça :
        </p>
      </div>
      <div className={styles.image}>
        <br />
        <img
          title="Source : Freelance Talks"
          src="../../architecture_cmd.png"
        ></img>
      </div>
      <h1 className={styles.titleArticle}>Les principales commandes</h1>
      <div className={styles.article}>
        <p>
          Après avoir vu rapidement les commandes de git. Nous allons maintenant
          nous intéresser aux commandes que l’on voit souvent, que ce soit de la
          création de branche ou au retour en arrière dans le projet.{' '}
        </p>
      </div>
      <h2 className={styles.titleArticle}>Créer une branche</h2>
      <div className={styles.article}>
        <p>
          Pour cela il faudra avoir un projet créer et cloner, rendez vous sur
          dans le dossier créer et lancer un terminal à cet endroit. Puis lancez
          la commande : <strong>git branch new-features.</strong>
        </p>
      </div>
      <h2 className={styles.titleArticle}>Se déplacer sur la branche</h2>
      <div className={styles.article}>
        <p>
          Pour se déplacer sur la nouvelle branche créer,{' '}
          <strong>git checkout new-feature</strong>. Pour vérifier que tout
          s’est bien passé <strong>git branch</strong>, si tout va bien une
          petite « * » doit apparaître à côté du nom de la branche active.{' '}
          <br />
          On pourra aller beaucoup plus vite avec la commande{' '}
          <strong>git checkout -b new-feature</strong> qui va créer ET changer
          de branche automatiquement.
        </p>
      </div>
      <h2 className={styles.titleArticle}>Mettre à jour le dépôt </h2>
      <div className={styles.article}>
        <p>
          Une fois que vous avez fait ce que vous vouliez fait sur la branche et
          que tout fonctionne. Vous allez pouvoir ajouter les modifications à la
          branche master (celle de base qui doit contenir la version
          fonctionnelle du projet). On va donc envoyer comme tout à l’heure les
          fichiers : <strong>git add * </strong>(* sert à envoyer TOUS les
          fichiers) on peut aussi ajouter un seul fichier avec{' '}
          <strong>git add mon_fichier.html</strong>. On va ensuite pouvoir le
          mettre dans la « deuxième zone » avec un{' '}
          <strong>git commit -m « add features »</strong>. Puis l’envoyer dans
          le dossier sur Git avec un <strong>git push</strong>.
        </p>
      </div>
      <h2 className={styles.titleArticle}>Fusionner les branches</h2>
      <div className={styles.article}>
        <p>
          Une fois que cela est fait, on va vouloir tout envoyer sur notre
          branche principale pour cela la manière la plus simple est de se
          remettre sur celle-ci puis de fusionner la branche. On fera donc un{' '}
          <strong>git checkout master</strong> puis{' '}
          <strong>git merge new-features</strong>.
        </p>
      </div>
      <h2 className={styles.titleArticle}>Revenir au dernier commit</h2>
      <div className={styles.article}>
        <p>
          Cette commande est à utiliser avec <strong>extrême précaution</strong>
          , elle renvoie le dossier de travail au niveau du dernier commit.
          Toutes les modifications non commit seront perdues. On fera donc un
          <strong>git reset add features</strong> .
        </p>
      </div>
      <h2 className={styles.titleArticle}>Récupérer les modifications</h2>
      <div className={styles.article}>
        <p>
          Lorsque que l’on voudra récupérer des modifications d’autres branches
          ou de la principale on fera un : <strong>git pull</strong> pour
          récupérer sur <strong>master</strong> sinon on fera un merge
          classique. Le mieux reste quand même de fusionner les branches car un
          pull pourra provoquer des conflits.
          <br /> La suite du premier schéma pour illustrer la structure des
          commandes et de ce qu’elles font.
        </p>
      </div>
      <div className={styles.image}>
        <br />
        <img
          title="Source : Freelance Talks"
          src="../../Git-Architechture.png"
        ></img>
      </div>
      <h2 className={styles.titleArticle}>Quelques commandes utiles</h2>
      <div className={styles.article}>
        <p>
          On va pouvoir consulter les dossiers que l’on a ajoutés à l’index
          après la commande git add en lançant la commande :{' '}
          <strong>git status</strong>
          . <br />
          <br />
          On peut aussi obtenir la liste des commits qui ont été fait avec{' '}
          <strong>git log</strong>.
          <br />
          <br />
        </p>
      </div>
    </div>
  )
}
