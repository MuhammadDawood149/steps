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
      <StepMessage step={1}>
        <p>this is the first message</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>this is the second message</p>
      </StepMessage>
      <StepMessage step={3}>
        <p>this is the third message</p>
      </StepMessage>
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
            <StepMessage step={step}>
              {messages[step - 1]}
              <div className="buttons">
                <Button
                  textColor={"#F5F5DC"}
                  bgColor={"black"}
                  onClick={() => alert(`lear how to ${messages[step - 1]}`)}
                >
                  Learn How
                </Button>
              </div>
            </StepMessage>
            <div className="buttons">
              <Button onClick={previous} textColor="#fff" bgColor="#7950f2">
                <span>👈</span> Previous
              </Button>
              <Button onClick={next} textColor="#fff" bgColor="#7950f2">
                Next <span>👉</span>
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {/* {messages[step - 1]} */}
      {children}
    </div>
  );
}
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: bgColor, color: textColor }}
    >
      {children}
    </button>
  );
}
