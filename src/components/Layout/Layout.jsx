import './Layout.css';

export function Layout({ children }) {
  return (
    <>
    <main>{children}</main>
    </>
  );
}

import PropTypes from 'prop-types';

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};