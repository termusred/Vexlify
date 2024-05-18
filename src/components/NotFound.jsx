import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${({theme}) => theme.Not.backgroundColor};
`
const Text = styled.h1`
    cursor: default;
    color: ${({theme}) => theme.Colors.primary};
`
const Img = styled.div`
    width: 41rem;
    height: 20rem;
    background-size: cover;
    background-image: url("https://static-00.iconduck.com/assets.00/404-page-not-found-illustration-2048x998-yjzeuy4v.png");
`
const NotFound = () => {
    return(
        <Container>
            <Img></Img>
            <Text>Page not found. It might be problem from our side</Text>
        </Container>
    )
}

export default NotFound