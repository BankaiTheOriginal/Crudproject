import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DataService } from './data.service';
import { CreateUserDTO } from '../dto/create-user.dto';
import { UpdataUserDTO } from 'src/dto/update-user.dto';

@Controller('users')
export class DataController {
  constructor(private userService: DataService) {}

  @Post('create')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async createUser(@Body() createUserDTO: CreateUserDTO) {
    return await this.userService.createUser(
      createUserDTO.name,
      createUserDTO.email,
    );
  }
  @Get()
  async getAllUsers() {
    return await this.userService.getAllUsers();
  }
  @Delete()
  async deleteUsers() {
    return await this.userService.deleteUsers();
  }
  @Put('update/:id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDTO: UpdataUserDTO,
  ) {
    return await this.userService.updateUser(
      id,
      updateUserDTO.name,
      updateUserDTO.email,
    );
  }
}
