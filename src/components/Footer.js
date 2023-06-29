import "./footerstyle.css";
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Flags, { GB } from 'country-flag-icons/react/3x2';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';


// function changeLang(code) {
//   i18next.changeLanguage(code);
// }


const Footer = () => {
  // const languages = [
  //   {
  //     code: 'en',
  //     name: 'English',
  //     country_code: 'GB',
  //     Flag: GB,
  //   },
  //   {
  //     code: 'ar',
  //     name: 'العربية',
  //     country_code: 'SA',
  //     dir: 'rtl',
  //     Flag: Flags.SA,
  //   }
  // ];
  // const { t } = useTranslation();
  // useEffect(() => {
  //   document.title = t('home.hero.appTitle');
  // }, [t]);
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Mosul Guide</h1>
          <p> choose your favourite trip.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div className="bottom">
        <div>
          <h4>help</h4>
          <a href="/">support</a>
          <a href="/">trippleshoting</a>
          <a href="/">contact us</a>
        </div>
        <div>
          <h4>fast look</h4>
          <a href="/">team of service</a>
          <a href="/">privecy policy</a>
          <a href="/">license</a>
        </div>
        <div>
          <h4>other</h4>
          <a href="/">team of service</a>
          <a href="/">privecy policy</a>
          <a href="/">license</a>
        </div>
      {/* <form>
        <select
          id="mySelect"
          className=""
          onChange={(e) => {
            sessionStorage.setItem('selectedOption', e.target.value);
            return changeLang(e.target.value);
          }}
        >
          {languages.map(({ code, name, country_code }) => (
            <option value={code} key={country_code}>
              {name}
            </option>
          ))}
        </select>
      </form> */}
      </div>
    </div>
  );
};
export default Footer;
