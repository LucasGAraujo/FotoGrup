import './StyleComponents/sobre.css'
import minhaImagem1 from './StyleComponents/imgComponents/noiva1.jpg'
import minhaImagem2 from './StyleComponents/imgComponents/noiva2.jpg'
import minhaImagem3 from './StyleComponents/imgComponents/noiva3.jpg'
import minhaImagem4 from './StyleComponents/imgComponents/noiva4.jpg'
import minhaImagem5 from './StyleComponents/imgComponents/noiva5.jpg'
import minhaImagem6 from './StyleComponents/imgComponents/noiva6.jpg'

function Sobre(){
    return(
        <div className='Sobre'>
            <div class="container">
  <div class="card"> <img src={minhaImagem1} alt="Minha Imagem" /> </div>
  <div class="card"> <img src={minhaImagem2} alt="Minha Imagem" /></div>
  <div class="card"> <img src={minhaImagem3} alt="Minha Imagem" /></div>
  <div class="card"> <img src={minhaImagem4} alt="Minha Imagem" /></div>
  <div class="card"> <img src={minhaImagem5} alt="Minha Imagem" /></div>
  <div class="card"> <img src={minhaImagem6} alt="Minha Imagem" /></div>  
</div>
<div class="cardcont">
  <div class="background-image"></div>
  <div class="content">
    <p>Venha conferir nosso programa de foto</p>
  </div>
</div>
        </div>
    )
}
export default Sobre