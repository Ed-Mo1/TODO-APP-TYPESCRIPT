import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Theme from "./context/Theme.tsx";
import Tasks from "./context/Tasks.tsx";
import InpRule from "./context/InpRule.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Theme>
    <Tasks>
      <InpRule>
        <App />
      </InpRule>
    </Tasks>
  </Theme>
);
