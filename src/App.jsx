// import './App.js';
// import React, { useState } from 'react';
// import InputField from './InputField';


// function App() {
//     // 상태 변수 선언 -> 입력 필드의 값 저장
//     const [idValue, setidValue] = useState('');
//     const [pwValue, setpwValue] = useState('');

//     // 값 변경시 상태 업뎃 ->아이디
//     const handleidChange = (event) => {
//         setidValue(event.target.value);
//       };

//     // 값 변경시 상태 업뎃 -> 패스워드
//     const handlepwChange = (event) => {
//         setpwValue(event.target.value);
//       };
  
//     return (
//         <div className="centered-container">
//         <div className="login-card">
        
//         <h2 className="custom-font">Sign In</h2>
//         ID:
//         <input 
//           type="text" 
//             value={idValue} 
//             onChange={handleidChange} 
//           placeholder="ID를 입력하세요" 
//         />
//         <br />
//          PW:
//         <input 
//           type="text" 
//             value={pwValue} 
//             onChange={handlepwChange} 
//           placeholder="PW를 입력하세요" 
//         />
//         <button className="custom-button">로그인하기</button>
//         </div>
//       </div>
//     );
//   }

// export default App;