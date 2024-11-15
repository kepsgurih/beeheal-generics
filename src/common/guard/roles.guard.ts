import { Injectable, CanActivate, ExecutionContext, ForbiddenException, Inject } from '@nestjs/common';
import { Request } from 'express';
import { clerkClient, getAuth } from '@clerk/express';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(@Inject('REQUIRED_ROLES') private requiredRoles: string[]) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const { userId } = getAuth(request);

    if (!userId) {
      throw new ForbiddenException('Unauthorized');
    }

    const user = await clerkClient.users.getUser(userId);
    const userRole = user.privateMetadata?.role as string ?? '';
    const hasRole = this.requiredRoles.includes(userRole);

    if (!hasRole) {
      throw new ForbiddenException('Forbidden');
    }

    return true;
  }
}
