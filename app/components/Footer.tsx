import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {currentYear} My Name</p> {/* Replace with your name */}
    </footer>
  );
}

export default Footer;