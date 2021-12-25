import "./styles.css";

function App() {

  const arr = ["Android", "Blackberry", "iPhone","windows phone"];
  const arr1 = ["Samsung", "HTC", "micromax","Apple"];

  return (
    <div className="App">
      <h1>Mobile Operating system</h1>
     
      {arr.map( (e) => (
        <Todos num={e}/>
        ))}

        <h1>Mobile manufacturers</h1>

      {arr1.map( (e) => (
        <Todos num={e}/>
        ))}

  </div>
  );
}

function Todos({num}) {
  return <li>{num}</li>
}

export default App;

