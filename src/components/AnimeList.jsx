import Anime from "./Anime";

function AnimeList(props) {
    const {Animes} = props
    const {Setfavorite} = props
    const {favorite} = props
    const {IsUser} = props
    console.log(Animes)
    return ( 
        <div className="product__list">
            {Animes.map((anime) => 
                    <Anime key={anime.mal_id} anime={anime} Setfavorite={Setfavorite} favorite={favorite} IsUser={IsUser}/>
                )
            }
        </div>
    );
}

export default AnimeList;