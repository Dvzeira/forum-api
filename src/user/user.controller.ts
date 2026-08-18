import { Body, Controller, Post } from '@nestjs/common';
import { UserModel } from 'src/generated/prisma/models';
import { Prisma } from 'src/generated/prisma/client';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor (private readonly userService: UserService){}

    @Post('user')
    async signupUser(
        @Body() userData: Prisma.UserCreateInput,
    ): Promise<UserModel> {
        return this.userService.createUser(userData);
    }
}
