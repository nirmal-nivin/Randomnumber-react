import { useState } from "react";

function App() {
  var [randomNumber,setRandomNumber] = useState(0)

    var generatedRandomNumber = () => {
        var newRandomNumber = Math.floor(Math.random()*10)+1
        setRandomNumber(newRandomNumber);
    };

    return(
        <div>
            <h1>{randomNumber}</h1>
            <button onClick={generatedRandomNumber}>Random Number</button>
        </div>
    )
}

export default App;
