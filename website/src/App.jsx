import "./App.css";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container fluid">
        <div className="row rowattrib">
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
