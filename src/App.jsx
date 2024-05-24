import "./App.css";
import r2wc from "@r2wc/react-to-web-component"
import PropTypes from 'prop-types'; 

const Greeting = ({name}) => {
  return <h1>Hello, {name}!</h1>
}

const WebGreeting = r2wc(Greeting, {
  props: {
    name: "string",
  },
})

customElements.define("web-greeting", WebGreeting)

function App() {
  return <></>;
}

export default App;

Greeting.propTypes = {
  name: PropTypes.string,
}