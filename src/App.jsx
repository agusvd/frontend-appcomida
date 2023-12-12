import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ExplorePage from './Pages/ExplorePage'
import ProfilePage from './Pages/ProfilePage'
import ForumPostPage from './Pages/ForumPostPage'
import MainPage from './Pages/MainPage'
import ProtectedRoute from './utils/ProtectedRoute';
import CreateRecipePage from './Pages/CreateRecipePage'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<MainPage />} />
          <Route exact path="/" element={<ProtectedRoute />}>
            <Route exact path="/" element={<ExplorePage />} />
          </Route>
          <Route exact path="/forums" element={<ProtectedRoute />}>
            <Route exact path="/forums" element={<HomePage />} />
          </Route>
          <Route exact path="/newRecipe" element={<ProtectedRoute />}>
            <Route exact path="/newRecipe" element={<CreateRecipePage />} />
          </Route>
          <Route exact path="/profile" element={<ProtectedRoute />}>
            <Route exact path="/profile" element={<ProfilePage />} />
          </Route>
          <Route exact path="/forum/topic/card" element={<ProtectedRoute />}>
            <Route exact path="/forum/topic/card" element={<ForumPostPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;