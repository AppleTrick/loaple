import { checkConectTime, getConnectTime, oneTimeReset, procyonDate, scheduleReset } from "hooks/Date/Date";
import AppRouter from "router/AppRouter";
import "./App.css";

const App = () => {

  procyonDate(); // 프로키온 외부 표기 변경 
  console.log(`마지막 데이터 변경시간 확인 ${new Date(getConnectTime())}`);

  if (checkConectTime()) { 
    scheduleReset(); // 일간 스케줄 리셋 함수
    oneTimeReset() // 프로키온 데이터 내부 데이터 리셋
  }
  
  return (
    <AppRouter/>
  );
}

export default App;
