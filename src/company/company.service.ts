import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import * as crypto from 'crypto';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}
  async create(createCompanyDto: CreateCompanyDto) {
    const data: Prisma.CompanyCreateInput = {
      id: crypto.randomUUID(),
      name: createCompanyDto.name,
      type: createCompanyDto.type,
      link: createCompanyDto.link,
      notes: createCompanyDto.notes,
    };
    return await this.prisma.company.create({ data });
  }

  async findAll() {
    return await this.prisma.company.findMany();
  }

  async findOne(id: string) {
    const user = await this.prisma.company.findUnique({
      where: { id },
    });
    if (!user)
      throw new HttpException('Company not found', HttpStatus.NOT_FOUND);
    return user;
  }

  update(id: string, updateCompanyDto: UpdateCompanyDto) {
    const data: Prisma.CompanyUpdateInput = {
      ...updateCompanyDto,
    };
    return this.prisma.company.update({
      data,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prisma.company.delete({
      where: { id },
    });
  }
}
