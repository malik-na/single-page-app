/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

// import { useEffect, useState } from "react";

// const App = () => {
//   const savedBlogs = JSON.parse(localStorage.getItem("blogs"));
//   const [blogs, setBlogs] = useState(savedBlogs || []);
//   const [blogContent, setBlogContent] = useState({});
//   // const [currentCommentId, setCurrentCommentId] = useState(null);
//   const handleInput = (event, key) => {
//     setBlogContent((prevContent) => ({
//       ...prevContent,
//       [key]: event.target.value,
//     }));
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (!blogContent.title || !blogContent.content) {
//       alert("Title or Content is missing!");
//     } else {
//       setBlogs([...blogs, blogContent]);
//     }
//     setBlogContent("");
//   };

//   useEffect(() => {
//     localStorage.setItem("blogs", JSON.stringify(blogs));
//   }, [blogs]);

//   // const handleCurrentCommentIdUpdate = (newId) => {
//   //   setCurrentCommentId(newId);
//   // };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         width: "100svw",
//         textAlign: "left",
//       }}
//     >
//       <form
//         action="submit"
//         style={{ display: "flex", flexDirection: "column", gap: "20px" }}
//         onSubmit={handleSubmit}
//       >
//         <textarea
//           name="title"
//           id="title"
//           cols="30"
//           rows="1"
//           value={blogContent.title}
//           onChange={(e) => handleInput(e, "title")}
//         ></textarea>
//         <textarea
//           name="content"
//           id="content"
//           cols="30"
//           rows="10"
//           value={blogContent.content}
//           onChange={(e) => handleInput(e, "content")}
//         ></textarea>
//         <button>Post</button>
//       </form>
//       {blogs.map((blog, index) => {
//         return (
//           <div
//             key={index}
//             style={{
//               background: "white",
//               color: "black",
//               margin: "20px",
//               padding: "20px",
//               borderRadius: "10px",
//               boxShadow: "1px 5px 5px lightgrey",
//               // width: "900px",
//             }}
//           >
//             <h3>{blog.title}</h3>
//             <p>{blog.content}</p>
//             <CommentBox />
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default App;

// const CommentBox = () => {
//   const initialComments = JSON.parse(localStorage.getItem("allComments"));
//   const [allComments, setAllComments] = useState(initialComments || []);
//   const [comment, setComment] = useState({
//     mainComment: "",
//   });

//   const [isReplyBoxVisible, setIsReplyBoxVisible] = useState({});
//   const initialReplies = JSON.parse(localStorage.getItem("replies"));
//   const [replies, setReplies] = useState(initialReplies || {});
//   const [reply, setReply] = useState("");

//   const handleCommentSubmit = (event) => {
//     event.preventDefault();
//     const newCommentId = Date.now();
//     if (comment.mainComment != "") {
//       setAllComments([...allComments, { ...comment, id: newCommentId }]);
//       // onUpdateId(newCommentId);
//       setComment({ mainComment: "" });
//     }
//   };

//   const handleCommentInput = (event, key) => {
//     setComment({ ...comment, [key]: event.target.value });
//   };

//   const handleReplyInput = (event) => {
//     setReply(event.target.value);
//   };

//   const handleReplySubmit = (event, commentId) => {
//     event.preventDefault();
//     const newReplies = { ...replies };
//     if (!newReplies[commentId]) {
//       newReplies[commentId] = [];
//     }
//     newReplies[commentId].push(reply);
//     setReplies(newReplies);
//     setReply("");
//     setIsReplyBoxVisible({ ...isReplyBoxVisible, [commentId]: false });
//   };
//   const toggleReplyBox = (commentId) => {
//     setIsReplyBoxVisible({
//       ...isReplyBoxVisible,
//       [commentId]: !isReplyBoxVisible[commentId],
//     });
//   };

//   useEffect(() => {
//     localStorage.setItem("allComments", JSON.stringify(allComments));
//   }, [allComments]);

//   useEffect(() => {
//     localStorage.setItem("replies", JSON.stringify(replies));
//   }, [replies]);

//   return (
//     <div>
//       {/* Comment Form */}
//       <form
//         onSubmit={handleCommentSubmit}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           gap: "20px",
//           justifyContent: "center",
//           alignItems: "center",
//           marginTop: "50px",
//           marginBottom: "30px",
//         }}
//       >
//         <textarea
//           cols="30"
//           rows="10"
//           autoFocus
//           placeholder="Write a comment..."
//           value={comment.mainComment}
//           onChange={(e) => handleCommentInput(e, "mainComment")}
//         />
//         <button>Comment</button>
//       </form>
//       {/* Comment Form */}
//       {/* Rendering Comments Here */}
//       {allComments.map((item, index) => {
//         return (
//           <div
//             key={index}
//             style={{ display: "flex", gap: "20px", flexDirection: "column" }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 gap: "20px",
//                 justifyContent: "center",
//                 alignItems: "center",
//               }}
//             >
//               {item.mainComment}
//               {/* Reply button here */}
//               <button onClick={() => toggleReplyBox(item.id)}>Reply</button>
//             </div>
//             {/* Reply button here */}
//             {/* Reply Box */}
//             {isReplyBoxVisible[item.id] && (
//               <form
//                 onSubmit={(e) => handleReplySubmit(e, item.id)}
//                 style={{
//                   display: "flex",
//                   gap: "20px",
//                   justifyContent: "center",
//                   alignItems: "center",
//                 }}
//               >
//                 <textarea
//                   cols="30"
//                   rows="5"
//                   autoFocus
//                   placeholder="Write a reply..."
//                   value={reply}
//                   onChange={handleReplyInput}
//                 />
//                 <button>Submit</button>
//               </form>
//             )}
//             {/* Reply Box */}
//             {/* Rendereing Reply here */}
//             {replies[item.id] &&
//               replies[item.id].map((reply, replyIndex) => {
//                 return <p key={replyIndex}>{reply}</p>;
//               })}

//             {/* Rendereing Reply here */}
//           </div>
//         );
//       })}
//       {/* Rendering Comments Here */}
//     </div>
//   );
// };

import "./App.css";
import Navbar from "./Components/Navbar";

import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BlogContext } from "./context/BlogContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Components/firebase";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogContent, setBlogContent] = useState({});

  const setBlogsData = async () => {
    let temp = [];
    const querySnapshot = await getDocs(collection(db, "Blogs"));
    querySnapshot.forEach((doc) => {
      temp.push(doc.data());
    });
    setBlogs(temp);
  };

  useEffect(() => {
    setBlogsData();
  }, []);

  return (
    <BlogContext.Provider
      value={{ blogContent, setBlogContent, blogs, setBlogs }}
    >
      <Navbar />
      <Outlet />
      <ToastContainer />
    </BlogContext.Provider>
  );
};

export default App;
