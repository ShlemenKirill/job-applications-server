import { ApiProperty } from '@nestjs/swagger';

export class Company {
  @ApiProperty()
  id: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  type: string;
  @ApiProperty()
  link?: string;
  @ApiProperty()
  notes?: string;
}
