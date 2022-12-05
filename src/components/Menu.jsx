import userEvent from "@testing-library/user-event";
import home from "../assets/icons/home.svg";
import user from "../assets/icons/user.svg";
import phone from "../assets/icons/phone.svg";
import aboutme from "../assets/icons/aboutme.svg";

function Menu() {
  return (
    <>
      <div className="container-flexStart menu_box">
        <div className="container-flex menu_icon">
          <img src={home} alt="home logo" />
        </div>
        <div className="container-flex menu_text">
          <h3 className="menu_h3">HOME</h3>
        </div>
      </div>
      <div className="container-flexStart menu_box">
        <div className="container-flex menu_icon">
          <img src={user} alt="skills" />
        </div>
        <div className="container-flex menu_text">
          <h3 className="menu_h3">SKILLS</h3>
        </div>
      </div>
      <div className="container-flexStart menu_box">
        <div className="container-flex menu_icon">
          <img src={aboutme} alt="home logo" />
        </div>
        <div className="container-flex menu_text">
          <h3 className="menu_h3">ABOUT ME</h3>
        </div>
      </div>
      <div className="container-flexStart menu_box">
        <div className="container-flex menu_icon">
          <img src={phone} alt="contact" />
        </div>
        <div className="container-flex menu_text">
          <h3 className="menu_h3">CONTACT</h3>
        </div>
      </div>
    </>
  );
}

export default Menu;
