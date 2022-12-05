import ProfilePicture from "../components/ProfilePicture";
import ProfileText from "../components/ProfileText";
import Menu from "../components/Menu";

function Left() {
  return (
    <>
      <div className="grid_left">
        <ProfilePicture />
        <ProfileText />
        <Menu />
      </div>
    </>
  );
}

export default Left;
