import { ApiProperty } from '@nestjs/swagger';
import { CreateCompanyDto } from '../../company/dto/create-company.dto';
import { CreateRecruiterDto } from '../../recruiter/dto/create-recruiter.dto';
import {
  ApplicationSource,
  ApplicationStatus,
} from '@prisma/client/';

export class CreateApplicationDto {
  @ApiProperty({
    default: new Date().toISOString(),
  })
  applyingDate: Date;
  @ApiProperty({
    default: 'FE developer',
  })
  position: string;
  @ApiProperty({
    default: ApplicationSource.LINKEDIN,
  })
  source: ApplicationSource;
  @ApiProperty({
    default: ApplicationStatus.NO_ANSWER,
  })
  status: ApplicationStatus;
  @ApiProperty({
    default: '5000$',
  })
  salary: string;
  @ApiProperty({
    default: 'link',
  })
  link: string;
  @ApiProperty({
    default: '1',
  })
  userId?: string;
  @ApiProperty({
    default: {
      name: 'Company',
      type: 'Outsource',
      link: 'link',
      notes: 'notes',
    },
  })
  company: CreateCompanyDto;
  @ApiProperty({
    default: {
      name: 'Max Payne',
      contact: 'linledin',
    },
  })
  recruiter?: CreateRecruiterDto;
}
