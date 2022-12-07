import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Website1 from "../websites/Website1";

function Home({ commentIsOpen }) {
  return (
    <>
      <div className="grid_home">
        <Website1 commentIsOpen={commentIsOpen} />
        <Website1 commentIsOpen={commentIsOpen} />
        <Website1 commentIsOpen={commentIsOpen} />
        <Website1 commentIsOpen={commentIsOpen} />
        <Website1 commentIsOpen={commentIsOpen} />
        <Website1 commentIsOpen={commentIsOpen} />
        <Website1 commentIsOpen={commentIsOpen} />
        <Website1 commentIsOpen={commentIsOpen} />
        <Website1 commentIsOpen={commentIsOpen} />
      </div>
    </>
  );
}

export default Home;
