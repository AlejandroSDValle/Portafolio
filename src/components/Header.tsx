
import styled from 'styled-components';

function Header() {
    return (
        <HeaderStyles>
            <h1>Alejandro</h1>
            <p>
                <a href="mailto:alejandro_santillan_2000@hotmail.com">alejandro_santillan_2000@hotmail.com</a>
            </p>
        </HeaderStyles>
    )
}

const HeaderStyles = styled.header`
    display: flex;
    padding: 20px;
    background-color: #000000;
    color: white;

    h1 {
        margin: 0 50px;
    }

    a {
        color: white;
        text-decoration: none;
    }

@media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        padding: 15px;
    h1 {
        margin: 0;
        font-size: 24px;
    }

    p {
        margin: 10px 0 0;
    }
}
`;

export default Header