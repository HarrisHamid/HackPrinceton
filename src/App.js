import React from 'react';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider theme={{token: {colorPrimary: '#00b96b'}}}>
      <div className="App">
        <h1>Hello World</h1>
      </div>
    </ConfigProvider>
  );
}

export default App;
