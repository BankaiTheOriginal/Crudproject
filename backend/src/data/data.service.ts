import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { error } from 'console';

const prisma = new PrismaClient();
@Injectable()
export class DataService {
  /**
   * Creates a new user in the database.
   * @param name - The name of the user to be created.
   * @param email - The email address of the user to be created.
   * @returns A promise that resolves to the created user object.
   */

  async createUser(name: string, email: string) {
    const existingUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (existingUser) {
      throw new BadRequestException('Email already exists');
    }
    return await prisma.user.create({
      data: { name, email },
    });
  }

  /**
   * Retrieves all users from the database.
   * @returns A promise that resolves to an array of user objects.
   */

  async getAllUsers() {
    return await prisma.user.findMany();
  }

  /**
   * Deletes all users from the database.
   * @returns A promise that resolves to the result of the delete operation.
   */

  async deleteUsers() {
    return await prisma.user.deleteMany();
  }
  async updateUser(id: string, name?: string, email?: string) {
    const existingUser = await prisma.user.findUnique({
      where: { id: id },
    });

    if (!existingUser) {
      throw new NotFoundException('User not found');
    }

    return await prisma.user.update({
      where: { id },
      data: { name, email },
    });
  }
}
