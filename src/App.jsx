import { useDispatch, useSelector } from "react-redux"
import CounterButtons from "./components/CounterButtons";
import ShowReduxStoreInfo from "./SowReduxStoreInfo";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";


function App() {
  const value=useSelector(store=>store.counter.value)
  console.log(value);
  const dispatch=useDispatch()

  return (
    <>
      <h2>App</h2>
      <hr />
      <AddTodo/>
      <hr />
      <Todos/>
      <hr />
      <h2>Sayaç: {value}</h2>
      <CounterButtons/>
      <ShowReduxStoreInfo/>
    </>
  )
}

export default App
