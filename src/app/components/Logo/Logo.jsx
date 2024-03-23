
import SpotifyBlack from '../../assets/images/spotify-black.svg'
import SpotifyWhite from '../../assets/images/spotify-white.svg'
import style from './style.module.css'


export function Logo(props){
    const myImage = props.useWhite  ? SpotifyBlack : SpotifyWhite
    return(
        <a href='#/dashboard'>
        <img src={myImage}/>
        </a>
    ) 
    
}
function NavigationLogoText() {
    return(
        <h1>Spotify</h1>
    )
}