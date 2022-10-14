import {IListItem} from "../Types/Types";

const GetList = (): IListItem[] => {
    const valueFromStorage = localStorage.getItem('listItems');
    if (valueFromStorage)
        return JSON.parse(valueFromStorage) as IListItem[]
    return [];
}

const SaveList = (newList: IListItem[]) => {
    localStorage.setItem('listItems', JSON.stringify(newList));
}

export {
    GetList,
    SaveList,
};