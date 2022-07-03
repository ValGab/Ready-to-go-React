import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  let response = false;

  if (switch1 && switch2 && switch3) {
    response = true;
  }
  return (
    <div className="App">
      <Header />
      <main>
        <div className="buttons">
          <Button switch={switch1} setSwitch={setSwitch1} />
          <Button switch={switch2} setSwitch={setSwitch2} />
          <Button switch={switch3} setSwitch={setSwitch3} />
        </div>
        {response ? (
          <div className="status status-ok">
            <p>Go !</p>
          </div>
        ) : (
          <div className="status">
            <p>No way !</p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
