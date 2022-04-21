import { IsInt, IsOptional, IsPositive } from 'class-validator';

export class PaginationQueryDto {
  @IsOptional()
  @IsInt()
  @IsPositive()
  limit?: number;

  @IsOptional()
  @IsInt()
  @IsPositive()
  offset?: number;
}
