export function filterTourDataByString(searchString, tours) {
    if (searchString && searchString.length < 1) return tours

    let trimmedSearchString = searchString.trim();

    let wordsToSearchForArray = trimmedSearchString.split(" ");

    if (wordsToSearchForArray.length === 1) {
        tours = tours.filter(tour => {
            return (
                // Ignore capitalization
                tour.title.toLowerCase().includes(searchString.toLowerCase())
            )
        })
    } else if (wordsToSearchForArray.length > 1) {
        let passingToursWithCount = {};
        tours.forEach((tour, i) => {
            wordsToSearchForArray.forEach(word => {
                if (tour.title.toLowerCase().includes(word.toLowerCase())) {
                    if (!passingToursWithCount[i]) {
                        passingToursWithCount[i] = {
                            tour: tour,
                            count: 1
                        }
                    } else {
                        passingToursWithCount[i].count++
                    }
                }
            })
        })
        tours = Object.values(passingToursWithCount).map(tourObject => {
            if (tourObject.count >= wordsToSearchForArray.length) {
                return tourObject.tour
            }
            return null
        }).filter(tour => tour);
    }

    return tours;
}
