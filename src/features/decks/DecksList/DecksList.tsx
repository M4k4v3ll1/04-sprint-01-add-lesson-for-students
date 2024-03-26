import s from './DecksList.module.css'
import {AppRootState, useAppDispatch} from "../../../app/store";
import {useSelector} from "react-redux";
import {useEffect} from "react";
import {getDecksTC} from "../decks-reducer";

export const DecksList = () => {
    const dispatch = useAppDispatch()
    const decks = useSelector<AppRootState, any[]>(state => state.decks.decks)
    useEffect(() => {
        dispatch(getDecksTC())
        //deckAPI.fetchDecks()
    }, [])
    return <ul className={s.list}></ul>
}
