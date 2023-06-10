import { ConflictException, Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne({
    email,
    id,
  }: {
    email?: string;
    id?: string;
  }): Promise<User | null> {
    if (email) {
      return this.userRepository.findOne({ where: { email } });
    }

    if (id) {
      return this.userRepository.findOne({ where: { id } });
    }

    return null;
  }

  async createUser(user: CreateUserDto): Promise<User> {
    // cofirm user is unique
    const existingUser = await this.userRepository.findOne({
      where: {
        email: user.email,
      },
    });

    if (existingUser) {
      throw new ConflictException('Username already exists');
    }

    const createdUser = this.userRepository.create({
      ...user,
    });

    return this.userRepository.save({
      ...createdUser,
    });
  }
}
