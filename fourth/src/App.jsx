import { useState } from "react";
import "./App.css";
import data from "./data";
import SingleQuestion from "./SingleQuestions";

function App() {
  return <main className="App"> 
  <div className="container">
    <h3>
      questions and answers about login
    </h3>
    <section className="info">
      {
        data.map((question) => {
          return <SingleQuestion key={question.id} {...question}/>
        })
      }
    </section>
  </div>
  
  </main>
}

export default App;
