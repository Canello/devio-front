import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./routes/Navbar/Navbar.component";
import { Orders } from "./routes/Orders/Orders.component";
import { Kitchen } from "./routes/Kitchen/Kitchen.component";
import { Pickups } from "./routes/Pickups/Pickups.component";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index element={<Orders />} />
                    <Route path="/cozinha" element={<Kitchen />} />
                    <Route path="/retirada" element={<Pickups />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
