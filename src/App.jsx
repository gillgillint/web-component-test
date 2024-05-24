import "./App.css";
import Greeting from "./components/Greeting";
import r2wc from "@r2wc/react-to-web-component";

const WebGreeting = r2wc(Greeting, {
  props: {
    name: "string",
  },
});

customElements.define("web-greeting", WebGreeting);

function App() {
  return (
    <>
      <web-greeting name={"222"}></web-greeting>
    </>
  );
}

export default App;

