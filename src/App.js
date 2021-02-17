import logo from './logo.svg';
import React,{useRef, useEffect} from "react";
import './App.css';

const {tableau} = window;

function App() {
  const ref = useRef(null);
  const url = "https://public.tableau.com/views/MovieData_32/Hierarchies1?:language=en&:display_count=y&:origin=viz_share_link";
  
  const option = {
    device: "desktop",
  }

  function initViz() {
    new tableau.Viz(ref.current, url, option);
  }

  
  useEffect(()=> {
    initViz();
  }, [])


  return (
    <div className="App">
      <header className="App-header">
       <p>This is tableau </p>
        <div ref={ref}>
        </div>
      </header>
    </div>
  );
}

export default App;
