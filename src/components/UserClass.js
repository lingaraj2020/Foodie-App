import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    //console.log(this.props.name + " child Constructor");
  }

  async componentDidMount() {
    //console.log(this.props.name + " child Component Did Mount");
    const data = await fetch("https://api.github.com/users/lingaraj2020");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    //console.log(json);
  }
  componentDidUpdate() {
    //console.log("component Did Update");
  }
  componentWillUnmount(){
    //console.log(" Componentwillunmount");
  }

  render() {
    //console.log(this.props.name + " child Render");
    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2 className="font-bold">Name:{name}</h2>
        <h3>Location:{location}</h3>
        <a target="blank" href="https://github.com/lingaraj2020">Github profile</a>
      </div>
    );
  }
}

export default UserClass;
