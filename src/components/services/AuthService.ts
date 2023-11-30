class AuthService {
    static async login(username: string, password: string): Promise<void> {
      // Aquí puedes realizar la autenticación, por ejemplo, llamando a una API
      // y gestionando el token de acceso, etc.
      // Este ejemplo simplemente espera 1 segundo para simular una operación asíncrona.
      await new Promise((resolve) => setTimeout(resolve, 1000));
  
      if (username === 'usuario' && password === 'contraseña') {
        // Autenticación exitosa
        console.log('User authenticated!');
      } else {
        // Autenticación fallida
        throw new Error('Invalid credentials');
      }
    }
  }
  
  export default AuthService;
  