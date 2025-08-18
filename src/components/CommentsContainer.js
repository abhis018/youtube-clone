import React from 'react';
import Comment from './Comment';

const commentsData = [
    {
        name: "Abhishek kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Abhishek kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [ {
        name: "Abhishek kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    }, {
        name: "Abhishek kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    }, {
        name: "Abhishek kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    }],
    },
    {
        name: "Abhishek kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Abhishek kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
    {
        name: "Abhishek kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    }
]

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
        <Comment data={commentsData[0]}/>
    </div>
  )
}

export default CommentsContainer;