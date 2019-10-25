import React, {Component} from 'react';

import packageJson from '../package.json';
import {FILTER_OPTIONS, SORT_OPTIONS } from "./constants";
import { Loading } from "./components/Loading"
import { Tours } from "./components/Tours"
import { UserInput } from "./components/UserInput"
import {filterTourDataByFilterType} from "./services/filterTourDataByFilterType";
import {sortTourDataBySortType} from "./services/sortTourDataBySortType";
import {filterTourDataByString} from "./services/filterTourDataByString";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataLoaded: false,
            tours: null,
            sort: SORT_OPTIONS.DEFAULT,
            filter: FILTER_OPTIONS.DEFAULT,
            searchString: ''
        }

        // holds all of the tours for this site
        this.allTours = null;
        // this.state.tours will be displayed with filter and sort options applied
    }

    componentDidMount() {
        fetch(packageJson.homepage + '/data/data.json')
            .then(response => response.json())
            .then(data => data.tours)
            .then(tours => {
                // please do not modify this.allTours after it is loaded
                // instead, modify this.state.tours
                // Otherwise the app can't reset
                this.allTours = tours;
                return tours
            })
            .then(tours => this.setState({
                tours: tours,
                dataLoaded: true
            }))
    }

    render() {
        return (
            <div className="App pb-4 mb-4 ">
                <h1 className="text-center my-4">Get Your Guide Take Home Test</h1>
                <UserInput
                    state={this.state}
                    searchStringChangeHandler={(e) => this.handleStringSearch(e)}
                    filterTourChangeHandler={(e) => this.handleFilterTourChange(e)}
                    sortOptionChangeHandler={(e) => this.handleSortTourChange(e)}
                />
                {this.state.dataLoaded
                    ? <Tours state={this.state} resetHandler={() => this.handleReset()}/>
                    : <Loading/>}
            </div>
        );
    }

    handleReset() {
        this.setState({
            sort: SORT_OPTIONS.DEFAULT,
            filter: FILTER_OPTIONS.DEFAULT,
            searchString: '',
            tours: this.allTours,
        }, () => this.filterAndSortToursFromStateParams())
    }

    handleStringSearch(e) {
        e.preventDefault();
        this.setState({searchString: e.target.value}, () => this.filterAndSortToursFromStateParams())
    }

    handleSortTourChange(e) {
        e.preventDefault();
        this.setState({sort: e.target.value}, () => this.filterAndSortToursFromStateParams());
    }

    handleFilterTourChange(e) {
        e.preventDefault();
        this.setState({filter: e.target.value}, () => this.filterAndSortToursFromStateParams())
    }

    // Only component to update tours on the state
    filterAndSortToursFromStateParams() {
        // always start with unfiltered tours
        let tours = this.allTours.slice();

        const {filter, sort, searchString } = this.state;

        tours = filterTourDataByFilterType(filter, tours);
        tours = sortTourDataBySortType(sort, tours);
        tours = filterTourDataByString(searchString, tours)

        this.setState({tours})
    }

}

export default App;
