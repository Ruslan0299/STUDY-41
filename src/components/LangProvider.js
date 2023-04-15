import React, { Component } from "react";
import LangContext from "./LangContext";

class LangProvider extends Component {
  constructor() {
    super();
    const storedLang = localStorage.getItem("lang");
    this.state = {
      lang: storedLang ? storedLang : "EN",
    };
  }
  updateLang = (newLang) => {
    this.setState({ lang: newLang });
    localStorage.setItem("lang", newLang);
  };
  render() {
    return (
      <LangContext.Provider
        value={{
          lang: this.state.lang,
          updateLang: this.updateLang,
        }}
      >
        {this.props.children}
      </LangContext.Provider>
    );
  }
}
export default LangProvider;
