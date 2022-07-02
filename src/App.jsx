import Home from './pages/Home/Home';
import PostView from './pages/Post/PostView';

import './pages/css/reset.css';
import './pages/css/global.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post-view" element={<PostView />} />
    </Routes>
  );
}

export default App;
