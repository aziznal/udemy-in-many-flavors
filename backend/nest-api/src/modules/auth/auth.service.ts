import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { User } from '../user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService, private jwtService: JwtService) {}

  async login({ email: loginEmail, password: loginPassword }: LoginDto) {
    const matchedUser = await this.usersService.findOne({
      email: loginEmail,
    });

    if (!matchedUser) throw new NotFoundException('No user exists with the given username and password');

    const isPasswordMatching = await this.#checkPasswordsMatch({
      password: loginPassword,
      storedPassword: matchedUser.password,
    });

    if (!isPasswordMatching) throw new NotFoundException('No user exists with the given username and password');

    const token = await this.#createToken(matchedUser);

    return {
      accessToken: token,
    };
  }

  /*
   * Checks if given token is valid and belongs to an existing user
   */
  async verifyToken(token: string): Promise<boolean> {
    const { email } = await this.jwtService.verifyAsync(token).catch(() => {
      throw new UnauthorizedException('Invalid token');
    });

    const user = await this.usersService.findOne({ email });

    if (!user) throw new NotFoundException('No user found');

    return true;
  }

  async #hashPassword(password: string): Promise<string> {
    return password;
  }

  async #checkPasswordsMatch({
    password,
    storedPassword,
  }: {
    password: string;
    storedPassword: string;
  }): Promise<boolean> {
    const hashedPassword = await this.#hashPassword(password);

    return hashedPassword === storedPassword;
  }

  async #createToken(user: User): Promise<string> {
    return this.jwtService.signAsync({ email: user.email });
  }
}
