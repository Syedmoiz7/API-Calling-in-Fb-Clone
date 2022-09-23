import './clone.css';
// import { AiFillLike} from 'react-icons/ai' ;
import { FaRegThumbsUp, FaRegCommentAlt, FaRegShareSquare } from 'react-icons/fa';
import moment from 'moment';

let imge = localStorage.getItem("class")
console.log(imge);

const Post = ({ name, profilePhoto, postTime, postText, postImage, }) => (
  <div className={`post ${imge ? "Darke" : "Lighte"}`}>
    <div className='header'>
      <img className='image' src={profilePhoto} alt='Profile' />

      <div>
        <span className='name'> {name}</span> <br />
        <span className='postTime'>{moment(postTime).fromNow()}</span>
      </div>
    </div>

    <div className='postText'>
      {postText}
    </div>

    <img className='postImage' src={postImage} alt="postPic" />

    <hr />

    <div className='postFooter'>
      <div><FaRegThumbsUp className='icon' /> Like</div>
      <div><FaRegCommentAlt className='icon' /> Comment</div>
      <div><FaRegShareSquare className='icon' /> Share</div>
    </div>
    
    <hr />

  </div>


);



export default Post;