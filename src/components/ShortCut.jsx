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
    background-color: ${({theme}) => theme.ShortCut.backgroundColor};
`
const BellContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 10rem;
    height: 5rem;
`
const AccountContainer = styled.div`
    display: flex;
    align-items: center;
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
    border-radius: 1rem;
    width: 4rem;
    height: 4rem;
    background-color: #302D40;
`
const UserName = styled.p`
    margin-top: 1rem;
    margin-right: 1rem;
    cursor: default;
    &:hover{
        color: #A7F2BA;
    }
`
const Ablosute = styled.div `
    position: absolute;
    top: 5rem;
`
const ShortCut = () => {
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
                        <Toast.Body style={{backgroundColor:"#302D40"}}>Rick and Morty got new episode! <Button style={{backgroundColor:"#0F4037", border:"0px"}} href="https://youtu.be/dQw4w9WgXcQ?si=_05IrFJaLiSbmtuV">Watch</Button></Toast.Body>
                        </Toast>
                    </Col>
                    <Col md={6} className="mb-2">
                        <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Body style={{backgroundColor:"#302D40"}}>Star Wars got new movie titled: "Star wars: Palpatine strickes back"  <Button style={{backgroundColor:"#0F4037", border:"0px"}} href="https://youtu.be/dQw4w9WgXcQ?si=_05IrFJaLiSbmtuV">Watch</Button></Toast.Body>
                        </Toast>
                    </Col>
                    <Col md={6} className="mb-2">
                        <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Body style={{backgroundColor:"#302D40"}}>New movie from Torantino your favorite  <Button style={{backgroundColor:"#0F4037", border:"0px"}} href="https://youtu.be/dQw4w9WgXcQ?si=_05IrFJaLiSbmtuV">Watch</Button></Toast.Body>
                        </Toast>
                    </Col>
                    <Col md={6} className="mb-2">
                        <Toast show={showA} onClose={toggleShowA}>
                        <Toast.Body style={{backgroundColor:"#302D40"}}>Mrbeast played in new movie   <Button style={{backgroundColor:"#0F4037", border:"0px"}} href="https://youtu.be/dQw4w9WgXcQ?si=_05IrFJaLiSbmtuV">Watch</Button></Toast.Body>
                        </Toast>
                    </Col>
                
                </Ablosute>
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
