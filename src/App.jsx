import "./App.css";


import r2wc from "react-to-webcomponent";
import PropTypes from 'prop-types';

const Greeting = ({ name }) => {
  return <h1>Hello, {name}!</h1>
}

const WebGreeting = r2wc(Greeting, {
  props: {
    name: "string",
  },
})

customElements.define("web-greeting", WebGreeting);

export default Greeting


Greeting.propTypes = {
  name: PropTypes.string
}