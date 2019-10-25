import {FILTER_OPTIONS} from "../constants";
import {PRICE_RANGES} from "../constants";

export function filterTourDataByFilterType(filter, tours) {
    let filteredTours = tours;
    switch (filter) {
        case FILTER_OPTIONS.SPECIALS_ONLY:
            filteredTours = tours.filter(tour => tour.isSpecialOffer);
            break;
        case FILTER_OPTIONS.SPECIALS_EXCLUDE:
            filteredTours = tours.filter(tour => !tour.isSpecialOffer);
            break;
        case FILTER_OPTIONS.PRICE1_ONLY:
            filteredTours = tours.filter(tour => tour.price < PRICE_RANGES.LOW);
            break;
        case FILTER_OPTIONS.PRICE2_ONLY:
            filteredTours = tours.filter(tour => (tour.price >= PRICE_RANGES.LOW && tour.price < PRICE_RANGES.HIGH));
            break;
        case FILTER_OPTIONS.PRICE3_ONLY:
            filteredTours = tours.filter(tour => (tour.price >= PRICE_RANGES.HIGH));
            break;
        case FILTER_OPTIONS.DEFAULT:
            filteredTours = tours
            break;
        default:
            filteredTours = tours
            break;
    }

    return filteredTours;
}