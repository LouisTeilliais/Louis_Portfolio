import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { Columns } from 'react-bulma-components'

function Blog() {
  return (
    <>
      <h1 className={styles.main}>Articles</h1>
      <div className={styles.card}>
        <Columns>
          <Columns.Column>
            <Link href="/blog/soapApi">
              <Card sx={{ maxWidth: 345, maxHeight: 500, marginBottom: 10 }}>
                <CardMedia component="img" height="auto" image="/SoapAPI.png" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Les API SOAP
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Qu'est ce que sont les API SOAP, leurs fonctionnements et
                    leurs utilités et les différences avec les API REST. <br />{' '}
                    Cliquez ici pour voir plus.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Columns.Column>
          <Columns.Column>
            <Link href="/blog/elastic">
              <Card sx={{ maxWidth: 345, maxHeight: 500 }}>
                <CardMedia component="img" height="275" image="/elastci.png" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Elastic
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Découvrez ici le principe de Kibana pour pouvoir gérer des
                    logs. De la création d'index à celle d'un Dashboard de
                    visualisation.
                    <br /> Cliquez ici pour voir plus.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column>
            <Link href="/blog/logger">
              <Card sx={{ maxWidth: 345, maxHeight: 500, marginBottom: 10 }}>
                <CardMedia component="img" height="275" image="/net.png" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Mettre en place un logger avec .NET Core
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    L'utilisation du framework .Net Core pour ajouter des
                    loggers dans la console. <br /> Cliquez ici pour voir plus.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Columns.Column>
          <Columns.Column>
            <Link href="/blog/framework">
              <Card sx={{ maxWidth: 345, maxHeight: 500 }}>
                <CardMedia
                  component="img"
                  height="205"
                  image="/frameworks.png"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Les principaux frameworks JS
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Quels framework choisir au lancement d'un projet et quels
                    sont les avantages et inconvénients de chacun (React, Vue et
                    Angular).
                    <br /> Cliquez ici pour voir plus.
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Columns.Column>
        </Columns>
        <Columns>
          <Columns.Column>
            <Link href="/blog/gravitee">
              <Card sx={{ maxWidth: 345, maxHeight: 500, marginBottom: 10 }}>
                <CardMedia component="img" height="300" image="/gravitee.png" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Gravitee
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Découvrez l'API management Gravitee, ainsi que
                    l'installation et la mise en place de son APIM
                    <br /> Cliquez ici pour voir plus
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Columns.Column>
          <Columns.Column>
            <Link href="/blog/git">
              <Card sx={{ maxWidth: 345, maxHeight: 500 }}>
                <CardMedia component="img" height="250" image="/git.png" />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Git et ses principales commandes
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    A quoi sert vraiment Git et comment fonctionne t-il ?
                    Découvrez ici les principes de branche, merge, push, etc...
                    <br /> Cliquez ici pour voir plus
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Columns.Column>
        </Columns>
      </div>
    </>
  )
}

export default Blog
