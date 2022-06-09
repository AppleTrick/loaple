import Td from "./Td";

const Tr = ({ info, handleRemove, handleEdit }: { info: userData[], handleRemove: (id :string ) => void, handleEdit: (item : userData) => void }) => {
    return (
        <tbody>
            {
                info.map((item) => {
                    return (
                        <Td key={item.id} item={item} handleRemove={handleRemove} handleEdit={handleEdit}/>
                    )
                })
            }
        </tbody>
    )
}

export default Tr;