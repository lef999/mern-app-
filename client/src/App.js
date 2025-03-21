import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  const [move, setMove] = useState(false);

  return (
    <div className="app">
      <motion.div
        className="box"
        animate={{ x: move ? 200 : 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      />
      <button onClick={() => setMove(!move)}>Click for Animation</button>
    </div>
  );
}

export default App;
