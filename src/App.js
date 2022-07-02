import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);

  const activatingSwitch1 = () => {
    if (!switch1) {
      setSwitch1(true);
    } else {
      setSwitch1(false);
    }
  };

  const activatingSwitch2 = () => {
    if (!switch2) {
      setSwitch2(true);
    } else {
      setSwitch2(false);
    }
  };

  const activatingSwitch3 = () => {
    if (!switch3) {
      setSwitch3(true);
    } else {
      setSwitch3(false);
    }
  };

  let response = false;

  if (switch1 && switch2 && switch3) {
    response = true;
  }

  return (
    <div className="App">
      <Header />
      <main>
        <div className="buttons">
          <div className="on-off">
            {switch1 === true ? (
              <button className="on active">
                <p>ON</p>
              </button>
            ) : (
              <button onClick={activatingSwitch1} className="off">
                <p>ON</p>
              </button>
            )}
            {switch1 === false ? (
              <button className="off active">
                <p>OFF</p>
              </button>
            ) : (
              <button onClick={activatingSwitch1} className="off">
                <p>OFF</p>
              </button>
            )}
          </div>
          <div className="on-off">
            {switch2 === true ? (
              <button className="on active">
                <p>ON</p>
              </button>
            ) : (
              <button onClick={activatingSwitch2} className="off">
                <p>ON</p>
              </button>
            )}
            {switch2 === false ? (
              <button className="off active">
                <p>OFF</p>
              </button>
            ) : (
              <button onClick={activatingSwitch2} className="off">
                <p>OFF</p>
              </button>
            )}
          </div>
          <div className="on-off">
            {switch3 === true ? (
              <button className="on active">
                <p>ON</p>
              </button>
            ) : (
              <button onClick={activatingSwitch3} className="off">
                <p>ON</p>
              </button>
            )}
            {switch3 === false ? (
              <button className="off active">
                <p>OFF</p>
              </button>
            ) : (
              <button onClick={activatingSwitch3} className="off">
                <p>OFF</p>
              </button>
            )}
          </div>
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
