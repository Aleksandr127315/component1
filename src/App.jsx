import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'

// export function App() {
//   const [count, setCount] = useState(0)
//   const date = new Date().getFullYear()
//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//       <footer>
//         {date} год
//       </footer>
//     </>
//   )
// }
export function App(){
    const [count,setCount] = useState(0);
    const date = new Date().getFullYear()
      return React.createElement(
      "div",
      null,
      React.createElement(
        "a",
        { href: "https://vite.dev", target: "_blank" },
        React.createElement("img", { src: viteLogo, className: "logo", alt: "Vite logo" })
      ),
      React.createElement(
        "a",
        { href: "https://react.dev", target: "_blank" },
        React.createElement("img", { src: reactLogo, className: "logo react", alt: "React logo" })
      ),
      React.createElement("h1", null, "Vite + React"),
      React.createElement(
        "div",
        { className: "card" },
        React.createElement(
          "button",
          { onClick: () => setCount((count) => count + 1) },
          `count is ${count}`
        ),
        React.createElement(
          "p",
          null,
          "Edit ",
          React.createElement("code", null, "src/App.jsx"),
          " and save to test HMR"
        )
      ),
      React.createElement(
        "p",
        { className: "read-the-docs" },
        "Click on the Vite and React logos to learn more"
      ),
      React.createElement("footer", null, `${date} год.`)
    );

}
