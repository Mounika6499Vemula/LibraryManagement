
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import Objectpage from './Sample/Objectpage';
import Books from './Sample/Books';
import List from './Sample/List';
import { useState } from 'react';
function App() {
  const [data, setData] = useState({})
  const onDataUpdate = (lib) => {
    setData(lib)
  }

  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/Books" element={<Books data={data} />}></Route>
          <Route path="/" element={<Objectpage onDataUpdate={onDataUpdate} />}></Route>
        </Routes>
        {/* <Objectpage /> */}
      </Router>


    </div >


  );
}

export default App;
