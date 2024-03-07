import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Tools from "./components/Tools";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Tools />} />
          <Route path="/blogs" element={<BlogFunc />} />
          <Route path="/services" element={<ServicesFunc />} />
          <Route path="/contact" element={<Contacts />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
