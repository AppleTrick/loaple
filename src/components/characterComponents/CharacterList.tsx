import { RootState } from "modules";
import { CharacterSchedule } from "modules/CharacterSchedule";
import { useSelector } from "react-redux";
import CharacterInform from "./CharacterInform";

const CharacterList = () => {

    const dataValue = useSelector((state: RootState) => state.ScheduleReducer);

    return (
        <div>
            {dataValue.Characters.map((e: CharacterSchedule, i) => {
                return <CharacterInform key={i} characterData={e} />
            } )}
        </div>
    )
}

export default CharacterList;