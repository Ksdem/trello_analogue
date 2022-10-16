import {GetList, SaveList} from "../../Service/LocalStorageService";
import {useEffect, useState} from "react";
import {IListItem} from "../../Types/Types";
import {useParams} from "react-router-dom";
import {useNavigate} from "react-router";


const Card = () => {
    const {listItemId, rowItemId} = useParams();
    const [indexData, setIndexData] = useState({listIndex: -1, cardIndex: -1});
    const [listItems, setList] = useState([] as IListItem[]);
    const navigate = useNavigate()

    useEffect(() => {
        const list = GetList();
        setList(list);
        console.log(list);
        console.log(listItemId, rowItemId);
        const result = list.findIndex(listItem => {
            return Number(listItemId) === listItem.id;


        })
        console.log(result)
        const resultCard = list[result].cards.findIndex(rowItem => {
            return Number(rowItemId) === rowItem.id;

        })
        console.log(resultCard);
        setIndexData({cardIndex: resultCard, listIndex: result});


    }, [listItemId, rowItemId])


    if (!listItems || listItems.length === 0) {
        return <></>;
    }

    const selectedItem = indexData.listIndex >= 0 && indexData.cardIndex >= 0
        ? listItems[indexData.listIndex]?.cards[indexData.cardIndex]
        : undefined;

    const onTitleChangeHandle = (e: any) => {
        const newValue = e.target.value;

        setList((prevState) => {
            const newArray = [...prevState];
            newArray[indexData.listIndex].cards[indexData.cardIndex].title = newValue;
            return newArray;
        });
    }

    const onSaveClickHandler = () => {
        SaveList(listItems);
        navigate('/')
    }
    return (
        <div>
            <input value={selectedItem?.title} onChange={onTitleChangeHandle}/>
            <br/>
            {JSON.stringify(listItems[indexData.listIndex].cards[indexData.cardIndex])}
            <br/>
            <button onClick={onSaveClickHandler}>Сохранить</button>
        </div>
    )
}
export default Card;
