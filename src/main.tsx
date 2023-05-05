import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { DiasSelecionadosProvider } from "./contexts/DiasSelecionados.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <DiasSelecionadosProvider>
    <App />
  </DiasSelecionadosProvider>
  // </React.StrictMode>
);
