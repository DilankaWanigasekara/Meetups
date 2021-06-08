import {useContext} from 'react'
import FavoriteContext from '../Store/Favourites-context'
import MeetupList from '../Components/meetups/MeetupList'
function Favourite(){
    const favoritctx=useContext(FavoriteContext)
    let favorite;
    if (favoritctx.totalfavorites===0){
        favorite=<p1>not any favorites? Are you adding some?</p1>
    }
    else{
        favorite=<MeetupList meetups={favoritctx.favourites}/>
    }
    return <section>
        <h1>Fovorite meetups</h1>
        {favorite}
    </section>
}
export default Favourite;