import React, { useState } from 'react';
import AlbumLayout from './components/Album.jsx';
import LoginModal from './components/LoginModal.jsx';
import Navbar from './components/Navbar.jsx'; 

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <div className="App">
      <Navbar openLoginModal={openLoginModal} />
      <LoginModal/>
      <AlbumLayout/>
    </div>
  );
}

export default App;
