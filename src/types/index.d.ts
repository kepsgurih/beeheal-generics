declare global {
    namespace Express {
      interface Request {
        user?: any; // Anda bisa menyesuaikan tipe data user sesuai dengan struktur data yang Anda miliki
      }
    }
  }