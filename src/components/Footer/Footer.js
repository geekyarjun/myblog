import React from 'react';
import { Link } from 'react-router-dom'


const Footer = () => (
  <footer className="footer">
    <div className="footer__social-media-links">
      <Link to="https://www.google.com" className="fa fa-facebook"></Link>
      <Link to="https://www.google.com" className="fa fa-twitter"></Link>
      <Link to="https://www.google.com" className="fa fa-google"></Link>
      <Link to="https://www.google.com" className="fa fa-linkedin"></Link>
      <Link to="https://www.google.com" className="fa fa-youtube"></Link>
      <Link to="https://www.google.com" className="fa fa-instagram"></Link>
    </div>
    <div className="footer__copyrght-information">
      Copyright &copy; geekyArjun
      </div>
  </footer>
)

export default Footer;