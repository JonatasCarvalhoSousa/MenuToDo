import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100vw;
    height: 100px;
    padding: 20px;
    background-color: #B0E0E6;
    text-align: center;
    font-size:20px;
 
`;

export const Form = styled.div`
left:150px;
margin-top:10px;
width:300px;
text-align: left;
font-size:28px;
`;

export const HeaderMenu = styled.div`
    width: 100vw;
    height: 60px;
    padding: 20px;
    background-color: #B0E0E6;
    text-align: center;
    font-size:28px;

`;

export const OptionMenu = styled.div<{open?: boolean}>`
    width: ${props => props.open ? '2rem' : '100vw'};
    transition: all 0.3s linear;
    padding-left: 10px;
    height: 2rem;
    position: fixed;
    top: 20px;
    float: left;
    z-index: 30;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    div {
        width: 2rem;
        height: 0.25rem;
        background-color: #000000;
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear; 
        &:nth-child(1) {
            transform: ${props => props.open ? 'rotate(0)' : 'rotate(45deg)'};
        }
        &:nth-child(2) {
            transform: ${props => props.open ? 'translateX(0)' : 'translateX(-100%)'};
            opacity: ${props => props.open ? 1 : 0};
        }
        &:nth-child(3) {
            transform: ${props => props.open ? 'rotate(0)' : 'rotate(-45deg)'};
        }
    }
`;
export const LinksDiv = styled.div<{open?: boolean}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
    height: 80vh;
    background-color: #212427; /* grey */
    position: fixed;
    overflow: auto;
    top: 60px;
    transition-duration: 0.4s;
    cursor: pointer;
    z-index: 20;
    transform: ${props => props.open ? 'translateX(-150%)' : 'translateX(0)'};
    transition: all 0.3s linear;
`;
export const LinkElement = styled.div`
    min-width: 80vw;
    background-color: #212427; /* grey */
    display: flex;
    transition-duration: 0.4s;
    cursor: pointer;
    align-items: center;
    margin: 30px;
`;
export const StrongText = styled.p<{color: "active" | "deactive"}>`
    color: ${props => {
        if (props.color === "active") {
            return "#0AB3FB";
        }
        if (props.color === "deactive") {
            return "#FFFFFF"
        }
    }};
    margin-left: 10px;
    font-weight: bold;
    font-size: 1.3em;
    
`;

export const AddTask = styled("button")`
border:3px solid #25692A;
border-radius:6px;
display:inline-block;
cursor:pointer;
font-family:Verdana;
font-weight:bold;
font-size:18px;
padding:10px 10px;
`;