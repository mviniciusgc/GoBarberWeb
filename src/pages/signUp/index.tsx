import React from 'react';
import { Container, Content, Backgroud } from './styles';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import Input from '../../components/input';
import Button from '../../components/button';
import { Form } from '@unform/web';

const SignUp: React.FC = () => {

    function handleSubmit(data: object): void {
        console.log(data);
    }
    return (
        <Container>
            <Backgroud />
            <Content>
                <img src={logoImg} alt="GoBarber" />
                <Form onSubmit={handleSubmit}>
                    <h1>Faça seu cadastro</h1>
                    <Input icon={FiUser} name="name" placeholder="Nome" />
                    <Input icon={FiMail} name="email" placeholder="E-mail" />
                    <Input icon={FiLock} name="password" placeholder="Senha" type="password" />
                    <Button type="submit">Cadastrar</Button>
                </Form>
                <a href="login">
                    <FiArrowLeft />
                    Voltar para logon
                </a>
            </Content>
        </Container>
    )
}

export default SignUp;