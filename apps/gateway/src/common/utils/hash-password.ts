import * as bcrypt from 'bcryptjs';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CoreConfig } from '../../../../../libs/config/core.config';
import { ErrorObject } from '../../../../../libs/utils/error-object';

@Injectable()
export class HashPassword {
  constructor(protected сoreConfig: CoreConfig) {}

  async generateHash(password: string) {
    try {
      const saltRounds = this.сoreConfig.saltRounds;
      const salt = await bcrypt.genSalt(saltRounds);
      return bcrypt.hash(password, salt);
    } catch (err) {
      throw new BadRequestException(
        ErrorObject.createError('Ошибка генерации хэша', 'hash-password.ts'),
      );
    }
  }

  async checkPassword(password: string, hash: string) {
    return bcrypt.compare(password, hash);
  }
}
