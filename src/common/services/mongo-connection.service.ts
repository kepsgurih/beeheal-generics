import { Injectable } from '@nestjs/common';
import mongoose, { Connection } from 'mongoose';

@Injectable()
export class MongoConnectionService {
  private readonly uri = process.env.MONGO_URI; // Ganti sesuai kebutuhan
  private connection: Connection;

  async connect() {
    if (!this.connection) {
      this.connection = mongoose.createConnection(this.uri);
    }
    return this.connection;
  }

  getUri() {
    return this.uri;
  }
}
