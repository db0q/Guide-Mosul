import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import BaghdidaMuseum from "./routes/BagdidaMuseum";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import Tahira from "./routes/Tahira";
import Baytna from "./routes/Baytna";
import Torath from "./routes/Torath";
import Mart from "./routes/Mart";
import Aslaf from "./routes/Aslaf";
import BagdidaHeritage from "./routes/BagdidaHeritage";
import ImamRedha from "./routes/ImamRedha";
import SheikhBakr from "./routes/SheikhBakr";
export default function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/BaghdidaMuseum" element={<BaghdidaMuseum />} />
          <Route path="/Tahira" element={<Tahira />} />
          <Route path="/Baytna" element={<Baytna />} />
          <Route path="/Torath" element={<Torath />} />
          <Route path="/Mart" element={<Mart />} />
          <Route path="/Aslaf" element={<Aslaf />} />
          <Route path="/BagdidaHeritage" element={<BagdidaHeritage />} />
          <Route path="/ImamRedha" element={<ImamRedha />} />
          <Route path="/SheikhBakr" element={<SheikhBakr />} />
        </Routes>
      
    </div>
  );
}
