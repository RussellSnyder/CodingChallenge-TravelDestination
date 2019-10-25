import React from 'react';
import {EmptyState } from './EmptyState'
import {Tour} from './Tour'

export const Tours = ({state, resetHandler}) => (
    <div className="tours container-fluid">
        <div className="row">
            {state.tours.length >= 1 && <div className="col-12 py-2 text-right">
                <strong>{state.tours.length}</strong> tours available
            </div>}
        </div>
        <div className="row">
            {!state.tours || state.tours.length < 1
                ? <EmptyState state={state} resetHandler={resetHandler}/>
                : state.tours.map((tour, i) => (
                    <div key={i} className="col-sm-6 col-md-4 col-lg-3 tour-container">
                        <Tour tour={tour}/>
                    </div>
            ))}
        </div>
    </div>
)
