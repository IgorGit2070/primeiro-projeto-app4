// rafce
import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyCards = () => {
  return (
    // <div>
    //     <h3>MyCards</h3>
    // </div>
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.rVuhhUsT55eDa3wAME-oCgHaHa?rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title>Yaksoba</Card.Title>
        <Card.Text>
        500 g de macarrão para yakisoba, (yakissoba)
2 colheres de sopa de goma abura (óleo de gergelim torrado)
4 shiitake (cogumelo) frescos, cortados em tiras finas, (opcional)
300 g de carne de porco cortada em tiras
150 g de moyashi (broto de feijão)
1 cenoura em tiras
2 pimentões em tiras
100 g de hana nira (broto de alho)
6 colheres de sopa de óleo comum
1 colher de chá de sal
4 colheres de sopa de shoyu (molho de soja)
pimenta do reino a gosto
4 colheres de sopa de molho inglês
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.rVuhhUsT55eDa3wAME-oCgHaHa?rs=1&pid=ImgDetMain" />
      <Card.Body>
        <Card.Title>Pizza</Card.Title>
        <Card.Text>
        500 g de macarrão para yakisoba, (yakissoba)
2 colheres de sopa de goma abura (óleo de gergelim torrado)
4 shiitake (cogumelo) frescos, cortados em tiras finas, (opcional)
300 g de carne de porco cortada em tiras
150 g de moyashi (broto de feijão)
1 cenoura em tiras
2 pimentões em tiras
100 g de hana nira (broto de alho)
6 colheres de sopa de óleo comum
1 colher de chá de sal
4 colheres de sopa de shoyu (molho de soja)
pimenta do reino a gosto
4 colheres de sopa de molho inglês
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default MyCards