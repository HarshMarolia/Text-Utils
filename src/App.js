import React, { useState } from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    }
    );
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <div className='mt-4'>
      <Navbar title='TextUtils' />
      <Alert alert={alert} />
      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter Your Text To Analyze" size="12" />
      </div>
    </div>
  );
}

export default App;
