import React from 'react'
import ImgCarousel from './carousel/ImgCarousel';
import Search from './search/Search';
import Selects from './selects/Selects';


function Home(){
    return(
        <>
            <Search />
            <Selects />
            <ImgCarousel />
        </>

    )



}


export default Home;



