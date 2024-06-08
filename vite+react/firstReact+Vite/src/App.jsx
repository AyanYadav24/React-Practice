import { useState } from 'react'




function App() {
 let [counter,setCounter] = useState(7);

 const addValue = () => {
    counter++;
    if(counter <= 20){
    setCounter(counter)
    }
    //instead of above two lines we can use 
    //setCounter(counter+1);
 }

  return (
    <>
      <h1>Counter Value: {counter}</h1>
      <button onClick={addValue}>Add Value {counter}</button>
      <br/>
      <button>Remove value {counter}</button>
    </>
  )
}
export default App
