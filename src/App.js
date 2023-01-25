import logo from "./logo.svg";
import "./App.css";
import Cheader from "./Components/Cheader";
import Todolist from "./Components/Todolist";git 
function App() {
  return (
    <>
      <div className="main">
        <Cheader />
        <Todolist />
      </div>
    </>
  );
}

export default App;
