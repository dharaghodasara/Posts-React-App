import React from 'react'
import {connect} from 'react-redux'

class UserHeader extends React.Component{

    render = () => {        
        if(this.props.user){
            return (
                <div className="header">{this.props.user.name}</div>
            )
        }
        return null
        
    }
}

const mapStateToProps = (state,ownProps) => {
    return {
        user : state.users.find((user)=>user.id === ownProps.id)
    }
}

export default connect(mapStateToProps)(UserHeader)