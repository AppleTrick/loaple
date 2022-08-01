import CheckButton from "components/buttonComponents/CheckButton";

type CharacterItemProps = {
    isDone :boolean
}

const CharacterItem = ({isDone} : CharacterItemProps) => {

    return (
        <>
            <CheckButton isDone={isDone} />
        </>
    )
}

export default CharacterItem;