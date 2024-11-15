import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationModule } from './organization/organization.module';
import { MongoConnectionService } from './common/services/mongo-connection.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClerkAuthMiddleware } from './common/services/clerk.service';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    OrganizationModule,
  ],
  controllers: [AppController],
  providers: [AppService, MongoConnectionService],
  exports: [MongoConnectionService]
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Mendaftarkan middleware Clerk untuk semua route
    consumer.apply(ClerkAuthMiddleware).forRoutes('*');
  }
}