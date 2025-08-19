import Comment from './Comment';
import CommentsList from './CommentsList';

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
        replies: [
            {
        name: "Abhishek kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },
        ],
    }, {
        name: "Abhishek kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    }, {
        name: "Abhishek kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [{
        name: "Abhishek kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [{
        name: "Abhishek kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },],
    },],
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
        replies: [{
        name: "Abhishek kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },],
    },
    {
        name: "Abhishek kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [{
        name: "Abhishek kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [{
        name: "Abhishek kumar",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
    },],
    },],
    }
]

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments: </h1>
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer;