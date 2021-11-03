
import React, { Component } from "react";
import axios from "axios";
class ApiComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      edit: true,
      date: new Date().toISOString().substr(0, 10)
    };
    this.handleDate = this.handleDate.bind(this);
  }
  handleDate(e) {
    debugger;
    const value = e.target.value;
    this.setState(this.date);
  }
  // handleInput(name, e) {
  //   debugger;
  //   const value = e.target.value;
  //   const state = this.state;
  //   state[name] = value;
  //   this.setState(Date);
  // }
  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=11")
      .then(response => {
        const res = response.data.results;
        debugger;
        this.setState({ data: res });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const data = this.state.data;
    return (
      <div className="flex-board">
        {data.map(item => {
          return (
            <>
              {!this.state.edit && (
                <div className="bor">
                  <div className="item-c">
                    <strong className="label-c"> name:</strong>
                    <span className="label-d">
                      {item.name.first}
                      {item.name.last}
                    </span>
                  </div>
                  <div className="item-c">
                    <strong className="label-c">sex:</strong>
                    <span className="label-d">{item.gender}</span>
                  </div>
                  <div className="item-c">
                    <strong className="label-c">email:</strong>{" "}
                    <span className="label-d">{item.email}</span>
                  </div>
                  <div>DOB: {item.dob.date}</div>
                  <div>
                    age:
                    {item.dob.age}
                  </div>
                </div>
              )}

              {this.state.edit && (
                <div className="bor">
                  <div className="item-c">
                    <strong className="label-c"> name:</strong>
                    <span className="label-d">
                      {item.name.first}
                      {item.name.last}
                    </span>
                  </div>
                  <div className="item-c">
                    <strong className="label-c">sex:</strong>
                    <span className="label-d">{item.gender}</span>
                  </div>
                  <div className="item-c">
                    <strong className="label-c">email:</strong>{" "}
                    <span className="label-d">{item.email}</span>
                  </div>
                  <div>
                    DOB:{" "}
                    <input
                      type="date"
                      value={new Date(item.dob.date)
                        .toISOString()
                        .substr(0, 10)}
                      onChange={e => this.handleDate(e)}
                    />
                  </div>
                  <div>
                    age:
                    <input type="number" value={item.dob.age} />
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    );
  }
}
export default ApiComponent;
