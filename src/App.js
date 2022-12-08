import Left from "./layout/Left";
import Center from "./layout/Center";
import Right from "./layout/Right";
import "./normalize.css";
import "./App.css";
import { useState } from "react";
import Comments from "./components/Comments";

function App() {
  const [open, setOpen] = useState(false);
  const [text1, setText1] = useState(["Great Website", "Love the colors"]);
  const [text2, setText2] = useState(["Great Website", "Love the colors"]);
  const [text3, setText3] = useState(["Great Website", "Love the colors"]);
  const [text4, setText4] = useState(["Great Website", "Love the colors"]);
  const [text5, setText5] = useState(["Great Website", "Love the colors"]);
  const [text6, setText6] = useState(["Great Website", "Love the colors"]);

  const commentIsOpen = (isOpen) => {
    setOpen(isOpen);
  };

  const commentClosed = (isOpen) => {
    setOpen(isOpen);
  };

  const addText = (message) => {
    let text = [message, ...text1];
    setText1(text);
  };

  const deleteText = (message) => {
    let arr = [...text1];
    let result = arr.filter((string) => string !== message);
    setText1(result);
  };

  return (
    <>
      {open && (
        <Comments
          text1={text1}
          commentClosed={commentClosed}
          addText={addText}
          deleteText={deleteText}
        />
      )}
      <div className="grid relative">
        <Left />
        <Center commentIsOpen={commentIsOpen} />
        <Right />
      </div>
    </>
  );
}

export default App;
