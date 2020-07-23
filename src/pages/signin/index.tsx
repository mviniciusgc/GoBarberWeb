import React, {useRef, useCallback} from 'react';
import { Container, Content, Backgroud } from './styles';
import { FormHandles } from '@unform/core';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import logoImg from '../../assets/logo.svg';
import Input from '../../components/input';
import Button from '../../components/button';
import getValidationErrors from '../../utils/getValidationErrors';
import * as Yup from 'yup';

const SignIn: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: object) => {

        try {
            formRef.current?.setErrors({});
            
            const schema = Yup.object().shape({
                email: Yup.string().required('E-mail obrigatório.').email('Digite um e-mail válido.'),
                password: Yup.string().required('Senha obrigatória.')
            })

            await schema.validate(data, {
                abortEarly: false,
            });


        } catch (err) {

            const errors = getValidationErrors(err);
            formRef.current?.setErrors(errors);
        }

        console.log(data);
    }, []);

    return (
        <Container>
            <Content>
                <img src={logoImg} alt="GoBarber" />
                <Form  ref={formRef} onSubmit={handleSubmit}>
                    <h1>Faça seu logon</h1>
                    <Input icon={FiMail} name="email" placeholder="E-mail" />
                    <Input icon={FiLock} name="password" placeholder="Senha" type="password" />
                    <Button type="submit">Entrar</Button>

                    <a href="forgot">Esqueci minha senha</a>
                </Form>
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