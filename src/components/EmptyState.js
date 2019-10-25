import React from 'react';
import {FILTER_OPTIONS} from "../constants";

export const EmptyState = ({state, resetHandler}) => {
    const stringNotice = state.searchString && state.searchString.length > 0
        ? <span> your search "{state.searchString}" </span>
        : null
    const filterNotice = state.filter && state.filter !== FILTER_OPTIONS.DEFAULT
        ? <span> your filter for "{state.filter.split("_").join(" ")}"</span>
        : null

    return (
        <div className="container-fluid">
            <div className="row mb-3">
                <div className="col-12 text-center">
                    <h2 className="text-center">It's lonely in here...</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-8 offset-2">
                    <p>Sorry, there were no results
                        matching{stringNotice}{stringNotice && filterNotice ? ' and ' : null}{filterNotice}

                    </p>
                </div>
            </div>
            <div className="row">
                <button className="btn btn-info col-10 offset-1 mt-3" onClick={resetHandler}>
                    Reset And Try Again
                </button>
            </div>
        </div>
    )
}
