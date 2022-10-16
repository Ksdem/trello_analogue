import React from "react";
import {IListItem, ICardDto} from "../../../Types/Types";
import {useNavigate} from "react-router";
import TextEditor from "../TextEditor";

export type IListItemProps = {
    list: IListItem;
    onDelete: () => void;
    onAddCard: () => void;
    onTitleChange: (text: string) => void;

}

export const ListItem = ({list, onDelete, onAddCard, onTitleChange}: IListItemProps) => {
    const navigate = useNavigate();

    const onClickHandler = (item: ICardDto) => {
        navigate(`/edit/${list.id}/${item.id}`)
    }
    const onAddHandler = () => {
        /* navigate(`/edit/${list.id}`)*/
        onAddCard();
    }
    const onDeleteHandler = () => {
        onDelete();
    }

    const onTitleChangeHandler = (text: string) => {
        onTitleChange(text);
    }

    return (
        <div className='list-item'>
            <div className="list-item__title">
                <TextEditor text={list.title} onChange={onTitleChangeHandler}/>
            </div>
            <div className="list-item__cards">
                {list.cards.map((card: ICardDto, index: number) => {
                    return <div key={index} onClick={_ => onClickHandler(card)}>{card.title}</div>
                })}
            </div>
            <div className='list-item__buttons'>
                <button onClick={onAddHandler}>Добавить</button>
                <button onClick={onDeleteHandler}>Удалить</button>
            </div>
        </div>
    )
}