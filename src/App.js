import { useEffect } from 'react';
import './index.css';
function App() {

 useEffect(() => {
  fetch("/Users/sanjeevmidda/Desktop/fetch-json/src/fruits.json")
    .then((response) => {return response})
    .then((data) => {console.log(data)})
 },[])

  return (
    <div className="App">
    
    </div>
  );
}

export default App;
