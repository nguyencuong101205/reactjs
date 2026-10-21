// import { useState } from "react";
import { useEffect } from "react";

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

// const [job, setJob] = useState("");
// const [jobs, setJobs] = useState(() => {
//   const storedJobs = localStorage.getItem("jobs");
//   return storedJobs ? JSON.parse(storedJobs) : [];
// });

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
//   setCount(count + 1);
// };

// const [gift, setGift] = useState(null);

// const handleClick = () => {
//   const randomIndex = Math.floor(Math.random() * gifts.length);
//   setGift(gifts[randomIndex]);
// };

function App() {
  useEffect(() => {
    const storedJobs = localStorage.getItem("jobs");
    if (storedJobs) {
      setJobs(JSON.parse(storedJobs));
    }
  }, []);
}

return () => (
  // <div style={{ textAlign: "center", paddingTop: "20px" }}>
  //   <p>{gift || "Chọn một phần thưởng"}</p>
  //   <button onClick={handleClick}>Chọn phần thưởng</button>
  // </div>

  // <div className="App" style={{ textAlign: "center" }}>
  //   {/* <h1>{count}</h1>
  //   <button onClick={handleClick0}>Click me (0)</button>
  //   <button onClick={handleClick}>Click me</button> */}
  // </div>

  // <div style={{ padding: 50 }}>
  //   <input
  //     value={job}
  //     onChange={(e) => setJob(e.target.value)}
  //     placeholder="Nhập công việc"
  //   >
  //     <button onClick={() => setJobs([...jobs, job])}>Thêm</button>
  //   </input>
  //   <ul>
  //     {jobs.map((job, index) => (
  //       <li key={index}>{job}</li>
  //     ))}
  //   </ul>
  // </div>
  <div>Heloo Bear</div>
);
export default App;
