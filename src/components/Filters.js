import React from 'react'
import { Accordion } from 'react-bootstrap'
import { useGlobal } from '../Context'
import SourceFilter from './SourceFilter'

const Filters = ({}) => {
    const {state} = useGlobal();
    
    return (
        <div className='filters'>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            {state.customFilters?.map(filter => {
                                return <SourceFilter filter={filter} key={filter.id} />
                            })}
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Filters