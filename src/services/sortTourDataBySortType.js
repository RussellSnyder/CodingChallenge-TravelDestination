import {SORT_OPTIONS} from "../constants";

export function sortTourDataBySortType(sortType, tours) {
    switch (sortType) {
        case SORT_OPTIONS.SPECIALS_ASC:
            tours = tours.sort((a, b) => {
                return (a.isSpecialOffer === b.isSpecialOffer) ? 0 : a.isSpecialOffer ? -1 : 1;
            })
            break;
        case SORT_OPTIONS.SPECIALS_DESC:
            tours = tours.sort((a, b) => {
                return (a.isSpecialOffer === b.isSpecialOffer) ? 0 : a.isSpecialOffer ? 1 : -1;
            });
            break;
        case SORT_OPTIONS.PRICE_ASC:
            tours = tours.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
            break;
        case SORT_OPTIONS.PRICE_DESC:
            tours = tours.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
            break;
        case SORT_OPTIONS.RATING_ASC:
            tours = tours.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
            break;
        case SORT_OPTIONS.RATING_DESC:
            tours = tours.sort((a, b) => parseFloat(a.rating) - parseFloat(b.rating))
            break;
        case SORT_OPTIONS.ALPHABETICAL_ASC:
            tours = tours.sort((a, b) => {
                return a.title === b.title ? 0 : a.title < b.title ? -1 : 1
            });
            break;
        case SORT_OPTIONS.ALPHABETICAL_DESC:
            tours = tours.sort((a, b) => {
                return a.title === b.title ? 0 : a.title > b.title ? -1 : 1
            });
            break;
        case SORT_OPTIONS.DEFAULT:
            break;
        default:
            break;
    }

    return tours
}

