import React, { useCallback, useRef } from 'react';
import { Container, Content, Backgroud } from './styles';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';
import Input from '../../components/input';
import { FormHandles } from '@unform/core';
import Button from '../../components/button';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';

const SignUp: React.FC = () => {

    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: object) => {

        try {
            formRef.current?.setErrors({});
            
            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório.'),
                email: Yup.string().required('E-mail obrigatório.').email('Digite um e-mail válido.'),
                password: Yup.string().min(6, 'No mínimo 6 dígitos.')
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
            <Backgroud />
            <Content>
                <img src={logoImg} alt="GoBarber" />
                <Form ref={formRef} onSubmit={handleSubmit}>
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