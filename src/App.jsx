import { useState } from "react";
import "./App.css";
import Navbar from "./compnent/Navbar";

function App() {
    const [theme, setTheme] = useState("light");
    return (
        <>
            <div className={` container ${theme}`}>
                {/* passing useState as props */}
                <Navbar theme={theme} setTheme={setTheme} />
            </div>
        </>
    );
}

export default App;
