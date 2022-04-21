import styled from "styled-components";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { Button } from "./Button";
import axios from "axios";
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  color: white;
  background-color: #aa0baa;
  h2{
    margin: 5px;
  }
`;

function Navbar() {
  const { isAuth, handleAuth ,user,handleUser } = useContext(AuthContext);

  const handleLogin = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: "eve.holt@reqres.in",
        password: "cityslicka",
      })
      .then((response) => {
        handleAuth();
        handleUser({token:response.data.token})
      });
  };

  const handleLogout = () => {
    handleAuth();
    handleUser({token : "no token"})
  };
  const login = <Button onClick={handleLogin}>Login</Button>;
  const logout = <Button onClick={handleLogout}>Logout</Button>;
  return <NavbarContainer>
    <h2>Auth-context</h2>
    {isAuth ? logout : login}</NavbarContainer>;
}

export default Navbar;
