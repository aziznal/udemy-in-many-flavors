import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthorizedUser } from 'src/utils/decorators/authorized-user';
import { JwtTokenPayload } from 'src/global-types/jwt-token-payload.type';
import { UpdatedUserDto } from './dto/updated-user.dto';
import { validateUUID } from 'src/utils/param-validators/id-validator';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    validateUUID(id);

    return this.userService.findOne({ id });
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Post('become-instructor')
  async makeInstructor(@AuthorizedUser() user: JwtTokenPayload) {
    await this.userService.makeInstructor({ userEmail: user.email });
  }

  @Patch()
  async update(@Body() updatedUserDto: UpdatedUserDto) {
    await this.userService.update(updatedUserDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    validateUUID(id);
    await this.userService.delete(id);
  }
}
