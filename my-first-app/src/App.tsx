import './App.css';
import '../src/components/Button/Button.css';
import Button from '../src/components/Button/Button';

function App() {

  const alertOne = function(): void {
    alert ("Button primary")
  }
  const alertTwo = function(): void {
    alert ("Button secondary")
  }
  const alertThree = function(): void {
    alert ("Button secondary 2")
  }

        return (
        <>
        <div className='buttons'>
        <Button typeButton='myButton primary'
                isDisabled={false}
                clickFunction = {alertOne}>Primary</Button>
        <Button typeButton='myButton secondary'
                isDisabled={false}
                clickFunction = {alertTwo}>Secondary</Button>
        <Button typeButton='myButton secondary_two'
                isDisabled={false}
                clickFunction = {alertThree}>Secondary 2</Button>
        </div>
        {/* */}
        <div className='buttons'>
        <Button typeButton='myButton primary_hover'
                isDisabled={false}
                clickFunction = {alertOne}>Primary</Button>
        <Button typeButton='myButton secondary_hover'
                isDisabled={false}
                clickFunction = {alertTwo}>Secondary</Button>
        <Button typeButton='myButton secondary_two_hover'
                isDisabled={false}
                clickFunction = {alertThree}>Secondary 2</Button>
        </div>
        {/* */}
        <div className='buttons'>
        <Button typeButton='myButton primary'
                isDisabled={true}
                clickFunction = {alertOne}>Primary</Button>
        <Button typeButton='myButton secondary'
                isDisabled={true}
                clickFunction = {alertTwo}>Secondary</Button>
        <Button typeButton='myButton secondary_two'
                isDisabled={true}
                clickFunction = {alertThree}>Secondary 2</Button>
                </div>
        </>
        );
}

export default App;
