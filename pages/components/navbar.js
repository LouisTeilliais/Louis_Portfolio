import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import HomeIcon from '@mui/icons-material/Home';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';

export const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <Link href="/"><a><HomeIcon/>Accueil</a></Link>
            <Link href="/about"><a><InfoIcon/>A propos</a></Link>
            <Link href="/blog"><a><ArticleIcon/>Articles</a></Link>
            <Link href="/contact"><a><ContactPageIcon/>Contact</a></Link>
        </nav>
    )
}