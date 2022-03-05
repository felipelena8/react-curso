import logo from './logo.svg';
import './App.css';
import ItemsCount from "./componentes/ItemsCount";
import "./scss/itemCount.scss";

function App() {
  return <ItemsCount initial={1} stock={10}></ItemsCount>;
}

export default App;
