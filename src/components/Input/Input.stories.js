import { Input } from './Form';

export default {
  title: 'Components/Input',
  component: Input,
};

export const TextInput = () => (
  <Input
    id="username"
    type="text"
    name="username"
    placeholder="Enter your username"
    labelValue="Username"
  />
);

export const PasswordInput = () => (
  <Input
    id="password"
    type="password"
    name="password"
    placeholder="Enter your password"
    labelValue="Password"
  />
);

export const PasswordInputWithError = () => (
  <Input
    id="password-error"
    type="password"
    name="password"
    placeholder="Enter your password"
    labelValue="Password"
    error={true}
  />
);
