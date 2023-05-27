import React,{useState ,useEffect} from 'react'
import axios from 'axios'

function DataFecting() {

    const [post, setPost]= useState({})
    const [id , setID] = useState(1)
    const[idfromButton, setIdfromButton] = useState(1)
 
    const handleClick =() =>{
        setIdfromButton(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idfromButton}`).then(res => {
            console.log(res)
            setPost(res.data)
        } )
        .catch(err =>{
            console.log(err)
        },[id])
    })

  return (
    <div>
        <input type='text' value={id} onChange={e =>setID(e.target.value)}></input>
        <button type='button' onClick={handleClick}>Fetch Post</button>
        <div>{post.title}</div>
      {/* <ul>
        {
            post.map(post => <li key={post.id}>{post.title}</li>)
        }
      </ul> */}
    </div>
  )
}

export default DataFecting