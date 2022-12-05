import family from "../assets/images/Family.jpg";

function ProfilePicture() {
  return (
    <>
      <h2 className="profile_text">Sergio Nieto</h2>
      <h3 className="profile_text">Front-end Developer</h3>
      <h3 className="profile_text">Miami, Fl</h3>
      <div className="container-flex wrap codes">
        <div className="badge">HTML</div>
        <div className="badge">CSS</div>
        <div className="badge">JAVASCRIPT</div>
        <div className="badge">REACT</div>
        <div className="badge">GITHUB</div>
      </div>
    </>
  );
}

export default ProfilePicture;
