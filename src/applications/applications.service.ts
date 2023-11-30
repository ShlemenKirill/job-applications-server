import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import * as crypto from 'crypto';
import { UsersService } from '../users/users.service';
import { ApplicationsListRequest } from './req/applicationsList.request';

@Injectable()
export class ApplicationsService {
  constructor(
    private prisma: PrismaService,
    private userService: UsersService,
  ) {}
  async create(createApplicationDto: CreateApplicationDto) {
    const { company, recruiter, userId, ...rest } = createApplicationDto;
    const application: Prisma.ApplicationCreateInput = {
      id: crypto.randomUUID(),
      ...rest,
      user: {
        connect: {
          id: userId,
        },
      },
      company: {
        create: {
          ...company,
        },
      },
      recruiter: {
        create: {
          ...recruiter,
        },
      },
    };

    return await this.prisma.application.create({ data: application });
  }

  async findAll(query: ApplicationsListRequest) {
    const { limit, page, sort } = query;

    const [total, data] = await this.prisma.$transaction([
      this.prisma.application.count(),
      this.prisma.application.findMany({
        take: Number(limit),
        skip: Number((page - 1) * limit),
        include: {
          company: true,
          recruiter: true,
        },
        orderBy: [],
      }),
    ]);
    return { total, data };
  }

  async findOne(id: string) {
    const application = await this.prisma.application.findUnique({
      where: { id },
      include: {
        company: true,
        recruiter: true,
        interviews: true,
      },
    });
    if (!application)
      throw new HttpException('Application not found', HttpStatus.NOT_FOUND);
    return application;
  }

  update(id: string, updateApplicationDto: UpdateApplicationDto) {
    const { company, recruiter, ...rest } = updateApplicationDto;
    const data: Prisma.ApplicationUpdateInput = {
      ...rest,
      company: {
        update: {
          ...company,
        },
      },
      recruiter: {
        update: {
          ...recruiter,
        },
      },
    };
    return this.prisma.application.update({
      data,
      include: {
        company: true,
        recruiter: true,
        interviews: true,
      },
      where: { id },
    });
  }

  remove(id: string) {
    return this.prisma.application.delete({
      where: { id },
    });
  }
}
