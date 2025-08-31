import { useState } from "react";

export default function MiniPoll() {
  const frameworks = ["react", "vue", "svelte"];
  const [reactVotes, setReactVotes] = useState(0);
  const [vueVotes, setVueVotes] = useState(0);
  const [svelteVotes, setSvelteVotes] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const frameworksVotes = {
    react: setReactVotes,
    vue: setVueVotes,
    svelte: setSvelteVotes,
  };
  return (
    <div className="MiniPoll">
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
        <button
          className="show-results-button"
          onClick={() => setShowResults(!showResults)}
        >
          Results
        </button>

        <button
          className="reset-button"
          onClick={() => {
            setReactVotes(0);
            setVueVotes(0);
            setSvelteVotes(0);
            setShowResults(false);
            alert("Poll has been reset!");
          }}
        >
          Reset
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
