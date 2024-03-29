import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/layout';
import ToolsFunc from './components/pages/Tools';
import ChannelsFunc from './components/pages/Channels';
import PricingFunc from './components/pages/Pricing';
import BlogFunc from './components/pages/Blog';
import MyFunction from './components/pages/login';
import SignupForm from './components/pages/signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ToolsFunc />} />
          <Route path="/Channels" element={<ChannelsFunc />} />
          <Route path="/Pricing" element={<PricingFunc />} />
          <Route path="/Blog" element={<BlogFunc />} />
          <Route path="/login" element={<MyFunction />} />
          <Route path="/signup" element={<SignupForm />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
