import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
    //console.log("parent Constructor");
  }

  componentDidMount() {
    //console.log("parent Component Did Mount");
  }

  render() {
    //console.log("parent Render");
    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          loggedInUser
          <UserContext.Consumer>
            {({loggedInUser}) => <h1 className="text-xl font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <h2>This is namaste React Web series</h2>
        <UserClass name={"First"} Location={"karnataka class"} />
      </div>
    );
  }
}

export default About;
