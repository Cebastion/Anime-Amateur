import { useState } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

function PaginationFavorite({favorite, CurrentPage, SetCurrentPage}) {
    const [AnimePerPage] = useState(6);
    let pages = [];
    const AllPages = Math.ceil(favorite.length / AnimePerPage);
    for(var i = 1; i <= AllPages; i++){
        pages.push(i)
    }
    const LastCurrentIndex = CurrentPage + AnimePerPage;
    const currentAnime = pages.slice(CurrentPage - 1, LastCurrentIndex)
    function PrevCurrent(page){
        if(page === 1){
            SetCurrentPage(page);
        }else{
            let newpage = page - 1;
            console.log(newpage)
            SetCurrentPage(newpage);
        }
    }
    function NextCurrent(page){
        if(page === AllPages){
            SetCurrentPage(page);
        }else{
            let newpage = page + 1;
            console.log(newpage)
            SetCurrentPage(newpage);
        }
    }
    if(currentAnime.length === 0){
        return(
            <></>
        )
    }else {
        return ( 
            <footer className="pagination fav">
                <BsArrowLeftCircleFill className="pagination__arrow-left" onClick={() => PrevCurrent(CurrentPage)}></BsArrowLeftCircleFill>
                {currentAnime.map((page) =>
                    <div className="pagination__body" key={page} onClick={async () => SetCurrentPage(page)}>
                        <span>{page}</span>
                    </div>
                )}
                <BsArrowRightCircleFill className="pagination__arrow-right" onClick={() => NextCurrent(CurrentPage)}></BsArrowRightCircleFill>
            </footer>
        );
    }
}

export default PaginationFavorite;