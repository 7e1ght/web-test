import React, { useState } from "react";
import {Link, Route, Routes} from "react-router-dom";
import JOP from "./JOP";

var counter = 0;
var names = ["Влад", "Ваня", "Юля", "Гарик", "Мотя"]


function App() {
   const [c, setC] = useState()
   function count() { 
      counter++;
      counter = counter % names.length;
      setC(counter);
   }

   return (
      <>
         <Link to="/JOP" onClick={count}>Click me</Link>
         <Routes>
            <Route path="/JOP" element={<JOP name={names[c]}/>}/>
         </Routes>
      </>
   );
}

export default App;
