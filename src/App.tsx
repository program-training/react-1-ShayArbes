import "./App.css";
import Text from "./components/Text/Text";
import Card from "./components/Card/Card"; 
function App() {
  return (
    <>
      <Text />{" "}
      <div className="App">
      <Card
        title="Sample Card"
        img="https://example.com/sample-image.jpg"
        text="This is a sample card with dynamic background color."
      />
    </div>
    </>
  );
}

export default App;
