export type IListItem = {
    id: number;
    title: string;
    cards: ICardDto[];
}

export type ICardDto = {
    id: number;
    title: string;
}

export type ICard = {
    id: string;
    title: string;
    description: string;
}