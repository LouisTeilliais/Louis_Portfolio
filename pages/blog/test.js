import { Columns, Card, Content } from 'react-bulma-components'
import styles from '../../styles/Home.module.css'

export default function test() {
  return (
    <Columns>
      <Columns.Column>
        <Card className={styles.contact} style={{ width: 300, margin: 'auto' }}>
          <h2>Via mail</h2>
          <Card.Content>
            <Content>
              <a href="mailto:louis.teilliais@gmail.com">
                {/* <a>
                  <MailIcon />
                </a> */}
                louis.teilliais@gmail.com
              </a>
            </Content>
          </Card.Content>
          <Card.Content>
            <p>dnzoiqd,opc</p>
          </Card.Content>
        </Card>
      </Columns.Column>
    </Columns>
    // <Section>
    //   <Box>
    //     <Tile kind="ancestor">
    //       <Tile size={8} vertical>
    //         <Tile>
    //           <Tile kind="parent" vertical>
    //             <Tile kind="child" renderAs={Notification} color="primary">
    //               <Heading>Vertical...</Heading>
    //               <Heading subtitle>Top tile</Heading>
    //             </Tile>
    //             <Tile kind="child" renderAs={Notification} color="warning">
    //               <Heading>Tiles...</Heading>
    //               <Heading subtitle>Bottom Tile...</Heading>
    //             </Tile>
    //           </Tile>
    //           <Tile kind="parent">
    //             <Tile kind="child" renderAs={Notification} color="info">
    //               <Heading>Middle Tile...</Heading>
    //               <Heading subtitle>With image Tile...</Heading>
    //               {/* <Image
    //                 size="4by3"
    //                 src="http://bulma.io/images/placeholders/640x480.png"
    //               /> */}
    //             </Tile>
    //           </Tile>
    //         </Tile>
    //         <Tile kind="parent">
    //           <Tile kind="child" renderAs={Notification} color="danger">
    //             <Heading>Wide tile</Heading>
    //             <Heading subtitle>Aligned with the right tile</Heading>
    //             <div className="content" />
    //           </Tile>
    //         </Tile>
    //       </Tile>
    //       <Tile kind="parent">
    //         <Tile kind="child" renderAs={Notification} color="success">
    //           <div className="content">
    //             <Heading>Tall tile</Heading>
    //             <Heading subtitle>With even more content</Heading>
    //             <div className="content" />
    //           </div>
    //         </Tile>
    //       </Tile>
    //     </Tile>
    //   </Box>
    // </Section>
  )
}
