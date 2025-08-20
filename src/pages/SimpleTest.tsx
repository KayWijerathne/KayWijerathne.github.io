const SimpleTest = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: '#f0f0f0', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ 
        fontSize: '48px', 
        textAlign: 'center', 
        color: '#333',
        marginBottom: '20px'
      }}>
        🎉 SUCCESS! 🎉
      </h1>
      <p style={{ 
        fontSize: '24px', 
        textAlign: 'center', 
        color: '#666' 
      }}>
        If you can see this message, React is working perfectly!
      </p>
      <div style={{ 
        textAlign: 'center', 
        marginTop: '40px',
        fontSize: '18px',
        color: '#888'
      }}>
        <p>This is a basic test without any custom CSS or complex components.</p>
        <p>Your site should now be working on GitHub Pages!</p>
      </div>
    </div>
  );
};

export default SimpleTest; 