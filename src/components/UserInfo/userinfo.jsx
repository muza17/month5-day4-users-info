import { useState, useEffect } from 'react'
import React from "react"
import "./userinfo.css"

function UserInfo(){

    const [id, setId] = useState(0)
    const [postId, setPostId] = useState(0)

    //for users
    const [userData, setUserData] = useState([])
    useEffect (() => {
        fetch(`http://jsonplaceholder.typicode.com/users`)
         .then(res => res.json())
         .then(userData => setUserData(userData))
     
         // console.log(userData);
    },[])
    //for posts
    const [postData, setPostData] = useState([])

    useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then(res => res.json())
      .then(postData => setPostData(postData))
      console.log(postData);
    },[id])

    //for comments
    const [comment, setComment] = useState([])

    useEffect(() => {
        fetch(`http://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then (res => res.json())
        .then (comment =>{
            setComment(comment)
        }) 
            
    },[postId])

    return(
        <div className='userinfo'>
            <div className="container">
                <h1 className="heading">Users' Info</h1>
                <div className="wrapper">
                    <div className="users">
                        <h3>Users</h3>
                        <p>Number of users : <span>{userData.length}</span></p>
                        <ul className="users-list">
                            {userData.length &&
                                userData.map (item => (
                                   <li onClick = {() => setId(item.id)}
                                       key={item.id} className='userItem'>
                                       <h3 className='userId'>{item.id} .</h3>
                                       <h4 className='userName'><b>Name :  </b> {item.name} </h4>
                                       <p className='userEmail'><b>Email :  </b> {item.email}</p>
                                       <p className='userStreet'><b>Street :  </b> {item.address.street}</p>
                                       <p className='userWebsite'> <b>Website :  </b> {item.website}</p>
                                       <p className='userCompany'><b>Company : </b> {item.company.name}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="posts">
                        <h3>Users</h3>
                        <p>Number of posts : <span>{postData.length}</span></p>
                        <ul className="posts-list">
                            {postData.length &&
                               postData.map (item => {
                                   return (
                                        <li onClick = {() => setPostId(item.id)}
                                            key={item.id} className='postItem'>
                                            <h3 className='postId'>{item.id}.</h3>
                                            <p className='postTitle'><b>Title</b> : {item.title}</p>
                                            <p className='postBody'><b>Body</b> : {item.body}</p>
                                        </li>
                                    )
                               })
                            } 
                        </ul>
                    </div>
                    <div className="comments">
                        <h3>Comments</h3>
                        <p>Number of comments : <span>{comment.length}</span></p>
                        <ul className="comments-list">
                            {comment.length && 
                              comment.map(item => {
                                  return (
                                      <li className='commentItem' key={item.id}>
                                          <h3>{item.id}.</h3>
                                          <p className='commentName'><b> Name : </b>{item.name}</p>
                                          <p className='commentEmail'><b> Email : </b>{item.email}</p>
                                          <p className='commentBody'><b> Body : </b>{item.body}</p>
                                      </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default UserInfo