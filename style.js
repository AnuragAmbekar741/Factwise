import styled, { createGlobalStyle } from 'styled-components'


export const Globalstyle = createGlobalStyle`
    body{
        font-family: 'Poppins', sans-serif;
    }
`

export const Wraper = styled.div`
    display:grid;
    width:100vw;
    height:100vh;
    justify-content:center;
    align-items:center;
`

export const Accordwrap = styled.div`
    width: 400px;
    display: flex;
    flex-direction:column;
    justify-content : space-between;
    align-items: center;
    padding: 0.7rem 2rem;
    border:solid 1px lightgrey;
    margin:10px 0;
    border-radius:20px;
`

export const Wrapinner = styled.div`
    display: ${props => props.display == false ? 'none' : 'block'};
`

export const Accordinner1 = styled.div`
    display: flex;
    justify-content : flex-start;
    align-items: center;
    width: 100%;
    margin-bottom:5px;
`

export const Profilepic = styled.img`
    border-radius:50%;
    padding: 0.5rem;
    margin-right:5%;
    object-fit: contain;
`

export const Name = styled.h1`
    font-size:18px;
    font-weight:400;
    color:black;
`

export const Accordinner2 = styled.div`
    display: flex;
    justify-content : space-between;
    align-items: center;
    width: 100%;
    margin:0 2px;
`

export const Accordinner3 = styled.div`
    display: flex;
    justify-content : ${props => props.justify ? "flex-end" : "flex-start"};
    align-items: center;
    width: 100%;
    padding-top: 1rem;
`

export const Accordinner4 = styled.div`
    display: flex;
    flex-direction:column;
`

export const Text = styled.h5`
    color:${props => props.color ? 'grey' : 'black'};
    font-size:15px;
    font-weight:300;
    margin:3px 0;
`
export const Input = styled.input`
    padding: 0.5rem;
    border:solid 0.7px black;
    border-radius:5px;
    width: ${props => props.size ? 'auto' : '80%'};
    font-size: ${props => props.lg ? '21px' : '14px'};

`

export const Select = styled.select`
    padding: 0.5rem;
    border:solid 0.7px black;
    border-radius:5px;
    width: 80%;
`

export const Textarea = styled.textarea`
    padding: 0.5rem;
    border:solid 0.7px black;
    border-radius:5px;
    height: 130px;
    width: 375px;
    font-family: 'Poppins', sans-serif;
`

export const ConfirmMsgWrap = styled.div`
    display: grid;
    padding:1rem 2rem;
    border:black 0.5px solid;
    border-radius:10px;
`
export const Confirmtext = styled.h3`
    font-size:16px;
    font-weight:300;
`

export const Btndiv = styled.div`
    display: flex;
    justify-content:flex-end;
    margin-top:25px;
    padding-bottom:5px;
`

export const Button = styled.button`
    padding: 0.7rem 1.5rem;
    font-size:14px;
    background:${props => props.bg ? 'red' : 'white'};
    color:${props => props.color ? 'black' : 'white'};
    border:${props => props.border ? 'solid 0.5px black' : 'none'};
    margin:0 5px;
    border-radius:10px;
`