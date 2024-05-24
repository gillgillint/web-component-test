import "./App.css";
import r2wc from "@r2wc/react-to-web-component"


const Greeting = () => {
  return <h1>Hello, World!</h1>
}
const WebGreeting = r2wc(Greeting)

customElements.define("web-greeting", WebGreeting)

function App() {
  return <></>;
}

export default App;
