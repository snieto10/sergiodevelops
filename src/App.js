import Left from "./layout/Left";
import Center from "./layout/Center";
import Right from "./layout/Right";
import "./normalize.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="grid">
        <Left />
        <Center />
        <Right />
      </div>
    </>
  );
}

export default App;
