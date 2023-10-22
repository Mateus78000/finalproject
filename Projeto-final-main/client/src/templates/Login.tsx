import { styled } from "styled-components";
import LoginForm from "../components/LoginForm";


const Container = styled.div`
    height: 100vh;
    display: grid;
    place-content: center;
    position: relative;
    overflow: hidden;

    > * {
        position: relative;
        z-index: 9;
    }
`

export default () => <>
    <Container>
        <LoginForm />
    </Container>
</>