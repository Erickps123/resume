import React from 'react';
import ES from './src/spain.png';
import EN from './src/united-states.png';


class HandleLanguage extends React.Component
{
    constructor(props){
       super(props);
        this.handleClickSpanish = this.handleClickSpanish.bind(this)
        this.handleClicEnglish = this.handleClicEnglish.bind(this)
    }

    handleClickSpanish(e){
        this.props.onLanguageChange("spanish")
    }
    handleClicEnglish(e){
        this.props.onLanguageChange("english")
    }
   render(){
    return(
        <div className="handleLanguage">
            <img src={ES} onClick={this.handleClickSpanish} value="spanish" />
            <label>/</label>
            <img src={EN} onClick={this.handleClicEnglish} value="english"/>
        </div>  
        );
    }
   }

export default HandleLanguage;