import React, { Component } from "react";
import ArticleBody from "./components/ArticleBody";
import ArticleActions from "./components/ArticleActions";
import Article from "./components/Article";

let EN = {
  title: "NVIDIA news",
  article_title: "NVIDIA Accelerated AI on Azure",
  description: "Article description:",
  description_text:
    "NVIDIA on Azure is bringing AI, networking, and high-performance computing to the enterprise.",
  article_btn: "Read",  
  current_lang: "EN",
};
let UA = {
  title: "НОВИНИ NVIDIA",
  article_title: "Прискорений штутчний інтелект NVIDIA в Azure",
  description: "Опис статті:",
  description_text:
    "NVIDIA на Azure надає підприємствам можливості штучного інтелекту, мереж та високопродуктивних обчислень.",
  article_btn: "Читати",
  current_lang: "UA",
};

let langBtns;

class App extends Component {
  constructor() {
    super();
    this.state = {
      lang: EN,
    };
  }

  componentDidMount() {
    langBtns = document.querySelectorAll(".lang-btn");
    langBtns[1].classList.add("active");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.lang !== this.state.lang) {
      langBtns.forEach((btn) => btn.classList.remove("active"));
      this.state.lang.current_lang === "UA"
        ? langBtns[0].classList.add("active")
        : langBtns[1].classList.add("active");
    }
  }

  SetLangEN = () => {
    this.updateLenguage(EN);
  }

  SetLangUA = () => {
    this.updateLenguage(UA);
  }

  updateLenguage = (lang) => {
    this.setState({
      lang: {
        ...this.state.lang,
        title: lang.title,
        article_title: lang.article_title,
        description: lang.description,
        description_text: lang.description_text,
        article_btn: lang.article_btn,
      },
    });
  };               

  render() {
    return (
      <div className="wrapper">
        <h1 className="title">{this.state.lang.title} </h1>
        <Article lang={this.state.lang}>
          <div className="article__title">
            <h2>{this.state.lang.article_title}</h2>
          </div>
        </Article>
        <div className="lang">
          <button onClick={() => this.SetLangUA()} className="lang-btn">
            UA
          </button>
          <button onClick={() => this.SetLangEN()} className="lang-btn">
            EN
          </button>
        </div>
      </div>
    );
  }
}

export default App;
