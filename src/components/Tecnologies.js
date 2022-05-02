import React from "react";
import imagen from './src/undraw_creation_re_d1mi.svg'





class Tecnologies extends React.Component{
    constructor(props){
        super(props)
        this.state = {data:[]}
    }


    renderTecnologies(key,name,experience,img,colorcode){
        return(
               <div className="tecnologies" key={key}>
                    <div className="A"><img src={img}/></div>
                    <div className="B">{name}</div>
                    <div className="C">
                    <progress className={"progress "+colorcode} value={experience} max="5"></progress>
                    </div>
                    {/* <div className="D">{experience}/5</div> */}
               </div>
           
        );
    }
   render(){
    return(
        <>
        <h3 className="tecnologies-tittle-section">Tecnologies</h3>

        <div className="header">
            <div className="col col1">
            <img src={imagen} />
            </div>
            <div className="col col2">
            {this.state.data.map((e,index)=>
                this.renderTecnologies(index,e.name,e.experience,e.url,e.color) 
            )}
            </div>
        </div>
        </>
    );
   }
   componentDidMount(){
       var tecnologies = []
        Object.entries(this.props.tecnologies[0]).forEach(([tittle, value]) => {
            Object.entries(value).forEach(([key, value]) => {
                tecnologies.push(value)
               
            })
       })
      this.setState({data:tecnologies})
      //console.log(tecnologies)
   }
}

export default Tecnologies;