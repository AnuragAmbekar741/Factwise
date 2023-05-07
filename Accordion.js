import React, { useEffect, useState } from 'react'
import { Accordwrap, Wrapinner, Accordinner1, Accordinner2, Accordinner3, Accordinner4, Profilepic, Text, Input, Select, Textarea, ConfirmMsgWrap, Btndiv, Button, Confirmtext, Name } from '../styles/style'
import { RiDeleteBin6Line } from 'react-icons/ri';
import { CiEdit } from 'react-icons/ci';
import { BsChevronDown } from 'react-icons/bs';
import { BsChevronUp } from 'react-icons/bs';
import { RxCrossCircled } from 'react-icons/rx';
import { AiOutlineCheckCircle } from 'react-icons/ai';

import { useDispatch } from 'react-redux'
import { updateData, deleteData } from '../redux/userSlice'


const Accordion = ({ id, first, last, dob, gender, email, picture, country, description, status }) => {

    const [toggle, setToggle] = useState(false)

    const [edit, setEdit] = useState(false)

    const [deleteStatus, setDeleteStatus] = useState(false)

    const [editStatus, setEditStatus] = useState(false)

    const [editData, setEditData] = useState({
        "id": id,
        name: first + " " + last,
        "dob": dob,
        "gender": gender,
        "country": country,
        "description": description,
        "email": email,
        "picture": picture,
        status: status
    })

    const dispatch = useDispatch()

    const [temp, setTemp] = useState({
        name: first + " " + last,
        dob: dob,
        gender: gender,
        country: country,
        description: description
    })

    function checkEditData() {
        console.log("temp is ", temp)
        let changed = false
        if (temp.name != editData.name) changed = true
        if (temp.dob != editData.dob) changed = true
        if (temp.gender != editData.gender) changed = true
        if (temp.country != editData.country) changed = true
        if (temp.description != editData.description) changed = true
        if (changed) editDataFinal(editData)
        // console.log('Curr obj is ', editData)
        console.log(editStatus)
        return changed
    }

    function editDataFinal(obj) {
        console.log(obj)
        obj["first"] = obj.name.substring(0, obj.name.indexOf(" "))
        obj["last"] = obj.name.substring(obj.name.indexOf(" ") + 1)
        setTemp({ ...temp, name: obj.first + " " + obj.last })
        setTemp({ ...temp, dob: obj.dob })
        setTemp({ ...temp, gender: obj.gender })
        setTemp({ ...temp, country: obj.country })
        setTemp({ ...temp, description: obj.description })
        // obj["dob"] = 2023 - obj.age + dob.sice(4)
        // delete obj["name"]
        // delete obj["age"]
        delete obj["status"]
        console.log("final obj before update", obj)
        dispatch(updateData(obj))
    }

    function checkEdit(dob) {
        if (2023 - parseInt(dob.slice(0, 4)) > 18) setEdit(true)
        // console.log(editData)
    }

    return (
        <>
            {!deleteStatus ?
                !editData.status && <Accordwrap>
                    <Accordinner1>
                        <Profilepic src={picture} />
                        {
                            edit == false ?
                                <Name>{first + " " + last}</Name>
                                :
                                <Input
                                    size lg
                                    value={editData.name}
                                    onChange={e => setEditData({ ...editData, name: e.target.value })}
                                />
                        }
                        {
                            toggle == false ?
                                <BsChevronDown
                                    style={{ fontSize: '1.5rem', margin: '0 0 0 26%', position: 'absolute', color: 'gray' }}
                                    onClick={() => setToggle(true)}
                                />
                                :
                                <BsChevronUp
                                    style={{ fontSize: '1.5rem', margin: '0 0 0 26%', position: 'absolute', color: 'gray' }}
                                    onClick={() => {
                                        if (!edit) setToggle(false)
                                    }}
                                />
                        }
                    </Accordinner1>
                    <Wrapinner display={toggle}>
                        <Accordinner2>
                            <Accordinner4>
                                <Text color>Age</Text>
                                {
                                    edit == false ?
                                        <Text>{2023 - parseInt(dob.slice(0, 4))}</Text>
                                        :
                                        <Input
                                            value={2023 - parseInt(editData.dob.slice(0, 4))}
                                            onChange={e => setEditData({ ...editData, dob: 2023 - e.target.value + dob.slice(4) })}
                                        />
                                }
                            </Accordinner4>
                            <Accordinner4>
                                <Text color>Gender</Text>
                                {
                                    edit == false ?
                                        <Text>{gender[0].toUpperCase() + gender.slice(1)}</Text>
                                        :
                                        <Select
                                            defaultValue={editData.gender}
                                            value={editData.gender}
                                            onChange={e => setEditData({ ...editData, gender: e.target.value })}
                                        >
                                            <option value='male'>Male</option>
                                            <option value='female'>Female</option>
                                            <option value='rather not say'>Rather not say</option>
                                        </Select>
                                }
                            </Accordinner4>
                            <Accordinner4>
                                <Text color>Country</Text>
                                {
                                    edit == false ?
                                        <Text>{country}</Text>
                                        :
                                        <Input
                                            value={editData.country}
                                            onChange={e => setEditData({ ...editData, country: e.target.value })}
                                        />
                                }
                            </Accordinner4>
                        </Accordinner2>
                        <Accordinner3>
                            <Accordinner4>
                                <Text color>Description</Text>
                                {
                                    edit == false ?
                                        <Text>{description}</Text>
                                        :
                                        <Textarea
                                            value={editData.description}
                                            onChange={e => setEditData({ ...editData, description: e.target.value })}
                                        />
                                }
                            </Accordinner4>
                        </Accordinner3>
                        <Accordinner3 justify>
                            {
                                edit == false ?
                                    <>
                                        <RiDeleteBin6Line
                                            style={{ color: 'red', fontSize: '1.5rem', marginRight: '10px', cursor: 'pointer' }}
                                            onClick={() => setDeleteStatus(true)}
                                        />
                                        <CiEdit
                                            style={{ color: 'blue', fontSize: '1.7rem', cursor: 'pointer' }}
                                            onClick={() => checkEdit(dob)}
                                        />
                                    </>
                                    :
                                    <>
                                        <RxCrossCircled
                                            style={{ color: 'red', fontSize: '1.7rem', marginRight: '10px', cursor: 'pointer' }}
                                            onClick={() => setEdit(false)}
                                        />
                                        <AiOutlineCheckCircle
                                            style={{ color: 'green', fontSize: '1.7rem', cursor: 'pointer' }}
                                            onClick={() => {
                                                if (checkEditData()) {
                                                    setEdit(false)
                                                }
                                            }}
                                        />
                                    </>
                            }
                        </Accordinner3>
                    </Wrapinner>
                </Accordwrap>
                :
                <>

                    <ConfirmMsgWrap>
                        <Confirmtext>Are you sure you want to delete?</Confirmtext>
                        <Btndiv>
                            <Button
                                onClick={() => {
                                    setDeleteStatus(false)
                                    console.log(deleteStatus)
                                }}
                                color border>Cancel</Button>
                            <Button
                                onClick={() => {
                                    setDeleteStatus(false)
                                    setEditData({ ...editData, status: true })
                                    console.log(editData.status)
                                    // dispatch(deleteData())
                                }}
                                bg
                            >Delete</Button>
                        </Btndiv>
                    </ConfirmMsgWrap>

                </>
            }
        </>
    )
}

export default Accordion