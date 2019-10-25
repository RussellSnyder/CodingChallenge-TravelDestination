import React from 'react';
import {FILTER_OPTIONS} from "../constants";

export const FilterOption = ({option}) => {
    return (
        <option value={FILTER_OPTIONS[option]}>
            {FILTER_OPTIONS[option].split("_").join(" ")}
        </option>
    )
}
