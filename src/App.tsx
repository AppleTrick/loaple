import { procyonDate } from "hooks/Date/Date";
import AppRouter from "router/AppRouter";

const App = () => {

  // 프로키온 컴퍼스 데이터를 처음에 초기화 시켜줌 => 한번만 초기화 시켜야 되기 때문에 메인을 만들때만 생성해준다.
  procyonDate(); 

  return (
    <AppRouter/>
  );
}

export default App;
