import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdataUserDTO {
  @Length(3, 30)
  name: string;

  email: string;
}
