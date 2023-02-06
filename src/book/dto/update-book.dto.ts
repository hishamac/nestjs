import { IsOptional, IsString, IsNumber, IsEnum, IsEmpty } from 'class-validator';
import { User } from '../../auth/schemas/user.schema';
import { Category } from '../schemas/book.schema';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  readonly title: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsString()
  readonly content: string;

  @IsOptional()
  @IsNumber()
  readonly price: number;

  @IsOptional()
  @IsEnum(Category, { message: 'Please enter correct category' })
  readonly category: Category;

  @IsEmpty({message:'Cannot pass userId'})
  readonly author: User;
}
