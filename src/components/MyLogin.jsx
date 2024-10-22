// rafce
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';

import style from './MyLogin.module.css'

const MyLogin = () => {
  return (
    // <div>
    //     <h3>MyLogin</h3>
    // </div>
    <div className={style.caixaLogin}>
    <Container>
        <Form>
            <div className={style.iconForm}>
        <span className={`material-symbols-outlined ${style.formIcon}`}>
        tv_signin
        </span>
            </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control size='lg' type="email" placeholder="Digite o seu email" />
        <Form.Text className="text-muted">
          Nós não vamos compatilhar seu email com ninguém.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control size='lg' type="password" placeholder="Digite a sua senha" />
        <Form.Text className="text-muted">
          Nós não vamos compatilhar sua senha de 200 caracteres com ninguém.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Manter conectado" />
      </Form.Group>
      <Button variant="info" type="submit">
        Login
      </Button>
    </Form>
    </Container>
    </div>
  )
}

export default MyLogin