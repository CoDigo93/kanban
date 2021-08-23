import styled from 'styled-components';


const primary = '#11998e'
const secondary= '#38ef7d'


export const Form = styled.form `
    
    
    input:focus + label{
        font-size:0.8rem;
        top:-20px;
        color:#11998e;
    }

    input:focus{
        border-image: linear-gradient(to right, #11998e, #38ef7d);
        border-image-slice: 1;
    }
    
`

export const Input = styled.input`
    height:20px;
    width:100%;
    outline:none;
    border:0;
    border-bottom: 1px solid #202731;
    padding:15px 0;
    background:transparent;
    margin-top:20px;

`

export const Label = styled.label`
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    font-weight:400;
    color: #9b9b9b;
    margin-top:20px;
`