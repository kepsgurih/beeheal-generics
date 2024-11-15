import { Module } from '@nestjs/common';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';
import { MongoConnectionService } from 'src/common/services/mongo-connection.service';
import { MongooseModule } from '@nestjs/mongoose';
import { OrganizationSchema } from './organization.schema';
import { RolesGuard } from 'src/common/guard/roles.guard';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Organization', schema: OrganizationSchema }]),
  ],
  controllers: [OrganizationController],
  providers: [OrganizationService,
    {
      provide: 'REQUIRED_ROLES',  // Menyediakan 'REQUIRED_ROLES' untuk dependency injection
      useValue: ['admin', 'stakeholder'],  // Nilai yang ingin Anda injeksikan
    },
    RolesGuard,
    MongoConnectionService]
})
export class OrganizationModule { }
