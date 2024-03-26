import CardComponent from "./components/CardComponent";
import { useState, useEffect } from "react";
import { api } from "./api";
//! import before useing it

function App() {
  // ? forme du cake
  const [data, setData] = useState([]);
  // const [counter,setCounter] = useState(0);
  
  useEffect(() => {
    // ? prepare les ingredients pour le cake
    fetch(`${api}/users`)
      .then((res) => res.json())
      // ? insert les ingredientes dans la forme du cake
      .then((data) => setData(data));
  }, []);
  console.log(data);
  // ? cake
  return (
    <>   
      <div className="grid">
        {data.map((item) => (
          <div className="cell" key={item.id}>
            <CardComponent
              name={item.name}
              email={item.email}
              password={item.password}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
