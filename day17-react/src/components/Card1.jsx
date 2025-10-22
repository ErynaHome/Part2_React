//  Card1.jsx

// 1. 자바스크립트를 이용해서 움직이는 사이트를 만들 때 
//    자바스크립트 안에서 HTML 문법을 사용하는 것 바로 리액트!
//    단축키 rfc

// 2. 컴포넌트?
//    HTML 태그를 묶어서 새로운 태그를 만든것!
// 3. components 폴더 
//  - 리액트에서 기능별로 나누어서 관리하는 폴더!

export default function Card1({title}) {
  return (
    <div>
        <img src=''></img>
        <button>담기</button>
        <h4>{title}</h4>
    </div>
  )
}

