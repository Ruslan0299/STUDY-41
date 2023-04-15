import React, { Component } from "react";
import langContex from "./LangContex";

class ArticleActions extends Component {
  render() {
    return (
      <div className="article__actions">
        <button className="article__btn">{this.props.lang.article_btn}</button>
      </div>
    );
  }
}

export default ArticleActions;
