import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Dont forget to import boostrap for css style sheet.
import { Post } from "./components/Post";

function App() {
  return (
    <div className="App">
      <h1 className="text-primary">Pagination</h1>
      <Post />
    </div>
  );
}

export default App;
