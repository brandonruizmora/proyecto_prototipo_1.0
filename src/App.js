import "./App.css";
import PlaceDetails from './components/PlaceDetails';

function App() {
  return (
    <div className="container-fluid">
      <div className="row full-height">
        <div className="order-1 order-sm-0 col-sm-6 col-md-5 col-lg-4 bg-info mx-0 px-0">
        <PlaceDetails />
        </div>
        <div className="order-0 order-sm-1 col-sm-6 col-md-7 col-lg-8 bg-success">mapa</div>
      </div>
    </div>
  );
}

export default App;
