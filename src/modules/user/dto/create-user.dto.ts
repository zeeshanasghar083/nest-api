import { IsNotEmpty, IsString } from 'class-validator'

export class CreateUserDto {
  // Validates for a non-empty string
  @IsString()
  @IsNotEmpty()
  public email: string

  // @Transform(({ value }) => value.trim(value))
}
