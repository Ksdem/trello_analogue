import React from "react";
import {ListItemWrapper} from "./Component/ListItemWrapper";
import {Routes, useNavigate} from "react-router";
import {ListItem} from "../../Types/Types";


const ListWrapper = () => {
    // const items: ListItem[] = localStorage.getItem("items");
    const items: ListItem[] = [
        {
            id: 1,
            items: [
                {id: 1, title: 'Проснуться'},
                {id: 2, title: 'Встать'},
                {id: 3, title: 'Срать'},
            ]
        },
        {
            id: 2,
            items: [
                {id: 4, title: 'Проснуться 2'},
                {id: 5, title: 'Встать 3 '},
                {id: 6, title: 'Срать 4'},
            ]
        },
    ]



    return <div className="list-wrapper">
        {items.map((listItem: ListItem, index: number) => {
            return <ListItemWrapper key={index} listItemProps={listItem}/>
        })}
    </div>
}

export default ListWrapper;