import AppContainer from "./components/AppContainer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <h1>
        <Header />
        <AppContainer />
      </h1>
    </div>
  );
}

export default App;
