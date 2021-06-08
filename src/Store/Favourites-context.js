import {createContext, useState} from 'react'

const FavoriteContext=createContext({
    favourites:[],
    totalfavorites:0,
    AddFavoriteHandler:(favoritemeetup)=>{},
    removeFavoriteHandler:(meetupid)=>{},
    isfavoritehandler:(meetupid)=>{},

});
export function FavoriteContextProvider(props){

    const [userFavorites,setUserFavorites]=useState([]);
    
    function AddFavoriteHandler(favoritemeetup){
        setUserFavorites((previousfavorites)=>{
            return previousfavorites.concat(favoritemeetup);
        }
        );
        }
        function removeFavoriteHandler(meetupid){
            setUserFavorites((previousfavorites)=>{
                return (previousfavorites).filter(meetup=>meetup.id!==meetupid);

            })
        }
        function isfavoritehandler(meetupid){
            return (userFavorites.some(meetup=> meetup.id=== meetupid))
        }
        //setUserFavorites(userFavorites.concat(favoritemeetup));
    
     const context={
        favourites:userFavorites,
        totalfavorites:userFavorites.length,
        AddFavorite:AddFavoriteHandler,
        removeFavorite:removeFavoriteHandler,
        isfavorite:isfavoritehandler,
    }

    return <FavoriteContext.Provider value={context}>
       {props.children}
    </FavoriteContext.Provider>
}
export default FavoriteContext;
