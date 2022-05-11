import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    //const value = event.target.value;
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  //const maxLen = (value) => value.length <= 10;
  const maxLen = (value) => !value.includes("@");
  const name = useInput("Mr. ", maxLen);
  return (
    <div className="App">
      <h1>Hello </h1>
      {/*<input placeholder="Name" value={name.value} onChange={name.onChange} />*/}
      <input placeholder="Name" {...name} />
    </div>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
