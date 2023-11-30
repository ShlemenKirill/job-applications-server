import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  Query,
  Put,
} from '@nestjs/common';
import { ApplicationsService } from './applications.service';
import { CreateApplicationDto } from './dto/create-application.dto';
import { UpdateApplicationDto } from './dto/update-application.dto';
import { Application } from './entities/application.entity';
import { ApplicationsListRequest } from './req/applicationsList.request';
import { ListResponse } from '../common/response';
import { ApiTags } from '@nestjs/swagger';

@UseInterceptors(ClassSerializerInterceptor)
@ApiTags('Applications')
@Controller('applications')
export class ApplicationsController {
  constructor(private readonly applicationsService: ApplicationsService) {}

  @Post()
  async create(@Body() createApplicationDto: CreateApplicationDto) {
    const application =
      await this.applicationsService.create(createApplicationDto);
    return new Application({ ...application });
  }

  @Get()
  async findAll(@Query() query: ApplicationsListRequest) {
    const { total, data } = await this.applicationsService.findAll(query);
    data.map((app) => new Application({ ...app }));
    return new ListResponse(query, data, total);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const application = await this.applicationsService.findOne(id);
    return new Application({ ...application });
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateApplicationDto: UpdateApplicationDto,
  ) {
    const application = await this.applicationsService.update(
      id,
      updateApplicationDto,
    );
    return new Application({ ...application });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const application = await this.applicationsService.remove(id);
    return new Application({ ...application });
  }
}
