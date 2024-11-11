import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import NewsDetailPage from './Pages/NewsDetailPage';

const App: React.FC = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts/:id" element={<NewsDetailPage />} />
    </Routes>
  </Router>
);

export default App;
