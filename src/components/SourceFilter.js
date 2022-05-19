import React, { useEffect, useState } from 'react'
import { useGlobal } from '../Context'

const SourceFilter = ({filter}) => {
    const {dispatch} = useGlobal();
    const [checked, setChecked] = useState(false);

    const handleChange = (e, filter) => {
        console.log(filter)
        dispatch({ type: 'SET_CUSTOM_FILTERS', payload: {...filter, selected: e.target.checked} })
    }
    
    useEffect(() => {
        if(filter.selected) {
            setChecked(true)
        } else {
            setChecked(false)
        }
        console.log('aa')
    }, [filter])
    
    return (
        <li style={{ listStyle: 'none' }} className="">
            <input
                type="checkbox" 
                className='me-5'
                checked={filter.selected} 
                onChange={e => handleChange(e, filter)}
            />
            <label htmlFor=""> {filter.title} </label>
        </li>
    )
}

export default SourceFilter