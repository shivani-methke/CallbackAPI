import logo from './logo.svg';
import './App.css';
// import axios from "axios"
import{useEffect} from "react";

function App() {
  useEffect(()=>{
    fetch("https://dummyapi.online/api/movies")
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
    })
    .catch((error)=>{
      console.error('Error fetching the data',error);
    })
  },[]);
  return (
   <div></div>
  );
}

export default App;







// import logo from './logo.svg';
// import './App.css';
// import axios from "axios"
// import{useEffect} from "react";

// function App() {
//   useEffect(()=>{
//     axios.get("https://dummyapi.online/api/movies").then((res)=>{
//       console.log(res.data)
//     })
//   },[])
//   return (
//    <div></div>
//   );
// }

// export default App;

