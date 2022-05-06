import TypeIt from "typeit-react";

function Header(props){

    return(
        <div className="header">
            <div className="col col1">
                <h2 className="greetings">
                   {props.lang ==="english" &&
                    <TypeIt>{props.greetings}</TypeIt>
                   }
                   {props.lang ==="spanish" &&
                     <TypeIt>{props.greetings}</TypeIt>
                   }
                </h2>
            </div>
            <div className="col col2">
            <img src={props.img} alt="No imagen" />
    
            </div>
        </div>
    );
}

export default Header;