import React, {startTransition, useEffect, useState} from "react";
import {ListItem} from "./Component/ListItem";
import {IListItem} from "../../Types/Types";
import ListCreateItem from "./Component/ListCreateItem";
import {GetList, SaveList} from "../../Service/LocalStorageService";


const ListWrapper = () => {
    const [listItems, setListItems] = useState([] as IListItem[])
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) {
            setLoaded(true);
        } else {
            SaveList(listItems);
        }
    }, [listItems]);


    useEffect(() => {
        const list = GetList();

        setListItems(list);
        window.addEventListener('storage', onStorageUpdate);
        return () => {
            window.removeEventListener('storage', onStorageUpdate);
        }
    }, []);

    const onStorageUpdate = (e: StorageEvent) => {
        const { key, newValue } = e;
        console.log('onStorageUpdate', key, newValue)
        // console.log('CurrentInStorage', GetList)
        if (key === "listItems") {
            if (newValue) {
                setListItems(JSON.parse(newValue) as IListItem[]);
            } else {
                setListItems([]);
            }
        }
    };


    const onAddHandler = () => {
        setListItems((prevState: IListItem[]) => {
            let maxId = Math.max(...prevState.map(z => z.id));
            if (maxId < 0) {
                maxId = 0
            }
            return [...prevState, {id: maxId + 1, title: 'Новый список', cards: []}]
        })
    }
    const onDeleteHandler = (id: number) => {
        setListItems((prevState) => {
            const newArray = [...prevState];
            const index = newArray.map(x => x.id).indexOf(id);
            newArray.splice(index, 1);
            return newArray;
        })
    }
    const onAddCardHandler = (id: number) => {
        setListItems((prevState) => {
            const newArray = [...prevState];
            const index = newArray.map(x => x.id).indexOf(id);
            let maxId = Math.max(...newArray[index].cards.map(x => x.id)) ?? 0;
            if (maxId < 0) {
                maxId = 0
            }
            newArray[index].cards.push({id: (maxId) + 1, title: 'hello'})
            return newArray;
        })
    }
    const onTitleChangeHandler = (id: number, newTitle: string) => {
        setListItems((prevState) => {
            const newArray = [...prevState];
            const index = newArray.map(x => x.id).indexOf(id);
            newArray[index].title = newTitle;
            return newArray;
        })
    }

    return <div className="list-wrapper">
        {listItems.map((listItem: IListItem) => {
            return <ListItem key={listItem.id}
                             list={listItem}
                             onDelete={() => onDeleteHandler(listItem.id)}
                             onAddCard={() => onAddCardHandler(listItem.id)}
                             onTitleChange={(text) => onTitleChangeHandler(listItem.id, text)}/>
        })}
        <ListCreateItem onAdd={onAddHandler}/>
    </div>
}

export default ListWrapper;