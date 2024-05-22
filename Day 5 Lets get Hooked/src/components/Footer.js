import { CURR_YEAR } from "../utils/Constants";

const Footer = () => {
    return (
      <footer className="footer w-full max-w-[1440px] mx-auto text-center">
        <hr></hr>
        <p className="footer-content">
          Copyright &copy; {CURR_YEAR}, Made with 💗 by <strong>Aryan</strong>
        </p>
      </footer>
    );
  };

export default Footer;