import { checkConectTime, getConnectTime, oneTimeReset, procyonDate, scheduleReset } from "hooks/Date/Date";
import AppRouter from "router/AppRouter";

const App = () => {

  procyonDate();
  console.log(`마지막 데이터 변경시간 확인 ${new Date(getConnectTime())}`);
  if (checkConectTime()) { // 이전 접속 기록이 없으면 접속기록을 생성시키고,
    scheduleReset();
    oneTimeReset()
  }
  
  return (
    <AppRouter/>
  );
}

export default App;
