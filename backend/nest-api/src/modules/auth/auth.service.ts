import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { User } from '../user/entities/user.entity';
import { JwtTokenPayload } from 'src/global-types/jwt-token-payload.type';

@Injectable()
export class AuthService {
  constructor(private usersService: UserService, private jwtService: JwtService) {}

  async login({ email: loginEmail, password: loginPassword }: LoginDto) {
    let matchedUser: User;

    try {
      matchedUser = await this.usersService.findOne({
        email: loginEmail,
      });
    } catch (e: unknown) {
      console.error(e);

      // obfuscate whatever the real error is
      throw new NotFoundException(
        'Login failed: No user exists with the given username and password combination',
      );
    }

    const isPasswordMatching = await this.#checkPasswordsMatch({
      password: loginPassword,
      storedPassword: matchedUser.password,
    });

    if (!isPasswordMatching)
      throw new NotFoundException(
        'Login failed: No user exists with the given username and password combination',
      );

    const token = await this.#createToken(matchedUser);

    return {
      accessToken: token,
    };
  }

  /*
   * Checks if given token is valid and belongs to an existing user
   */
  async verifyToken(token: string): Promise<boolean> {
    throw new Error('unimplemented');

    const { email } = await this.jwtService.verifyAsync(token).catch(() => {
      throw new UnauthorizedException('Verify token failed: Invalid token');
    });

    try {
      const user = await this.usersService.findOne({ email });
    } catch (e: unknown) {
      throw new NotFoundException('Verify token failed: No user found');
    }

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
    return this.jwtService.signAsync({
      email: user.email,
      isInstructor: user.isInstructor,
    } satisfies Omit<JwtTokenPayload, 'iat' | 'exp'>);
  }
}
