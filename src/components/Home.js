import React from 'react';

const rule = {
  container: {
    display: 'flex',
    height: '70vh',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    letterSpacing: '5px'
  }
}

export default function Home() {
  return(
    <div style={rule.container}>
      <h3 style={rule.header}>Home</h3>
    </div>
  )
};
