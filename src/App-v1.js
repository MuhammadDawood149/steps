import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  return (
    <div>
      <Step />
    </div>
  );
}

function Step() {
  const [step, setStep] = useState(1);
  const [close, setClose] = useState(true);
  function previous() {
    if (step > 1) setStep((s) => s - 1);
  }
  function next() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }
  function handleClose() {
    setClose((c) => !c);
  }

  return (
    <div>
      <button onClick={handleClose} className="close">
        &times;
      </button>
      <div>
        {close && (
          <div className="steps">
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step === 3 ? "active" : ""}>3</div>
            </div>
            <p className="message">
              Step {step}:{messages[step - 1]}
            </p>
            <div className="buttons">
              <button
                onClick={previous}
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
              >
                previous
              </button>
              <button
                onClick={next}
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
              >
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
