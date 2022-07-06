import { useNavigate } from 'react-router-dom';
import { useUser } from '../../../contexts/UserContext';
import { HeaderContainer, HeaderLogin, HeaderText, HeaderTextHover } from './header.style';

function Header() {
    const navigate = useNavigate();
    const { userInfo, setUserInfo } = useUser()

    return (
        <HeaderContainer>
            <HeaderLogin onClick={() => navigate("/")}>Home </HeaderLogin>
            {userInfo.name && <HeaderText>hello {userInfo.name}</HeaderText>}
            {userInfo.name && <HeaderTextHover onClick={() => navigate("/items/add")}>Add Items</HeaderTextHover>}
            {userInfo.name && <HeaderTextHover onClick={() => setUserInfo({})}>Log out</HeaderTextHover>}
            {!userInfo.name && <HeaderLogin onClick={() => navigate("/sign-up")}>Sign up</HeaderLogin>}
            {!userInfo.name && <HeaderLogin onClick={() => navigate("/login")}>Login</HeaderLogin>}
        </HeaderContainer>
    )
}

export default Header