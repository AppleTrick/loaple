import CheckButton from "components/buttonComponents/CheckButton";

type chacterInformation = {
    level: number;
    characterName: string;
}

type characterDaily = {
    chaosDungeon: {
        isDone: boolean;
        restGage: number;
    };
    DailyGuardian: {
        isDone: boolean;
        restGage: number;
    };
    DailyEffona : {
        isDone: boolean;
        restGage: number;
    };
    GuildCheck : boolean
}

type characterWeekly = {
    Valtan: {
        isDone: boolean;
        GateNumber: number;
    }
    Viakiss: {
        isDone: boolean;
        GateNumber: number;
    }
    Cucusaiton: {
        isDone: boolean;
        GateNumber: number;
    }
    Ablelshude: {
        isDone: boolean;
        GateNumber: number;
    }
    WeeklyEffona: {
        isDone: boolean;
    }
    GuildBoss: boolean;
}

type loaCharacterItem = {
    inform: chacterInformation;
    daily: characterDaily;
    weekly: characterWeekly;
}

const CharacterItem = () => {

    return (
        <>
            <CheckButton/>
        </>
    )
}

export default CharacterItem;