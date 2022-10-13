export type ListItem = {
    id: number;
    items: RowItemDto[];
}

export type RowItemDto = {
    id: number;
    title: string;
}

export type RowItem = {
    id: string;
    title: string;
    description: string;
}