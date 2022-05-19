export const Reducer = (state, action) => {
    switch(action.type) {
        case 'LOAD': {
            const customFilters = [
                { id: 1, title: 'Accepted', selected: false },
                { id: 2, title: 'Rejected', selected: false },
                { id: 3, title: 'Custom', selected: false },
            ]
            return {
                ...state,
                customFilters: customFilters
            }
        }
        case 'SET_CUSTOM_FILTERS': {
            const arr = state.customFilters.filter(filter => {
                if(filter.id === action.payload.id) {
                    filter.selected = action.payload.selected
                }
                return filter
            })
            console.log(arr)
            const selected = [...state.selected, action.payload]
            
            
            return {
                ...state,
                customFilters: arr,
                selected

            }
        }
        case 'REMOVE_FILTER': {
            const arr = state.customFilters.filter(filter => {
                if(filter.id === action.payload.id) {
                    console.log('acc', action.payload)
                    filter.selected = false
                }
                return filter
            })
            const selected = [...state.selected, action.payload]

            
            return {
                ...state,
                customFilters: arr
            }
        }
        default: {
            return state
        }
    }
}