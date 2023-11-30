import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {} from '../../utils/constants';
import { Exclude } from 'class-transformer';
import { Recruiter } from '../../recruiter/entities/recruiter.entity';
import { Company } from '../../company/entities/company.entity';
import {
  ApplicationSource,
  ApplicationStatus,
  InterviewType,
} from '@prisma/client/';

export class Application {
  @ApiProperty()
  id: string;

  @ApiProperty()
  applyingDate: Date;

  @ApiProperty()
  position: string;

  @ApiProperty()
  source: ApplicationSource;

  @ApiProperty()
  status: ApplicationStatus;

  @ApiProperty()
  salary: string;

  @ApiProperty()
  link: string;

  @ApiPropertyOptional()
  currentStage?: InterviewType;

  @ApiPropertyOptional()
  nextInterviewDate?: Date;

  @Exclude()
  @ApiProperty()
  userId?: string;

  @ApiProperty()
  company: Company;

  @Exclude()
  companyId: string;

  @ApiProperty()
  recruiter?: Recruiter;

  @Exclude()
  recruiterId: string;

  constructor(partial: Partial<Application>) {
    Object.assign(this, partial);
  }
}
