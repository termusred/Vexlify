import styled from "styled-components"
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const Container = styled("div") `
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    gap: 1rem;
    align-items: center;
    width: 60%;

`
const Title = styled("h2")` 
    cursor: default;
    color: white;
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
const MovF = styled.div`
    display: flex;
    padding: 2rem;
    width: 100%;
    height: 25rem;
    border-radius: 1rem;
    background-size: cover;
    background-image: url("https://www.justwatch.com/images/backdrop/310398639/s640/lift-0/lift-0");
`
const MovS = styled.div`
    display: flex;
    padding: 2rem;
    width: 100%;
    height: 25rem;
    border-radius: 1rem;
    background-size: cover;
    background-image: url("https://dx35vtwkllhj9.cloudfront.net/universalstudios/the-fall-guy/images/regions/us/header.jpg");
`
const MovT = styled.div`
    display: flex;
    padding: 2rem;
    width: 100%;
    height: 25rem;
    border-radius: 1rem;
    background-size: cover;
    background-image: url("https://images.justwatch.com/backdrop/304694617/s640/super-mario-bros-the-movie");
`
const AnimeFirst = styled.div`
    display: flex;
    padding: 2rem;
    width: 100%;
    height: 25rem;
    border-radius: 1rem;
    background-size: cover;
    background-image: url("https://imgsrv.crunchyroll.com/cdn-cgi/image/format=auto,fit=contain,width=1200,height=675,quality=85/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpe");
`
const AnimeSecond = styled.div`
    display: flex;
    padding: 2rem;
    width: 100%;
    height: 25rem;
    border-radius: 1rem;
    background-size: cover;
    background-image: url("https://staticg.sportskeeda.com/editor/2023/08/63291-16913969569317-1920.jpg");
`
const AnimeThird = styled.div`
    display: flex;
    padding: 2rem;
    width: 100%;
    height: 25rem;
    border-radius: 1rem;
    background-size: cover;
    background-image: url("https://sub.yuu.space/wp-content/uploads/2017/11/171106_1528_deathnote.jpg");
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
const ModalImage = styled.img`

`
const Section = ({data}) => {
    const [show, setShow] = useState(false);
    const [Content , setContent] = useState([])
    const handleClose = () => setShow(false);
    const handleShow = (a , b) => {
        setShow(true);
        setContent([a , b])
    }
    return(
        <Container>
            <InputHolder>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
                <Input type="search" placeholder="Search">
                </Input>
            </InputHolder>
            <Tabs
                defaultActiveKey="TV"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
            >
                <Tab eventKey="Movies" title="Movies" style={{width:"58rem"}}>
                <Wrapper>
                        <Carousel className="Meth">
                            <Carousel.Item interval={1000}>
                                <MovF>
                                    <Title>Lift</Title>
                                </MovF>
                                    <Carousel.Caption className="Crack">
                                        <CaptionWrapper>
                                            <AddToWatchlist>Add to watchlist</AddToWatchlist>
                                            <WatchNow>Watch now</WatchNow>
                                        </CaptionWrapper>
                                    </Carousel.Caption>   
                            </Carousel.Item>
                            <Carousel.Item interval={500}>
                                <MovS>
                                    <Title>Fall guy</Title>
                                </MovS>
                                <Carousel.Caption>
                                    <CaptionWrapper>
                                        <AddToWatchlist>Add to watchlist</AddToWatchlist>
                                        <WatchNow>Watch now</WatchNow>
                                    </CaptionWrapper>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <MovT>
                                    <Title>The mario</Title>
                                </MovT>
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
                                    
                                    <Button variant="success" onClick={() => handleShow(el.title , el.backdropPath)}>More info</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                    
                </CardContainer>

                <Modal show={show} onHide={handleClose} size={"xl"} style={{ backdropFilter: "blur(5px)" }}>
                    <Modal.Header closeButton>
                    <Modal.Title>{Content[0]}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ModalImage src={`${Content[1]}`}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Popular>
                </Tab>
                <Tab eventKey="TV" title="TV shows" style={{width:"58rem"}}>
                
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
                                    <Title>Lost</Title>
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
                                    <Title>Game of thrones</Title>
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
                                    
                                    <Button variant="success" onClick={() => handleShow(el.title , el.backdropPath)}>More info</Button>
                                </Card.Body>
                            </Card>
                        )
                    })}
                    
                </CardContainer>

                <Modal show={show} onHide={handleClose} size={"xl"} style={{ backdropFilter: "blur(5px)" }}>
                    <Modal.Header closeButton>
                    <Modal.Title>{Content[0]}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <ModalImage src={`${Content[1]}`}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Popular>
                </Tab>
                <Tab eventKey="Anime" title="Anime" style={{width:"58rem"}}>
                    <Wrapper>
                            <Carousel className="Meth">
                                <Carousel.Item interval={1000}>
                                    <AnimeFirst>
                                        <Title>One piece</Title>
                                    </AnimeFirst>
                                        <Carousel.Caption className="Crack">
                                            <CaptionWrapper>
                                                <AddToWatchlist>Add to watchlist</AddToWatchlist>
                                                <WatchNow>Watch now</WatchNow>
                                            </CaptionWrapper>
                                        </Carousel.Caption>   
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <AnimeSecond>
                                        <Title>Naruto</Title>
                                    </AnimeSecond>
                                    <Carousel.Caption>
                                        <CaptionWrapper>
                                            <AddToWatchlist>Add to watchlist</AddToWatchlist>
                                            <WatchNow>Watch now</WatchNow>
                                        </CaptionWrapper>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <AnimeThird>
                                        <Title>Death note</Title>
                                    </AnimeThird>
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
                                                
                                                <Button variant="success" onClick={() => handleShow(el.title , el.backdropPath)}>More info</Button>
                                            </Card.Body>
                                        </Card>
                                    )
                                })}
                                
                            </CardContainer>

                            <Modal show={show} onHide={handleClose} size={"xl"} style={{ backdropFilter: "blur(5px)" }}>
                                <Modal.Header closeButton>
                                <Modal.Title>{Content[0]}</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <ModalImage src={`${Content[1]}`}/>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </Popular>
                </Tab>
            </Tabs>

           
        </Container>
    )
}
export default Section