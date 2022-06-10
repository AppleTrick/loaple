import DailyChacter from "./dailyCharacter/DailyCharacter";
import WeeklyCharcter from "./weeklyCharacter/WeeklyChacter";
import DailyGuild from "./dailyGuild/DailyGuild";
import WeeklyGuild from "./weeklyGuild/WeeklyGuild";

const MainContents = () => { 
    return (
        <>
            <h1>메인컨텐츠</h1>
            <div>
                케릭터 이름
            </div>
            <div>
                케릭터 레벨
            </div>
            <DailyChacter />
            <WeeklyCharcter/>
            <DailyGuild />
            <WeeklyGuild/>
        </>
    )
}
export default MainContents;