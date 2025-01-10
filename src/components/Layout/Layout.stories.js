import { Layout } from './Form';

export default {
  title: 'Components/Layout',
  component: Layout,
};

export const DefaultLayout = () => (
  <Layout>
    <h1>Welcome to the Layout</h1>
    <p>This is a child component inside the Layout.</p>
  </Layout>
);