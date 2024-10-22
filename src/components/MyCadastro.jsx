// rafce
import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import style from './MyCadastro.module.css'

const MyCadastro = () => {
  return (
    // <div>
    //     <h3>MyCadastro</h3>
    // </div>
    <div className={style.caixaLogin}>
        <>
      <FloatingLabel
        controlId="floatingInput"
        label="Nome"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Email">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </>
        <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Confirmar senha</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Endereço</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>CEP</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Estado</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Selecione...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Cidade</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Li e aceito termo" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Cadastrar
      </Button>
    </Form>
    </div>
  )
}

export default MyCadastro