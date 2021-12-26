import { Routes, Route } from "react-router-dom";

import Layout from '@/pages/layout'
import Home from '@/pages/home'
import Page1 from '@/pages/page1'
import NoMatch from '@/pages/NoMatch'

// let timerId
function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Home />} />
          <Route path="page1/:name" element={<Page1 />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App
