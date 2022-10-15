
import { Tab, Tabs, Box } from '@mui/material';
import { useState } from 'react';

import './App.css';
import SearchByMultipleParams from './components/SearchByMultipleParams';
import SearchByOneParam from './components/SearchByOneParam';

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  )
}

function App() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <h1>Hallo VBM</h1>

      <Tabs value={value} onChange={handleChange}>
        <Tab label="Item One" />
        <Tab label="Item Two" />
      </Tabs>
      <TabPanel value={value} index={0}>
        <SearchByOneParam />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SearchByMultipleParams />
      </TabPanel>

    </div>
  );
}

export default App;
