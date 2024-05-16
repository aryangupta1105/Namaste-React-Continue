import { CURR_YEAR } from "../utils/Constants";

const Footer = () => {
    return (
      <footer className="footer">
        <hr></hr>
        <p className="footer-content">
          Copyright &copy; {CURR_YEAR}, Made with 💗 by <strong>Aryan</strong>
        </p>
      </footer>
    );
  };

export default Footer;