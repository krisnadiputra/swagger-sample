import { IsInt, IsString, IsOptional, ArrayUnique } from 'class-validator';
import { Transform } from 'class-transformer';
import { OmitType, ApiProperty } from '@nestjs/swagger';

class CreateAnimalDto {
  @ApiProperty({ description: 'comma-separated values' })
  @IsOptional()
  @ArrayUnique()
  @Transform((v: any) => v?.split(',').map((v: string) => v.trim()))
  characteristics?: string[];

  @IsOptional()
  @IsString()
  propertyA?: string;
}

export class CreateCatDto extends OmitType(CreateAnimalDto, ['propertyA'] as const) {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly age: number;

  @IsString()
  readonly breed: string;
}
