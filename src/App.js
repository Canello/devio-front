import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./routes/Navbar/Navbar.component";
import { Orders } from "./routes/Orders/Orders.component";
import { Kitchen } from "./routes/Kitchen/Kitchen.component";
import { Pickup } from "./routes/Pickup/Pickup.component";
import { PATHS } from "./utils/constants";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index path={PATHS.orders} element={<Orders />} />
                    <Route path={PATHS.kitchen} element={<Kitchen />} />
                    <Route path={PATHS.pickup} element={<Pickup />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
