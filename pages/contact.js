import styles from '../styles/Home.module.css'
import { Heading, Card, Content } from 'react-bulma-components'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailIcon from '@mui/icons-material/Mail'
import Footer from './components/footer'

function Contact() {
  return (
    <div className={styles.container}>
      <Heading className={styles.main}>Me contacter</Heading>
      <Card
        className={styles.contact}
        style={{ width: '25rem', height: '12rem' }}
      >
        <h2>Par mail</h2>
        <Card.Content>
          <Content>
            <a href="mailto:louis.teilliais@gmail.com">
              <a>
                <MailIcon />
              </a>
              louis.teilliais@gmail.com
            </a>
          </Content>
        </Card.Content>
      </Card>
      <Card
        className={styles.contact}
        style={{ width: '25rem', height: '12rem' }}
      >
        <Card.Content>
          <h2>Via LinkedIn</h2>
          <Content>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/louis-teilliais/"
            >
              <a>
                <LinkedInIcon />
              </a>
              linkedin.com
            </a>
          </Content>
        </Card.Content>
      </Card>
      <Footer />
    </div>
  )
}
export default Contact
