import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Post from "./components/Post";
import articles from './posts.json';

class App extends Component {
  render() {
    return (
      <div className="AppWrapper">
          {articles.map(({title, description, image}, key) => {
              return (
                  <Post
                    key={key}
                    title={title}
                    description={description}
                    image={image}
                  />
              )
            })}
      </div>
    );
  }
}

export default App;
