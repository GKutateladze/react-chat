import React from 'react';
import "./LoginPage.css";
import Input from "../../atoms/Input/Input";
import { useReactiveForm } from "use-reactive-form";
import { array, object, string } from "yup";
import Button from "../../atoms/Button/Button";
import Checkbox from "../../atoms/Checkbox/Checkbox";
import useReactRouter from 'use-react-router';

const LoginPage = () => {

  const {history} = useReactRouter();

  const fields = {
    login: '',
    agree: ''
  };

  const schema = object().shape({
    login: string().required('Must fill these field!'),
    agree: array().required('You must agree with our term and conditions!')
  });

  const config = {fields, schema};
  const {values, validate, getErrors, ref} = useReactiveForm(config);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validate()) {
      console.log(values());
      history.push('/chat')
    } else {
      console.log(getErrors())
    }
  };

  return (
    <div>
      <form className="login-form" ref={ref}>
        <Input name='login' placeholder='Login' defaultValue={values().login} type='string'/>
        <Checkbox name='agree' placeholder='Agree' defaultValue={values().agree} type='checkbox'/>
        <Button type='submit' label='Sign In' handler={onSubmit} />
      </form>
    </div>
  );
};

export default LoginPage;