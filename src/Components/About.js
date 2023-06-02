import './StyleComponents/about.css'
import './StyleComponents/Main.css'
import Galeria from "../Components/Galeria"
import minhaImagem6 from './StyleComponents/imgComponents/asaik.jpg'
import minhaImagem7 from './StyleComponents/imgComponents/asaik2.jpg'
import minhaImagem8 from './StyleComponents/imgComponents/asaik3.jpg'
function About(){
  const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png'; // URL da imagem
     const imageUrl2= 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'; // URL da imagem
     const imageUrl3= 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'; // URL da imagem
     const imageUrl4= 'https://us.123rf.com/450wm/shushanto/shushanto2209/shushanto220900703/191842443-destruction-of-planets-concept-art-illustration-background-image.jpg?ver=6'; // URL da imagem
    
     const handleClick = () => {
      const mainContainer = document.querySelector('.main_container');
      if (mainContainer) {
        mainContainer.style.display = 'flex';
        mainContainer.scrollIntoView({ behavior: 'smooth' });
      }
    };

     return(
      <><div className="about">
      <div className="container_about">
      <div className="photo">
  <div className='cardtext'><img src={minhaImagem6} alt="Foto do Fotógrafo" /></div>
  <div className='cardtext'><img src={minhaImagem7} alt="Foto do Fotógrafo" /></div>
  <div className='cardtext'><img src={minhaImagem8} alt="Foto do Fotógrafo" /></div>

</div>
<div className="text">
  <button onClick={handleClick
  }>Veja Mais</button>
</div>

</div>

  </div>
  <div className="main_container">
  <Galeria imglarge={imageUrl} imgsmall={imageUrl2} imgmedium ={imageUrl3} imgmediumsmall  ={imageUrl4}
 imglarge2={imageUrl} imgsmall2={imageUrl2}imgmedium2={imageUrl3} imgmediumsmall2 ={imageUrl4}
  imglarge3={imageUrl} imgsmall3={imageUrl2} imgmedium3={imageUrl3} imgmediumsmall3 ={imageUrl4}
  imglarge4={imageUrl} imgsmall4={imageUrl2} imgmedium4 ={imageUrl3}  imgmediumsmall4 ={imageUrl4}/>
</div>
</>
        
        )
}
export default About