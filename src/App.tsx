import { checkConectTime, getConectTime, oneTimeReset, procyonDate } from "hooks/Date/Date";
import AppRouter from "router/AppRouter";

const App = () => {

  // 프로키온 컴퍼스에 보여주는 부분을 초기화 시켜준다.
  procyonDate(); // 이부분 수정 시켜줘야됨 => 날짜 기준이 아닌 오전 6시기준으로 해야됨;
  console.log(`마지막 접속시간 확인 ${new Date(getConectTime())}`);

  if (checkConectTime()) { // 이전 접속 기록이 없으면 접속기록을 생성시키고,  접속기록이 있으면 데이터 리셋을 해야될지 확인이 필요하다.
    oneTimeReset()
  }
  
  return (
    <AppRouter/>
  );
}

export default App;
