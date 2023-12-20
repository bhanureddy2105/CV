import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Layout } from './components/Layout';
import Projects from './components/Projects';
import { HomePage } from './components/HomePage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout> <HomePage/> </Layout>} />
          <Route path="/home" element={<Layout> <HomePage/> </Layout>} />
          <Route path="/projects" element={<Layout> <Projects/> </Layout>} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
