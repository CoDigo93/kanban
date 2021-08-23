import  styled  from 'styled-components';

export const Main = styled.div`
    display:flex;
    align-items:center;
    flex-direction:row;
    background:#eeeeee;
    height:100vh;
    width:100vw;
`

export const BoardSection = styled.div`
    background: #eeeeee;
    width:100%;
    height:100%;
`

export const LeftSideBar = styled.div`
    background: #eeeeee;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:start;
    overflow-y:scroll;
    height:100vh;
    ::-webkit-scrollbar{
        width: 3px;
    }

    ::-webkit-scrollbar-track{
        border-radius: 2px;
        background:#E2E2E2;
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background:#202731;
        height:100px;
    }
`