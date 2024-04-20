import { myContext } from '../providers/themeCon';
import { useContext } from 'react';

interface ITabs{
  typeButton?: string,
  clickFunction?: () => void,
  isDisabled: boolean,
  children?: string
}

export default function Tabs({children, isDisabled, typeButton, clickFunction}:ITabs){
  
  const [color, setColor] = useContext(myContext);

  return(
    <div className="tab">
      <button className={typeButton}
              disabled={isDisabled}
              onClick={clickFunction}>{children}
      </button>
    </div>
  )
}