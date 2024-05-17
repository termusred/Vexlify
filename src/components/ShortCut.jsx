import styled from "styled-components"
import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Toast from 'react-bootstrap/Toast';
import Button from 'react-bootstrap/Button';

const Container = styled("div")`
    display: flex;
    justify-content: space-between;
    width: 25%;
    padding-top: 1rem;
    color: ${({theme}) => theme.ShortCut.color};
    background-color: ${({theme}) => theme.ShortCut.backgroundColor};
    `
const BellContainer = styled.div`
    display: flex;
    align-items: center;
    gap:1rem;
    justify-content: center;
    flex-direction: row;
    color: ${({theme}) => theme.ShortCut.color};
    width: 10rem;
    height: 5rem;
    `
const AccountContainer = styled.div`
    display: flex;
    align-items: center;
    color: ${({theme}) => theme.ShortCut.color};
    text-align: center;
    justify-content: center;
    flex-direction: row;
    width: 14rem;
    height: 5rem;
    `
const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.ShortCut.color};
    border-radius: 1rem;
    border: 1px solid black;
    background-color: ${({theme}) => theme.ShortCut.Icon};
    width: 4rem;
    height: 4rem;
`
const UserName = styled.p`
    margin-top: 1rem;
    margin-right: 1rem;
    color: ${({theme}) => theme.ShortCut.color};
    cursor: default;
    &:hover{
        color: ${({theme}) => theme.Colors.hover};
    }
`
const Ablosute = styled.div `
    position: absolute;
    color:black;
    top: 5rem;
`
const Switch = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({theme}) => theme.ShortCut.color};
    border-radius: 1rem;
    background-color: ${({theme}) => theme.ShortCut.Icon};
    width: 4rem;
    height: 4rem;
`
const ShortCut = ({setTema , Tema}) => {
    const [showA, setShowA] = useState(false);
    const toggleShowA = () => setShowA(!showA);
  
    return(
        <Container>
            <BellContainer>
                <IconContainer onClick={toggleShowA}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6"/>
                    </svg>
                </IconContainer>
                <Ablosute>
                    <Col md={6} className="mb-2">
                        <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Body style={{backgroundColor:`${({theme}) => theme.Colors.Con}`}}>Rick and Morty got new episode! <Button style={{backgroundColor:"#0F4037", border:"0px"}} href="https://youtu.be/dQw4w9WgXcQ?si=_05IrFJaLiSbmtuV">Watch</Button></Toast.Body>
                        </Toast>
                    </Col>
                    <Col md={6} className="mb-2">
                        <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Body style={{backgroundColor:`${({theme}) => theme.Colors.Con}`}}>Star Wars got new movie titled: "Star wars: Palpatine strickes back"  <Button style={{backgroundColor:"#0F4037", border:"0px"}} href="https://youtu.be/dQw4w9WgXcQ?si=_05IrFJaLiSbmtuV">Watch</Button></Toast.Body>
                        </Toast>
                    </Col>
                    <Col md={6} className="mb-2">
                        <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Body style={{backgroundColor:`${({theme}) => theme.Colors.Con}`}}>New movie from Torantino your favorite  <Button style={{backgroundColor:"#0F4037", border:"0px"}} href="https://youtu.be/dQw4w9WgXcQ?si=_05IrFJaLiSbmtuV">Watch</Button></Toast.Body>
                        </Toast>
                    </Col>
                    <Col md={6} className="mb-2">
                        <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Body style={{backgroundColor:`${({theme}) => theme.Colors.Con}`}}>Mrbeast played in new movie   <Button style={{backgroundColor:"#0F4037", border:"0px"}} href="https://youtu.be/dQw4w9WgXcQ?si=_05IrFJaLiSbmtuV">Watch</Button></Toast.Body>
                        </Toast>
                    </Col>
                
                </Ablosute>
                <Switch onClick={() => {
                    if(Tema == "light"){
                        setTema("dark")
                    }else{
                        setTema("light")
                    }
                }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286"/>
                </svg>
                </Switch>
            </BellContainer>
            <AccountContainer>
                <UserName>Termusred</UserName>
                <IconContainer>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                    </svg>
                </IconContainer>
            </AccountContainer>
        </Container>
    )
}
export default ShortCut
