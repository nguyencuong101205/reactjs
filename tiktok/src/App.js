import { useState, useEffect } from "react";

// const order = [100, 200, 300, 400, 500];

// const gifts = [
//   "CPU i9",
//   "RAM 32GB",
//   "SSD 1TB",
//   "Màn hình 4K",
//   "Chuột gaming",
//   "Bàn phím cơ",
//   "Tai nghe bluetooth",
//   "Loa bluetooth",
//   "Ổ cứng di động",
//   "USB 128GB",
// ];

// function App() {
// const [count, setCount] = useState(() => {
//   return order.reduce((total, current) => total + current, 0);
// });

// const [count, setCount] = useState(0);

// Sử dụng callback có thể giúp bạn tránh được vấn đề về giá trị count cũ
// khi setCount nhiều lần trong cùng một event handler
// nhưng nó chỉ re-render 1 lần
// const handleClick0 = () => {
//   setCount((prevCount) => prevCount + 1);
//   setCount((prevCount) => prevCount + 1);
//   setCount((prevCount) => prevCount + 1);
// };

// Khi không sử dung callback, giá trị count sẽ không được cập nhật ngay lập tức,
// dẫn đến việc setCount nhiều lần trong cùng một event handler sẽ
// chỉ tăng count lên 1 lần duy nhất.
// const handleClick = () => {
//   setCount(count + 1);
//   setCount(count + 1);
//   setCount(count + 12);
// };

// const [gift, setGift] = useState(null);

// const handleClick = () => {
//   const randomIndex = Math.floor(Math.random() * gifts.length);
//   setGift(gifts[randomIndex]);
// };

// function App() {
//   const [avatar, setAvatar] = useState();

//   useEffect(() => {
//     return () => {
//       if (avatar) {
//         avatar && URL.revokeObjectURL(avatar.preview);
//       }
//     };
//   }, [avatar]);

//   const handlePreviewAvatar = (e) => {
//     const file = e.target.files[0];
//     file.preview = URL.createObjectURL(file);
//     setAvatar(file);
//   };

//   return (
//     <div>
//       <input type="file" onChange={(e) => handlePreviewAvatar(e)} />
//       {avatar && <img src={avatar.preview} alt="" width="200" height="200" />}
//     </div>
//   );
// }

// export default App;

// const lessons = [
//   {
//     id: 1,
//     name: "Bài 1: Giới thiệu React",
//   },
//   {
//     id: 2,
//     name: "Bài 2: JSX và Component",
//   },
//   {
//     id: 3,
//     name: "Bài 3: Props và State",
//   },
// ];

// function Content() {
//   const [lessonId, setLessonId] = useState(1);

//   useEffect(() => {
//     window.addEventListener(`lesson-${lessonId}`, handleComment);

//     return () => {
//       window.removeEventListener(`lesson-${lessonId}`, handleComment);
//     };
//   }, [lessonId]);

//   function handleComment({ detail }) {
//     console.log(detail);
//   }

//   return (
//     <div>
//       <ul>
//         {lessons.map((lesson) => (
//           <li key={lesson.id}>
//             <button onClick={() => setLessonId(lesson.id)}>
//               Thoat chọn {lesson.name}
//             </button>
//             <button onClick={() => setLessonId(lesson.id)}>
//               {lesson.name}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Content;
