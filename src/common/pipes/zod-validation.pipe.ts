import {
  PipeTransform,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import z, { ZodType, ZodError } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodType) {}

  transform(value: unknown, metadata: ArgumentMetadata) {
    try {
      // console.log('metadata.type: ', metadata.type);

      const parsedValue = this.schema.parse(value);
      return parsedValue;
    } catch (error) {
      if (error instanceof ZodError) {
        // throw new BadRequestException(z.prettifyError(error));
        // throw new BadRequestException(z.treeifyError(error))
        throw new BadRequestException(z.flattenError(error));
      }
      throw new BadRequestException('Validation failed');
    }
  }
}
