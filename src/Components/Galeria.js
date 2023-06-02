import './StyleComponents/galeria.css'

function Galeria({imglarge,imgsmall,imgmedium,imgmediumsmall,
    imglarge2,imgsmall2,imgmedium2,imgmediumsmall2,
    imglarge3,imgsmall3,imgmedium3,imgmediumsmall3,
    imglarge4,imgsmall4,imgmedium4,imgmediumsmall4}) {

    return(
        <div className='Galeria_container'>
            <header className='Galeria_container--header'>
                <h1>Galeria</h1>
               
     </header>
     <section className='Galeria_container--main'>
        {/* coluna 1 */}
        <div className='cardlarge'><a href=""><img src={imglarge} alt="imagemdetemplate ou projeto" /></a></div>
        <div className='cardsmall'><a href=""><img src={imgsmall} alt="imagemdetemplate ou projeto" /></a></div>
        <div className='cardmedium'><a href=""><img src={imgmedium} alt="imagemdetemplate ou projeto" /></a></div>
        <div className='card_medium_small'><a href=""><img src={imgmediumsmall} alt="imagemdetemplate ou projeto" /></a></div>
        {/* coluna2 */}
        <div className='cardlarge2'><a href=""><img src={imglarge2} alt="imagemdetemplate ou projeto" /></a></div>
        <div className='cardsmall2'><a href=""><img src={imgsmall2} alt="imagemdetemplate ou projeto" /></a></div>
        <div className='cardmedium2'><a href=""><img src={imgmedium2} alt="imagemdetemplate ou projeto" /></a></div>
        <div className='card_medium_small2'><a href=""><img src={imgmediumsmall2} alt="imagemdetemplate ou projeto" /></a></div>
        {/* coluna 3 */}
        <div className='cardlarge3'><a href=""><img src={imglarge3} alt="imagemdetemplate ou projeto" /></a></div>
        <div className='cardsmall3'><a href=""><img src={imgsmall3} alt="imagemdetemplate ou projeto" /></a></div>
        <div className='cardmedium3'><a href=""><img src={imgmedium3} alt="imagemdetemplate ou projeto" /></a></div>
        <div className='card_medium_small3'><a href=""><img src={imgmediumsmall3} alt="imagemdetemplate ou projeto" /></a></div>
        {/* coluna 3 */}
        <div className='cardlarge4'><a href=""><img src={imglarge4} alt="imagemdetemplate ou projeto" /></a></div>
        <div className='cardsmall4'><a href=""><img src={imgsmall4} alt="imagemdetemplate ou projeto" /></a></div>
        <div className='cardmedium4'><a href=""><img src={imgmedium4} alt="imagemdetemplate ou projeto" /></a></div>
        <div className='card_medium_small4'><a href=""><img src={imgmediumsmall4} alt="imagemdetemplate ou projeto" /></a></div>
     </section>
        </div>
    )

}
export default Galeria