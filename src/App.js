import "./App.css";
import Cards from "./components/Cards";
import Form from "./components/Form";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="bg-light-gray h-200">
      <SideBar />
      <Header />
      <div className="flex">
        <Form />
        <Cards />
      </div>
    </div>
  );
}

export default App;
