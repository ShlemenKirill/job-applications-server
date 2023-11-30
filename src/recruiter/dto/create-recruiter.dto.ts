import { ApiProperty } from '@nestjs/swagger';

export class CreateRecruiterDto {
  @ApiProperty({
    default: 'Max Payne',
  })
  name: string;
  @ApiProperty({
    default: 'telegram',
  })
  contact: string;
}
