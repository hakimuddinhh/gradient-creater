import logo from './gradient-creator-logo.svg';
import React, { useState } from 'react';
import './App.css';
import { createGradient } from 'gradient-creator';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import ColorPicker from 'material-ui-color-picker';





function App() {

  const [colorList, setColorList] = useState([]);
  const [startColor, setStartColor] = useState('#ff0000');
  const [endColor, setEndColor] = useState('#f7941d');
  const [steps, setSteps] = useState(10);
  const [openInfo, setOpenInfo] = React.useState(false);
  const [openError, setOpenError] = React.useState(false);


  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const handleCloseInfo = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenInfo(false);
  };

  const handleCloseError = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenError(false);
  };

  const handleColorList = () => {
    const CL = createGradient(startColor, endColor, steps);
    if (CL) {
      setColorList(CL);
    } else {
      setOpenError(true);
    }
  }

  const ShowGradients = () => <div className="gradient-container">
    {colorList ? colorList.map(color =>
      <div style={{ backgroundColor: color, width: 100 / colorList.length + '%' }}></div>) : null
    }
  </div>;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(colorList)
    setOpenInfo(true);
  }

  const ShowCode = () => <div className="show-code"><TextField value={colorList} />
    <Button size="small" variant="outlined" onClick={copyToClipboard} color="primary">
      Copy
    </Button></div>;

  return (
    <div>
      <ShowGradients />
      <div className="Field-container">
        <img src={logo} width={100} />
        <h2> Gradient Creator </h2>
        <ColorPicker
          name='Start Color'
          defaultValue={startColor}
          value={startColor}
          onChange={color => setStartColor(color)}

        />
        <ColorPicker
          name='End Color'
          defaultValue={endColor}
          value={endColor}
          onChange={color => setEndColor(color)}

        />
        <TextField type="number" id="standard-basic"
          defaultValue={steps}
          // value={steps}
          label="Steps"
          onChange={e => setSteps(e.currentTarget.value)}
        />
        <Button variant="contained" onClick={handleColorList} color="primary">
          Create Gradient
        </Button>
        {colorList.length > 0 && <ShowCode />}

      </div>

      <ShowGradients />
      <Snackbar open={openInfo} autoHideDuration={2000} onClose={handleCloseInfo}>
        <Alert onClose={handleCloseInfo} severity="info">
          Copied to Clipboard !
        </Alert>


      </Snackbar>

      <Snackbar open={openError} autoHideDuration={2000} onClose={handleCloseError}>

        <Alert onClose={handleCloseError} severity="error">
          Invalid HEX code !
        </Alert>
      </Snackbar>



    </div>
  );
}

export default App;
