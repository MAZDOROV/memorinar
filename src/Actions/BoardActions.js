import { CARD_CLICK, SHOW_ALL_CARDS } from "../Constants";

export function cardClick(card) {
    return {
        type: CARD_CLICK,
        payload: card
    }
}

export function showAllCards() {
    return {
        type: SHOW_ALL_CARDS
    }
}