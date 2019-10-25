import React from 'react';
import {SORT_OPTIONS} from "../constants";

export const SortOption = ({option}) => {
    return (
        <option value={SORT_OPTIONS[option]}>
            {SORT_OPTIONS[option].split("_").join(" ")}
        </option>
    )
}
