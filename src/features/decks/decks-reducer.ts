import {deckAPI} from "./decks-api";
import {Dispatch} from "redux";

const initialState = {
    decks: [] as any[], // todo: add type
    searchParams: {
        name: '',
    },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
    switch (action.type) {
        case "GET-DECKS":
            return {...state, decks: action.decks}
        default:
            return state
    }
}

export const getDecksAC = (decks: any[]) => ({type: 'GET-DECKS', decks} as const)

export const getDecksTC = () => (dispatch: Dispatch<DecksActions>) => {
    deckAPI.fetchDecks()
        .then(res => {
            dispatch(getDecksAC(res.data))
        })
}

type DecksActions = ReturnType<typeof getDecksAC>
