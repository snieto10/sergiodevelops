import React from "react";
import close from "../assets/icons/close.svg";
import eraser from "../assets/icons/eraser.svg";
import edit from "../assets/icons/edit.svg";
import { useState } from "react";

function Comments({ commentClosed, text1 }) {
  let [text, setText] = useState("");

  const closeWindows = () => {
    commentClosed(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <div className="absolute">
        <div className="comments-house">
          <div className="closeBox">
            <img onClick={closeWindows} src={close} className="icon" alt="" />
          </div>
          <h2 style={{ marginBottom: "20px" }}>Please Submit your review</h2>
          <form onSubmit={handleSubmit}>
            <div className="input2">
              <div className="inline-block">
                <input
                  type="text"
                  onChange={handleTextChange}
                  placeholder="write a review"
                  value={text}
                />
              </div>
              <div className="inline-block">
                <button type="submit" className="form_btn">
                  SUBMIT
                </button>
              </div>
            </div>
          </form>
          {text1.map((text) => (
            <div
              key={Math.random() * Math.random()}
              className="container-flex comment-text"
            >
              <div>{text}</div>
              <div>
                <img src={edit} className="icon" alt="" />
                <img src={close} className="icon icon2" alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Comments;
