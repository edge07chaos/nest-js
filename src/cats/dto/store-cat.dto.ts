import z from 'zod';
// import { IsInt, IsString, IsUUID, isUUID } from "class-validator";


// export class StoreCatDTO {
//   @IsUUID()
//   id: string;

//   @IsString()
//   name: string;

//   @IsInt()
//   age: number;

//   @IsString()
//   breed: string;
//}

export const storeCatSchema = z
  .object({
    id: z.uuid(),
    name: z.string(),
    age: z.number(),
    breed: z.string(),
  })
  .required();

export type StoreCatDTO = z.infer<typeof storeCatSchema>;