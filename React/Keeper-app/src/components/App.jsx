import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import notes from "../notes";
import setNote from "../scripts/setNotes";
import Button from "./Button";

function App() {
    return (
        <div>
            <Header />
            {notes.map(setNote)}
            <Button />
            <Footer />
        </div>
    );
}

export default App;