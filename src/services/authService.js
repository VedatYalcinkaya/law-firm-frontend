import axios from "axios";
import tokenService from "./tokenService";

class AuthService {
  // Kullanıcının giriş yapabilmesi için authenticate fonksiyonu
  authenticate = async (credentials) => {
    try {
      // Backend'deki auth endpoint'ine istek gönderiyoruz
      const response = await axios.post(
        "http://46.202.155.249:8080/api/auth/authenticate",
        credentials
      );
      const token = response.data.token;

      // Token'ı localStorage'a kaydetmek için tokenService'i kullanıyoruz
      tokenService.setToken(token);
      return token; // Token'ı geri döndür
    } catch (error) {
      console.error("Authentication failed:", error);
      throw error; // Hata durumunu geri gönderiyoruz
    }
  };
}

export default new AuthService();
