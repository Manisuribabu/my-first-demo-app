import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "./style.css";


class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      date1: new Date().toISOString().substr(0, 10),
      date2: new Date().toISOString().substr(0, 10),
      date3: new Date().toISOString().substr(0, 10),
      date4: new Date().toISOString().substr(0, 10),
      date5: new Date().toISOString().substr(0, 10),
      select1: "selected ",
      select2: "selected ",
      date1Error: false,
      date2Error: false,
      date3error: false,
      date4error: false,
      date5error: false,
      name1: "",
      num1: "",
      pass1: "",
      select1Error: false,
      select2Error: false,
      isRevealPwd: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleRest = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameBlur = this.handleNameBlur.bind(this);
    this.handleNumBlur = this.handleNumBlur.bind(this);
    this.handleNameFocus = this.handleNameFocus.bind(this);
    this.dateSelect = this.dateSelect.bind(this);
    this.optionSelect = this.optionSelect.bind(this);
  }

  handleInput(name, e) {
    const value = e.target.value;
    const state = this.state;
    state[name] = value;
    this.setState(state);
  }
  handleNameBlur(e) {
    const value = e.target.value;
    if (value.length < 8) {
      this.setState({ name1Error: true });
    } else {
      this.setState({ name1Error: false });
    }
  }
  handleNumBlur(e) {
    const value = e.target.value;
    if (this.state.num1.length < 10) {
      this.setState({ num1Error: true });
    } else {
      this.setState({ num1Error: false });
    }
  }
  handlePassBlur(e) {
    const value = e.target.value;
    if (this.state.pass1 === " ") {
      this.setState({ pass1Error: true });
    } else {
      const passw =
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})";
      if (this.state.pass1.match(passw)) {
        this.setState({ pass1Error: false });
      } else {
        this.setState({ pass1Error: true });
      }
    }
  }
  handleNameFocus(e) {
    const value = e.target.value;
    if (value.length < 8) {
      this.setState({ name1Error: true });
    } else {
      this.setState({ name1Error: false });
    }
  }
  dateSelect(e) {
    //const value = e.target.value;
    alert(e.target.value);
  }

  optionSelect(e) {
    alert(e.target.value);
  }

  handleReset() {
    this.setState({
      date1: " ",
      date2: " ",
      date3: " ",
      date4: " ",
      date5: " ",
      name1: " ",
      num1: " ",
      pass1: " ",
      date6: " ",
      select1: "selected",
      select2: "selected",
      date1Error: false,
      date2Error: false,
      date3Error: false,
      date4Error: false,
      date5Error: false,
      name1Error: false,
      num1Error: false,
      pass1Error: false,
      select1Error: false,
      select2Error: false
    });
  }

  handleSubmit() {
    if (this.state.date1 === " ") {
      this.setState({ date1Error: true });
    } else {
      this.setState({ date1Error: false });
    }

    if (this.state.date2 === " ") {
      this.setState({ date2Error: true });
    } else {
      this.setState({ date2Error: false });
    }
    if (this.state.date3 === " ") {
      this.setState({ date3Error: true });
    } else {
      this.setState({ date3Error: false });
    }
    if (this.state.date4 === " ") {
      this.setState({ date4Error: true });
    } else {
      this.setState({ date4Error: false });
    }
    if (this.state.date5 === " ") {
      this.setState({ date5Error: true });
    } else {
      this.setState({ date5Error: false });
    }

    if (this.state.name1.length < 8) {
      this.setState({ name1Error: true });
    } else {
      this.setState({ name1Error: false });
    }
    if (this.state.num1.length < 10) {
      this.setState({ num1Error: true });
    } else {
      this.setState({ num1Error: false });
    }
    if (this.state.pass1 === " ") {
      this.setState({ pass1Error: true });
    } else {
      const passw =
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})";
      if (this.state.pass1.match(passw)) {
        this.setState({ pass1Error: false });
      } else {
        this.setState({ pass1Error: true });
      }
    }
    if (this.state.select1 === "selected") {
      this.setState({ select1Error: true });
    } else {
      this.setState({ select1Error: false });
    }
    if (this.state.select2 === "selected") {
      this.setState({ select2Error: true });
    } else {
      this.setState({ select2Error: false });
    }
  }
  render() {
    return (
      <div>
        <form>
          <div className="flex">
            <lable>report cycle start :</lable>

            <input
              className="test"
              id="test"
              type="date"
              value={this.state.date1}
              onChange={e => this.handleInput("date1", e)}
              //onSelect={e => this.dateSelect(e)}
            />
          </div>
          {this.state.date1Error && (
            <span className="color"> *please enter input</span>
          )}
          <div>
            <div className="space">
              STD :<lable>waiting/benfit period:</lable>
              <select
                className="test"
                name="cars"
                id="cars"
                onChange={e => this.handleInput("select1", e)}
                onSelect={e => this.optionSelect(e)}
              >
                <option
                  selected={this.state.select1 === "selected"}
                  value="selected"
                >
                  select
                </option>
                <option selected={this.state.select1 === "audi"} value="volvo">
                  Volvo
                </option>
                <option selected={this.state.select1 === "valvo"} value="saab">
                  Saab
                </option>
                <option selected={this.state.select1 === "saab"} value="opel">
                  Opel
                </option>
                <option selected={this.state.select1 === "opel"} value="audi">
                  Audi
                </option>
              </select>
            </div>

            {this.state.select1Error && (
              <span className="color1"> *please enter input</span>
            )}
            <div>
              <div className="space">
                <lable>effective period:</lable>
                <input
                  className="test"
                  id="test"
                  type="date"
                  value={this.state.date2}
                  onChange={e => this.handleInput("date2", e)}
                />
              </div>
            </div>
            {this.state.date2Error && (
              <span className="color1"> *please enter input</span>
            )}
            <div>
              <div className="space">
                <lable>cancelation date:</lable>
                <input
                  className="test"
                  id="test"
                  type="date"
                  value={this.state.date3}
                  onChange={e => this.handleInput("date3", e)}
                />
              </div>
            </div>
            {this.state.date3Error && (
              <span className="color1"> *please enter input</span>
            )}
            <div>
              <div className="space">
                LTD :<lable>waiting/benfit period:</lable>
                <select
                  className="test"
                  name="cars"
                  id="cars"
                  onChange={e => this.handleInput("select2", e)}
                >
                  <option
                    selected={this.state.select2 === "selected"}
                    value="selected"
                  >
                    select
                  </option>
                  <option
                    selected={this.state.select2 === "audi"}
                    value="volvo"
                  >
                    Volvo
                  </option>
                  <option selected={this.state.select2 === "audi"} value="saab">
                    Saab
                  </option>
                  <option selected={this.state.select2 === "audi"} value="opel">
                    Opel
                  </option>
                  <option selected={this.state.select2 === "audi"} value="audi">
                    Audi
                  </option>
                </select>
              </div>
              {this.state.select2Error && (
                <span className="color1"> *please enter input</span>
              )}
              <div>
                <div className="space">
                  <lable>effective period:</lable>
                  <input
                    className="test"
                    id="test"
                    type="date"
                    value={this.state.date4}
                    onChange={e => this.handleInput("date4", e)}
                  />
                </div>
                {this.state.date4Error && (
                  <span className="color1"> *please enter input</span>
                )}
                <div>
                  <div className="space">
                    <lable>cancelation date:</lable>
                    <input
                      className="test"
                      id="test"
                      type="date"
                      value={this.state.date5}
                      onChange={e => this.handleInput("date5", e)}
                    />
                  </div>
                  {this.state.date5Error && (
                    <span className="color1"> *please enter input</span>
                  )}
                  <div className="space">
                    <lable>enter a name:</lable>

                    <input
                      className="test test1"
                      name="text"
                      type="search"
                      placeholder="ent name"
                      value={this.state.name1}
                      onChange={e => this.handleInput("name1", e)}
                      onBlur={e => this.handleNameBlur(e)}
                      onFocus={e => this.handleNameFocus(e)}
                    />
                  </div>
                  {this.state.name1Error && (
                    <span className="color1"> *please enter valid name</span>
                  )}

                  <div className="space">
                    <lable>phone number:</lable>
                    <input
                      className="test"
                      id="number"
                      type="number"
                      placeholder="phone numbr"
                      value={this.state.num1}
                      onChange={e => this.handleInput("num1", e)}
                      onBlur={e => this.handleNumBlur(e)}
                    />
                  </div>
                  {this.state.num1Error && (
                    <span className="color1"> *please enter valid no</span>
                  )}
                  <div className="space">
                    <lable>password:</lable>

                    <div className="pwd-container">
                      <input
                        className="pwd-container"
                        type={this.state.isRevealPwd ? "text" : "password"}
                        value={this.state.pass1}
                        onChange={e => this.handleInput("pass1", e)}
                        placeholder="password"
                        onBlur={e => this.handlePassBlur(e)}
                      />
                      {!this.state.isRevealPwd ? (
                        <FontAwesomeIcon
                          className="pwd-img"
                          icon={faEye}
                          onClick={() =>
                            this.setState({
                              isRevealPwd: !this.state.isRevealPwd
                            })
                          }
                        />
                      ) : (
                        <FontAwesomeIcon
                          className="pwd-img"
                          icon={faEyeSlash}
                          onClick={() =>
                            this.setState({
                              isRevealPwd: !this.state.isRevealPwd
                            })
                          }
                        />
                      )}
                    </div>
                  </div>
                  {this.state.pass1Error && (
                    <span className="color1"> *incorrect password</span>
                  )}
                  <div className="rowspace">
                    <div className="lspace">
                      <button type="button" onClick={this.handleRest}>
                        reset
                      </button>
                      <button type="button" onClick={this.handleSubmit}>
                        submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
        </div>
      </div>
    );
  }
}

export default FormComponent;
