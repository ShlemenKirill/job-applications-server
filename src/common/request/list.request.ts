import { ApiPropertyOptional } from '@nestjs/swagger';

export const ListRequest = () => {
  class ListRequest {
    @ApiPropertyOptional({ minimum: 1, default: 1, type: Number })
    page = 1;
    @ApiPropertyOptional({ minimum: 1, maximum: 20, default: 10, type: Number })
    limit = 10;
  }

  return ListRequest;
};
