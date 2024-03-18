import './App.css';
import '../src/components/Button/Button.css';
import '../src/components/Tabs/Tabs.css';
// import Button from '../src/components/Button/Button';
// import Tabs from '../src/components/Tabs/Tabs'
import Header from './components/Header/Header';
import Head from './pages/Main';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>
      {/* <div className='buttons'>
        <Button typeButton='myButton primary'
                isDisabled={false}
                clickFunction={alertOne}>Primary</Button>
        <Button typeButton='myButton secondary'
                isDisabled={false}
                clickFunction={alertTwo}>Secondary</Button>
        <Button typeButton='myButton secondary_two'
                isDisabled={false}
                clickFunction={alertThree}>Secondary 2</Button>
      </div>

      <div className='buttons'>
        <Button typeButton='myButton primary_hover'
                isDisabled={false}
                clickFunction={alertOne}>Primary</Button>
        <Button typeButton='myButton secondary_hover'
                isDisabled={false}
                clickFunction={alertTwo}>Secondary</Button>
        <Button typeButton='myButton secondary_two_hover'
                isDisabled={false}
                clickFunction={alertThree}>Secondary 2</Button>
      </div>
      
      <div className='buttons'>
        <Button typeButton='myButton primary'
                isDisabled={true}
                clickFunction={alertOne}>Primary</Button>
        <Button typeButton='myButton secondary'
                isDisabled={true}
                clickFunction={alertTwo}>Secondary</Button>
        <Button typeButton='myButton secondary_two'
                isDisabled={true}
                clickFunction={alertThree}>Secondary 2</Button>
      </div>
      <div className='tabs-container'>
        <Tabs isDisabled={false}
              typeButton='myTab all'>All</Tabs>
        <Tabs isDisabled={false}
              typeButton='myTab favorite'>My favorites</Tabs>
        <Tabs isDisabled={false}
              typeButton='myTab popular'>Popular</Tabs>
      </div>
      <div className='tabs-container'>
        <Tabs isDisabled={false}
              typeButton='myTab all'>All</Tabs>
        <Tabs isDisabled={false}
              typeButton='myTab favorite'>My favorites</Tabs>
        <Tabs isDisabled={false}
              typeButton='myTab popular'>Popular</Tabs>
      </div>
      <div className='tabs-container'>
        <Tabs isDisabled={true}
              typeButton='myTab all'>All</Tabs>
        <Tabs isDisabled={true}
              typeButton='myTab favorite'>My favorites</Tabs>
        <Tabs isDisabled={true}
              typeButton='myTab popular'>Popular</Tabs>
      </div> */}
      <BrowserRouter>
        <div className="header">
            <Header name='AB'>{"Andrian Braslavski"}</Header>
        </div>
        <Routes>
          <Route path='/' element={<Head/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
