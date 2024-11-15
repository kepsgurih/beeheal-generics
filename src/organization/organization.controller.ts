import { Controller, Get, HttpStatus, Req, Res, UseGuards } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { getAuth, clerkClient } from '@clerk/express';
import { Request, Response } from 'express';
import { RolesGuard } from 'src/common/guard/roles.guard';

@Controller('v1/organization')
export class OrganizationController {
    constructor(
        private readonly organizationService: OrganizationService,
    ) { }

    @Get()
    @UseGuards(RolesGuard) 
    async getAll(@Res() response: Response) {
        // const user = getAuth(req)
        // const client = (clerkClient).users.getUser(user.userId)
        try {
            const orgData = await this.organizationService.getAllOrganization();
            return response.status(200).json({
                message: 'Berhasil mendapatkan semua data!',
                data: orgData
            })

        } catch (err) {
            return response.status(err.status).json(err.response);
        }
    }
    

}
