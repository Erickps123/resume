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

    handleClickSpanish(){
        this.props.onLanguageChange("spanish")
    }
    handleClicEnglish(){
        this.props.onLanguageChange("english")
    }
   render(){
    return(
        <div className="handleLanguage">
            <img src={ES} onClick={this.handleClickSpanish} alt="" value="spanish" />
            <label>/</label>
            <img src={EN} onClick={this.handleClicEnglish} alt="" value="english"/>
        </div>  
        );
    }
   }

export default HandleLanguage;