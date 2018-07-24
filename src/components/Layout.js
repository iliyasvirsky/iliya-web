import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';
import './layout.css';
import background from '../images/background.jpg'

const footerStyle = {
  top: '95%',
  position: 'fixed'
};
const page = {
  backgroundImage: 'url(' + background + ')',
  backgroundSize: 'cover',
  height: '100%',
  minHeight: window.outerHeight+300
}

const Layout = ({ children }) => {
  return (
  <div className="page" style={page}>
    <div className=".flip-scale-up-hor">{children}</div>
    <Divider />
    <footer style={footerStyle} className="footer"><div className="container"><span className="text-muted"><a href='https://www.freepik.com/free-vector/abstract-blurred-gradient-mesh-background_1361469.htm'>Background Designed by Freepik</a></span></div></footer>
  </div>
  );
};

export default Layout;
