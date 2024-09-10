import React    from "react";
import template from "./10purecomponent.jsx";

class 10purecomponent extends React.Component {
  render() {
    return template.call(this);
  }
}

export default 10purecomponent;
