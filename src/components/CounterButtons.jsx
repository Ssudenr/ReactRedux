
import { useDispatch } from 'react-redux'
import { increment, reset, addMore } from '../store/counter/counterSlice'

function CounterButtons() {
    const dispatch=useDispatch()
    return (
        <>
            <button onClick={() => dispatch(increment())}>Sayaç Artır</button>
            <br />
            <button onClick={() => dispatch(reset())}>Sayaç resetle</button>
            <br />
            <button onClick={() => dispatch(addMore({ item: 22, data: 10 }))}>Sayaç ekle(22-10)</button>
        </>
    )
}

export default CounterButtons