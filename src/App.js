import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Navbar } from "./routes/Navbar/Navbar.component";
import { Orders } from "./routes/Orders/Orders.component";
import { Kitchen } from "./routes/Kitchen/Kitchen.component";
import { Pickup } from "./routes/Pickup/Pickup.component";
import { CATEGORIES, PATHS } from "./utils/constants";
import { Payments } from "./routes/Payments/Payments.component";
import { Category } from "./routes/Category/Category.component";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Navbar />}>
                    <Route index path={PATHS.orders} element={<Orders />} />
                    <Route path={PATHS.kitchen} element={<Kitchen />} />
                    <Route path={PATHS.pickup} element={<Pickup />} />
                    <Route path={PATHS.payments} element={<Payments />} />
                    <Route
                        path={PATHS.categoryCombos}
                        element={<Category category={CATEGORIES.combos} />}
                    />
                    <Route
                        path={PATHS.categoryDrinks}
                        element={<Category category={CATEGORIES.drinks} />}
                    />
                    <Route
                        path={PATHS.categorySideDishes}
                        element={<Category category={CATEGORIES.sideDishes} />}
                    />
                    <Route
                        path={PATHS.categoryDesserts}
                        element={<Category category={CATEGORIES.desserts} />}
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
