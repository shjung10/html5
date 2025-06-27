import { useState } from 'react';

function App() {

  function getdate() {
    const date = new Date();
    const a = date.toLocaleDateString('ko-KR')
    const b = date.toLocaleTimeString('ko-KR')

    console.log("a", a)
    console.log("b", b)

    //return a + '' +b
  }



  return (
    <div>
      출퇴근{getdate()}
    </div>
  )
}

export default App
