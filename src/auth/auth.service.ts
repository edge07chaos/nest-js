import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signin(username: string, pass: string): Promise<{access_token: string}> {
    const user = await this.userService.show(username);

    if (user?.password != pass) throw new UnauthorizedException();

    const payload = {
        sub: user.id,
        username: user.username
    };


    return {
        access_token: await this.jwtService.signAsync(payload)
    };
  }
}
