import family from "../assets/images/Family.jpg";

function ProfilePicture() {
  return (
    <div className="container-flex">
      <img className="img-profile" src={family} alt="family picture" />
    </div>
  );
}

export default ProfilePicture;
