import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthorizedUser } from 'src/utils/decorators/authorized-user';
import { JwtTokenPayload } from 'src/global-types/jwt-token-payload.type';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Post()
  createNewUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Post('become-instructor')
  async becomeInstructor(@AuthorizedUser() user: JwtTokenPayload) {
    await this.userService.setAsInstructor({ userEmail: user.email });
  }
}
