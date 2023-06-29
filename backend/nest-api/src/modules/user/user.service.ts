import { ConflictException, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,

    private jwtService: JwtService,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne({ email, id }: { email?: string; id?: string }): Promise<User | null> {
    if (email) {
      return this.userRepository.findOne({ where: { email } });
    }

    if (id) {
      return this.userRepository.findOne({ where: { id } });
    }

    return null;
  }

  async createUser(user: CreateUserDto) {
    // cofirm user is unique
    const existingUser = await this.userRepository.findOne({
      where: {
        email: user.email,
      },
    });

    if (existingUser) {
      throw new ConflictException('email already exists');
    }

    const createdUser = this.userRepository.create({
      ...user,
    });

    await this.userRepository.save({
      ...createdUser,
    });

    const token = await this.jwtService.signAsync({ email: user.email });

    return {
      accessToken: token,
    };
  }

  async setAsInstructor({ userEmail }: { userEmail: string }) {
    await this.userRepository.update({ email: userEmail }, { isInstructor: true });
  }
}
