import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import { createGradient } from 'gradient-creator';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ColorPicker from 'material-ui-color-picker';





function App() {

  const [colorList, setColorList] = useState([]);
  const [startColor, setStartColor] = useState('#ff0000');
  const [endColor, setEndColor] = useState('#f7941d');
  const [steps, setSteps] = useState(10);

  const handleColorList = () => {
    const CL = createGradient(startColor, endColor, steps);
    setColorList(CL);
  }

  return (
    <div>
      <div className="Field-container">
        <h1> Gradient Creator </h1>
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
      </div>
      <div className="gradient-container">
          {colorList ? colorList.map(color =>
            <div style={{ backgroundColor: color, width: 100 / colorList.length + '%' }}></div>) : null
          }
      </div>

    </div>
  );
}

export default App;
