import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { ZodValidationPipe } from 'src/common/pipes/zod-validation.pipe';
import { type SigninDTO, signinSchema } from './dto/sign-in.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './guard/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ZodValidationPipe(signinSchema))
  async signin(@Body() signinDTO: SigninDTO) {
    return this.authService.signin(signinDTO.username, signinDTO.password);
  }

  @Get('me')
  @UseGuards(AuthGuard)
  show(@Request() request) {
    console.log("me me");
    
    return request.user;
  }
}
