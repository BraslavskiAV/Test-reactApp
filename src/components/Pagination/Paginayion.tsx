import IButtonPag from '../interfaces/PagInterface'
import Left from '../../assets/Arrow2.png'
import Right from '../../assets/Arrow.png'
import More from '../../assets/Icon-More-Horizontal.png'

function Pagination({children, clickFuncPagin, isDisabled, text, page, anyPage}:IButtonPag) {
  return ( 
    <>
    <div className="pagination-cont">
      <div className="left-button">
        <button className='buttonPag'
        onClick={clickFuncPagin}
        disabled={isDisabled}>
          <img src={Left} alt='icon'></img>
          {text}
        </button>
      </div>
      <div className="pag-numbers">
        <button className='page'>{page}</button>
        <button className='page'>{page}</button>
        <button className='page'>{page}</button>
        <div className='dots'>
        <img src={More}></img>
        </div>
        <button className='any-pages'>{anyPage}</button>
      </div>
      <div className="right-button">
      <button className='buttonPag'
        onClick={clickFuncPagin}>{children}
          <img src={Right} alt='icon'></img>
          </button>
      </div>
    </div>
    </>
  );
}

export default Pagination;