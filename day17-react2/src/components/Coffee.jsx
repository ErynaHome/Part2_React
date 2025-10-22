// Coffee.jsx

import React from 'react'

export default function Coffee({name,price}) {
  return (
    <div>
        <h3>{name}</h3>
        {/* 가격이 있으면 3000원  없으면 "" 
         삼항 연산자에 price 만 값이 있으면  true
                                 없으면  false
            
        false는 0 이다! ,null ,undefined

        display 속성에서 none해버리면 공간 자체가 사라진다.
        아래쪽에 위쪽으로 올라온다. 그러다 보면 레이아웃이나
        화면배치가 깨질 수있다. 
        */}
        <p style={
            {display: price ? 'block' : 'none'}
        }>{price ? `${price}원` : ""}</p>
    </div>
  )
}
