import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center", height:"100vh",background:"pink"}}>
    <div>
    <h1 style={{color:"yellow"}}>Counter</h1>
    <h1 style={{textAlign:"center"}}>{count}</h1>
      <button style={{color:"green"}}
        onClick={() => {
          setCount(count + 1);
        }}
      >
        inc
      </button>

      <button style={{color:"green"}}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        dec
      </button>
      <button style={{color:"green"}}
      onClick={() => {
        setCount(0)
      }}>reset</button>
    </div>  
    </div>
  );
}
export default Counter;