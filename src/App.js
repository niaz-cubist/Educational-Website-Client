import './App.css';
import { RouterProvider } from "react-router-dom";
import Route from './Components/Routes/Route'
import Context from './Components/Context/Context';
function App() {
  return (
    <div className="App">
      <Context>
        <RouterProvider router={Route}></RouterProvider>
      </Context>
    </div>
  );
}

export default App;
