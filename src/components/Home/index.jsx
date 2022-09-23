import { useState, useEffect } from 'react'
import "./index.css"
import Post from "./clone.jsx"
import axios from 'axios'
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs';

function Home() {
  const [isLit, setLit] = useState(true);
  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/minzamammalik/jsonplaceholder/posts")
      .then(response => {
        // console.log(response)
        setPosts(response.data)
      })
      .catch(err => {
        console.log("error: ", err  )
      })
  }, [])

  const clickHandler = () => {
    console.log("click handler")
    setLit(!isLit)
    localStorage.setItem("class", `${isLit}`)
  }

  return (
    <div className={`room ${(isLit) ? "Lit" : "Dark"} `}>
      <div className='logo'>
        <div className='screen'>
          Screen Mode: {(isLit) ? "Light" : "Dark"}
        </div>
        <button onClick={clickHandler}>{(isLit) ? <BsSunFill /> : <BsFillMoonFill />} </button>
      </div>
      {
        posts.map((eachPost, i) => (
          <div className='apiContainer'>
          <Post
            name={eachPost.name}
            profilePhoto={eachPost.profilePhoto}
            postTime={eachPost.postTime}
            postText={eachPost.postText}
            postImage="https://cdn.motor1.com/images/mgl/mrz1e/s3/coolest-cars-feature.jpg"
            ></Post>
          </div>
        ))
      }

    </div>
  );
}

export default Home;