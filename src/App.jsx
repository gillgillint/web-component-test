import "./App.css";


import r2wc from "react-to-webcomponent";
import PropTypes from 'prop-types';

const HelloApp = ({ name }) => {
  return <h1>Hello, {name}!</h1>
}

const WebGreeting = r2wc(HelloApp,{
  props:{name:'string'}
});

customElements.define("web-greeting", WebGreeting);

export default HelloApp


HelloApp.propTypes = {
  name: PropTypes.string
}