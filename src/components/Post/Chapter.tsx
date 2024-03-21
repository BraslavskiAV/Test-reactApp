import { Link } from "react-router-dom";

function Chapters({idOfPage, page}:{idOfPage?:string, page?:string}) {
  return ( 
    <>
    <div className="container_chapter">
      <div className="chapter">
        <Link to={'/'} className="chapter__link">
        <p className="name_ofpage">{page}</p>
        </Link>
        <p className="name_ofchapter">{idOfPage}</p>
      </div>
    </div>
    </>
  );
}

export default Chapters;