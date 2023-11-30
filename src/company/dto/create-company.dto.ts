import { ApiProperty } from '@nestjs/swagger';

export class CreateCompanyDto {
  @ApiProperty({
    default: 'Company',
  })
  name: string;
  @ApiProperty({
    default: 'Product',
  })
  type: string;
  @ApiProperty({
    default: 'https://softeq.com',
  })
  link?: string;
  @ApiProperty({
    default: 'High priority',
  })
  notes?: string;
}
