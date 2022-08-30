import LandingPage from "./Pages/LandingPage"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import PostView from "./Pages/PostView";
import Form from "./Components/Form/Form";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/post" element={<PostView/>}/>
          <Route path="/form" element={<Form/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
