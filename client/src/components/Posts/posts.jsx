// import Post from "../Post/Post";
// import "./posts.scss";
// import { useQuery } from "@tanstack/react-query";
// import { makeRequest } from "../../axios";

// const Posts = () => {
//   const { isLoading, error, data } = useQuery(["posts"], () =>
//     makeRequest.get("/posts").then((res) => {
//       return res.data;
//     })
//   );


// console.log(data);
//   return (

    
//     <div className="posts">
//       {error
//         ? "Something went wrong!"
//         : isLoading
//         ? "loading"
//         : data.map((post) => <Post post={post} key={post.id} />)}


//     </div>
//   );
// };

// export default Posts;

import Post from "../Post/Post";
import "./posts.scss";

const Posts = () => {
  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "Muhammad Sanaullah",
      userId: 1,
      profilePic:
        "https://i.postimg.cc/VstndRgb/IMG-20230413-170805-149.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "https://i.postimg.cc/VstndRgb/IMG-20230413-170805-149.jpg",
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