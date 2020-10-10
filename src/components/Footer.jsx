import React from 'react'
import "./Footer.css"
function Footer() {
  return (
    <footer>
      <h2>Interested in hiring me?</h2>
      <span>
        Send me an email at:
        <b>
          <a href="mailto:camilopinedadev@gmail.com" className="mailLink">
            camilopinedadev@gmail.com
          </a>
        </b>
        or go to <a href="/contact">Contact</a> page
      </span>
    </footer>
  );
}

export default Footer
