import AppContainer from "./components/AppContainer";
import Header from "./components/Header";
import "./components/Style.css";
function App() {
  return (
    <div className="App">
      <h1>
        <div className="app">
          <Header />
          <AppContainer />
        </div>
      </h1>
    </div>
  );
}

export default App;
