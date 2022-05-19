import React from 'react'
import { useGlobal } from '../Context'

const TopSelectedFilters = ({selected, customFilters}) => {
    const {dispatch} = useGlobal();
    
    const removeFilter = (filter) => {
        dispatch({ type: 'REMOVE_FILTER', payload: filter })
    }
    
  return (
      <>
        {customFilters?.map(filter => {
            if(filter.selected) {
                return <button className="btn btn-sm btn-rounded" key={filter.id}>
                    {filter.title}
                    <button className='btn btn-sm' onClick={() => removeFilter(filter)}>
                        X
                    </button>
                </button>
            }
        })}
      </>
  )
}

export default TopSelectedFilters