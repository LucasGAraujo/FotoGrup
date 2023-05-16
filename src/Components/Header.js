import "./StyleComponents/Header.css"
function Header() {

    return(
        <header className="Header">
                <ul className="Header_Logo">
                    <li>WorldPhoto</li>
                </ul>
                <ul className="Header_Components">
                    <li>SOBRE MIM</li>
                    <li>SERVIÇOS</li>
                    <li>CONTATOS</li>
                </ul>
        </header>
    )
}
export default Header