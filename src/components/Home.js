import React from 'react'


class Home extends React.Component{
    render(){
        console.log('props==>',this.props)
        return(


            <button onClick={()=>this.props.get_props("sayalni")}>Send props</button>
             
        )
    }
}

class Service extends React.Component{
    render(){
        return(
            <div>
                <h1>
                    Service Component
                </h1>
            </div>
        )
    }
}

export {
    Home ,
    Service
} 