import React from "react";
import Navbar from "./components/navbar";
import Login from "./components/login";
function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

function Dashboard() {

  return(
    <div>
      <Login />
    </div>

  );

}

export default App;
