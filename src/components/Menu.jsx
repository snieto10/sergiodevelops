import userEvent from "@testing-library/user-event";
import home from "../assets/icons/home.svg";
import user from "../assets/icons/user.svg";
import phone from "../assets/icons/phone.svg";

function Menu() {
  return (
    <div className="container-flex-menu">
      <div className="menu-box">
        <div className="menu">
          <div className="menu_icon">
            <div className="menu_icon_2">
              <img className="img_icon" src={home} alt="" />
            </div>
          </div>
          <div className="menu_item">
            <div className="menu_item_2">MENU</div>
          </div>
        </div>
        <div className="menu">
          <div className="menu_icon">
            <div className="menu_icon_2">
              {" "}
              <img className="img_icon" src={user} alt="" />
            </div>
          </div>
          <div className="menu_item">ABOUT ME</div>
        </div>
        <div className="menu">
          <div className="menu_icon">
            <div className="menu_icon_2">
              {" "}
              <img className="img_icon" src={phone} alt="" />
            </div>
          </div>
          <div className="menu_item">CONTACT ME</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
