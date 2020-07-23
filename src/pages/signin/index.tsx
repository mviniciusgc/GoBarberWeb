import React from 'react';
import { Container, Content, Backgroud } from './styles';
import logoImg from '../../assets/logo.svg';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import Input from '../../components/input';
import Button from '../../components/button';

const SignIn: React.FC = () => {
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="GoBarber" />
                <form>
                    <h1>Faça seu logon</h1>
                    <Input icon={FiMail} name="email" placeholder="E-mail" />
                    <Input icon={FiLock} name="password" placeholder="Senha" type="password" />
                    <Button type="submit">Entrar</Button>

                    <a href="forgot">Esqueci minha senha</a>
                </form>
                <a href="login">
                    <FiLogIn />
                    Criar conta
                </a>
            </Content>
            <Backgroud />
        </Container>
    )
}

export default SignIn;