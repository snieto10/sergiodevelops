import ProfilePicture from "../components/ProfilePicture";
import Menu from "../components/Menu";

function Left() {
  return (
    <>
      <div className="grid_left">
        <ProfilePicture />
        <Menu />
      </div>
    </>
  );
}

export default Left;
