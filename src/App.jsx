import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'


export function App(){
    const [count,setCount] = useState(0);
    const date = new Date().getFullYear() //декларативный стиль
      return React.createElement(// можно сказать что вся функция это декларативный стиль
      "div",
      null,
      React.createElement( //декларативный
        "a",
        { href: "https://vite.dev", target: "_blank" },
        React.createElement("img", { src: viteLogo, className: "logo", alt: "Vite logo" })
      ),
      React.createElement(//декларативный
        "a",
        { href: "https://react.dev", target: "_blank" },
        React.createElement("img", { src: reactLogo, className: "logo react", alt: "React logo" })
      ),
      React.createElement("h1", null, "Vite + React"),
      React.createElement(
        "div",
        { className: "card" },
        React.createElement(//предполагаю что императивный,потому что мы сами прописываем логику
          "button",
          { onClick: () => setCount((count) => count + 1) },
          `count is ${count}`
        ),
        React.createElement(//декларативный
          "p",
          null,
          "Edit ",
          React.createElement("code", null, "src/App.jsx"),//декларативный
          " and save to test HMR"
        )
      ),
      React.createElement(//декларативный
        "p",
        { className: "read-the-docs" },
        "Click on the Vite and React logos to learn more"
      ),
      React.createElement("footer", null, `${date} год.`)//декларативный
    );

}
