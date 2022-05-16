import { StrictMode, useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const App = () => {
  const input = useRef();
  // reference는 기본적으로 우리의 component의 어떤 부분을 선택할 수 있는 방법인데,
  // 모든 컴포넌트는 reference prop을 가지고있음
  //setTimeout(() => console.log(input), 5000);
  setTimeout(() => console.log(input.current.focus()), 5000);
  return (
    <div className="App">
      <div>Gi</div>
      <input ref={input} placeholder="la" />
    </div>
  );
};

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
