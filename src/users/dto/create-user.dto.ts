import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'John',
  })
  firstName: string;
  @ApiProperty({
    default: 'Doe',
  })
  lastName: string;
  @ApiProperty({
    default: 'securePassword1!',
  })
  password: string;
  @ApiProperty({
    default: 'john.doe@email.com',
  })
  email: string;
}
