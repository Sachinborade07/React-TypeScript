// Event handling with react typescript
import { useState } from "react";

interface Istate {
    counter: number;
}

const Counter = () => {
    let [state, setState] = useState<Istate>({ counter: 0 });

    const handleIncrement = (): void => {
        setState({ counter: state.counter + 1 });
    }

    const handleDecrement = (): void => {
        setState({ counter: state.counter - 1 });
    }

    const reset = (): void => {
        setState({ counter: 0 });
    }

    return (
        <>
            <h1>This is the counter Application</h1>
            <h2>{state.counter}</h2>
            <button onClick={handleIncrement} > Increment </button>
            <button onClick={handleDecrement}> Decrement </button>
            <button onClick={reset}> RESET</button>
        </>
    )
}

export default Counter; 