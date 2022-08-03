import styles from '../../styles/Home.module.css'

export default function Framework() {
  return (
    <div className={styles.container}>
      <h1 className={styles.main}>
        Les principaux frameworks JS, avantages VS inconvénients
      </h1>
      <h1 className={styles.titleArticle}>Javascript </h1>
      <div className={styles.article}>
        <p>
          Le langage Javascript évolue très vite. Il devient très natif et en
          plus de cela très stable. De ce fait, beaucoup de Framework ont vu le
          jour ces dernières années. Javascript évolue très vite car il peut
          être utiliser à la fois du côté client comme de celui du serveur.
          C’est pourquoi des Framework se développe rapidement, ils servent de
          squelettes au code et permettent entre autres au développeur de ne pas
          se soucier de celle-ci. De plus il rend l’affichage souvent plus
          simple grâce à l’utilisation de composants qui sont en général natifs
          au Framework. <br />
          Nous allons voir ici 3 des principaux Framework JS, Angular, Vue et
          React.
        </p>
      </div>
      <h1 className={styles.titleArticle}>Angular </h1>
      <div className={styles.article}>
        Développé par Google, Angular fait surement partie des Frameworks les
        plus populaires utilisés chez les développeurs JS. Angular existe
        maintenant depuis un moment (sortie en septembre 2016), il reste mis à
        jour régulièrement avec de nouvelles fonctionnalités, comme le prouve sa
        dernière version la 14.0.4, sortie en juin 2022. Angular est l’un des
        Frameworks JS les plus performants et robustes. Pour prouver la
        popularité d’Angular à travers le monde on peut regarder ce schéma qui
        nous montre le nombre de sites développé en AngularJS au travers du
        monde.{' '}
      </div>
      <div className={styles.image}>
        <br />
        <img src="../../AngularJS-websites-usage-across-the-globe.png"></img>
      </div>
      <h2 className={styles.titleArticle}>Avantages</h2>
      <div className={styles.article}>
        Angular est l’un des Frameworks les plus populaires et très complets, sa
        documentation est très bien détaillée et permet d’appréhender au mieux
        son développement. Il possède ainsi une grande communauté et donc
        beaucoup plus de chances d’avoir de solutions à ses problèmes. Une
        compilation très rapide (moins de 3 secondes) pour les dernières
        versions. Mais surtout Angular possède un modèle MVM, qui permet
        développeurs de travailler séparément sur la même section d’application
        en utilisant le même ensemble de données. Il est basé sur l’injection de
        dépendances.
      </div>
      <h2 className={styles.titleArticle}>Inconvénients</h2>
      <div className={styles.article}>
        Angular possède malgré tout quelques inconvénients. Tout d’abord, la
        complexité du langage et de la syntaxe peut rendre l’apprentissage ardu.
        L’impossibilité de changer de Framework en cours de route : une
        application doit être développée en Angular du début à la fin. Certains
        problèmes de migration ont pu être rencontrés lors du passage
        d’anciennes versions vers les nouvelles. Et est moins performants que
        les deux autres que l’on va voir (React et Vue).
      </div>
      <h1 className={styles.titleArticle}>React</h1>
      <div className={styles.article}>
        Aussi appelé ReactJS, c’est un Framework développé par Facebook en 2013.
        Il est souvent choisi pour son dynamisme et son efficacité. Il permet de
        concevoir des applications web via la création de composants dépendants
        d’un état constituant une portion HTML pour chaque changement d’état.
        React peut être utilisé pour créer une interface graphique front et
        propose un modèle qui convient parfaitement à tous les développeurs web.
        Le graphique ci-dessous montre bien la popularité de React, en
        illustrant le nombre de téléchargement sur les 5 dernières années.
      </div>
      <div className={styles.image}>
        <br />
        <img
          src="../../React-Chart-js.png"
          width="1000"
          height="450"
          title="Source : "
        ></img>
      </div>
      <h2 className={styles.titleArticle}>Avantages</h2>
      <div className={styles.article}>
        Les avantages de React sont nombreux, pour commencer il est facile à
        apprendre car sa conception l’est aussi. Il est très flexible et offre
        un très large choix aux développeurs. Il est 100% Open Source et donc de
        ce fait souvent mis à jour (dernière version le 14 juin 2022, la
        18.2.0). Le principal avantage de React est qu’il peut aider à
        développer un composant qui sera beaucoup réutilisé. Il existe également
        grande communauté, et donc un appui pour sa progression permanente.
        React est aussi très rapide grâce à son utilisation de DOM virtuel.
      </div>
      <h2 className={styles.titleArticle}>Inconvénients</h2>
      <div className={styles.article}>
        Comme Angular, React possède quelques inconvénients. React est basé sur
        un système de classe ce qui peut être un peu complique pour les
        développeurs à l’aise avec la POO (Programmation Orientée Objet). Il
        possède très peu de documentation officielle. Malgré la légèreté de la
        syntaxe, React requiert une connaissance approfondie pour intégrer
        l’interface utilisateur au Framework MVC.
      </div>
      <h1 className={styles.titleArticle}>Vue</h1>
      <div className={styles.article}>
        Le troisième et dernier Framework de cet article concerne Vue ou VueJS a
        été créée par Evan You en 2013, mais à été lancé en 2014. VueJS est
        décrit comme « un Framework progressif pour la création d’interfaces
        utilisateur », son architecture est conçue pour être adaptable de
        manière incrémentielle.
      </div>
      <h2 className={styles.titleArticle}>Avantages</h2>
      <div className={styles.article}>
        Surement le plus gros avantage de Vue, sa simplicité, car il propose peu
        de choix. Vue permet de créer à la fois des applications d’une seule
        page et une interface web de haute qualité dans les applications. En
        plus de ça, il dispose d’une documentation claire et très complète. De
        plus il est compatible HTML et CSS ce qui signifie que l’on ne perd pas
        de temps à apprendre quelque chose de tout nouveau. Vue.js permet
        l’intégration de parties interactives plus petites dans l’infrastructure
        existante. Il est aussi très léger comme peut le témoigner ce schéma.
      </div>
      <div className={styles.image}>
        <br />
        <img src="../../framework-sizes.png"></img>
      </div>
      <h2 className={styles.titleArticle}>Inconvénients</h2>
      <div className={styles.article}>
        Les deux principaux inconvénients de Vue sont que son historique est
        très récent, car il est assez daté mais est utilisé depuis peu. Il a
        donc pu être moins confronté à des problèmes. Le second est la
        communauté restreinte car c’est le moins populaire des 3, et donc le
        moins utilisé. Qui dit communauté restreinte dit moins de solutions
        venant d’utilisateurs sur le web.
        <br />
        <br />
        Pour conclure, on ne peux pas dire qu’il y’en ai qui soit moins bien
        qu’un autre, mais le choix peut se tourner surtout sur le temps que l’on
        veux y passer dessus que ce soit pour l’apprentissage ou la recherche de
        solutions lors de problèmes rencontrés.
        <br />
        <br />
      </div>
    </div>
  )
}
