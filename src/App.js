import React from 'react';
import './App.css';
import CategoryList from "./containers/CategoryList";

function App() {
  return (
    <div className="container">
      <h1>Media Library</h1>
      <CategoryList />
    </div>
  );
}

export default App;
