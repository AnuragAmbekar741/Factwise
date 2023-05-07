import React, { useState } from 'react'
import { Wraper } from '../styles/style'
import Accordion from './Accordion'

import { useSelector } from 'react-redux'

const List = () => {

    const users = useSelector((user) => user.user.value)
    // const [userList, setUser] = useState(Data)

    return (
        <>
            <Wraper>
                {users && users.map((item) => {
                    item["status"] = false
                    if (!item.status) return <Accordion {...item} />
                })}
            </Wraper>
        </>
    )
}

export default List