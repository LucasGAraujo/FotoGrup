import "./StyleComponents/Header.css"
function Header() {
const handleclickgale= () =>{
    const container_about = document.querySelector('.container_about');
    container_about.scrollIntoView({ behavior: 'smooth' });
}
    return(
        <header className="Header">
                <ul className="Header_Logo">
                    <li>WorldPhoto</li>
                </ul>
                <ul className="Header_Components">
                    <li onClick={handleclickgale}>GALERIA</li>
                    <li>SERVIÇOS</li>
                    <li>CONTATOS</li>
                </ul>
        </header>
    )
}
export default Header