import "./App.css";
import Counter from "./Components/Counter";
import { countMore, countLess } from "./store/module/counter/action";
function App() {
  return (
    <div className="App">
      <Counter></Counter>
    </div>
  );
}

export default App;
