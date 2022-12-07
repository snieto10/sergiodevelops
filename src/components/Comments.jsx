import React from "react";

function Comments({ commentClosed }) {
  const closeWindows = () => {
    commentClosed(false);
  };

  return (
    <>
      <div className="absolute">
        <div className="comments-house">
          <div className="input2">
            <div className="inline-block">
              <input type="text" />
            </div>
            <div className="inline-block">
              <button className="form_btn">SUBMIT</button>
            </div>
          </div>
          <div>comment1</div>
          <div>comment1</div>
          <div>comment1</div>
          <div>comment1</div>
        </div>
      </div>
    </>
  );
}

export default Comments;
