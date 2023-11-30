import { ApiProperty } from '@nestjs/swagger';

export class Recruiter {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  contact: string;
}
