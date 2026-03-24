import z from 'zod';
// import { IsInt, IsString, IsUUID } from "class-validator";

// export class StoreCatDTO {

//   @IsString()
//   name: string;

//   @IsInt()
//   age: number;

//   @IsString()
//   breed: string;
//}

export const storeCatSchema = z
  .object({
    name: z.string(),
    age: z.number(),
    breed: z.string(),
  })
  .required();

export type StoreCatDTO = z.infer<typeof storeCatSchema>;
