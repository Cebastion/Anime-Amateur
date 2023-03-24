import { motion } from "framer-motion";
import { useState } from "react";

function AnimeFav(props) {
    const {fav} = props
    const [Show, SetShow] = useState(false)
    return ( 
        <motion.div layout initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 260, damping: 20}} className="body__anime">
            <div className="anime__photo">
                <img src={fav.images.webp.image_url} alt="" />
            </div>
            <div className="anime__title">
                <span>{fav.title}</span>
            </div>
            <div className="anime__buttons">
                <button className="anime__button-info" onClick={() => SetShow(!Show)}>
                    <span>Info</span>
                </button>
            </div>
            {Show ? 
                <div className="body__info">
                    <div className="blur"></div>
                    <div className="info__block">
                    <div className="close" onClick={() => SetShow(!Show)}><span>X</span></div>
                        <div className="info__top">
                            <div className="info__top-left">
                                <span>Background:</span>
                                <div className="info__text">
                                    <span>{fav.background}</span>
                                </div>
                            </div>
                            <div className='info__top-right'>
                                <div className="info__img">
                                    <img src={fav.images.webp.image_url} alt=''/>
                                </div>
                                <div className="info__title">
                                    <span>{fav.title}</span>
                                </div>
                                <div className="info__rating">
                                    <span>Rating: {fav.rating}</span>
                                </div>
                                <div className="info__type">
                                    <span>Type: {fav.type}</span>
                                    </div>
                                <div className="info__status">
                                    <span>Status: {fav.status}</span>
                                    </div>
                                <div className="info__genres">
                                    <div>
                                        <span>Genres:</span>
                                    </div>
                                    <ul>
                                        {fav.genres.map(genre =>
                                                <span key={genre.mal_id}>{genre.name}</span>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="info__bottom">
                                <div className={fav.trailer.embed_url === null ? "info__trailer empty" : "info__trailer"}>
                                    {fav.trailer.embed_url === null ? <span>We don't have a trailer for this anime :( </span> : <iframe title="trailer" width='100%' height='215px' src={fav.trailer.embed_url}/>}
                                </div>
                        </div>
                    </div>
                </div>
            : <></>}
        </motion.div>
    );
}

export default AnimeFav;