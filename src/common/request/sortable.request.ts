import { ListRequest } from './list.request';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export function SortableRequest<S extends string>(sortBy: Readonly<S[]>) {
  class SortableRequest extends ListRequest() {
    @ApiPropertyOptional({
      type: String,
      example: sortBy.join(','),
      description: `Also, it's possible to apply "-" before each field that's equivalent to reverse ordering.`,
    })
    sort: Partial<Record<S, 'ASC' | 'DESC'>>;
  }
  return SortableRequest;
}
