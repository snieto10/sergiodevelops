import home from "../assets/icons/home.svg";
import user from "../assets/icons/user.svg";
import phone from "../assets/icons/phone.svg";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <div className="container-flexStart menu_box">
        <Link to="/">
          <div className="menu_button container-flex">
            <div className="container-flex menu_icon">
              <img className="icon_size" src={home} alt="home logo" />
            </div>
            <div className="container-flex menu_text">
              <h3 className="menu_h3">HOME</h3>
            </div>
          </div>
        </Link>
      </div>
      <div className="container-flexStart menu_box">
        <Link to="/skills">
          <div className="menu_button container-flex">
            <div className="container-flex menu_icon">
              <img src={user} alt="skills" />
            </div>
            <div className="container-flex menu_text">
              <h3 className="menu_h3">SKILLS</h3>
            </div>
          </div>
        </Link>
      </div>
      <div className="container-flexStart menu_box">
        <Link to="/contact">
          <div className="menu_button container-flex">
            <div className="container-flex menu_icon size_phone">
              <img src={phone} alt="contact" />
            </div>
            <div className="container-flex menu_text">
              <h3 className="menu_h3">CONTACT</h3>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Menu;
