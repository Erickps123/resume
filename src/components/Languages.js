import React from "react";


class Languages extends React.Component{
    constructor(props){
        super(props)
        this.state = {data:[]}
    }

    renderLanguages(key,name,experience,img){
        return(
               <div className="language" key={key}>
                    <div className="A"><img src={img} alt=""/></div>
                    <div className="B">{name}</div>
                    <div className="C">
                        {experience}
                    </div>
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
        Object.entries(this.props.languages).forEach(([title,value]) => {
                languages.push(value)
       })
      this.setState({data:languages})
      console.log(languages)
   }
}

export default Languages;