import { procyonDate } from "hooks/Date/Date";
import AppRouter from "router/AppRouter";

const App = () => {

  // 프로키온 컴퍼스에 보여주는 부분을 초기화 시켜준다.
  procyonDate(); 

  return (
    <AppRouter/>
  );
}

export default App;
