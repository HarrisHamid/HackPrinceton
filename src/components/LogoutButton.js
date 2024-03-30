import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'antd';

const LogoutButton = () => {
    const { logout,isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <Button onClick={() => logout()}>
                Log Out 
            </Button>)
    )
}

export default LogoutButton;