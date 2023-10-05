import About from "./components/About/About";
import Home from "./components/Home/Home";
import Property from "./components/Property/Property";
import Owner from "./components/Owner/Owner";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import RegisterOwner from "./components/Templates/RegisterOwner";
import SignupForm from "./components/Templates/SignupForm";
import OwnerDashboard from "./components/Owner/OwnerDashboard";
import { Routes, Route } from "react-router-dom";
import Error from "./components/Error/Error";
import LoginForm from "./components/Templates/LoginForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="property" element={<Property />} />
      <Route path="owner" element={<Owner />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog" element={<Blog />} />
      <Route path="ownerDashboard" element={<OwnerDashboard />} />
      <Route path="UserForm" element={<SignupForm />} />
      <Route path="OwnerForm" element={<RegisterOwner />} />
      <Route path="loginForm" element={<LoginForm />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
