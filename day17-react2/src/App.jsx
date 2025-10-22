
import './App.css'
import DarkMode from './components/DarkMode';
import FruitList from './components/FruitList';
import LikeButton from './components/LikeButton';
import NameChage from './components/NameChage';
import Test1 from './Test/Test1';
import UseStateEx1 from './useStateTest/UseStateEx1';
import UseStateEx2 from './useStateTest/UseStateEx2';

function App() {
  // 배열을 props로 넘기기
  let fruits = ["🍎 사과",  //0
              "🍌 바나나",  //1
              "🍇 포도"];   //2

  // 객체는 여러 정보를 묶어서 한번에 보낼때
  // Object 
  
  // let fruitInfo ={
  //   name : "🍎",
  //   price: 2000
  // };

  // // 만약 값이 없으면 과일의 가겨을 안 띄우고 싶다!
  // let fruitInfo2 = {
  //   name : "🍌",
  //   color: "yellow"
  // }

  return (
    <>
      {/* <UseStateEx1 /> */}
      <UseStateEx2 />
      <LikeButton />
      <NameChage />
      <DarkMode />


      {/* <Test1 /> */}


      {/* 객체 형태 */}
      {/* <FruitList items={fruitInfo}/>
      <FruitList items ={fruitInfo2} /> */}

      {/* 배열 형태
        <FruitList items={fruits}/> */}
    </>
  )
}

export default App

/*
  지금 부터 12시 20분까지 실습!(3개 중 하나 선택!)
  1. 실습문제 10문제 중에서 최소 5개 이상은 복습해보기
  2. 오전에 했던 내용들 그래도 5번 똑같이 작성하기
  3. 팀 스터디 회의진행


*/