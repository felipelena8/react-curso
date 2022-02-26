import logo from "./logo.svg";
import "./App.css";
import "./css/style.css";
import NavBar from "./componentes/NavBar";
function App() {
  // let condition = true
  // let result = null
  // if (condition) {
  //     result = 'verdadero'
  // } else {
  //     result = 'falso'
  // }
  // console.log(`El resultado es: ${condition ? 'verdadero': 'falso'}`)

  // spread operator
  // const array = ['b', 'c', 'd']
  // let a = 'a'
  // const newArray = [a, ...array]
  // console.log(newArray);

  // campos dinamicos
  // let nombre = 'fede'
  // const obj = {
  //     'dni': 1231245,
  //     ['id_' + nombre]: 1234567
  // }
  // console.log(obj);

  // destructuring
  // const obj = {
  //     nombre: 'fede',
  //     apellido: 'Osandon'
  // }
  // const { nombre: nom, apellido:ape} = obj
  // console.log(nom, ape);

  // asignacion en desestructuracion
  //   const obj = {
  //     nombre: 'fede',
  //     apellido: 'Osandon'
  // }
  // const { nombre: nom, apellido, edad = 15 } = obj
  //   console.log(edad);

  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;
