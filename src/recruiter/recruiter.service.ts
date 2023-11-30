import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRecruiterDto } from './dto/create-recruiter.dto';
import { UpdateRecruiterDto } from './dto/update-recruiter.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import * as crypto from 'crypto';

@Injectable()
export class RecruiterService {
  constructor(private prisma: PrismaService) {}
  async create(createRecruiterDto: CreateRecruiterDto) {
    const data: Prisma.RecruiterCreateInput = {
      id: crypto.randomUUID(),
      name: createRecruiterDto.name,
      contact: createRecruiterDto.contact,
    };
    return await this.prisma.recruiter.create({ data });
  }

  async findAll() {
    return await this.prisma.recruiter.findMany();
  }

  async findOne(id: string) {
    const recruiter = await this.prisma.recruiter.findUnique({
      where: { id },
    });
    if (!recruiter)
      throw new HttpException('Recruiter not found', HttpStatus.NOT_FOUND);
    return recruiter;
  }

  update(id: string, updateRecruiterDto: UpdateRecruiterDto) {
    const data: Prisma.RecruiterUpdateInput = {
      ...updateRecruiterDto,
    };
    return this.prisma.recruiter.update({
      data,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prisma.recruiter.delete({
      where: { id },
    });
  }
}
