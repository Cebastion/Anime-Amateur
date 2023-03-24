import { useState } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

function Pagination({AllPages, GetAnime}) {
    const [CurrentPage, SetcurrentPage] = useState(1);
    const [AnimePerPage] = useState(12);
    let pages = [];
    for(var i = 1; i <= AllPages; i++){
        pages.push(i)
    }
    const LastCurrentIndex = CurrentPage + AnimePerPage;
    const currentAnime = pages.slice(CurrentPage - 1, LastCurrentIndex)
    function PrevCurrent(page){
        if(page === 1){
            GetAnime(page);
            SetcurrentPage(page);
        }else{
            let newpage = page - 1;
            console.log(newpage)
            GetAnime(newpage);
            SetcurrentPage(newpage);
        }
    }
    function NextCurrent(page){
        if(page === AllPages){
            GetAnime(page);
            SetcurrentPage(page);
        }else{
            let newpage = page + 1;
            console.log(newpage)
            GetAnime(newpage);
            SetcurrentPage(newpage);
        }
    }
    GetAnime(CurrentPage)
    return ( 
        <footer className="pagination">
            <BsArrowLeftCircleFill className="pagination__arrow-left" onClick={() => PrevCurrent(CurrentPage)}></BsArrowLeftCircleFill>
            {currentAnime.map((page) =>
                <div className="pagination__body" key={page} onClick={async () => SetcurrentPage(page)}>
                    <span>{page}</span>
                </div>
            )}
            <BsArrowRightCircleFill className="pagination__arrow-right" onClick={() => NextCurrent(CurrentPage)}></BsArrowRightCircleFill>
        </footer>
    );
}

export default Pagination;