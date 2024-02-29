// import "@testing-library/user-event/dist/"
import IButton from '../interfaces/BlogInterface'
    
export default function Button({children, isDisabled, clickFunction, typeButton}:IButton) {
    return(
        
            <button className={typeButton}
                    onClick={clickFunction}
                    disabled={isDisabled}>{children}
            </button>
        
    )
}