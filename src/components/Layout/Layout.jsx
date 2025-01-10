import './Layout.css';

export function Layout({ children }) {
  return (
    <>
    <div className='svg-container' >
      <div className='svg-content' >
        <svg width="1233" height="1233" viewBox="0 0 1233 1233" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="616.5" cy="616.5" r="614.5" stroke="white" strokeWidth="4"/>
        <circle cx="616.5" cy="616.5" r="586.5" stroke="white" strokeWidth="4"/>
        <circle cx="616.5" cy="616.5" r="557.5" stroke="white" strokeWidth="4"/>
        <circle cx="612.5" cy="616.5" r="530.5" stroke="white" strokeWidth="4"/>
        <circle cx="612.315" cy="616.5" r="506.315" stroke="white" strokeWidth="4"/>
        <circle cx="612.266" cy="616.5" r="481.266" stroke="white" strokeWidth="4"/>
        <circle cx="612.5" cy="616.5" r="460.5" stroke="white" strokeWidth="4"/>
        <circle cx="612.5" cy="616.5" r="439.494" stroke="white" strokeWidth="4"/>
        <circle cx="612.5" cy="616.5" r="417.738" stroke="white" strokeWidth="4"/>
        <circle cx="609.499" cy="616.5" r="397.483" stroke="white" strokeWidth="4"/>
        <circle cx="609.36" cy="616.5" r="379.339" stroke="white" strokeWidth="4"/>
        <circle cx="609.324" cy="616.5" r="360.548" stroke="white" strokeWidth="4"/>
      </svg>
    </div>
    </div>
    <main>{children}</main>
    </>
  );
}

import PropTypes from 'prop-types';

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};