// rafce
import React from 'react'
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

const MyAlert = () => {
    const [show, setShow] = useState(true);
    
  return (
    // <div>
    //     <h3>MyAlert</h3>
    // </div>
    <div>
    <Alert variant="primary">
          Alerta na tela
    </Alert>
    <Alert variant="secondary">
          Alerta na tela
    </Alert>
    <Alert variant="success">
          Alerta na tela
    </Alert>
    <Alert variant="danger">
          Alerta na tela
    </Alert>
    <Alert variant="warning">
          Alerta na tela
    </Alert>
    <Alert variant="info">
          Alerta na tela
    </Alert>
    <Alert variant="light">
          Alerta na tela
    </Alert>
    <Alert variant="dark">
          Alerta na tela
    </Alert>
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>My Alert</Alert.Heading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Fechar alerta
          </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)}>Mostrar Alerta</Button>}
    </>
    </div>
  )
}

export default MyAlert