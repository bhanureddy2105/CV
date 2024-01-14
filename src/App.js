import { BrowserRouter, Route, Routes, Link, HashRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import Projects from './components/Projects';
import { PublicationLayout } from './components/PublicationLayout'
import { Publications } from "./components/Publications"
import { HomePage } from './components/HomePage';


function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout> <HomePage /> </Layout>} />
          <Route path="/home" element={<Layout> <HomePage /> </Layout>} />
          <Route path="/projects" element={<Layout> <Projects /> </Layout>} />
          <Route path="/publications" element={<Layout> <PublicationLayout /> </Layout>} />
          <Route path="/publications/:publicationId" element={<Layout> <Publications /> </Layout>} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </HashRouter>
    </>

  );
}

export default App;
