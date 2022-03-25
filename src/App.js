import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="bg-light-gray h-screen">
      <SideBar />
      <Header />
      <Form />
    </div>
  );
}

export default App;
