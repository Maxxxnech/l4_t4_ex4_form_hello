import React, { Component } from "react";
/**
 * Для получения значения поля ввода input используется обработчик onChange (а не реф)
 * Сохраняет содержимое input в state.inputText при вводе
 *
 * При клике на кнопку приравнивает state.name = state.inputText
 */
export default class Form extends Component {
  constructor(props) {
    super(props);
    // this.state.changed: is for input animation only
    this.state = { inputText: "", name: "", changed: false };
    this.handleChange = this.handleChange.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  timeout = '';
  handleChange(e) {
    this.setState({ inputText: e.target.value, changed: true });
    //only for input animation
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => this.setState({ changed: false }), 500);
  }

  handleBtnClick() {
    this.setState({ name: this.state.inputText });
  }
  componentDidUpdate() {
    console.log(this.state);
  }
  render() {
    return (
      <>
        <h1>Hello {this.state.name}</h1>

        <input
          onChange={this.handleChange}
          type="text"
          placeholder="your name"
        ></input>
        <button onClick={this.handleBtnClick}>Say hello</button>
        <p className="log">
          you typed: <span className={this.state.changed ? "changed" : undefined}>
            {this.state.inputText}
          </span>
        </p>
      </>
    );
  }
}
