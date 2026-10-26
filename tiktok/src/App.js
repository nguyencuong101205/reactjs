// import Counter from "./Counter";

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
//     <div style={{ padding: 30 }}>
//       <ul>
//         {lessons.map((lesson) => (
//           <li key={lesson.id} style={{ marginBottom: 10 }}>
//             <button
//               style={{
//                 color: lessonId === lesson.id ? "red" : "#333",
//                 cursor: "pointer",
//               }}
//               onClick={() => setLessonId(lesson.id)}
//             >
//               {lesson.name}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Content;

// function App() {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [products, setProducts] = useState([]);

//   const nameRef = useRef();

//   const handleSubmit = () => {
//     setProducts([
//       ...products,
//       {
//         name,
//         price,
//       },
//     ]);
//     setName("");
//     setPrice("");

//     nameRef.current.focus();
//   };
// console.log("products", products);

//   const total = useMemo(() => {
//     const result = products.reduce(
//       (result, product) =>
//         console.log("Tinh Total") || result + Number(product.price),
//       0,
//     );
//     return result;
//   }, [products]);

//   return (
//     <div style={{ padding: 20 }}>
//       <input
//         ref={nameRef}
//         value={name}
//         placeholder="Enter name..."
//         onChange={(e) => setName(e.target.value)}
//       />
//       <br />
//       <input
//         value={price}
//         placeholder="Enter price..."
//         onChange={(e) => setPrice(e.target.value)}
//       />
//       <br />
//       <button onClick={handleSubmit}>Add</button>
//       <br />
//       Total: {total}
//       <ul>
//         {products.map((product, index) => (
//           <li key={index}>
//             {product.name} - {product.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

// useReducer là một hook trong React được sử dụng để quản lý state phức tạp hơn so với
// useState. Nó cho phép bạn xác định một reducer function,
// nơi bạn có thể xử lý các action và cập nhật state dựa trên action đó.
// useReducer thường được sử dụng khi state có nhiều giá trị hoặc
// khi logic cập nhật state phức tạp.

// 1. Init state: 0
// 2. Action: UP => state + 1, DOWN => state - 1, RESET => state = 0
// 3. Reducer: (state, action) => newState
// 4. Dispatch: Gọi action để cập nhật state

// const initState = 0;

// const UP_ACTION = "up";
// const DOWN_ACTION = "down";
// const RESET_ACTION = "reset";

// const reducer = (state, action) => {
//   switch (action) {
//     case UP_ACTION:
//       return state + 1;
//     case DOWN_ACTION:
//       return state - 1;
//     case RESET_ACTION:
//       return initState;
//     default:
//       throw new Error("Invalid action");
//   }
// };

// function App() {
//   const [count, dispatch] = useReducer(reducer, initState);

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>{count}</h1>
//       <button onClick={() => dispatch(UP_ACTION)}>UP</button>
//       <button onClick={() => dispatch(DOWN_ACTION)}>DOWN</button>
//       <button onClick={() => dispatch(RESET_ACTION)}>RESET</button>
//     </div>
//   );
// }

// export default App;

// import { useState, useRef } from "react";
// import { useStore, actions } from "./Store";

// function App() {
//   const [state, dispatch] = useStore();
//   const { todos, todoInput } = state;
//   const [editIndex, setEditIndex] = useState(null);
//   const inputRef = useRef();

//   const handleAdd = () => {
//     if (!todoInput.trim()) return;

//     if (editIndex !== null) {
//       dispatch(actions.updateTodo({ index: editIndex, todo: todoInput }));
//       setEditIndex(null);
//     } else {
//       dispatch(actions.addTodo(todoInput));
//     }

//     dispatch(actions.setTodoInput(""));
//     inputRef.current.focus();
//   };

//   const handleEdit = (index) => {
//     setEditIndex(index);
//     dispatch(actions.setTodoInput(todos[index]));
//     inputRef.current.focus();
//   };

//   const handleCancelEdit = () => {
//     setEditIndex(null);
//     dispatch(actions.setTodoInput(""));
//     inputRef.current.focus();
//   };

//   const handleDelete = (index) => {
//     if (editIndex === index) {
//       handleCancelEdit();
//     }
//     dispatch(actions.deleteTodo(index));
//   };

//   return (
//     <div style={{ padding: 30, maxWidth: 500 }}>
//       <h2>Todo List (Store)</h2>
//       <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
//         <input
//           ref={inputRef}
//           value={todoInput}
//           placeholder="Nhập công việc..."
//           onChange={(e) => {
//             dispatch(actions.setTodoInput(e.target.value));
//           }}
//           style={{ flex: 1, padding: "8px 12px" }}
//           onKeyDown={(e) => {
//             if (e.key === "Enter") handleAdd();
//           }}
//         />
//         <button onClick={handleAdd} style={{ padding: "8px 16px" }}>
//           {editIndex !== null ? "Lưu" : "Thêm"}
//         </button>
//         {editIndex !== null && (
//           <button onClick={handleCancelEdit} style={{ padding: "8px 16px" }}>
//             Hủy
//           </button>
//         )}
//       </div>

//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index} style={{ marginBottom: 8 }}>
//             <span style={{ marginRight: 12 }}>{todo}</span>
//             <button
//               onClick={() => handleEdit(index)}
//               style={{ marginRight: 8, cursor: "pointer" }}
//             >
//               Sửa
//             </button>
//             <button
//               onClick={() => handleDelete(index)}
//               style={{ cursor: "pointer", color: "red" }}
//             >
//               Xóa
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import { useRef } from "react";
import Video from "./Video";

function App() {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div style={{ padding: 20 }}>
      <Video ref={videoRef} />
      <div style={{ marginTop: 10 }}>
        <button
          onClick={handlePlay}
          style={{ marginRight: 8, padding: "6px 16px", cursor: "pointer" }}
        >
          Play
        </button>
        <button
          onClick={handlePause}
          style={{ padding: "6px 16px", cursor: "pointer" }}
        >
          Pause
        </button>
      </div>
    </div>
  );
}

export default App;
