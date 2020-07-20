import { ChangeEvent, useState } from 'react'
import { INewItem } from '../shared/interface';

const useToDoState = () => {
    const [list, setList]: [INewItem[], any] = useState([]);
    const [newItem, setNewItem]: [INewItem, any] = useState({ key: 0, value: '' })

    // useEffect(() => setNewItem({ key: 0, value: "" }));

    const onDeleteItem = (key: number) => {
        const newList: any = list.filter((item: INewItem) => item.key !== key);
        setList(newList);
    };

    const onAddItem = (e: ChangeEvent) => {
        e.preventDefault();
        if (newItem.value !== "") {
            const newList: any = [...list, newItem];
            setList(newList);
            setNewItem({ key: 0, value: "" })
        }
    };
    const onUpdateItem = (key: number, value: string) => {
        const newList = [...list];
        newList.forEach((item: INewItem) => {
            if (item.key === key) {
                item.value = value;
            }
        });
        setList(newList);
    };

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        const { value }: { value: string } = e.target;
        const key = Date.now();
        setNewItem({ value, key })
    };

    return { list, newItem, handleInput, onUpdateItem, onAddItem, onDeleteItem }
}

export default useToDoState;