import React from 'react'
import {fetchPostsAndUsers} from '../Actions'
import {connect} from 'react-redux'
import UserHeader from './UserHeader'
import Faker from 'faker'
class Posts extends React.Component{

    componentDidMount = () =>{
        this.props.fetchPostsAndUsers()
    }

    renderList = () => {
        return this.props.posts.map((post)=> {
            return (<div className="item" key={post.id}>
                <div className="rounded image">
                     <img  alt="avatar" src={Faker.image.avatar()}/>
                 </div>
                <div className="middle aligned content">
                   
                    <a href="#" className="header"> {post.title} </a>
                        
                    <div className="description">
                        <p>{post.body} </p>
                     </div>

                      <div className="extra">
                        <UserHeader id={post.userId} />
                    </div>
                </div>
               
            </div>)
        }) 
    }

    render = () => {
        return (
            <div className="ui celled relaxed list">
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = ({posts}) => {
    return {
        posts: posts
    }
}

export default connect(mapStateToProps, {fetchPostsAndUsers})(Posts)