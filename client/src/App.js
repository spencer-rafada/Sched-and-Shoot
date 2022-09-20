import React from 'react';
import logo from './logo.svg';
import './App.css';


// TODO: Put routes here
function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:9000/testAPI")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {!data ? "Uhm..." : data}
        </p>
      </header>
    </div>
  );
}

export default App;
