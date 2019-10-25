import React from 'react';
import {FILTER_OPTIONS, SORT_OPTIONS} from "../constants";
import { FilterOption } from "./FilterOption"
import { SortOption } from "./SortOption"

export const UserInput = ({state, searchStringChangeHandler, filterTourChangeHandler, sortOptionChangeHandler}) => (
    <div className="container-fluid my-4" key={"user-input-container"}>
        <div className="row mb-3">
            <div className="col-12 input-group">
                <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1"><i
                                    className="fa fa-search"/></span>
                </div>
                <input
                    autoFocus={true}
                    onChange={searchStringChangeHandler}
                    value={state.searchString}
                    type="text"
                    className="form-control"
                    placeholder="Search (ex: Berlin or Biking)"/>
            </div>
        </div>
        <div className="row mb-3">
            <div className="col-3 py-1">
                Filter By:
            </div>
            <div className="col-9">
                <select className="form-control" value={state.filter}
                        onChange={filterTourChangeHandler}
                >
                    {Object.keys(FILTER_OPTIONS).map((key, i) => <FilterOption key={i} option={key}/>)}
                </select>

            </div>
        </div>
        <div className="row mb-3">
            <div className="col-3 py-1">
                Sort By:
            </div>
            <div className="col-9">
                <select className="form-control" value={state.sort}
                        onChange={sortOptionChangeHandler}
                >
                    {Object.keys(SORT_OPTIONS).map((key, i) => <SortOption key={i} option={key}/>)}
                </select>
            </div>
        </div>
    </div>
)