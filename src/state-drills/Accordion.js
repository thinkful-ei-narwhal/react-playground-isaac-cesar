import React from 'react';

class Accordion extends React.Component {

    handleDisplay(){
        return this.props.sections.map((e, index)=>{
            return <li key= {index} ><button onClick= {<p>{e.content}</p>}>{e.title}</button></li>
        })
    }

    // handleClick(e){
    //     return <p>{e.content}</p>
    // }

    render(){
        return(
            <div>
                <ul>
                    {this.handleDisplay()} 
                </ul>
            </div>
        )
    }
}

export default Accordion;