import React from 'react';

function Home() {
  const centerStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20% auto',
    fontSize: '48px'
  };

  return (
    <div style={centerStyles}>
      <div>Welcome Home</div>
    </div>
  );
}

export default Home;
