import React from "react";
import close from "../assets/icons/close.svg";
import eraser from "../assets/icons/eraser.svg";
import edit from "../assets/icons/edit.svg";
import { useState } from "react";

function Comments({ commentClosed, text1, addText, deleteText }) {
  const [text, setText] = useState("");
  const [alert, setAlert] = useState("");
  const [btnDisabled, SetBtnDisabled] = useState("");

  const closeWindows = () => {
    commentClosed(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addText(text);

    setText("");
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleDelete = (textt) => {
    deleteText(textt);
  };

  const handleEdit = (textt) => {
    console.log(textt);
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
          {text1.map((textt) => (
            <div
              key={Math.random() * Math.random()}
              className="container-flex comment-text"
            >
              <div>{textt}</div>
              <div>
                <img
                  onClick={() => handleEdit(textt)}
                  src={edit}
                  className="icon"
                  alt=""
                />
                <img
                  onClick={() => handleDelete(textt)}
                  src={close}
                  className="icon icon2"
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Comments;
