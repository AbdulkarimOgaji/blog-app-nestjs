import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ValidationPipe } from "src/validation.pipes";

import { CreateUserDto } from "./dto/create-user.dto";
import { UserService } from "./users.service";

@Controller("users")
export class UserController {
  constructor(
    private userService: UserService
  ) {}

  @Get("me")
  @UseGuards(AuthGuard("jwt"))
  getUserById(@Req() req) {
    return this.userService.getUserById(req.userId);
  }

  @Post()
  createUser(@Body() user: CreateUserDto) {
    return this.userService.createUser(user);
  }
}
