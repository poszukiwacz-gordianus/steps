import { useState } from "react";
import Button from "./button";
import StepMessage from "./step-message";
import Step from "./step.js";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
  "Loose everything 😥",
  "Get up 🚀",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevius() {
    step > 1 && setStep((s) => s - 1);
  }

  function handleNext() {
    step < messages.length + 1 && setStep((s) => s + 1);
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            {messages.map((message, i) => (
              <Step step={step} key={message}>
                {i + 1}
              </Step>
            ))}
          </div>

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            <Button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevius}
            >
              <span>👈</span>Previus
            </Button>
            <Button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next <span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
