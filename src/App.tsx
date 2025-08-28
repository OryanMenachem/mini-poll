import { useState } from 'react';
import './App.css'

function App() {
  const frameworks = ["React", "Vue", "Svelte"];
  const [votes, setVotes] = useState({"React": 0, "Vue": 0, "Svelte": 0});
  const [showResults, setShowResults] = useState(false);

  return (
    <>

    </>
  )
}

export default App
