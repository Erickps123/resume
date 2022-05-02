import imagen from "../data/perfil.jpg"


function Header(props){

    return(
        <div className="header">
            <div className="col col1">
            <h2 className="greetings">
                {props.greetings}</h2>
            </div>
            <div className="col col2">
            <img src={imagen} alt="No imagen" />
            </div>
        </div>
    );
}

export default Header;