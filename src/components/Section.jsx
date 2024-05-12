import styled from "styled-components"


const Container = styled("div") `
    display: flex;
    width: 60%;
    height: 100vh;
`
const SectionNavbar = styled.nav `
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 8rem;
`
const NavCon = styled.div `
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
`
const NavText = styled("button")`
    font-weight: 800;
    font-size: large;
    cursor: pointer;
    color: white;
    border: 0px;
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
    width: 14rem;
    align-items: center;
    border-radius: 3px;
    background-color: #3b3b3b;
`
const Section = () => {
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
        </Container>
    )
}
export default Section