import styled from 'styled-components'
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
const LoginStatusWrapper = styled.div`
  border: 2px solid dodgerblue;
  width: 250px;
  padding: 20px;
  border-radius: 5px;
  margin: 5px;
  box-shadow: rgba(94, 94, 218, 0.25) 0px 13px 27px -5px,
    rgba(54, 36, 219, 0.3) 0px 8px 16px -8px;

  p {
    font-weight: 800;

    span {
      color: grey;
      font-weight: 300;
    }
  }
`;

function LoginStatus(){
    const {isAuth,user} = useContext(AuthContext)
    return (
      <LoginStatusWrapper>
          <h3>Status</h3>
        <p>
          {" "}
          <span>User :</span> {isAuth ? "Logged In" : "Logged out"}
        </p>
        <p>
          {" "}
          <span>Token : </span>
          {user.token}
        </p>
      </LoginStatusWrapper>
    );
}

export default LoginStatus;