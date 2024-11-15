import { Injectable, NestMiddleware } from '@nestjs/common';
import { clerkMiddleware } from '@clerk/express';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ClerkAuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Menambahkan middleware Clerk
    clerkMiddleware({
        secretKey: process.env.CLERK_SECRET_KEY,
        publishableKey:process.env.CLERK_PUBLISHABLE_KEY,
        // jwtKey: "-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA6pbpRdLCpobpI+U/FwQSfhnmyE6DSsFxgr4LJdB+MTyjP5v+yH+LEtzTjbFp/1i/q2irKSBYCfH8GGUJoQZ9CZXzYqhPZ+IlERxX2oHJz0gmH0JF8g5uwcX9tn1ikARFQStWjAw4LTZg3m3IROf6r3vuwkAd8tzcBs1dDIxe3rHPyYI+X07o16GM87axt4ylfYk9ozIPcgrLUIIHItBJ2ZWtOkD8yNW8PNCJsVSGO6liSIJnzbUm8JQhylXk0+SBsYsdDN2w+oUG/15DmBFDfqd8ejRIi+8N0MZTdSJid+kuZL44oQU+S868dX9wStQ0HJ/CCJY42ssz9URqZl45VwIDAQAB-----END PUBLIC KEY-----"
    })(req, res, next)
  }
}