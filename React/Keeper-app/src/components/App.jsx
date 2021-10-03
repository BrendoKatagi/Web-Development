import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import notes from "../notes";
import setNote from "../scripts/setNotes";

function App() {
    return (
        <div>
            <Header />
            {notes.map(setNote)}
            <Footer />
        </div>
    );
}

export default App;