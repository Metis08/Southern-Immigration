import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"  // agar tailwind ya css file hai toh import karna

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
