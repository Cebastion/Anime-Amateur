
import { useState } from "react";
import { BsHeart } from "react-icons/bs";
import { motion } from "framer-motion";

function Anime(props) {
    const [Show, SetShow] = useState(false)
    const {favorite} = props
    const {Setfavorite} = props
    const {anime} = props
    const {IsUser} = props
    const AddListFavorite = (anime) =>{
        let HasFavorite = false;
        favorite.forEach(el => {
    if(el.mal_id === anime.mal_id){
        HasFavorite = true;
    }
    })
    if(HasFavorite === false){
        let newfavorite = [...favorite, anime]
        Setfavorite(newfavorite)
    }
    }
    return ( 
        <motion.div layout initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20}} className="body__anime">
            <div className="anime__photo">
                <img src={anime.images.webp.image_url} alt="" />
            </div>
            <div className="anime__title">
                <span>{anime.title}</span>
            </div>
            <div className="anime__buttons">
                <button className="anime__button-info" onClick={() => SetShow(!Show)}>
                    <span>Info</span>
                </button>
                <BsHeart className="heart" onClick={() => {if(IsUser === true){AddListFavorite(anime)}}}/>
            </div>
            {Show && IsUser ? 
                <div className="body__info">
                    <div className="blur"></div>
                    <div className="info__block">
                    <div className="close" onClick={() => SetShow(!Show)}><span>X</span></div>
                        <div className="info__top">
                            <div className="info__top-left">
                                <span>Background:</span>
                                <div className="info__text">
                                    <span>{anime.background}</span>
                                </div>
                            </div>
                            <div className='info__top-right'>
                                <div className="info__img">
                                    <img src={anime.images.webp.image_url} alt=''/>
                                </div>
                                <div className="info__title">
                                    <span>{anime.title}</span>
                                </div>
                                <div className="info__rating">
                                    <span>Rating: {anime.rating}</span>
                                </div>
                                <div className="info__type">
                                    <span>Type: {anime.type}</span>
                                    </div>
                                <div className="info__status">
                                    <span>Status: {anime.status}</span>
                                    </div>
                                <div className="info__genres">
                                    <div>
                                        <span>Genres:</span>
                                    </div>
                                    <ul>
                                        {anime.genres.map(genre =>
                                                <span key={genre.mal_id}>{genre.name}</span>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="info__bottom">
                                <div className={anime.trailer.embed_url === null ? "info__trailer empty" : "info__trailer"}>
                                    {anime.trailer.embed_url === null ? <span>We don't have a trailer for this anime :( </span> : <iframe title="trailer" width='100%' height='215px' src={anime.trailer.embed_url}/>}
                                </div>
                        </div>
                    </div>
                </div>
            : <></>}
        </motion.div>
    );
}

export default Anime;
