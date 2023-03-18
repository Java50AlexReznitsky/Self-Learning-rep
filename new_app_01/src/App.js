import React, { useState } from 'react'
// import Counter from './components/Counter';
// import ClassCounter from './components/ClassCounter'
import './styles/App.css'
import PostList from './components/PostList';
import PostItem from './components/PostItem';
import MyButton from './components/UI/button/MyButton';


function App() {
  // const [likes, setLikes] = useState(5)
  // const [value, setValue] = useState('TEXT IN INPUT')
  // let likes = 5;        // wont work since virtual DOM doesn't know that something changed, we need useState()
  // function increment(){
  //   likes += 1;
  //   console.log(likes)
  // }
  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript', body: 'Description' },
    { id: 3, title: 'JavaScript', body: 'Description' },
    { id: 4, title: 'JavaScript', body: 'Description' },
  ])
  // const [posts2, setPosts2] = useState([
  //   { id: 1, title: 'Python', body: 'Description' },
  //   { id: 2, title: 'Python', body: 'Description' },
  //   { id: 3, title: 'Python', body: 'Description' },
  //   { id: 4, title: 'Python', body: 'Description' },
  // ])

  return (
    <div className="App">
      {/* <h1>{likes}</h1>
      <h1>{value}</h1>
      <input
        type="text"
        value={value}
        onChange={event => setValue(event.target.value)}
      /> */}
      {/* <Counter /> */}
      {/* <ClassCounter /> */}
      {/* <PostItem post={{ id: 1, title: 'JavaScript', body: 'Description' }} />
      <PostItem post={{ id: 2, title: 'JavaScript', body: 'Description' }} />
      <PostItem post={{ id: 3, title: 'JavaScript', body: 'Description' }} />
      <PostItem post={{ id: 4, title: 'JavaScript', body: 'Description' }} /> */}
      {/* <PostList posts={posts2} title='Posts about Python' /> */}
      <form>
        <input type="text" placeholder='post name' />
        <input type="text" placeholder='post description' />
        <MyButton disabled>create post</MyButton>
      </form>
      <PostList posts={posts} title='Posts about JS' />
    </div>
  );
}

export default App;
