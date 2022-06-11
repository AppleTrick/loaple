import DailyChacter from "./dailyCharacter/DailyCharacter";
import WeeklyCharcter from "./weeklyCharacter/WeeklyChacter";
import DailyGuild from "./dailyGuild/DailyGuild";
import WeeklyGuild from "./weeklyGuild/WeeklyGuild";

const MainContents = () => { 
    return (
        <>
            <h1>메인컨텐츠</h1>
            <div style={{width: "100%" , height: 50 , backgroundColor : "royalblue"}}>
                <div style={{width : "100px" , height : 49 , backgroundColor : "red"}}>
                    케릭터이름
                </div>
            </div>
            <div style={{width: "100%" , height: 50 , backgroundColor : "royalblue"}}>
                <div style={{width : "100px" , height : 49 , backgroundColor : "red"}}>
                    케릭터 레벨
                </div>
            </div>
            <DailyChacter />
            <WeeklyCharcter/>
            <DailyGuild />
            <WeeklyGuild/>
        </>
    )
}
export default MainContents;