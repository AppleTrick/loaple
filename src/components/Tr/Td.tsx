const Td = ({item, handleRemove, handleEdit} : {item : userData , handleRemove : (id :string ) => void, handleEdit : (item :userData ) => void}) => {
    const onRemove = () : void => {
        handleRemove(item.id);
    }
    const onEdit = () => {
        handleEdit(item);
    }
    
    return (
        <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
        </tr>
    )
}

export default Td;