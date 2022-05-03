function PopupSwipe(props){
    if(props.language ==="spanish"){
    return(<>
    <div id="notificationBarBottom">Desliza hacia abajo! <i className="fa fa-arrow-down"></i></div>
    </>);
    }
    return(<>
    <div id="notificationBarBottom">Swipe me down! <i className="fa fa-arrow-down"></i></div>
    </>);
}
export default PopupSwipe;