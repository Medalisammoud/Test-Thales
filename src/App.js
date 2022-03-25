import "./App.css";
import Cards from "./components/Cards";
import Form from "./components/Form";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="bg-light-gray lg:h-200 h-screen md:h-screen">
      <SideBar />
      <Header />
      <div className="lg:flex">
        <Form />
        <Cards />
      </div>
    </div>
  );
}

export default App;
