import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import { getLanguage } from "./vars";


function App() {
    console.log(getLanguage())
    if (getLanguage() === "en-US"){
        return (
            <BrowserRouter>
                <Header />
                <Routes >
                    <Route path={"/en-US"} element={<Home />} />
                </Routes >
                <Footer />
            </BrowserRouter>
        );
    }
    return (
        <BrowserRouter>
            <Header />
            <Routes >
                <Route path={"/ua-UK"} element={<Home />} />
            </Routes >
            <Footer />
        </BrowserRouter>
    );
}

export default App;
