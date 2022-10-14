export type IListCreateItemProps = {
    onAdd: () => void
}
const ListCreateItem = (props: IListCreateItemProps) => {
    const onClickHandler = () => {
        props.onAdd();
    }
    return <div className="list-create-item" onClick={onClickHandler}>
        + Добавьте еще одну колонку
    </div>
}

export default ListCreateItem;