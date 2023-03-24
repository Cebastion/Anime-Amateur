import AnimeFav from "../components/AnimeFav";
import PaginationFavorite from "../components/PaginationFavorite";

function Favorites(props) {
    const {favorite} = props
    const {ShowList} = props
    const {SetShowList} = props
    const {CurrentPage} = props
    const {SetCurrentPage} = props
    const {currentAnime} = props
    return(
        <div className="favorite__body">
            <div className="blur"></div>
            <div className="favorite__block">
            <div className="close" onClick={() => SetShowList(!ShowList)}><span>X</span></div>
                <div className="block__list">
                    {favorite.length === 0 ? <span className="empty-favorite">Sorry uou not choose anime</span> : currentAnime.map((fav) =>
                        <AnimeFav key={fav.mal_id} fav={fav}/>
                    )}
                </div>
                <PaginationFavorite favorite={favorite} CurrentPage={CurrentPage} SetCurrentPage={SetCurrentPage}/>
            </div>
        </div>
    )
}

export default Favorites;