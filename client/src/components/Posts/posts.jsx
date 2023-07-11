import Post from "../Post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "John Ahmed",
      userId: 1,
      profilePic:
        "https://i.postimg.cc/VstndRgb/IMG-20230413-170805-149.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://i.postimg.cc/P5gKTsfh/20230624-221844.jpg",
    },
    {
      id: 2,
      name: "Rabe Ahmed",
      userId: 2,
      profilePic:
        "https://i.postimg.cc/VstndRgb/IMG-20230413-170805-149.jpg",
      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
    },
  ];

  return <div className="posts">
    {posts.map(post=>(
      <Post post={post} key={post.id}/>
    ))}
  </div>;
};

export default Posts;