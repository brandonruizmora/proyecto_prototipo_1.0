import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container-fluid">
      <div className="row full-height">
        <div className="order-1 order-sm-0 col-sm-5 col-md-4 col-lg-3 bg-info">detalles</div>
        <div className="order-0 col-sm-7 order-sm-1 col-md-8 col-lg-9 bg-success">mapa</div>
      </div>
    </div>
  );
}

export default App;
