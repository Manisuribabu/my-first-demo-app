import React from "react";
import ChildrenComponent from "./ChildrenComponent";
import FooterComponent from "./FooterComponent";
class DemoComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      color: "green",
      count: 0,
      date: new Date()
    };
    this.handleClick = this.handleClick.bind(this);
    this.handlereset = this.handlereset.bind(this);
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
  }
  handlereset() {
    this.setState({
      count: 0
    });
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <>
        <ChildrenComponent name={this.state.count} />
        <div className="content">
          <button onClick={this.handleClick}>click me</button>
          <button onClick={this.handlereset}>reset</button>
        </div>
        <FooterComponent name={this.state.date.toLocaleTimeString()} />
      </>
    );
  }
}

export default DemoComponent;
