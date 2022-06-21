import "./App.css";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import {Route ,Routes} from 'react-router-dom'
function App() {
  return <div className="App">
   <AuthProvider>
      <Navbar></Navbar>
      </AuthProvider>
   
   
  </div>;
}

export default App;
