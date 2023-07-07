import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    console.log("parent Constructor");
  }

  componentDidMount() {
    console.log("parent Component Did Mount");
  }


  render() {
    console.log("parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <h2>This is namaste React Web series</h2>
        <UserClass name={"First"} Location={"karnataka class"} />
      </div>
    );
  }
}

export default About;
