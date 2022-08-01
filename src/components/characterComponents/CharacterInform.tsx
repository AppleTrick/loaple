import { CharacterSchedule } from "modules/CharacterSchedule"
import CharacterItem from "./CharacterItem"

type characterInformProps = {
    characterData : CharacterSchedule
}

const CharacterInform = ({ characterData }: characterInformProps) => {

    const { CharacterName, Job } = characterData.CharacterInform
    const Daily = characterData.Daily;
    const Weekly = characterData.Weekly;

    return (
        <>  
            {/* inform */}
            <div>
                {CharacterName} {Job}icon
            </div>
            {/* Daily */}
            <CharacterItem isDone={Daily.ChaosDungeon.isDone} />
            <CharacterItem isDone={Daily.Gaurdian.isDone} />
            <CharacterItem isDone={Daily.DailyEffona.isDone} />
            <CharacterItem isDone={Daily.GuildCheck.isDone} />
            {/* Weekly */}
            <CharacterItem isDone={Weekly.Valtan.isDone} />
            <CharacterItem isDone={Weekly.Viakiss.isDone} />
            <CharacterItem isDone={Weekly.Kukusaiton.isDone} />
            <CharacterItem isDone={Weekly.Abrelshood.isDone} />
            <CharacterItem isDone={Weekly.Argos.isDone} />
            <CharacterItem isDone={Weekly.Kayangal.isDone} />
        </>
    )
}

export default CharacterInform