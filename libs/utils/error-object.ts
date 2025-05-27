export class ErrorObject {
  private field: string | null;
  private message: string;

  static createError(message: string, field?: string): ErrorObject[] {
    const errorObject = new ErrorObject();
    errorObject.message = message;
    errorObject.field = field || null;

    return [errorObject];
  }
}
