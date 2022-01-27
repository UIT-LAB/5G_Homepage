import React from 'react';
import Paper from "@mui/material/Paper";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Container from '@mui/material/Container';
import TypoGraphy from '@mui/material/Typography'
import Chart from './Chart'
import Business from './Business'





export default function CenteredTabs() {

  
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <Container>
      <TypoGraphy color='primary'align="center" famaily='"Helvetica Neue"' variant="h2" component="h2" gutterBottom>
      About
      </TypoGraphy>
    <Paper  position="static">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="조직도" />
        <Tab label="사업소개" />
        
      </Tabs>
    </Paper>
    <div>
    {value === 0 && <Chart/>}
    {value === 1 && <Business/>}
    </div>
   
    </Container>
    </div>
  );
}
