import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UpdatedUserDto } from './dto/updated-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,

    private jwtService: JwtService,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepo.find();
  }

  // finds a user using `email` or `id` (uses `email` if both are given)
  async findOne({ email, id }: { email?: string; id?: string }): Promise<User> {
    if (email) {
      const user = await this.userRepo.findOne({ where: { email } });

      if (!user)
        throw new NotFoundException('Find user failed: User was not found with given email');

      return user;
    }

    if (id) {
      const user = await this.userRepo.findOne({ where: { id } });

      if (!user) throw new NotFoundException('Find user failed: User was not found with given id');

      return user;
    }

    throw new Error('Find user failed: Must pass either email or id');
  }

  async createUser(user: CreateUserDto) {
    // cofirm user is unique
    const existingUser = await this.userRepo.findOne({
      where: {
        email: user.email,
      },
    });

    if (existingUser) {
      throw new ConflictException('Create user failed: email already exists');
    }

    const createdUser = this.userRepo.create({
      ...user,
    });

    await this.userRepo.save({
      ...createdUser,
    });

    const token = await this.jwtService.signAsync({ email: user.email });

    return {
      accessToken: token,
    };
  }

  async makeInstructor({ userEmail }: { userEmail: string }) {
    await this.userRepo.update({ email: userEmail }, { isInstructor: true });
  }

  async update({ id, updatedUserDto }: { id: string; updatedUserDto: UpdatedUserDto }) {
    const updatedUser = await this.userRepo.preload({ id, ...updatedUserDto });

    if (!updatedUser) throw new NotFoundException('Make instructor failed: User was not found');

    await this.userRepo.save(updatedUser);
  }

  async delete(id: string) {
    const user = this.userRepo.findOneBy({ id });

    if (!user) throw new NotFoundException('Delete user failed: User was not found');

    await this.userRepo.delete(id);
  }
}
