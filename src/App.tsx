import { useState } from "react";
import "./App.css";

function App() {
  const frameworks = ["react", "vue", "svelte"];
  const [reactVotes, setReactVotes] = useState(0);
  const [vueVotes, setVueVotes] = useState(0);
  const [svelteVotes, setSvelteVotes] = useState(0);
  const [showResults, setShowResults] = useState(false);

  
  const frameworksVotes = {
    react: setReactVotes,
    vue: setVueVotes,
    svelte: setSvelteVotes,
  } ;
  return (
    <div className="App">
      <h1 className="title">Mini Poll</h1>
      <ul className="framework-list">
        {frameworks.map((framework, index) => (
          <li
            className="framework-item"
            key={index}
            onClick={() => {
              frameworksVotes[framework as keyof typeof frameworksVotes](
                (prev) => prev + 1
              );
            }}
          >
            {framework}
          </li>
        ))}
      </ul>

      <div className="button-container">
        <button onClick={() => setShowResults(!showResults)}>
          Show Results
        </button>
      </div>

      {showResults && (
        <div className="result">
          <h2>Results</h2>
          <ul>
            <li className="result-item">React: {reactVotes}</li>
            <li className="result-item">Vue: {vueVotes}</li>
            <li className="result-item">Svelte: {svelteVotes}</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
