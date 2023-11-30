import { ApiPropertyOptional } from '@nestjs/swagger';

export class ListResponse<
  Q extends { page: number; limit: number },
  D extends Record<string, unknown> | unknown,
> {
  readonly pagination: Pick<Q, 'page' | 'limit'> & { total: number };
  readonly data: D[];

  constructor(query: Q, data: D[], totalRows: number) {
    this.pagination = {
      page: query.page,
      limit: query.limit,
      total: totalRows,
    };
    this.data = data;
  }
}
