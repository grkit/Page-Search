import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log(posts);

  useEffect(()=> {
    const getAllPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data); 
      setLoading(false);
    };
    getAllPosts();
  },[])

  return (
    <div className="App">
      <input 
      type="text" 
      name="" 
      onChange={(e) => setSearchText(e.target.value)} 
      id="" 
      placeholder='Enter Post Title' 
      />
      {
        loading ? (<h2>Loading...</h2>
        ) : (
          posts
          .filter((value) => { 
            if(searchText =="")
            {
              return value;
            }
            else if(value.title.toLowercase().includes(searchText.toLowerCase())){
              return value;
            }
          })
          .map((item)=>{
          return <h2 key={item.id}>{item.title}</h2>;
        })
      )}
    </div>
  );
}

export default App;
