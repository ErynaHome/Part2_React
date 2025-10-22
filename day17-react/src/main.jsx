import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
// 콘솔에서 log,alert()했을 때 
// 2번씩 실행되는 이유는 리액트가 개발자 실수를 미리
// 잡기 위해서 검사용 기능이다!
// StrictMode !  -- 개발자 실수하지않게 1번더 실행
// npm run dev -- 개발모드 1번실행
