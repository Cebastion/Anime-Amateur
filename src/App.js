import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillBookmarkPlusFill, BsFillPersonFill } from "react-icons/bs";
import { motion } from "framer-motion";
import AnimeList from "./components/AnimeList";
import Pagination from "./components/Pagination";
import Favorites from "./pages/Favorites";
import Registration from "./pages/Registration";

function App() {
  const [Search, SetSearch] = useState('');
  const [Genres, SetGenres] = useState([]);
  const [GenreID, SetGenreID] = useState([]);
  const [Anime, SetAnime] = useState([]);
  const [Active, SetActive] = useState(false);
  const [AllPages, SetAllPages] = useState([]);
  const [Rating, SetRating] = useState([]);
  const [Status, SetStatus] = useState([]);
  const [Type, SetType] = useState([]);
  const [favorite, Setfavorite] = useState([])
  const [ShowList, SetShowList] = useState(false)
  const [ShowReg, SetShowReg] = useState(false)
  const [Email, SetEmail] = useState('')
  const [Password, SetPassword] = useState('')
  const [CopyPassword, SetCopyPassword] = useState('')
  const [InfoUser, SetUserInfo] = useState({ Email, Password, CopyPassword })
  const [IsUser, SetIsUser] = useState(false)
  //const [Page, SetPage] = useState()
  const [IsBurger, SetIsBurger] = useState(false)

  const [CurrentPage, SetCurrentPage] = useState(1);
  const [AnimePerPage] = useState(6);
  const LastCurrentIndex = CurrentPage * AnimePerPage;
  const FirstCurrentIndex = LastCurrentIndex - AnimePerPage;
  const currentAnime = favorite.slice(FirstCurrentIndex, LastCurrentIndex)

  const GetAnime = async (Page) => {
    await axios.get(`https://api.jikan.moe/v4/anime?&page=${Page}&limit=16&q=${Search}&sfw&genres=${GenreID}&rating=${Rating}&status=${Status}&type=${Type}`).then((res) => {
      SetAnime(res.data.data)
      SetAllPages(res.data.pagination.last_visible_page)
    }).catch((err) => {
      console.log(err)
    })
  }

  const GetGenres = async () => {
    await axios.get(`https://api.jikan.moe/v4/genres/anime`).then((res) => {
      SetGenres(res.data.data)
    }).catch((err) => {
      console.log(err)
    })
  }

  const GenresList = (genr) => {
    let HasGener = false;
    GenreID.forEach(el => {
      if (genr === el) {
        let newgenr = [...GenreID].filter(el => el !== genr)
        SetGenreID(newgenr)
        HasGener = true;
      }
    })
    if (HasGener === false) {
      let newgenr = [...GenreID, genr]
      SetGenreID(newgenr);
    }
  }
  useEffect(() => {
    GetAnime()
    GetGenres()
  }, [Search])
  return (
    <div className="walleper">
      <div className="walleper__container">
        <div className={IsBurger ? "btn-burger active" : "btn-burger"} onClick={() => SetIsBurger(!IsBurger)}>
          <span></span>
        </div>
        <header className={IsBurger ? "header active" : "header"}>
          <div className="header__container">
            <div className="header__title">
              <span>Anime Amateur</span>
            </div>
            <div className="header__icons">
              <div className="header__favorites" onClick={() => SetShowList(!ShowList)}>
                <BsFillBookmarkPlusFill className="favorite" />
              </div>
              <div className="header__avatar" onClick={() => SetShowReg(!ShowReg)}>
                <BsFillPersonFill className="avatar" />
              </div>
            </div>
            <div className="header__search">
              <input type="search" placeholder="Search your films" onChange={(val) => SetSearch(val.target.value)} />
            </div>
            <div className="header__genres header__type">
              <span onClick={() => SetActive(!Active)} className={Active ? "active" : ""}>Type</span>
              <div className="genres__list type__list">
                <form>
                  <div className="form__label">
                    <div className="radio-btn">
                      <input name="type" id='tv' type='radio' value='tv' onClick={() => SetType('tv')} />
                      <span className="checkmark"></span>
                    </div>
                    <label for='tv'>TV</label>
                  </div>
                  <div className="form__label">
                    <div className="radio-btn">
                      <input name="type" id='special' type='radio' value='special' onClick={() => SetType('special')} />
                      <span className="checkmark"></span>
                    </div>
                    <label for='special'>Special</label>
                  </div>
                  <div className="form__label">
                    <div className="radio-btn">
                      <input name="type" id='music' type='radio' value='music' onClick={() => SetType('music')} />
                      <span className="checkmark"></span>
                    </div>
                    <label for='music'>Music</label>
                  </div>
                  <div className="form__label">
                    <div className="radio-btn">
                      <input name="type" id='movie' type='radio' value='movie' onClick={() => SetType('movie')} />
                      <span className="checkmark"></span>
                    </div>
                    <label for='movie'>Movie</label>
                  </div>
                  <div className="form__label">
                    <div className="radio-btn">
                      <input name="type" id='ova' type='radio' value='ova' onClick={() => SetType('ova')} />
                      <span className="checkmark"></span>
                    </div>
                    <label for='ova'>OVA</label>
                  </div>
                  <div className="form__label">
                    <div className="radio-btn">
                      <input name="type" id='ona' type='radio' value='ona' onClick={() => SetType('ona')} />
                      <span className="checkmark"></span>
                    </div>
                    <label for='ona'>ONA</label>
                  </div>
                  <div type="button" name="type" className="clear">
                    <label for='clear'>Clear</label>
                    <input id='clear' type='radio' name="type" onClick={() => SetType('')} />
                  </div>
                </form>
              </div>
            </div>
            <div className="header__genres header__status">
              <span onClick={() => SetActive(!Active)} className={Active ? "active" : ""}>Status</span>
              <div className="genres__list status__list">
                <form className={Active ? "active" : ""}>
                  <div className="form__label">
                    <div className="radio-btn">
                      <input name="status" id='airing' type='radio' value='airing' onClick={() => SetStatus('airing')} />
                      <span className="checkmark"></span>
                    </div>
                    <label for='airing'>Airing</label>
                  </div>
                  <div className="form__label">
                    <div className="radio-btn">
                      <input name="status" id='complete' type='radio' value='complete' onClick={() => SetStatus('complete')} />
                      <span className="checkmark"></span>
                    </div>
                    <label for='complete'>Complete</label>
                  </div>
                  <div className="form__label">
                    <div className="radio-btn">
                      <input name="status" id='upcoming' type='radio' value='upcoming' onClick={() => SetStatus('upcoming')} />
                      <span className="checkmark"></span>
                    </div>
                    <label for='upcoming'>Upcoming</label>
                  </div>
                  <div type="button" name="status" className="clear">
                    <label for='clear-status'>Clear</label>
                    <input id='clear-status' type='radio' name="status" onClick={() => SetStatus('')} />
                  </div>
                </form>
              </div>
            </div>
            <div className="header__genres header__rating">
              <span onClick={() => SetActive(!Active)} className={Active ? "active" : ""}>Rating</span>
              <div className="genres__list rating__list">
                <form className={Active ? "active" : ""}>
                  <div className="form__label">
                    <div className="radio-btn">
                      <input name="rating" id='g' type='radio' value='g' onClick={() => SetRating('g')} />
                      <span className="checkmark"></span>
                    </div>
                    <label for='g'>G</label>
                  </div>
                  <div className="form__label">
                    <div className="radio-btn">
                      <input name="rating" id='pg' type='radio' value='pg' onClick={() => SetRating('pg')} />
                      <span className="checkmark"></span>
                    </div>
                    <label for='pg'>PG</label>
                  </div>
                  <div className="form__label">
                    <div className="radio-btn">
                      <input name="rating" id='pg13' type='radio' value='pg13' onClick={() => SetRating('pg13')} />
                      <span className="checkmark"></span>
                    </div>
                    <label for='pg13'>PG13</label>
                  </div>
                  <div className="form__label">
                    <div className="radio-btn">
                      <input name="rating" id='r17' type='radio' value='r17' onClick={() => SetRating('r17')} />
                      <span className="checkmark"></span>
                    </div>
                    <label for='r17'>R17</label>
                  </div>
                  <div className="form__label">
                    <div className="radio-btn">
                      <input name="rating" id='r' type='radio' value='r' onClick={() => SetRating('r')} />
                      <span className="checkmark"></span>
                    </div>
                    <label for='r'>R</label>
                  </div>
                  <div type="button" name="rating" className="clear">
                    <div className="radio-btn">
                      <label for='clear-rating'>Clear</label>
                      <input id='clear-rating' type='radio' name="rating" onClick={() => SetRating('')} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="header__genres">
              <span onClick={() => SetActive(!Active)} className={Active ? "active" : ""}>Genres</span>
              <div className="genres__list">
                <form className={Active ? "active" : ""}>
                  {Genres !== undefined ? Genres.map((genre) =>
                    <div className="form__label" key={genre.mal_id}>
                      <div className="radio-btn">
                        <input id={genre.mal_id} type='checkbox' onClick={() => GenresList(genre.mal_id)} />
                        <span className="checkmark"></span>
                      </div>
                      <label for={genre.mal_id}>{genre.name}</label>
                    </div>
                  )
                    : <></>}
                </form>
              </div>
            </div>
          </div>
        </header>
        <motion.main layout className={ShowList || IsBurger ? "content active" : "content animelist"}>
          {Anime === undefined ? <div className="null"><h1>I'm sorry but we don't have such anime :(</h1></div> : <AnimeList SetIsUser={SetIsUser} IsUser={IsUser} Animes={Anime} Setfavorite={Setfavorite} favorite={favorite} />}
          {Anime === undefined ? <></> : <Pagination AllPages={AllPages} GetAnime={GetAnime} />}
        </motion.main>
        {ShowList ? <Favorites currentAnime={currentAnime} favorite={favorite} SetShowList={SetShowList} ShowList={ShowList} CurrentPage={CurrentPage} SetCurrentPage={SetCurrentPage} /> : <></>}
        {ShowReg ? <Registration ShowReg={ShowReg} SetShowReg={SetShowReg} SetPassword={SetPassword} SetEmail={SetEmail} SetUserInfo={SetUserInfo} Email={Email} Password={Password} CopyPaswword={CopyPassword} SetCopyPassword={SetCopyPassword} InfoUser={InfoUser} IsUser={IsUser} SetIsUser={SetIsUser} /> : <></>}
        {IsUser === false ?
          <div className="favorite__block warning__block">
            <h1 style={{ color: 'yellow' }}>Warning!</h1>
            <span className="warning"> If you don't see button register, please scroll down by this panel. <p>Sorry, but you are not registered. Please register to use our site! This is a test site. All the data that you enter is not saved anywhere</p></span>
            <button className="warning__button register__ready" onClick={() => SetShowReg(true)}>
              <span>Registration</span>
            </button>
          </div>
          : <></>}
      </div>
    </div>
  )
}


export default App;
