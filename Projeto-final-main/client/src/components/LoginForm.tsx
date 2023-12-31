import { Link } from "react-router-dom"
import { styled } from "styled-components"

const MyForm = styled.form`
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Hind+Madurai:wght@300;700&display=swap');

    font-family: 'Anton', sans-serif;
    font-family: 'Hind Madurai', sans-serif;
    border: 1px solid #D4D4D4;
    box-shadow: 2px 2px 2px -1px #0000007d;
    font-size: 1.5rem;
    display: inline-block;
    color: #1f1f1f;

    * {
        box-sizing: border-box;
    }
    
    .container {
        padding: 2rem;
        background-color: #FFFFFF;

        .title {
            margin-bottom: 2rem;

            h1, h2 {
                line-height: 1em;
                margin: 0;
                padding: 0;
            }

            h2 {
                font-size: 60%;
                color: #323232;
                font-weight: 300;
            }
        }

        .input {
            margin-block: 1rem;

            * { 
                color: #5d5d5d;
            }

            label {
                display: block;
                font-size: 50%;
            }

            input {
                font-size: 90%;
                border: 0;
                border-bottom: 1px solid #D4D4D4;
                outline: none;
                width: 100%;
                padding: .5rem;
            }
        }

        .action {
          display: flex;
          justify-content: flex-end;
          > * {
            flex-grow: 1;
          }
        }
    }

    .sign-up {
        background-color: #f3f3f3;
        padding: 2rem;
        color: #a4a4a4;
        font-size: 90%;

        a {
            color: #A639CA;
            text-decoration: none;
        }
    }
`

const AccentButton = styled.button`
    border: 3px solid #A639CA;
    color: #A639CA;
    background-color: transparent;
    font-size: 1.25rem;
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
`

const HiddenButton = styled.button`
    border: 0 none;
    color: #222222;
    background-color: transparent;
    font-size: 1.25rem;
    font-weight: 500;
    padding: 1rem;
    border-radius: 5px;
    cursor: pointer;
`

export default () => <>
    <MyForm>
        <div className="container">
            <div className="title">
                <h1>Bem Vindo!</h1>
            </div>
            <div className="input">
                <label>Login</label>
                <input name="login" />
            </div>
            <div className="input">
                <label>Senha</label>
                <input type="password" name="password" />
            </div>
            <div className="action">
              <AccentButton>Entrar</AccentButton>
              <HiddenButton>Recuperar Senha</HiddenButton>
            </div>
        </div>
        <div className="sign-up">
        É a sua primeira vez aqui? <Link to="/signup">Cadastre-se!</Link>
        </div>
    </MyForm>
</>