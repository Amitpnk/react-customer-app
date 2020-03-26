import React, { useState } from "react";

function HookState(props) {
    const [counter, setCounter] = useState(0);

    return (<div>
        <b>Counter with useState hook</b> <br /> <br />
        <>Counter value : {counter}</> <br /> <br />
        <button onClick={() => setCounter(counter + 1)} >+</button>
        <button onClick={() => setCounter(counter - 1)} >-</button>

    </div>);

}

export default HookState;