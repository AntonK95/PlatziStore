import React from "react";
import "./footer.css";

function Footer() {
  return (
      <footer>
        <div className="inside__footer--wrapper">
        <section className="ul__left">
        <ul>
            <li className="li__title">Returnera vara:</li>
            <li>Skit på dig 123</li>
            <li>123 45 Borås</li>
            <li></li>
        </ul>
        </section>
        <section className="ul__middle">
        <ul>
            <li className="li__title">Jobba hos oss:</li>
            <li>Snälla??</li>
            <li>Vi är bra, jag lovar.</li>
        </ul>
        </section>
        <section className="ul__right">
        <ul>
            <li className="li__title">Besök oss:</li>
            <li>Helst inte gatan 1</li>
            <li>678 90 Nej</li>
        </ul>
        </section>
        </div>
      </footer>

  )
}

export default Footer;
