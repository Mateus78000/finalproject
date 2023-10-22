import { styled } from "styled-components";
import SignUpForm from "../components/SignUpForm";
import '../main.css'

const Container = styled.div`
   
    height: 100vh;
    display: grid;
    place-content: center;
    position: relative;
    overflow: hidden;

    }

    > * {
        position: relative;
        z-index: 9;
    }
`

export default () => <>
    <Container>
        <SignUpForm />
    </Container>
</>