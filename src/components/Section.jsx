import styled from "styled-components"
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const Container = styled("div") `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    height: 100vh;
`
const SectionNavbar = styled.nav `
    display: flex;
    flex-direction: row;
    width: 100%;
`
const Title = styled("h2")` 
    cursor: default;
    color: white;
`
const NavCon = styled.div `
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    height: 6rem;
`
const NavText = styled("button")`
    font-weight: 800;
    font-size: large;
    cursor: pointer;
    color: white;
    border: 0px;
    &:hover{
        color: #A7F2BA;
    }
    background-color: transparent;
`
const Input = styled.input `
    border: 0px;
    padding: 5px;
    color: white;
    &::placeholder{
        color: white;
    }
    &:focus{
        outline: transparent;
    }
    border-radius: 3px;
    background-color: #3b3b3b;
`
const InputHolder = styled.div`
    display: flex;
    justify-content: center;
    height: 3rem;
    width: 16rem;
    align-items: center;
    border-radius: 3px;
    background-color: #3b3b3b;
`
const FirstImage = styled.div`
    display: flex;
    padding: 2rem;
    width: 100%;
    height: 25rem;
    border-radius: 1rem;
    background-size: cover;
    background-image: url("https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABUAioxWLTjxlu0S26gYNm4oDYcbDbYj9PdgRNmPknAn2X6iFLh55btyMsTzvAAk_ht32WfeAq_WYnvbpsErzwF7VQhTRxukbzhHF.jpg?r=ae3");
`
const SecondImage = styled.div`
    display: flex;
    padding: 2rem;
    width: 100%;
    height: 25rem;
    border-radius: 1rem;
    background-size: cover;
    background-image: url("https://rukminim2.flixcart.com/image/850/1000/j13vqfk0/poster/c/z/q/medium-andbltvs408-ananyadesigns-tv-show-lost-hd-wall-poster-original-imaek7y6bkkqgdfj.jpeg?q=90&crop=false");
`
const ThirdImage = styled.div`
    display: flex;
    padding: 2rem;
    width: 100%;
    height: 25rem;
    border-radius: 1rem;
    background-size: cover;
    background-image: url("https://www.wallpaperflare.com/static/663/960/1016/game-of-thrones-game-thrones-poster-wallpaper.jpg");
`
const AddToWatchlist = styled.button`
    padding: 1rem;
    border: 0px;
    border-radius: 8px;
    background-color: #ffffff4e;
`
const WatchNow = styled.button`
    padding: 1rem;
    border: 0px;
    border-radius: 8px;
    background-color: #0F4037;
`
const Wrapper = styled.div`
    width: 904px;
    height: 25rem;
    &.Meth {
        width: 100%;
        height: 100%;
    }
`
const CaptionWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
`
const Popular = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    width: 100%;
    height: 30rem;
`
const Image = styled.div`
    width: 18rem;
    padding: 1rem;
    height: 12rem;
    box-shadow: 0px -89px 52px -19px rgba(48,45,64,1) inset;
    -webkit-box-shadow: 0px -89px 52px -19px rgba(48,45,64,1) inset;
    -moz-box-shadow: 0px -89px 52px -19px rgba(48,45,64,1) inset;
    background-size: cover;
`
const CardContainer = styled.div`
    display: flex;
    gap: 1rem;
    max-height: 20rem;
    overflow: scroll;
    width: 100%;
`
const Section = ({data}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <Container>
            <SectionNavbar> 
                <NavCon>
                    <NavText>Movies</NavText>
                    <NavText>TV shows</NavText>
                    <NavText>Anime</NavText>
                    <InputHolder>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                        </svg>
                        <Input type="search" placeholder="Search">
                        </Input>
                    </InputHolder>
                </NavCon>
            </SectionNavbar>
            <Wrapper>
                <Carousel className="Meth">
                    <Carousel.Item interval={1000}>
                        <FirstImage>
                            <Title>The Crown</Title>
                        </FirstImage>
                            <Carousel.Caption className="Crack">
                                <CaptionWrapper>
                                    <AddToWatchlist>Add to watchlist</AddToWatchlist>
                                    <WatchNow>Watch now</WatchNow>
                                </CaptionWrapper>
                            </Carousel.Caption>   
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <SecondImage>
                            <Title>The Crown</Title>
                        </SecondImage>
                        <Carousel.Caption>
                            <CaptionWrapper>
                                <AddToWatchlist>Add to watchlist</AddToWatchlist>
                                <WatchNow>Watch now</WatchNow>
                            </CaptionWrapper>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <ThirdImage>
                            <Title>The Crown</Title>
                        </ThirdImage>
                        <Carousel.Caption>
                            <CaptionWrapper>
                                <AddToWatchlist>Add to watchlist</AddToWatchlist>
                                <WatchNow>Watch now</WatchNow>
                            </CaptionWrapper>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Wrapper>
            <Popular>
                <Title>Popular on Vexlify</Title>
                <CardContainer>
                    {data.map((el , id) =>{
                        return(
                            <Card style={{ minWidth: '18rem', border: "0px" , flexWrap:"wrap"}} key={id}>
                                <Image style={{backgroundImage: `url(${el.backdropPath})`}}>

                                </Image>
                                <Card.Body style={{
                                    display:"flex",
                                    flexDirection:"colum",
                                    gap:"1rem",
                                    backgroundColor:"#302D40"
                                }}>
                                    <Card.Title style={{color:"white", fontSize:"smaller"}}>
                                        {el.title}
                                    </Card.Title>
                                    <Card.Text>
                                        rating <br />{el.voteAverage}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
                                        </svg>
                                    </Card.Text>
                                    
                                    <Button variant="primary" onClick={handleShow}>More info</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                    
                </CardContainer>

                <Modal show={show} onHide={handleClose} size={"xl"} style={{backgroundColor:"#0d0d0d"}}>
                    <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </Popular>
        </Container>
    )
}
export default Section