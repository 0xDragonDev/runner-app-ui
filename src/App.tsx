import AppLayout from "./components/AppLayout";
import Home from "./components/Sections/Home";
import Features from "./components/Sections/Features";
import Choose from "./components/Sections/Choose";
import Screenshots from "./components/Sections/Screenshots";
import Subscribe from "./components/Sections/Subscribe";
import Pricing from "./components/Sections/Pricing";
import Testimonials from "./components/Sections/Testimonials";
import Blogs from "./components/Sections/Blogs";
import Contact from "./components/Sections/Contact";

import "./App.css";

export default function App() {
  return (
    <AppLayout>
      <Home />
      <Features />
      <Choose />
      <Screenshots />
      <Subscribe />
      <Pricing />
      <Testimonials />
      <Blogs />
      <Contact />
    </AppLayout>
  );
}
