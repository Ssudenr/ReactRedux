import { useSelector } from "react-redux";
import CounterButtons from "./components/CounterButtons";

export default function ShowReduxStoreInfo()
{
    const deger=useSelector(store=>store.counter.value)

    return <>
     <h1>Başka Bir Komponent</h1>
     <h3>Counter: {deger}</h3>
     <CounterButtons/>
    </>
}