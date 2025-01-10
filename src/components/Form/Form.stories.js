// import { fn } from '@storybook/test';
import Form from './Form';

export default {
  title: 'Components/Form',
  component: Form,
};

export const LoginForm = () => <Form type="login" />;
export const ResetPasswordForm = () => <Form type="resetPassword" />;
