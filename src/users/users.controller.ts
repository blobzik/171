import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  users = [
    {
      id: 1,
      name: 'User 1',
    },
    {
      id: 2,
      name: 'User 2',
    },
  ];
  @Get()
  getAll(): { name: string; id: number }[] {
    return this.users;
  }
}
