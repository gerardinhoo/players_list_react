import React from 'react';
import "./Footer.css"

function Footer() {
  return (
    <div>
      <p className="footer">Copyright @{new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer
