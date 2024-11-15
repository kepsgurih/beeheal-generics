import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Organization } from './organization.schema';
import { Model } from 'mongoose';
import { MongoConnectionService } from 'src/common/services/mongo-connection.service';

@Injectable()
export class OrganizationService {
    constructor(
        @InjectModel(Organization.name) private orgModel: Model<Organization>,
    ) { }

    async getAllOrganization(): Promise<any> {
        const orgData = await this.orgModel.find()
        // TODO: MIDDLEWARE HERE
        return orgData
    }
}
