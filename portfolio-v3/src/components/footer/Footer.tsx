import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>Copyright &copy; {new Date().getFullYear()} Ashley Thorlin</p>
    </footer>
  );
}

export default Footer;
