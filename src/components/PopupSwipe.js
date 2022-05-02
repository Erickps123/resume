function PopupSwipe(props){
    if(props.language ==="spanish"){
    return(<>
    <div id="notificationBarBottom">Desliza hacia abajo! <i className="fas fa-arrow-circle-down mt-4"></i></div>
    </>);
    }
    return(<>
    <div id="notificationBarBottom">Swipe me down! <i className="fas fa-arrow-circle-down mt-4"></i></div>
    </>);
}
export default PopupSwipe;