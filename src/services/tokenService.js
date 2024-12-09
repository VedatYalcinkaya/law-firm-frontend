import { jwtDecode } from "jwt-decode";

class TokenService {
    getToken() {
        return localStorage.getItem("token");
    }

    setToken(token) {
        localStorage.setItem("token", token);
    }

    logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("isSignedIn");
    }

    decodeToken() {
        const token = this.getToken();
        
        if (token !== null) {
            try {
                const decode = jwtDecode(token);
                return decode;
            } catch (error) {
                console.error("Error decoding token:", error);
            }
        }
        
        return null;
    }
}

export default new TokenService();
