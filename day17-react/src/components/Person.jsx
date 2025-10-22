// Person.jsx

// 이름하고 나이를 App에 받아오기 
//  현재 받아온 나이에서 +1 내년 나이를 계산하려는
//  것!
//  컴포넌트 - 내가 새로 만든 HTML태그 
export default function Person({name,age,gender}) {
    //자바스크립트 파일처럼 동작
    // typeof 변수명
    console.log(typeof name);
    console.log(typeof age);


  return (
    <div>
        <h3>이름:{name}</h3>
        <p>현재 나이: {age}</p>
        <p>내년 나이: {age +1}</p>
        <p>성별 :{gender ? "여성" : "남성"}</p>
    </div>
  )
}
