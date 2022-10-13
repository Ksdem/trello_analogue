import React from "react";
import {ListItem, RowItemDto} from "../../../Types/Types";
import {useNavigate} from "react-router";

export type IListItemWrapperProps = {
    listItemProps: ListItem;
}

export const ListItemWrapper = ({listItemProps}: IListItemWrapperProps) => {
    const navigate = useNavigate();

    const onClickHandler = (item: RowItemDto) => {
        navigate(`/edit/${listItemProps.id}/${item.id}`)
    }
    const onAddHandler=()=>{
        navigate(`/edit/${listItemProps.id}`)
    }

    return (
        <div className='list-item-wrapper'>
            {listItemProps.items.map((item: RowItemDto, index) => {
                return <div onClick={_ => onClickHandler(item)}>{item.title}</div>
            })}
            <div className='button'>
                <button onClick={onAddHandler}>Добавить</button>
                <button>Удалить</button>
            </div>

        </div>
    )
}