import React from "react";
import imagen from './src/undraw_creation_re_d1mi.svg'





class Languages extends React.Component{
    constructor(props){
        super(props)
        this.state = {data:[]}
    }


    renderLanguages(key,name,experience,img){
        return(
               <div className="language" key={key}>
                    <div className="A"><img src={img}/></div>
                    <div className="B">{name}</div>
                    <div className="C">
                        {experience}
                    </div>
                    {/* <div className="D">{experience}/5</div> */}
               </div>
           
        );
    }
   render(){
    return(
        <div className="reveal">
        <h3 className="tittle-section">{this.props.title}</h3>
        {this.state.data.map((e,index)=>
               this.renderLanguages(index,e.name,e.level,e.url)
            )}
        </div>
    );
   }
   componentDidMount(){
       var languages = []
        Object.entries(this.props.languages).forEach(([tittle, value]) => {
                languages.push(value)
       })
      this.setState({data:languages})
   }
}

export default Languages;