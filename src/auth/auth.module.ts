import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from "@nestjs/jwt";
import { JwtAuthGuard } from "./jwt/JwtAuthGuard";
import { AuthService } from "./auth.service";

@Module({
  imports: [
    JwtModule.register({
      secret: 'broccoli',
    }),
  ],
  controllers: [AuthController],
  providers: [JwtAuthGuard, AuthService],
  exports: [JwtModule, JwtAuthGuard],
})
export class AuthModule {}
