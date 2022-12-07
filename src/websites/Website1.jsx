import React from "react";
import as from "../assets/images/as.jpg";
import like from "../assets/icons/thumbs-up-solid.svg";
import comment from "../assets/icons/comment-solid.svg";
import github from "../assets/icons/square-github.svg";
import { useState } from "react";

function Website1({ commentIsOpen }) {
  const [likes, setLikes] = useState(3);
  const [likeIsDisabled, setLikeIsDisabled] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
    setLikeIsDisabled(true);
  };

  const handleComment = () => {
    commentIsOpen(true);
  };

  return (
    <>
      <div className="grid_block">
        <div className="">
          <img src={as} alt="sport page" />
        </div>
        <div className="div">
          <h1 className="section">Sports News Site</h1>
          <h3 className="section2">Lorem</h3>
        </div>
        <div className="container-media">
          <div className="">
            <button
              onClick={handleLike}
              disabled={likeIsDisabled}
              className="container-flex noBtn"
            >
              <img
                src={like}
                className={likeIsDisabled ? "icon icon-disabled" : "icon"}
                alt=""
              />
              <h3 className="icon_text">{likes}</h3>
            </button>
          </div>
          <div className="">
            <div className="container-flex relative">
              <img
                onClick={handleComment}
                src={comment}
                className="icon"
                alt=""
              />
              <h3 className="icon_text">4</h3>
            </div>
          </div>
          <div className="">
            <a href="https://youtube.com/" target="_blank" rel="noreferrer">
              <div className="container-flex">
                <img src={github} className="icon" alt="" />
                <p className="icon_text">View Code</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Website1;
