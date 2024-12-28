import { Controller, Get, UnauthorizedException } from "@nestjs/common";
import { AuthService } from './auth.service';

@Controller('auth/getToken')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  getToken() {
    throw new UnauthorizedException()
    // return this.authService.generateToken('612')
  }
}
