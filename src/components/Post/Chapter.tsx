
function Chapters({idOfPage, page}:{idOfPage?:string, page?:string}) {
  return ( 
    <>
    <div className="container_chapter">
      <div className="chapter">
        <p className="name_ofpage">{page}</p>
        <p className="name_ofchapter">{idOfPage}</p>
      </div>
    </div>
    </>
  );
}

export default Chapters;