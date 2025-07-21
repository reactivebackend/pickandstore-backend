
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserMetadata
 * 
 */
export type UserMetadata = $Result.DefaultSelection<Prisma.$UserMetadataPayload>
/**
 * Model UserAvatar
 * 
 */
export type UserAvatar = $Result.DefaultSelection<Prisma.$UserAvatarPayload>
/**
 * Model AuthAccount
 * 
 */
export type AuthAccount = $Result.DefaultSelection<Prisma.$AuthAccountPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Device
 * 
 */
export type Device = $Result.DefaultSelection<Prisma.$DevicePayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model SubscriptionPayments
 * 
 */
export type SubscriptionPayments = $Result.DefaultSelection<Prisma.$SubscriptionPaymentsPayload>
/**
 * Model PaymentsTransactions
 * 
 */
export type PaymentsTransactions = $Result.DefaultSelection<Prisma.$PaymentsTransactionsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const DeletionStatus: {
  NotDeleted: 'NotDeleted',
  Deleted: 'Deleted'
};

export type DeletionStatus = (typeof DeletionStatus)[keyof typeof DeletionStatus]


export const PaymentStatus: {
  Confirmend: 'Confirmend',
  PandingPayment: 'PandingPayment',
  Failed: 'Failed'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type DeletionStatus = $Enums.DeletionStatus

export const DeletionStatus: typeof $Enums.DeletionStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userMetadata`: Exposes CRUD operations for the **UserMetadata** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserMetadata
    * const userMetadata = await prisma.userMetadata.findMany()
    * ```
    */
  get userMetadata(): Prisma.UserMetadataDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userAvatar`: Exposes CRUD operations for the **UserAvatar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAvatars
    * const userAvatars = await prisma.userAvatar.findMany()
    * ```
    */
  get userAvatar(): Prisma.UserAvatarDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.authAccount`: Exposes CRUD operations for the **AuthAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuthAccounts
    * const authAccounts = await prisma.authAccount.findMany()
    * ```
    */
  get authAccount(): Prisma.AuthAccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.device`: Exposes CRUD operations for the **Device** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Devices
    * const devices = await prisma.device.findMany()
    * ```
    */
  get device(): Prisma.DeviceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionPayments`: Exposes CRUD operations for the **SubscriptionPayments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionPayments
    * const subscriptionPayments = await prisma.subscriptionPayments.findMany()
    * ```
    */
  get subscriptionPayments(): Prisma.SubscriptionPaymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paymentsTransactions`: Exposes CRUD operations for the **PaymentsTransactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentsTransactions
    * const paymentsTransactions = await prisma.paymentsTransactions.findMany()
    * ```
    */
  get paymentsTransactions(): Prisma.PaymentsTransactionsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserMetadata: 'UserMetadata',
    UserAvatar: 'UserAvatar',
    AuthAccount: 'AuthAccount',
    Post: 'Post',
    Device: 'Device',
    Subscription: 'Subscription',
    SubscriptionPayments: 'SubscriptionPayments',
    PaymentsTransactions: 'PaymentsTransactions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userMetadata" | "userAvatar" | "authAccount" | "post" | "device" | "subscription" | "subscriptionPayments" | "paymentsTransactions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserMetadata: {
        payload: Prisma.$UserMetadataPayload<ExtArgs>
        fields: Prisma.UserMetadataFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserMetadataFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMetadataPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserMetadataFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMetadataPayload>
          }
          findFirst: {
            args: Prisma.UserMetadataFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMetadataPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserMetadataFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMetadataPayload>
          }
          findMany: {
            args: Prisma.UserMetadataFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMetadataPayload>[]
          }
          create: {
            args: Prisma.UserMetadataCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMetadataPayload>
          }
          createMany: {
            args: Prisma.UserMetadataCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserMetadataCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMetadataPayload>[]
          }
          delete: {
            args: Prisma.UserMetadataDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMetadataPayload>
          }
          update: {
            args: Prisma.UserMetadataUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMetadataPayload>
          }
          deleteMany: {
            args: Prisma.UserMetadataDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserMetadataUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserMetadataUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMetadataPayload>[]
          }
          upsert: {
            args: Prisma.UserMetadataUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserMetadataPayload>
          }
          aggregate: {
            args: Prisma.UserMetadataAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserMetadata>
          }
          groupBy: {
            args: Prisma.UserMetadataGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserMetadataGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserMetadataCountArgs<ExtArgs>
            result: $Utils.Optional<UserMetadataCountAggregateOutputType> | number
          }
        }
      }
      UserAvatar: {
        payload: Prisma.$UserAvatarPayload<ExtArgs>
        fields: Prisma.UserAvatarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAvatarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAvatarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPayload>
          }
          findFirst: {
            args: Prisma.UserAvatarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAvatarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPayload>
          }
          findMany: {
            args: Prisma.UserAvatarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPayload>[]
          }
          create: {
            args: Prisma.UserAvatarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPayload>
          }
          createMany: {
            args: Prisma.UserAvatarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAvatarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPayload>[]
          }
          delete: {
            args: Prisma.UserAvatarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPayload>
          }
          update: {
            args: Prisma.UserAvatarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPayload>
          }
          deleteMany: {
            args: Prisma.UserAvatarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAvatarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserAvatarUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPayload>[]
          }
          upsert: {
            args: Prisma.UserAvatarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAvatarPayload>
          }
          aggregate: {
            args: Prisma.UserAvatarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAvatar>
          }
          groupBy: {
            args: Prisma.UserAvatarGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAvatarGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAvatarCountArgs<ExtArgs>
            result: $Utils.Optional<UserAvatarCountAggregateOutputType> | number
          }
        }
      }
      AuthAccount: {
        payload: Prisma.$AuthAccountPayload<ExtArgs>
        fields: Prisma.AuthAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuthAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuthAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          findFirst: {
            args: Prisma.AuthAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuthAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          findMany: {
            args: Prisma.AuthAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>[]
          }
          create: {
            args: Prisma.AuthAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          createMany: {
            args: Prisma.AuthAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuthAccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>[]
          }
          delete: {
            args: Prisma.AuthAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          update: {
            args: Prisma.AuthAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          deleteMany: {
            args: Prisma.AuthAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuthAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuthAccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>[]
          }
          upsert: {
            args: Prisma.AuthAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuthAccountPayload>
          }
          aggregate: {
            args: Prisma.AuthAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuthAccount>
          }
          groupBy: {
            args: Prisma.AuthAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuthAccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuthAccountCountArgs<ExtArgs>
            result: $Utils.Optional<AuthAccountCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Device: {
        payload: Prisma.$DevicePayload<ExtArgs>
        fields: Prisma.DeviceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeviceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeviceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findFirst: {
            args: Prisma.DeviceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeviceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          findMany: {
            args: Prisma.DeviceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          create: {
            args: Prisma.DeviceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          createMany: {
            args: Prisma.DeviceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeviceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          delete: {
            args: Prisma.DeviceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          update: {
            args: Prisma.DeviceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          deleteMany: {
            args: Prisma.DeviceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeviceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeviceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>[]
          }
          upsert: {
            args: Prisma.DeviceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DevicePayload>
          }
          aggregate: {
            args: Prisma.DeviceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDevice>
          }
          groupBy: {
            args: Prisma.DeviceGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeviceGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeviceCountArgs<ExtArgs>
            result: $Utils.Optional<DeviceCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionPayments: {
        payload: Prisma.$SubscriptionPaymentsPayload<ExtArgs>
        fields: Prisma.SubscriptionPaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionPaymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionPaymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPaymentsPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionPaymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionPaymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPaymentsPayload>
          }
          findMany: {
            args: Prisma.SubscriptionPaymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPaymentsPayload>[]
          }
          create: {
            args: Prisma.SubscriptionPaymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPaymentsPayload>
          }
          createMany: {
            args: Prisma.SubscriptionPaymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionPaymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPaymentsPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionPaymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPaymentsPayload>
          }
          update: {
            args: Prisma.SubscriptionPaymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPaymentsPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionPaymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionPaymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionPaymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPaymentsPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionPaymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPaymentsPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionPaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionPayments>
          }
          groupBy: {
            args: Prisma.SubscriptionPaymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionPaymentsCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPaymentsCountAggregateOutputType> | number
          }
        }
      }
      PaymentsTransactions: {
        payload: Prisma.$PaymentsTransactionsPayload<ExtArgs>
        fields: Prisma.PaymentsTransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentsTransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsTransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentsTransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsTransactionsPayload>
          }
          findFirst: {
            args: Prisma.PaymentsTransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsTransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentsTransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsTransactionsPayload>
          }
          findMany: {
            args: Prisma.PaymentsTransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsTransactionsPayload>[]
          }
          create: {
            args: Prisma.PaymentsTransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsTransactionsPayload>
          }
          createMany: {
            args: Prisma.PaymentsTransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentsTransactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsTransactionsPayload>[]
          }
          delete: {
            args: Prisma.PaymentsTransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsTransactionsPayload>
          }
          update: {
            args: Prisma.PaymentsTransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsTransactionsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentsTransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentsTransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentsTransactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsTransactionsPayload>[]
          }
          upsert: {
            args: Prisma.PaymentsTransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentsTransactionsPayload>
          }
          aggregate: {
            args: Prisma.PaymentsTransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentsTransactions>
          }
          groupBy: {
            args: Prisma.PaymentsTransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentsTransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentsTransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentsTransactionsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userMetadata?: UserMetadataOmit
    userAvatar?: UserAvatarOmit
    authAccount?: AuthAccountOmit
    post?: PostOmit
    device?: DeviceOmit
    subscription?: SubscriptionOmit
    subscriptionPayments?: SubscriptionPaymentsOmit
    paymentsTransactions?: PaymentsTransactionsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    authAccounts: number
    devices: number
    posts: number
    userAvatars: number
    subscription: number
    payments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    authAccounts?: boolean | UserCountOutputTypeCountAuthAccountsArgs
    devices?: boolean | UserCountOutputTypeCountDevicesArgs
    posts?: boolean | UserCountOutputTypeCountPostsArgs
    userAvatars?: boolean | UserCountOutputTypeCountUserAvatarsArgs
    subscription?: boolean | UserCountOutputTypeCountSubscriptionArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuthAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthAccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDevicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserAvatarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAvatarWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsTransactionsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    country: string | null
    city: string | null
    aboutMe: string | null
    passwordHash: string | null
    deletionStatus: $Enums.DeletionStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    country: string | null
    city: string | null
    aboutMe: string | null
    passwordHash: string | null
    deletionStatus: $Enums.DeletionStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    firstName: number
    lastName: number
    dateOfBirth: number
    country: number
    city: number
    aboutMe: number
    passwordHash: number
    deletionStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    country?: true
    city?: true
    aboutMe?: true
    passwordHash?: true
    deletionStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    country?: true
    city?: true
    aboutMe?: true
    passwordHash?: true
    deletionStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    firstName?: true
    lastName?: true
    dateOfBirth?: true
    country?: true
    city?: true
    aboutMe?: true
    passwordHash?: true
    deletionStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    firstName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    country: string | null
    city: string | null
    aboutMe: string | null
    passwordHash: string | null
    deletionStatus: $Enums.DeletionStatus
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    country?: boolean
    city?: boolean
    aboutMe?: boolean
    passwordHash?: boolean
    deletionStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userMetadata?: boolean | User$userMetadataArgs<ExtArgs>
    authAccounts?: boolean | User$authAccountsArgs<ExtArgs>
    devices?: boolean | User$devicesArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    userAvatars?: boolean | User$userAvatarsArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    country?: boolean
    city?: boolean
    aboutMe?: boolean
    passwordHash?: boolean
    deletionStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    country?: boolean
    city?: boolean
    aboutMe?: boolean
    passwordHash?: boolean
    deletionStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    firstName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    country?: boolean
    city?: boolean
    aboutMe?: boolean
    passwordHash?: boolean
    deletionStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "firstName" | "lastName" | "dateOfBirth" | "country" | "city" | "aboutMe" | "passwordHash" | "deletionStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userMetadata?: boolean | User$userMetadataArgs<ExtArgs>
    authAccounts?: boolean | User$authAccountsArgs<ExtArgs>
    devices?: boolean | User$devicesArgs<ExtArgs>
    posts?: boolean | User$postsArgs<ExtArgs>
    userAvatars?: boolean | User$userAvatarsArgs<ExtArgs>
    subscription?: boolean | User$subscriptionArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userMetadata: Prisma.$UserMetadataPayload<ExtArgs> | null
      authAccounts: Prisma.$AuthAccountPayload<ExtArgs>[]
      devices: Prisma.$DevicePayload<ExtArgs>[]
      posts: Prisma.$PostPayload<ExtArgs>[]
      userAvatars: Prisma.$UserAvatarPayload<ExtArgs>[]
      subscription: Prisma.$SubscriptionPayload<ExtArgs>[]
      payments: Prisma.$PaymentsTransactionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      firstName: string | null
      lastName: string | null
      dateOfBirth: Date | null
      country: string | null
      city: string | null
      aboutMe: string | null
      passwordHash: string | null
      deletionStatus: $Enums.DeletionStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userMetadata<T extends User$userMetadataArgs<ExtArgs> = {}>(args?: Subset<T, User$userMetadataArgs<ExtArgs>>): Prisma__UserMetadataClient<$Result.GetResult<Prisma.$UserMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    authAccounts<T extends User$authAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$authAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    devices<T extends User$devicesArgs<ExtArgs> = {}>(args?: Subset<T, User$devicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userAvatars<T extends User$userAvatarsArgs<ExtArgs> = {}>(args?: Subset<T, User$userAvatarsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscription<T extends User$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsTransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly dateOfBirth: FieldRef<"User", 'DateTime'>
    readonly country: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly aboutMe: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly deletionStatus: FieldRef<"User", 'DeletionStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userMetadata
   */
  export type User$userMetadataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetadata
     */
    select?: UserMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetadata
     */
    omit?: UserMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetadataInclude<ExtArgs> | null
    where?: UserMetadataWhereInput
  }

  /**
   * User.authAccounts
   */
  export type User$authAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    where?: AuthAccountWhereInput
    orderBy?: AuthAccountOrderByWithRelationInput | AuthAccountOrderByWithRelationInput[]
    cursor?: AuthAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuthAccountScalarFieldEnum | AuthAccountScalarFieldEnum[]
  }

  /**
   * User.devices
   */
  export type User$devicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    cursor?: DeviceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User.userAvatars
   */
  export type User$userAvatarsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatar
     */
    omit?: UserAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarInclude<ExtArgs> | null
    where?: UserAvatarWhereInput
    orderBy?: UserAvatarOrderByWithRelationInput | UserAvatarOrderByWithRelationInput[]
    cursor?: UserAvatarWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserAvatarScalarFieldEnum | UserAvatarScalarFieldEnum[]
  }

  /**
   * User.subscription
   */
  export type User$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsTransactions
     */
    select?: PaymentsTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentsTransactions
     */
    omit?: PaymentsTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsTransactionsInclude<ExtArgs> | null
    where?: PaymentsTransactionsWhereInput
    orderBy?: PaymentsTransactionsOrderByWithRelationInput | PaymentsTransactionsOrderByWithRelationInput[]
    cursor?: PaymentsTransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentsTransactionsScalarFieldEnum | PaymentsTransactionsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserMetadata
   */

  export type AggregateUserMetadata = {
    _count: UserMetadataCountAggregateOutputType | null
    _avg: UserMetadataAvgAggregateOutputType | null
    _sum: UserMetadataSumAggregateOutputType | null
    _min: UserMetadataMinAggregateOutputType | null
    _max: UserMetadataMaxAggregateOutputType | null
  }

  export type UserMetadataAvgAggregateOutputType = {
    userId: number | null
  }

  export type UserMetadataSumAggregateOutputType = {
    userId: number | null
  }

  export type UserMetadataMinAggregateOutputType = {
    userId: number | null
    emailConfirmationCode: string | null
    emailConfirmationExpiration: Date | null
    isEmailConfirmed: boolean | null
    passwordRecoveryCode: string | null
    passwordRecoveryExpiration: Date | null
  }

  export type UserMetadataMaxAggregateOutputType = {
    userId: number | null
    emailConfirmationCode: string | null
    emailConfirmationExpiration: Date | null
    isEmailConfirmed: boolean | null
    passwordRecoveryCode: string | null
    passwordRecoveryExpiration: Date | null
  }

  export type UserMetadataCountAggregateOutputType = {
    userId: number
    emailConfirmationCode: number
    emailConfirmationExpiration: number
    isEmailConfirmed: number
    passwordRecoveryCode: number
    passwordRecoveryExpiration: number
    _all: number
  }


  export type UserMetadataAvgAggregateInputType = {
    userId?: true
  }

  export type UserMetadataSumAggregateInputType = {
    userId?: true
  }

  export type UserMetadataMinAggregateInputType = {
    userId?: true
    emailConfirmationCode?: true
    emailConfirmationExpiration?: true
    isEmailConfirmed?: true
    passwordRecoveryCode?: true
    passwordRecoveryExpiration?: true
  }

  export type UserMetadataMaxAggregateInputType = {
    userId?: true
    emailConfirmationCode?: true
    emailConfirmationExpiration?: true
    isEmailConfirmed?: true
    passwordRecoveryCode?: true
    passwordRecoveryExpiration?: true
  }

  export type UserMetadataCountAggregateInputType = {
    userId?: true
    emailConfirmationCode?: true
    emailConfirmationExpiration?: true
    isEmailConfirmed?: true
    passwordRecoveryCode?: true
    passwordRecoveryExpiration?: true
    _all?: true
  }

  export type UserMetadataAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMetadata to aggregate.
     */
    where?: UserMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMetadata to fetch.
     */
    orderBy?: UserMetadataOrderByWithRelationInput | UserMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserMetadata
    **/
    _count?: true | UserMetadataCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserMetadataAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserMetadataSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMetadataMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMetadataMaxAggregateInputType
  }

  export type GetUserMetadataAggregateType<T extends UserMetadataAggregateArgs> = {
        [P in keyof T & keyof AggregateUserMetadata]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserMetadata[P]>
      : GetScalarType<T[P], AggregateUserMetadata[P]>
  }




  export type UserMetadataGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserMetadataWhereInput
    orderBy?: UserMetadataOrderByWithAggregationInput | UserMetadataOrderByWithAggregationInput[]
    by: UserMetadataScalarFieldEnum[] | UserMetadataScalarFieldEnum
    having?: UserMetadataScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserMetadataCountAggregateInputType | true
    _avg?: UserMetadataAvgAggregateInputType
    _sum?: UserMetadataSumAggregateInputType
    _min?: UserMetadataMinAggregateInputType
    _max?: UserMetadataMaxAggregateInputType
  }

  export type UserMetadataGroupByOutputType = {
    userId: number
    emailConfirmationCode: string | null
    emailConfirmationExpiration: Date | null
    isEmailConfirmed: boolean
    passwordRecoveryCode: string | null
    passwordRecoveryExpiration: Date | null
    _count: UserMetadataCountAggregateOutputType | null
    _avg: UserMetadataAvgAggregateOutputType | null
    _sum: UserMetadataSumAggregateOutputType | null
    _min: UserMetadataMinAggregateOutputType | null
    _max: UserMetadataMaxAggregateOutputType | null
  }

  type GetUserMetadataGroupByPayload<T extends UserMetadataGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserMetadataGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserMetadataGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserMetadataGroupByOutputType[P]>
            : GetScalarType<T[P], UserMetadataGroupByOutputType[P]>
        }
      >
    >


  export type UserMetadataSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    emailConfirmationCode?: boolean
    emailConfirmationExpiration?: boolean
    isEmailConfirmed?: boolean
    passwordRecoveryCode?: boolean
    passwordRecoveryExpiration?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMetadata"]>

  export type UserMetadataSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    emailConfirmationCode?: boolean
    emailConfirmationExpiration?: boolean
    isEmailConfirmed?: boolean
    passwordRecoveryCode?: boolean
    passwordRecoveryExpiration?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMetadata"]>

  export type UserMetadataSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    emailConfirmationCode?: boolean
    emailConfirmationExpiration?: boolean
    isEmailConfirmed?: boolean
    passwordRecoveryCode?: boolean
    passwordRecoveryExpiration?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userMetadata"]>

  export type UserMetadataSelectScalar = {
    userId?: boolean
    emailConfirmationCode?: boolean
    emailConfirmationExpiration?: boolean
    isEmailConfirmed?: boolean
    passwordRecoveryCode?: boolean
    passwordRecoveryExpiration?: boolean
  }

  export type UserMetadataOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "emailConfirmationCode" | "emailConfirmationExpiration" | "isEmailConfirmed" | "passwordRecoveryCode" | "passwordRecoveryExpiration", ExtArgs["result"]["userMetadata"]>
  export type UserMetadataInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserMetadataIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserMetadataIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserMetadataPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserMetadata"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: number
      emailConfirmationCode: string | null
      emailConfirmationExpiration: Date | null
      isEmailConfirmed: boolean
      passwordRecoveryCode: string | null
      passwordRecoveryExpiration: Date | null
    }, ExtArgs["result"]["userMetadata"]>
    composites: {}
  }

  type UserMetadataGetPayload<S extends boolean | null | undefined | UserMetadataDefaultArgs> = $Result.GetResult<Prisma.$UserMetadataPayload, S>

  type UserMetadataCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserMetadataFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserMetadataCountAggregateInputType | true
    }

  export interface UserMetadataDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserMetadata'], meta: { name: 'UserMetadata' } }
    /**
     * Find zero or one UserMetadata that matches the filter.
     * @param {UserMetadataFindUniqueArgs} args - Arguments to find a UserMetadata
     * @example
     * // Get one UserMetadata
     * const userMetadata = await prisma.userMetadata.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserMetadataFindUniqueArgs>(args: SelectSubset<T, UserMetadataFindUniqueArgs<ExtArgs>>): Prisma__UserMetadataClient<$Result.GetResult<Prisma.$UserMetadataPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserMetadata that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserMetadataFindUniqueOrThrowArgs} args - Arguments to find a UserMetadata
     * @example
     * // Get one UserMetadata
     * const userMetadata = await prisma.userMetadata.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserMetadataFindUniqueOrThrowArgs>(args: SelectSubset<T, UserMetadataFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserMetadataClient<$Result.GetResult<Prisma.$UserMetadataPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMetadataFindFirstArgs} args - Arguments to find a UserMetadata
     * @example
     * // Get one UserMetadata
     * const userMetadata = await prisma.userMetadata.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserMetadataFindFirstArgs>(args?: SelectSubset<T, UserMetadataFindFirstArgs<ExtArgs>>): Prisma__UserMetadataClient<$Result.GetResult<Prisma.$UserMetadataPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserMetadata that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMetadataFindFirstOrThrowArgs} args - Arguments to find a UserMetadata
     * @example
     * // Get one UserMetadata
     * const userMetadata = await prisma.userMetadata.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserMetadataFindFirstOrThrowArgs>(args?: SelectSubset<T, UserMetadataFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserMetadataClient<$Result.GetResult<Prisma.$UserMetadataPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserMetadata that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMetadataFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserMetadata
     * const userMetadata = await prisma.userMetadata.findMany()
     * 
     * // Get first 10 UserMetadata
     * const userMetadata = await prisma.userMetadata.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userMetadataWithUserIdOnly = await prisma.userMetadata.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserMetadataFindManyArgs>(args?: SelectSubset<T, UserMetadataFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMetadataPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserMetadata.
     * @param {UserMetadataCreateArgs} args - Arguments to create a UserMetadata.
     * @example
     * // Create one UserMetadata
     * const UserMetadata = await prisma.userMetadata.create({
     *   data: {
     *     // ... data to create a UserMetadata
     *   }
     * })
     * 
     */
    create<T extends UserMetadataCreateArgs>(args: SelectSubset<T, UserMetadataCreateArgs<ExtArgs>>): Prisma__UserMetadataClient<$Result.GetResult<Prisma.$UserMetadataPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserMetadata.
     * @param {UserMetadataCreateManyArgs} args - Arguments to create many UserMetadata.
     * @example
     * // Create many UserMetadata
     * const userMetadata = await prisma.userMetadata.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserMetadataCreateManyArgs>(args?: SelectSubset<T, UserMetadataCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserMetadata and returns the data saved in the database.
     * @param {UserMetadataCreateManyAndReturnArgs} args - Arguments to create many UserMetadata.
     * @example
     * // Create many UserMetadata
     * const userMetadata = await prisma.userMetadata.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserMetadata and only return the `userId`
     * const userMetadataWithUserIdOnly = await prisma.userMetadata.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserMetadataCreateManyAndReturnArgs>(args?: SelectSubset<T, UserMetadataCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMetadataPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserMetadata.
     * @param {UserMetadataDeleteArgs} args - Arguments to delete one UserMetadata.
     * @example
     * // Delete one UserMetadata
     * const UserMetadata = await prisma.userMetadata.delete({
     *   where: {
     *     // ... filter to delete one UserMetadata
     *   }
     * })
     * 
     */
    delete<T extends UserMetadataDeleteArgs>(args: SelectSubset<T, UserMetadataDeleteArgs<ExtArgs>>): Prisma__UserMetadataClient<$Result.GetResult<Prisma.$UserMetadataPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserMetadata.
     * @param {UserMetadataUpdateArgs} args - Arguments to update one UserMetadata.
     * @example
     * // Update one UserMetadata
     * const userMetadata = await prisma.userMetadata.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserMetadataUpdateArgs>(args: SelectSubset<T, UserMetadataUpdateArgs<ExtArgs>>): Prisma__UserMetadataClient<$Result.GetResult<Prisma.$UserMetadataPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserMetadata.
     * @param {UserMetadataDeleteManyArgs} args - Arguments to filter UserMetadata to delete.
     * @example
     * // Delete a few UserMetadata
     * const { count } = await prisma.userMetadata.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserMetadataDeleteManyArgs>(args?: SelectSubset<T, UserMetadataDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMetadataUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserMetadata
     * const userMetadata = await prisma.userMetadata.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserMetadataUpdateManyArgs>(args: SelectSubset<T, UserMetadataUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserMetadata and returns the data updated in the database.
     * @param {UserMetadataUpdateManyAndReturnArgs} args - Arguments to update many UserMetadata.
     * @example
     * // Update many UserMetadata
     * const userMetadata = await prisma.userMetadata.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserMetadata and only return the `userId`
     * const userMetadataWithUserIdOnly = await prisma.userMetadata.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserMetadataUpdateManyAndReturnArgs>(args: SelectSubset<T, UserMetadataUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserMetadataPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserMetadata.
     * @param {UserMetadataUpsertArgs} args - Arguments to update or create a UserMetadata.
     * @example
     * // Update or create a UserMetadata
     * const userMetadata = await prisma.userMetadata.upsert({
     *   create: {
     *     // ... data to create a UserMetadata
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserMetadata we want to update
     *   }
     * })
     */
    upsert<T extends UserMetadataUpsertArgs>(args: SelectSubset<T, UserMetadataUpsertArgs<ExtArgs>>): Prisma__UserMetadataClient<$Result.GetResult<Prisma.$UserMetadataPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMetadataCountArgs} args - Arguments to filter UserMetadata to count.
     * @example
     * // Count the number of UserMetadata
     * const count = await prisma.userMetadata.count({
     *   where: {
     *     // ... the filter for the UserMetadata we want to count
     *   }
     * })
    **/
    count<T extends UserMetadataCountArgs>(
      args?: Subset<T, UserMetadataCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserMetadataCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMetadataAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserMetadataAggregateArgs>(args: Subset<T, UserMetadataAggregateArgs>): Prisma.PrismaPromise<GetUserMetadataAggregateType<T>>

    /**
     * Group by UserMetadata.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserMetadataGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserMetadataGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserMetadataGroupByArgs['orderBy'] }
        : { orderBy?: UserMetadataGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserMetadataGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserMetadataGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserMetadata model
   */
  readonly fields: UserMetadataFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserMetadata.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserMetadataClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserMetadata model
   */
  interface UserMetadataFieldRefs {
    readonly userId: FieldRef<"UserMetadata", 'Int'>
    readonly emailConfirmationCode: FieldRef<"UserMetadata", 'String'>
    readonly emailConfirmationExpiration: FieldRef<"UserMetadata", 'DateTime'>
    readonly isEmailConfirmed: FieldRef<"UserMetadata", 'Boolean'>
    readonly passwordRecoveryCode: FieldRef<"UserMetadata", 'String'>
    readonly passwordRecoveryExpiration: FieldRef<"UserMetadata", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserMetadata findUnique
   */
  export type UserMetadataFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetadata
     */
    select?: UserMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetadata
     */
    omit?: UserMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetadataInclude<ExtArgs> | null
    /**
     * Filter, which UserMetadata to fetch.
     */
    where: UserMetadataWhereUniqueInput
  }

  /**
   * UserMetadata findUniqueOrThrow
   */
  export type UserMetadataFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetadata
     */
    select?: UserMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetadata
     */
    omit?: UserMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetadataInclude<ExtArgs> | null
    /**
     * Filter, which UserMetadata to fetch.
     */
    where: UserMetadataWhereUniqueInput
  }

  /**
   * UserMetadata findFirst
   */
  export type UserMetadataFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetadata
     */
    select?: UserMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetadata
     */
    omit?: UserMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetadataInclude<ExtArgs> | null
    /**
     * Filter, which UserMetadata to fetch.
     */
    where?: UserMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMetadata to fetch.
     */
    orderBy?: UserMetadataOrderByWithRelationInput | UserMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMetadata.
     */
    cursor?: UserMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMetadata.
     */
    distinct?: UserMetadataScalarFieldEnum | UserMetadataScalarFieldEnum[]
  }

  /**
   * UserMetadata findFirstOrThrow
   */
  export type UserMetadataFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetadata
     */
    select?: UserMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetadata
     */
    omit?: UserMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetadataInclude<ExtArgs> | null
    /**
     * Filter, which UserMetadata to fetch.
     */
    where?: UserMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMetadata to fetch.
     */
    orderBy?: UserMetadataOrderByWithRelationInput | UserMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserMetadata.
     */
    cursor?: UserMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMetadata.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserMetadata.
     */
    distinct?: UserMetadataScalarFieldEnum | UserMetadataScalarFieldEnum[]
  }

  /**
   * UserMetadata findMany
   */
  export type UserMetadataFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetadata
     */
    select?: UserMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetadata
     */
    omit?: UserMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetadataInclude<ExtArgs> | null
    /**
     * Filter, which UserMetadata to fetch.
     */
    where?: UserMetadataWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserMetadata to fetch.
     */
    orderBy?: UserMetadataOrderByWithRelationInput | UserMetadataOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserMetadata.
     */
    cursor?: UserMetadataWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserMetadata from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserMetadata.
     */
    skip?: number
    distinct?: UserMetadataScalarFieldEnum | UserMetadataScalarFieldEnum[]
  }

  /**
   * UserMetadata create
   */
  export type UserMetadataCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetadata
     */
    select?: UserMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetadata
     */
    omit?: UserMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetadataInclude<ExtArgs> | null
    /**
     * The data needed to create a UserMetadata.
     */
    data: XOR<UserMetadataCreateInput, UserMetadataUncheckedCreateInput>
  }

  /**
   * UserMetadata createMany
   */
  export type UserMetadataCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserMetadata.
     */
    data: UserMetadataCreateManyInput | UserMetadataCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserMetadata createManyAndReturn
   */
  export type UserMetadataCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetadata
     */
    select?: UserMetadataSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetadata
     */
    omit?: UserMetadataOmit<ExtArgs> | null
    /**
     * The data used to create many UserMetadata.
     */
    data: UserMetadataCreateManyInput | UserMetadataCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetadataIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserMetadata update
   */
  export type UserMetadataUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetadata
     */
    select?: UserMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetadata
     */
    omit?: UserMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetadataInclude<ExtArgs> | null
    /**
     * The data needed to update a UserMetadata.
     */
    data: XOR<UserMetadataUpdateInput, UserMetadataUncheckedUpdateInput>
    /**
     * Choose, which UserMetadata to update.
     */
    where: UserMetadataWhereUniqueInput
  }

  /**
   * UserMetadata updateMany
   */
  export type UserMetadataUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserMetadata.
     */
    data: XOR<UserMetadataUpdateManyMutationInput, UserMetadataUncheckedUpdateManyInput>
    /**
     * Filter which UserMetadata to update
     */
    where?: UserMetadataWhereInput
    /**
     * Limit how many UserMetadata to update.
     */
    limit?: number
  }

  /**
   * UserMetadata updateManyAndReturn
   */
  export type UserMetadataUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetadata
     */
    select?: UserMetadataSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetadata
     */
    omit?: UserMetadataOmit<ExtArgs> | null
    /**
     * The data used to update UserMetadata.
     */
    data: XOR<UserMetadataUpdateManyMutationInput, UserMetadataUncheckedUpdateManyInput>
    /**
     * Filter which UserMetadata to update
     */
    where?: UserMetadataWhereInput
    /**
     * Limit how many UserMetadata to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetadataIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserMetadata upsert
   */
  export type UserMetadataUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetadata
     */
    select?: UserMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetadata
     */
    omit?: UserMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetadataInclude<ExtArgs> | null
    /**
     * The filter to search for the UserMetadata to update in case it exists.
     */
    where: UserMetadataWhereUniqueInput
    /**
     * In case the UserMetadata found by the `where` argument doesn't exist, create a new UserMetadata with this data.
     */
    create: XOR<UserMetadataCreateInput, UserMetadataUncheckedCreateInput>
    /**
     * In case the UserMetadata was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserMetadataUpdateInput, UserMetadataUncheckedUpdateInput>
  }

  /**
   * UserMetadata delete
   */
  export type UserMetadataDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetadata
     */
    select?: UserMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetadata
     */
    omit?: UserMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetadataInclude<ExtArgs> | null
    /**
     * Filter which UserMetadata to delete.
     */
    where: UserMetadataWhereUniqueInput
  }

  /**
   * UserMetadata deleteMany
   */
  export type UserMetadataDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserMetadata to delete
     */
    where?: UserMetadataWhereInput
    /**
     * Limit how many UserMetadata to delete.
     */
    limit?: number
  }

  /**
   * UserMetadata without action
   */
  export type UserMetadataDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserMetadata
     */
    select?: UserMetadataSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserMetadata
     */
    omit?: UserMetadataOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserMetadataInclude<ExtArgs> | null
  }


  /**
   * Model UserAvatar
   */

  export type AggregateUserAvatar = {
    _count: UserAvatarCountAggregateOutputType | null
    _avg: UserAvatarAvgAggregateOutputType | null
    _sum: UserAvatarSumAggregateOutputType | null
    _min: UserAvatarMinAggregateOutputType | null
    _max: UserAvatarMaxAggregateOutputType | null
  }

  export type UserAvatarAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserAvatarSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type UserAvatarMinAggregateOutputType = {
    id: number | null
    userId: number | null
    avatarUrl: string | null
    createdAt: Date | null
    deletionStatus: $Enums.DeletionStatus | null
  }

  export type UserAvatarMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    avatarUrl: string | null
    createdAt: Date | null
    deletionStatus: $Enums.DeletionStatus | null
  }

  export type UserAvatarCountAggregateOutputType = {
    id: number
    userId: number
    avatarUrl: number
    createdAt: number
    deletionStatus: number
    _all: number
  }


  export type UserAvatarAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserAvatarSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type UserAvatarMinAggregateInputType = {
    id?: true
    userId?: true
    avatarUrl?: true
    createdAt?: true
    deletionStatus?: true
  }

  export type UserAvatarMaxAggregateInputType = {
    id?: true
    userId?: true
    avatarUrl?: true
    createdAt?: true
    deletionStatus?: true
  }

  export type UserAvatarCountAggregateInputType = {
    id?: true
    userId?: true
    avatarUrl?: true
    createdAt?: true
    deletionStatus?: true
    _all?: true
  }

  export type UserAvatarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAvatar to aggregate.
     */
    where?: UserAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAvatars to fetch.
     */
    orderBy?: UserAvatarOrderByWithRelationInput | UserAvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAvatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAvatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAvatars
    **/
    _count?: true | UserAvatarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvatarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserAvatarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAvatarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAvatarMaxAggregateInputType
  }

  export type GetUserAvatarAggregateType<T extends UserAvatarAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAvatar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAvatar[P]>
      : GetScalarType<T[P], AggregateUserAvatar[P]>
  }




  export type UserAvatarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAvatarWhereInput
    orderBy?: UserAvatarOrderByWithAggregationInput | UserAvatarOrderByWithAggregationInput[]
    by: UserAvatarScalarFieldEnum[] | UserAvatarScalarFieldEnum
    having?: UserAvatarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAvatarCountAggregateInputType | true
    _avg?: UserAvatarAvgAggregateInputType
    _sum?: UserAvatarSumAggregateInputType
    _min?: UserAvatarMinAggregateInputType
    _max?: UserAvatarMaxAggregateInputType
  }

  export type UserAvatarGroupByOutputType = {
    id: number
    userId: number
    avatarUrl: string
    createdAt: Date
    deletionStatus: $Enums.DeletionStatus
    _count: UserAvatarCountAggregateOutputType | null
    _avg: UserAvatarAvgAggregateOutputType | null
    _sum: UserAvatarSumAggregateOutputType | null
    _min: UserAvatarMinAggregateOutputType | null
    _max: UserAvatarMaxAggregateOutputType | null
  }

  type GetUserAvatarGroupByPayload<T extends UserAvatarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAvatarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAvatarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAvatarGroupByOutputType[P]>
            : GetScalarType<T[P], UserAvatarGroupByOutputType[P]>
        }
      >
    >


  export type UserAvatarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    deletionStatus?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAvatar"]>

  export type UserAvatarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    deletionStatus?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAvatar"]>

  export type UserAvatarSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    deletionStatus?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userAvatar"]>

  export type UserAvatarSelectScalar = {
    id?: boolean
    userId?: boolean
    avatarUrl?: boolean
    createdAt?: boolean
    deletionStatus?: boolean
  }

  export type UserAvatarOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "avatarUrl" | "createdAt" | "deletionStatus", ExtArgs["result"]["userAvatar"]>
  export type UserAvatarInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAvatarIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserAvatarIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserAvatarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAvatar"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      avatarUrl: string
      createdAt: Date
      deletionStatus: $Enums.DeletionStatus
    }, ExtArgs["result"]["userAvatar"]>
    composites: {}
  }

  type UserAvatarGetPayload<S extends boolean | null | undefined | UserAvatarDefaultArgs> = $Result.GetResult<Prisma.$UserAvatarPayload, S>

  type UserAvatarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserAvatarFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserAvatarCountAggregateInputType | true
    }

  export interface UserAvatarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAvatar'], meta: { name: 'UserAvatar' } }
    /**
     * Find zero or one UserAvatar that matches the filter.
     * @param {UserAvatarFindUniqueArgs} args - Arguments to find a UserAvatar
     * @example
     * // Get one UserAvatar
     * const userAvatar = await prisma.userAvatar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAvatarFindUniqueArgs>(args: SelectSubset<T, UserAvatarFindUniqueArgs<ExtArgs>>): Prisma__UserAvatarClient<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserAvatar that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserAvatarFindUniqueOrThrowArgs} args - Arguments to find a UserAvatar
     * @example
     * // Get one UserAvatar
     * const userAvatar = await prisma.userAvatar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAvatarFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAvatarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAvatarClient<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAvatar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarFindFirstArgs} args - Arguments to find a UserAvatar
     * @example
     * // Get one UserAvatar
     * const userAvatar = await prisma.userAvatar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAvatarFindFirstArgs>(args?: SelectSubset<T, UserAvatarFindFirstArgs<ExtArgs>>): Prisma__UserAvatarClient<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserAvatar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarFindFirstOrThrowArgs} args - Arguments to find a UserAvatar
     * @example
     * // Get one UserAvatar
     * const userAvatar = await prisma.userAvatar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAvatarFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAvatarFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAvatarClient<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserAvatars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAvatars
     * const userAvatars = await prisma.userAvatar.findMany()
     * 
     * // Get first 10 UserAvatars
     * const userAvatars = await prisma.userAvatar.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAvatarWithIdOnly = await prisma.userAvatar.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAvatarFindManyArgs>(args?: SelectSubset<T, UserAvatarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserAvatar.
     * @param {UserAvatarCreateArgs} args - Arguments to create a UserAvatar.
     * @example
     * // Create one UserAvatar
     * const UserAvatar = await prisma.userAvatar.create({
     *   data: {
     *     // ... data to create a UserAvatar
     *   }
     * })
     * 
     */
    create<T extends UserAvatarCreateArgs>(args: SelectSubset<T, UserAvatarCreateArgs<ExtArgs>>): Prisma__UserAvatarClient<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserAvatars.
     * @param {UserAvatarCreateManyArgs} args - Arguments to create many UserAvatars.
     * @example
     * // Create many UserAvatars
     * const userAvatar = await prisma.userAvatar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAvatarCreateManyArgs>(args?: SelectSubset<T, UserAvatarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAvatars and returns the data saved in the database.
     * @param {UserAvatarCreateManyAndReturnArgs} args - Arguments to create many UserAvatars.
     * @example
     * // Create many UserAvatars
     * const userAvatar = await prisma.userAvatar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAvatars and only return the `id`
     * const userAvatarWithIdOnly = await prisma.userAvatar.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAvatarCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAvatarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserAvatar.
     * @param {UserAvatarDeleteArgs} args - Arguments to delete one UserAvatar.
     * @example
     * // Delete one UserAvatar
     * const UserAvatar = await prisma.userAvatar.delete({
     *   where: {
     *     // ... filter to delete one UserAvatar
     *   }
     * })
     * 
     */
    delete<T extends UserAvatarDeleteArgs>(args: SelectSubset<T, UserAvatarDeleteArgs<ExtArgs>>): Prisma__UserAvatarClient<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserAvatar.
     * @param {UserAvatarUpdateArgs} args - Arguments to update one UserAvatar.
     * @example
     * // Update one UserAvatar
     * const userAvatar = await prisma.userAvatar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAvatarUpdateArgs>(args: SelectSubset<T, UserAvatarUpdateArgs<ExtArgs>>): Prisma__UserAvatarClient<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserAvatars.
     * @param {UserAvatarDeleteManyArgs} args - Arguments to filter UserAvatars to delete.
     * @example
     * // Delete a few UserAvatars
     * const { count } = await prisma.userAvatar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAvatarDeleteManyArgs>(args?: SelectSubset<T, UserAvatarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAvatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAvatars
     * const userAvatar = await prisma.userAvatar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAvatarUpdateManyArgs>(args: SelectSubset<T, UserAvatarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAvatars and returns the data updated in the database.
     * @param {UserAvatarUpdateManyAndReturnArgs} args - Arguments to update many UserAvatars.
     * @example
     * // Update many UserAvatars
     * const userAvatar = await prisma.userAvatar.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserAvatars and only return the `id`
     * const userAvatarWithIdOnly = await prisma.userAvatar.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserAvatarUpdateManyAndReturnArgs>(args: SelectSubset<T, UserAvatarUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserAvatar.
     * @param {UserAvatarUpsertArgs} args - Arguments to update or create a UserAvatar.
     * @example
     * // Update or create a UserAvatar
     * const userAvatar = await prisma.userAvatar.upsert({
     *   create: {
     *     // ... data to create a UserAvatar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAvatar we want to update
     *   }
     * })
     */
    upsert<T extends UserAvatarUpsertArgs>(args: SelectSubset<T, UserAvatarUpsertArgs<ExtArgs>>): Prisma__UserAvatarClient<$Result.GetResult<Prisma.$UserAvatarPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserAvatars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarCountArgs} args - Arguments to filter UserAvatars to count.
     * @example
     * // Count the number of UserAvatars
     * const count = await prisma.userAvatar.count({
     *   where: {
     *     // ... the filter for the UserAvatars we want to count
     *   }
     * })
    **/
    count<T extends UserAvatarCountArgs>(
      args?: Subset<T, UserAvatarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAvatarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAvatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAvatarAggregateArgs>(args: Subset<T, UserAvatarAggregateArgs>): Prisma.PrismaPromise<GetUserAvatarAggregateType<T>>

    /**
     * Group by UserAvatar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAvatarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserAvatarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAvatarGroupByArgs['orderBy'] }
        : { orderBy?: UserAvatarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserAvatarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAvatarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAvatar model
   */
  readonly fields: UserAvatarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAvatar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAvatarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserAvatar model
   */
  interface UserAvatarFieldRefs {
    readonly id: FieldRef<"UserAvatar", 'Int'>
    readonly userId: FieldRef<"UserAvatar", 'Int'>
    readonly avatarUrl: FieldRef<"UserAvatar", 'String'>
    readonly createdAt: FieldRef<"UserAvatar", 'DateTime'>
    readonly deletionStatus: FieldRef<"UserAvatar", 'DeletionStatus'>
  }
    

  // Custom InputTypes
  /**
   * UserAvatar findUnique
   */
  export type UserAvatarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatar
     */
    omit?: UserAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarInclude<ExtArgs> | null
    /**
     * Filter, which UserAvatar to fetch.
     */
    where: UserAvatarWhereUniqueInput
  }

  /**
   * UserAvatar findUniqueOrThrow
   */
  export type UserAvatarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatar
     */
    omit?: UserAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarInclude<ExtArgs> | null
    /**
     * Filter, which UserAvatar to fetch.
     */
    where: UserAvatarWhereUniqueInput
  }

  /**
   * UserAvatar findFirst
   */
  export type UserAvatarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatar
     */
    omit?: UserAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarInclude<ExtArgs> | null
    /**
     * Filter, which UserAvatar to fetch.
     */
    where?: UserAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAvatars to fetch.
     */
    orderBy?: UserAvatarOrderByWithRelationInput | UserAvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAvatars.
     */
    cursor?: UserAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAvatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAvatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAvatars.
     */
    distinct?: UserAvatarScalarFieldEnum | UserAvatarScalarFieldEnum[]
  }

  /**
   * UserAvatar findFirstOrThrow
   */
  export type UserAvatarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatar
     */
    omit?: UserAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarInclude<ExtArgs> | null
    /**
     * Filter, which UserAvatar to fetch.
     */
    where?: UserAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAvatars to fetch.
     */
    orderBy?: UserAvatarOrderByWithRelationInput | UserAvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAvatars.
     */
    cursor?: UserAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAvatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAvatars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAvatars.
     */
    distinct?: UserAvatarScalarFieldEnum | UserAvatarScalarFieldEnum[]
  }

  /**
   * UserAvatar findMany
   */
  export type UserAvatarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatar
     */
    omit?: UserAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarInclude<ExtArgs> | null
    /**
     * Filter, which UserAvatars to fetch.
     */
    where?: UserAvatarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAvatars to fetch.
     */
    orderBy?: UserAvatarOrderByWithRelationInput | UserAvatarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAvatars.
     */
    cursor?: UserAvatarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAvatars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAvatars.
     */
    skip?: number
    distinct?: UserAvatarScalarFieldEnum | UserAvatarScalarFieldEnum[]
  }

  /**
   * UserAvatar create
   */
  export type UserAvatarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatar
     */
    omit?: UserAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarInclude<ExtArgs> | null
    /**
     * The data needed to create a UserAvatar.
     */
    data: XOR<UserAvatarCreateInput, UserAvatarUncheckedCreateInput>
  }

  /**
   * UserAvatar createMany
   */
  export type UserAvatarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAvatars.
     */
    data: UserAvatarCreateManyInput | UserAvatarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAvatar createManyAndReturn
   */
  export type UserAvatarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatar
     */
    omit?: UserAvatarOmit<ExtArgs> | null
    /**
     * The data used to create many UserAvatars.
     */
    data: UserAvatarCreateManyInput | UserAvatarCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAvatar update
   */
  export type UserAvatarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatar
     */
    omit?: UserAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarInclude<ExtArgs> | null
    /**
     * The data needed to update a UserAvatar.
     */
    data: XOR<UserAvatarUpdateInput, UserAvatarUncheckedUpdateInput>
    /**
     * Choose, which UserAvatar to update.
     */
    where: UserAvatarWhereUniqueInput
  }

  /**
   * UserAvatar updateMany
   */
  export type UserAvatarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAvatars.
     */
    data: XOR<UserAvatarUpdateManyMutationInput, UserAvatarUncheckedUpdateManyInput>
    /**
     * Filter which UserAvatars to update
     */
    where?: UserAvatarWhereInput
    /**
     * Limit how many UserAvatars to update.
     */
    limit?: number
  }

  /**
   * UserAvatar updateManyAndReturn
   */
  export type UserAvatarUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatar
     */
    omit?: UserAvatarOmit<ExtArgs> | null
    /**
     * The data used to update UserAvatars.
     */
    data: XOR<UserAvatarUpdateManyMutationInput, UserAvatarUncheckedUpdateManyInput>
    /**
     * Filter which UserAvatars to update
     */
    where?: UserAvatarWhereInput
    /**
     * Limit how many UserAvatars to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserAvatar upsert
   */
  export type UserAvatarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatar
     */
    omit?: UserAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarInclude<ExtArgs> | null
    /**
     * The filter to search for the UserAvatar to update in case it exists.
     */
    where: UserAvatarWhereUniqueInput
    /**
     * In case the UserAvatar found by the `where` argument doesn't exist, create a new UserAvatar with this data.
     */
    create: XOR<UserAvatarCreateInput, UserAvatarUncheckedCreateInput>
    /**
     * In case the UserAvatar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAvatarUpdateInput, UserAvatarUncheckedUpdateInput>
  }

  /**
   * UserAvatar delete
   */
  export type UserAvatarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatar
     */
    omit?: UserAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarInclude<ExtArgs> | null
    /**
     * Filter which UserAvatar to delete.
     */
    where: UserAvatarWhereUniqueInput
  }

  /**
   * UserAvatar deleteMany
   */
  export type UserAvatarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAvatars to delete
     */
    where?: UserAvatarWhereInput
    /**
     * Limit how many UserAvatars to delete.
     */
    limit?: number
  }

  /**
   * UserAvatar without action
   */
  export type UserAvatarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAvatar
     */
    select?: UserAvatarSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserAvatar
     */
    omit?: UserAvatarOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserAvatarInclude<ExtArgs> | null
  }


  /**
   * Model AuthAccount
   */

  export type AggregateAuthAccount = {
    _count: AuthAccountCountAggregateOutputType | null
    _avg: AuthAccountAvgAggregateOutputType | null
    _sum: AuthAccountSumAggregateOutputType | null
    _min: AuthAccountMinAggregateOutputType | null
    _max: AuthAccountMaxAggregateOutputType | null
  }

  export type AuthAccountAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AuthAccountSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AuthAccountMinAggregateOutputType = {
    id: number | null
    provider: string | null
    providerId: string | null
    userId: number | null
    createdAt: Date | null
  }

  export type AuthAccountMaxAggregateOutputType = {
    id: number | null
    provider: string | null
    providerId: string | null
    userId: number | null
    createdAt: Date | null
  }

  export type AuthAccountCountAggregateOutputType = {
    id: number
    provider: number
    providerId: number
    userId: number
    createdAt: number
    _all: number
  }


  export type AuthAccountAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AuthAccountSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AuthAccountMinAggregateInputType = {
    id?: true
    provider?: true
    providerId?: true
    userId?: true
    createdAt?: true
  }

  export type AuthAccountMaxAggregateInputType = {
    id?: true
    provider?: true
    providerId?: true
    userId?: true
    createdAt?: true
  }

  export type AuthAccountCountAggregateInputType = {
    id?: true
    provider?: true
    providerId?: true
    userId?: true
    createdAt?: true
    _all?: true
  }

  export type AuthAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthAccount to aggregate.
     */
    where?: AuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthAccounts to fetch.
     */
    orderBy?: AuthAccountOrderByWithRelationInput | AuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuthAccounts
    **/
    _count?: true | AuthAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AuthAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AuthAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuthAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuthAccountMaxAggregateInputType
  }

  export type GetAuthAccountAggregateType<T extends AuthAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAuthAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuthAccount[P]>
      : GetScalarType<T[P], AggregateAuthAccount[P]>
  }




  export type AuthAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuthAccountWhereInput
    orderBy?: AuthAccountOrderByWithAggregationInput | AuthAccountOrderByWithAggregationInput[]
    by: AuthAccountScalarFieldEnum[] | AuthAccountScalarFieldEnum
    having?: AuthAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuthAccountCountAggregateInputType | true
    _avg?: AuthAccountAvgAggregateInputType
    _sum?: AuthAccountSumAggregateInputType
    _min?: AuthAccountMinAggregateInputType
    _max?: AuthAccountMaxAggregateInputType
  }

  export type AuthAccountGroupByOutputType = {
    id: number
    provider: string
    providerId: string
    userId: number
    createdAt: Date
    _count: AuthAccountCountAggregateOutputType | null
    _avg: AuthAccountAvgAggregateOutputType | null
    _sum: AuthAccountSumAggregateOutputType | null
    _min: AuthAccountMinAggregateOutputType | null
    _max: AuthAccountMaxAggregateOutputType | null
  }

  type GetAuthAccountGroupByPayload<T extends AuthAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuthAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuthAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuthAccountGroupByOutputType[P]>
            : GetScalarType<T[P], AuthAccountGroupByOutputType[P]>
        }
      >
    >


  export type AuthAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerId?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authAccount"]>

  export type AuthAccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerId?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authAccount"]>

  export type AuthAccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    provider?: boolean
    providerId?: boolean
    userId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["authAccount"]>

  export type AuthAccountSelectScalar = {
    id?: boolean
    provider?: boolean
    providerId?: boolean
    userId?: boolean
    createdAt?: boolean
  }

  export type AuthAccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "provider" | "providerId" | "userId" | "createdAt", ExtArgs["result"]["authAccount"]>
  export type AuthAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuthAccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuthAccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuthAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuthAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      provider: string
      providerId: string
      userId: number
      createdAt: Date
    }, ExtArgs["result"]["authAccount"]>
    composites: {}
  }

  type AuthAccountGetPayload<S extends boolean | null | undefined | AuthAccountDefaultArgs> = $Result.GetResult<Prisma.$AuthAccountPayload, S>

  type AuthAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuthAccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuthAccountCountAggregateInputType | true
    }

  export interface AuthAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuthAccount'], meta: { name: 'AuthAccount' } }
    /**
     * Find zero or one AuthAccount that matches the filter.
     * @param {AuthAccountFindUniqueArgs} args - Arguments to find a AuthAccount
     * @example
     * // Get one AuthAccount
     * const authAccount = await prisma.authAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuthAccountFindUniqueArgs>(args: SelectSubset<T, AuthAccountFindUniqueArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuthAccount that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuthAccountFindUniqueOrThrowArgs} args - Arguments to find a AuthAccount
     * @example
     * // Get one AuthAccount
     * const authAccount = await prisma.authAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuthAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AuthAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountFindFirstArgs} args - Arguments to find a AuthAccount
     * @example
     * // Get one AuthAccount
     * const authAccount = await prisma.authAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuthAccountFindFirstArgs>(args?: SelectSubset<T, AuthAccountFindFirstArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuthAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountFindFirstOrThrowArgs} args - Arguments to find a AuthAccount
     * @example
     * // Get one AuthAccount
     * const authAccount = await prisma.authAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuthAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AuthAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuthAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuthAccounts
     * const authAccounts = await prisma.authAccount.findMany()
     * 
     * // Get first 10 AuthAccounts
     * const authAccounts = await prisma.authAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const authAccountWithIdOnly = await prisma.authAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuthAccountFindManyArgs>(args?: SelectSubset<T, AuthAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuthAccount.
     * @param {AuthAccountCreateArgs} args - Arguments to create a AuthAccount.
     * @example
     * // Create one AuthAccount
     * const AuthAccount = await prisma.authAccount.create({
     *   data: {
     *     // ... data to create a AuthAccount
     *   }
     * })
     * 
     */
    create<T extends AuthAccountCreateArgs>(args: SelectSubset<T, AuthAccountCreateArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuthAccounts.
     * @param {AuthAccountCreateManyArgs} args - Arguments to create many AuthAccounts.
     * @example
     * // Create many AuthAccounts
     * const authAccount = await prisma.authAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuthAccountCreateManyArgs>(args?: SelectSubset<T, AuthAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuthAccounts and returns the data saved in the database.
     * @param {AuthAccountCreateManyAndReturnArgs} args - Arguments to create many AuthAccounts.
     * @example
     * // Create many AuthAccounts
     * const authAccount = await prisma.authAccount.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuthAccounts and only return the `id`
     * const authAccountWithIdOnly = await prisma.authAccount.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuthAccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AuthAccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuthAccount.
     * @param {AuthAccountDeleteArgs} args - Arguments to delete one AuthAccount.
     * @example
     * // Delete one AuthAccount
     * const AuthAccount = await prisma.authAccount.delete({
     *   where: {
     *     // ... filter to delete one AuthAccount
     *   }
     * })
     * 
     */
    delete<T extends AuthAccountDeleteArgs>(args: SelectSubset<T, AuthAccountDeleteArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuthAccount.
     * @param {AuthAccountUpdateArgs} args - Arguments to update one AuthAccount.
     * @example
     * // Update one AuthAccount
     * const authAccount = await prisma.authAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuthAccountUpdateArgs>(args: SelectSubset<T, AuthAccountUpdateArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuthAccounts.
     * @param {AuthAccountDeleteManyArgs} args - Arguments to filter AuthAccounts to delete.
     * @example
     * // Delete a few AuthAccounts
     * const { count } = await prisma.authAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuthAccountDeleteManyArgs>(args?: SelectSubset<T, AuthAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuthAccounts
     * const authAccount = await prisma.authAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuthAccountUpdateManyArgs>(args: SelectSubset<T, AuthAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuthAccounts and returns the data updated in the database.
     * @param {AuthAccountUpdateManyAndReturnArgs} args - Arguments to update many AuthAccounts.
     * @example
     * // Update many AuthAccounts
     * const authAccount = await prisma.authAccount.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuthAccounts and only return the `id`
     * const authAccountWithIdOnly = await prisma.authAccount.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuthAccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AuthAccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuthAccount.
     * @param {AuthAccountUpsertArgs} args - Arguments to update or create a AuthAccount.
     * @example
     * // Update or create a AuthAccount
     * const authAccount = await prisma.authAccount.upsert({
     *   create: {
     *     // ... data to create a AuthAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuthAccount we want to update
     *   }
     * })
     */
    upsert<T extends AuthAccountUpsertArgs>(args: SelectSubset<T, AuthAccountUpsertArgs<ExtArgs>>): Prisma__AuthAccountClient<$Result.GetResult<Prisma.$AuthAccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuthAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountCountArgs} args - Arguments to filter AuthAccounts to count.
     * @example
     * // Count the number of AuthAccounts
     * const count = await prisma.authAccount.count({
     *   where: {
     *     // ... the filter for the AuthAccounts we want to count
     *   }
     * })
    **/
    count<T extends AuthAccountCountArgs>(
      args?: Subset<T, AuthAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuthAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuthAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuthAccountAggregateArgs>(args: Subset<T, AuthAccountAggregateArgs>): Prisma.PrismaPromise<GetAuthAccountAggregateType<T>>

    /**
     * Group by AuthAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuthAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuthAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuthAccountGroupByArgs['orderBy'] }
        : { orderBy?: AuthAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuthAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuthAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuthAccount model
   */
  readonly fields: AuthAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuthAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuthAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuthAccount model
   */
  interface AuthAccountFieldRefs {
    readonly id: FieldRef<"AuthAccount", 'Int'>
    readonly provider: FieldRef<"AuthAccount", 'String'>
    readonly providerId: FieldRef<"AuthAccount", 'String'>
    readonly userId: FieldRef<"AuthAccount", 'Int'>
    readonly createdAt: FieldRef<"AuthAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuthAccount findUnique
   */
  export type AuthAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which AuthAccount to fetch.
     */
    where: AuthAccountWhereUniqueInput
  }

  /**
   * AuthAccount findUniqueOrThrow
   */
  export type AuthAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which AuthAccount to fetch.
     */
    where: AuthAccountWhereUniqueInput
  }

  /**
   * AuthAccount findFirst
   */
  export type AuthAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which AuthAccount to fetch.
     */
    where?: AuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthAccounts to fetch.
     */
    orderBy?: AuthAccountOrderByWithRelationInput | AuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthAccounts.
     */
    cursor?: AuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthAccounts.
     */
    distinct?: AuthAccountScalarFieldEnum | AuthAccountScalarFieldEnum[]
  }

  /**
   * AuthAccount findFirstOrThrow
   */
  export type AuthAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which AuthAccount to fetch.
     */
    where?: AuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthAccounts to fetch.
     */
    orderBy?: AuthAccountOrderByWithRelationInput | AuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuthAccounts.
     */
    cursor?: AuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuthAccounts.
     */
    distinct?: AuthAccountScalarFieldEnum | AuthAccountScalarFieldEnum[]
  }

  /**
   * AuthAccount findMany
   */
  export type AuthAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter, which AuthAccounts to fetch.
     */
    where?: AuthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuthAccounts to fetch.
     */
    orderBy?: AuthAccountOrderByWithRelationInput | AuthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuthAccounts.
     */
    cursor?: AuthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuthAccounts.
     */
    skip?: number
    distinct?: AuthAccountScalarFieldEnum | AuthAccountScalarFieldEnum[]
  }

  /**
   * AuthAccount create
   */
  export type AuthAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a AuthAccount.
     */
    data: XOR<AuthAccountCreateInput, AuthAccountUncheckedCreateInput>
  }

  /**
   * AuthAccount createMany
   */
  export type AuthAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuthAccounts.
     */
    data: AuthAccountCreateManyInput | AuthAccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuthAccount createManyAndReturn
   */
  export type AuthAccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * The data used to create many AuthAccounts.
     */
    data: AuthAccountCreateManyInput | AuthAccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthAccount update
   */
  export type AuthAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a AuthAccount.
     */
    data: XOR<AuthAccountUpdateInput, AuthAccountUncheckedUpdateInput>
    /**
     * Choose, which AuthAccount to update.
     */
    where: AuthAccountWhereUniqueInput
  }

  /**
   * AuthAccount updateMany
   */
  export type AuthAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuthAccounts.
     */
    data: XOR<AuthAccountUpdateManyMutationInput, AuthAccountUncheckedUpdateManyInput>
    /**
     * Filter which AuthAccounts to update
     */
    where?: AuthAccountWhereInput
    /**
     * Limit how many AuthAccounts to update.
     */
    limit?: number
  }

  /**
   * AuthAccount updateManyAndReturn
   */
  export type AuthAccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * The data used to update AuthAccounts.
     */
    data: XOR<AuthAccountUpdateManyMutationInput, AuthAccountUncheckedUpdateManyInput>
    /**
     * Filter which AuthAccounts to update
     */
    where?: AuthAccountWhereInput
    /**
     * Limit how many AuthAccounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuthAccount upsert
   */
  export type AuthAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the AuthAccount to update in case it exists.
     */
    where: AuthAccountWhereUniqueInput
    /**
     * In case the AuthAccount found by the `where` argument doesn't exist, create a new AuthAccount with this data.
     */
    create: XOR<AuthAccountCreateInput, AuthAccountUncheckedCreateInput>
    /**
     * In case the AuthAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuthAccountUpdateInput, AuthAccountUncheckedUpdateInput>
  }

  /**
   * AuthAccount delete
   */
  export type AuthAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
    /**
     * Filter which AuthAccount to delete.
     */
    where: AuthAccountWhereUniqueInput
  }

  /**
   * AuthAccount deleteMany
   */
  export type AuthAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuthAccounts to delete
     */
    where?: AuthAccountWhereInput
    /**
     * Limit how many AuthAccounts to delete.
     */
    limit?: number
  }

  /**
   * AuthAccount without action
   */
  export type AuthAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuthAccount
     */
    select?: AuthAccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuthAccount
     */
    omit?: AuthAccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuthAccountInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    userId: number | null
    description: string | null
    createdAt: Date | null
    deletionStatus: $Enums.DeletionStatus | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    description: string | null
    createdAt: Date | null
    deletionStatus: $Enums.DeletionStatus | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    userId: number
    description: number
    imageUrl: number
    createdAt: number
    deletionStatus: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    userId?: true
    description?: true
    createdAt?: true
    deletionStatus?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    userId?: true
    description?: true
    createdAt?: true
    deletionStatus?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    userId?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    deletionStatus?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    userId: number
    description: string | null
    imageUrl: string[]
    createdAt: Date
    deletionStatus: $Enums.DeletionStatus
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    deletionStatus?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    deletionStatus?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    deletionStatus?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    userId?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    deletionStatus?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "description" | "imageUrl" | "createdAt" | "deletionStatus", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      description: string | null
      imageUrl: string[]
      createdAt: Date
      deletionStatus: $Enums.DeletionStatus
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly userId: FieldRef<"Post", 'Int'>
    readonly description: FieldRef<"Post", 'String'>
    readonly imageUrl: FieldRef<"Post", 'String[]'>
    readonly createdAt: FieldRef<"Post", 'DateTime'>
    readonly deletionStatus: FieldRef<"Post", 'DeletionStatus'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Device
   */

  export type AggregateDevice = {
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  export type DeviceAvgAggregateOutputType = {
    userId: number | null
  }

  export type DeviceSumAggregateOutputType = {
    userId: number | null
  }

  export type DeviceMinAggregateOutputType = {
    id: string | null
    userId: number | null
    title: string | null
    ip: string | null
    lastActiveDate: Date | null
    expirationDate: Date | null
    deletionStatus: $Enums.DeletionStatus | null
  }

  export type DeviceMaxAggregateOutputType = {
    id: string | null
    userId: number | null
    title: string | null
    ip: string | null
    lastActiveDate: Date | null
    expirationDate: Date | null
    deletionStatus: $Enums.DeletionStatus | null
  }

  export type DeviceCountAggregateOutputType = {
    id: number
    userId: number
    title: number
    ip: number
    lastActiveDate: number
    expirationDate: number
    deletionStatus: number
    _all: number
  }


  export type DeviceAvgAggregateInputType = {
    userId?: true
  }

  export type DeviceSumAggregateInputType = {
    userId?: true
  }

  export type DeviceMinAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    ip?: true
    lastActiveDate?: true
    expirationDate?: true
    deletionStatus?: true
  }

  export type DeviceMaxAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    ip?: true
    lastActiveDate?: true
    expirationDate?: true
    deletionStatus?: true
  }

  export type DeviceCountAggregateInputType = {
    id?: true
    userId?: true
    title?: true
    ip?: true
    lastActiveDate?: true
    expirationDate?: true
    deletionStatus?: true
    _all?: true
  }

  export type DeviceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Device to aggregate.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Devices
    **/
    _count?: true | DeviceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeviceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeviceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeviceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeviceMaxAggregateInputType
  }

  export type GetDeviceAggregateType<T extends DeviceAggregateArgs> = {
        [P in keyof T & keyof AggregateDevice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDevice[P]>
      : GetScalarType<T[P], AggregateDevice[P]>
  }




  export type DeviceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeviceWhereInput
    orderBy?: DeviceOrderByWithAggregationInput | DeviceOrderByWithAggregationInput[]
    by: DeviceScalarFieldEnum[] | DeviceScalarFieldEnum
    having?: DeviceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeviceCountAggregateInputType | true
    _avg?: DeviceAvgAggregateInputType
    _sum?: DeviceSumAggregateInputType
    _min?: DeviceMinAggregateInputType
    _max?: DeviceMaxAggregateInputType
  }

  export type DeviceGroupByOutputType = {
    id: string
    userId: number
    title: string
    ip: string
    lastActiveDate: Date
    expirationDate: Date
    deletionStatus: $Enums.DeletionStatus
    _count: DeviceCountAggregateOutputType | null
    _avg: DeviceAvgAggregateOutputType | null
    _sum: DeviceSumAggregateOutputType | null
    _min: DeviceMinAggregateOutputType | null
    _max: DeviceMaxAggregateOutputType | null
  }

  type GetDeviceGroupByPayload<T extends DeviceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeviceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeviceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeviceGroupByOutputType[P]>
            : GetScalarType<T[P], DeviceGroupByOutputType[P]>
        }
      >
    >


  export type DeviceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    ip?: boolean
    lastActiveDate?: boolean
    expirationDate?: boolean
    deletionStatus?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    ip?: boolean
    lastActiveDate?: boolean
    expirationDate?: boolean
    deletionStatus?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    title?: boolean
    ip?: boolean
    lastActiveDate?: boolean
    expirationDate?: boolean
    deletionStatus?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["device"]>

  export type DeviceSelectScalar = {
    id?: boolean
    userId?: boolean
    title?: boolean
    ip?: boolean
    lastActiveDate?: boolean
    expirationDate?: boolean
    deletionStatus?: boolean
  }

  export type DeviceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "title" | "ip" | "lastActiveDate" | "expirationDate" | "deletionStatus", ExtArgs["result"]["device"]>
  export type DeviceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DeviceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DevicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Device"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: number
      title: string
      ip: string
      lastActiveDate: Date
      expirationDate: Date
      deletionStatus: $Enums.DeletionStatus
    }, ExtArgs["result"]["device"]>
    composites: {}
  }

  type DeviceGetPayload<S extends boolean | null | undefined | DeviceDefaultArgs> = $Result.GetResult<Prisma.$DevicePayload, S>

  type DeviceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeviceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeviceCountAggregateInputType | true
    }

  export interface DeviceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Device'], meta: { name: 'Device' } }
    /**
     * Find zero or one Device that matches the filter.
     * @param {DeviceFindUniqueArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeviceFindUniqueArgs>(args: SelectSubset<T, DeviceFindUniqueArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Device that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeviceFindUniqueOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeviceFindUniqueOrThrowArgs>(args: SelectSubset<T, DeviceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeviceFindFirstArgs>(args?: SelectSubset<T, DeviceFindFirstArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Device that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindFirstOrThrowArgs} args - Arguments to find a Device
     * @example
     * // Get one Device
     * const device = await prisma.device.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeviceFindFirstOrThrowArgs>(args?: SelectSubset<T, DeviceFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Devices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Devices
     * const devices = await prisma.device.findMany()
     * 
     * // Get first 10 Devices
     * const devices = await prisma.device.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deviceWithIdOnly = await prisma.device.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeviceFindManyArgs>(args?: SelectSubset<T, DeviceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Device.
     * @param {DeviceCreateArgs} args - Arguments to create a Device.
     * @example
     * // Create one Device
     * const Device = await prisma.device.create({
     *   data: {
     *     // ... data to create a Device
     *   }
     * })
     * 
     */
    create<T extends DeviceCreateArgs>(args: SelectSubset<T, DeviceCreateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Devices.
     * @param {DeviceCreateManyArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeviceCreateManyArgs>(args?: SelectSubset<T, DeviceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Devices and returns the data saved in the database.
     * @param {DeviceCreateManyAndReturnArgs} args - Arguments to create many Devices.
     * @example
     * // Create many Devices
     * const device = await prisma.device.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeviceCreateManyAndReturnArgs>(args?: SelectSubset<T, DeviceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Device.
     * @param {DeviceDeleteArgs} args - Arguments to delete one Device.
     * @example
     * // Delete one Device
     * const Device = await prisma.device.delete({
     *   where: {
     *     // ... filter to delete one Device
     *   }
     * })
     * 
     */
    delete<T extends DeviceDeleteArgs>(args: SelectSubset<T, DeviceDeleteArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Device.
     * @param {DeviceUpdateArgs} args - Arguments to update one Device.
     * @example
     * // Update one Device
     * const device = await prisma.device.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeviceUpdateArgs>(args: SelectSubset<T, DeviceUpdateArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Devices.
     * @param {DeviceDeleteManyArgs} args - Arguments to filter Devices to delete.
     * @example
     * // Delete a few Devices
     * const { count } = await prisma.device.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeviceDeleteManyArgs>(args?: SelectSubset<T, DeviceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeviceUpdateManyArgs>(args: SelectSubset<T, DeviceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Devices and returns the data updated in the database.
     * @param {DeviceUpdateManyAndReturnArgs} args - Arguments to update many Devices.
     * @example
     * // Update many Devices
     * const device = await prisma.device.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Devices and only return the `id`
     * const deviceWithIdOnly = await prisma.device.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeviceUpdateManyAndReturnArgs>(args: SelectSubset<T, DeviceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Device.
     * @param {DeviceUpsertArgs} args - Arguments to update or create a Device.
     * @example
     * // Update or create a Device
     * const device = await prisma.device.upsert({
     *   create: {
     *     // ... data to create a Device
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Device we want to update
     *   }
     * })
     */
    upsert<T extends DeviceUpsertArgs>(args: SelectSubset<T, DeviceUpsertArgs<ExtArgs>>): Prisma__DeviceClient<$Result.GetResult<Prisma.$DevicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Devices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceCountArgs} args - Arguments to filter Devices to count.
     * @example
     * // Count the number of Devices
     * const count = await prisma.device.count({
     *   where: {
     *     // ... the filter for the Devices we want to count
     *   }
     * })
    **/
    count<T extends DeviceCountArgs>(
      args?: Subset<T, DeviceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeviceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeviceAggregateArgs>(args: Subset<T, DeviceAggregateArgs>): Prisma.PrismaPromise<GetDeviceAggregateType<T>>

    /**
     * Group by Device.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeviceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeviceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeviceGroupByArgs['orderBy'] }
        : { orderBy?: DeviceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeviceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeviceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Device model
   */
  readonly fields: DeviceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Device.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeviceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Device model
   */
  interface DeviceFieldRefs {
    readonly id: FieldRef<"Device", 'String'>
    readonly userId: FieldRef<"Device", 'Int'>
    readonly title: FieldRef<"Device", 'String'>
    readonly ip: FieldRef<"Device", 'String'>
    readonly lastActiveDate: FieldRef<"Device", 'DateTime'>
    readonly expirationDate: FieldRef<"Device", 'DateTime'>
    readonly deletionStatus: FieldRef<"Device", 'DeletionStatus'>
  }
    

  // Custom InputTypes
  /**
   * Device findUnique
   */
  export type DeviceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findUniqueOrThrow
   */
  export type DeviceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device findFirst
   */
  export type DeviceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findFirstOrThrow
   */
  export type DeviceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Device to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Devices.
     */
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device findMany
   */
  export type DeviceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter, which Devices to fetch.
     */
    where?: DeviceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Devices to fetch.
     */
    orderBy?: DeviceOrderByWithRelationInput | DeviceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Devices.
     */
    cursor?: DeviceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Devices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Devices.
     */
    skip?: number
    distinct?: DeviceScalarFieldEnum | DeviceScalarFieldEnum[]
  }

  /**
   * Device create
   */
  export type DeviceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to create a Device.
     */
    data: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
  }

  /**
   * Device createMany
   */
  export type DeviceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Device createManyAndReturn
   */
  export type DeviceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to create many Devices.
     */
    data: DeviceCreateManyInput | DeviceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device update
   */
  export type DeviceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The data needed to update a Device.
     */
    data: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
    /**
     * Choose, which Device to update.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device updateMany
   */
  export type DeviceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
  }

  /**
   * Device updateManyAndReturn
   */
  export type DeviceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * The data used to update Devices.
     */
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyInput>
    /**
     * Filter which Devices to update
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Device upsert
   */
  export type DeviceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * The filter to search for the Device to update in case it exists.
     */
    where: DeviceWhereUniqueInput
    /**
     * In case the Device found by the `where` argument doesn't exist, create a new Device with this data.
     */
    create: XOR<DeviceCreateInput, DeviceUncheckedCreateInput>
    /**
     * In case the Device was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeviceUpdateInput, DeviceUncheckedUpdateInput>
  }

  /**
   * Device delete
   */
  export type DeviceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
    /**
     * Filter which Device to delete.
     */
    where: DeviceWhereUniqueInput
  }

  /**
   * Device deleteMany
   */
  export type DeviceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Devices to delete
     */
    where?: DeviceWhereInput
    /**
     * Limit how many Devices to delete.
     */
    limit?: number
  }

  /**
   * Device without action
   */
  export type DeviceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Device
     */
    select?: DeviceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Device
     */
    omit?: DeviceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeviceInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    planName: string | null
    expireAt: Date | null
    nextPaymentDate: Date | null
    autoRenewal: boolean | null
    paymentMethod: string | null
    isActive: boolean | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    planName: string | null
    expireAt: Date | null
    nextPaymentDate: Date | null
    autoRenewal: boolean | null
    paymentMethod: string | null
    isActive: boolean | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    planName: number
    expireAt: number
    nextPaymentDate: number
    autoRenewal: number
    paymentMethod: number
    isActive: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SubscriptionSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    planName?: true
    expireAt?: true
    nextPaymentDate?: true
    autoRenewal?: true
    paymentMethod?: true
    isActive?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    planName?: true
    expireAt?: true
    nextPaymentDate?: true
    autoRenewal?: true
    paymentMethod?: true
    isActive?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    planName?: true
    expireAt?: true
    nextPaymentDate?: true
    autoRenewal?: true
    paymentMethod?: true
    isActive?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: number
    userId: number
    planName: string
    expireAt: Date
    nextPaymentDate: Date
    autoRenewal: boolean
    paymentMethod: string
    isActive: boolean
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planName?: boolean
    expireAt?: boolean
    nextPaymentDate?: boolean
    autoRenewal?: boolean
    paymentMethod?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planName?: boolean
    expireAt?: boolean
    nextPaymentDate?: boolean
    autoRenewal?: boolean
    paymentMethod?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planName?: boolean
    expireAt?: boolean
    nextPaymentDate?: boolean
    autoRenewal?: boolean
    paymentMethod?: boolean
    isActive?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>

  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    planName?: boolean
    expireAt?: boolean
    nextPaymentDate?: boolean
    autoRenewal?: boolean
    paymentMethod?: boolean
    isActive?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "planName" | "expireAt" | "nextPaymentDate" | "autoRenewal" | "paymentMethod" | "isActive", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      planName: string
      expireAt: Date
      nextPaymentDate: Date
      autoRenewal: boolean
      paymentMethod: string
      isActive: boolean
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subscriptions and returns the data saved in the database.
     * @param {SubscriptionCreateManyAndReturnArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions and returns the data updated in the database.
     * @param {SubscriptionUpdateManyAndReturnArgs} args - Arguments to update many Subscriptions.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Subscriptions and only return the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'Int'>
    readonly userId: FieldRef<"Subscription", 'Int'>
    readonly planName: FieldRef<"Subscription", 'String'>
    readonly expireAt: FieldRef<"Subscription", 'DateTime'>
    readonly nextPaymentDate: FieldRef<"Subscription", 'DateTime'>
    readonly autoRenewal: FieldRef<"Subscription", 'Boolean'>
    readonly paymentMethod: FieldRef<"Subscription", 'String'>
    readonly isActive: FieldRef<"Subscription", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subscription createManyAndReturn
   */
  export type SubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription updateManyAndReturn
   */
  export type SubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model SubscriptionPayments
   */

  export type AggregateSubscriptionPayments = {
    _count: SubscriptionPaymentsCountAggregateOutputType | null
    _avg: SubscriptionPaymentsAvgAggregateOutputType | null
    _sum: SubscriptionPaymentsSumAggregateOutputType | null
    _min: SubscriptionPaymentsMinAggregateOutputType | null
    _max: SubscriptionPaymentsMaxAggregateOutputType | null
  }

  export type SubscriptionPaymentsAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type SubscriptionPaymentsSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type SubscriptionPaymentsMinAggregateOutputType = {
    id: number | null
    title: string | null
    price: number | null
  }

  export type SubscriptionPaymentsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    price: number | null
  }

  export type SubscriptionPaymentsCountAggregateOutputType = {
    id: number
    title: number
    price: number
    _all: number
  }


  export type SubscriptionPaymentsAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type SubscriptionPaymentsSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type SubscriptionPaymentsMinAggregateInputType = {
    id?: true
    title?: true
    price?: true
  }

  export type SubscriptionPaymentsMaxAggregateInputType = {
    id?: true
    title?: true
    price?: true
  }

  export type SubscriptionPaymentsCountAggregateInputType = {
    id?: true
    title?: true
    price?: true
    _all?: true
  }

  export type SubscriptionPaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPayments to aggregate.
     */
    where?: SubscriptionPaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPayments to fetch.
     */
    orderBy?: SubscriptionPaymentsOrderByWithRelationInput | SubscriptionPaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionPaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionPayments
    **/
    _count?: true | SubscriptionPaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionPaymentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionPaymentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionPaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionPaymentsMaxAggregateInputType
  }

  export type GetSubscriptionPaymentsAggregateType<T extends SubscriptionPaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionPayments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionPayments[P]>
      : GetScalarType<T[P], AggregateSubscriptionPayments[P]>
  }




  export type SubscriptionPaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionPaymentsWhereInput
    orderBy?: SubscriptionPaymentsOrderByWithAggregationInput | SubscriptionPaymentsOrderByWithAggregationInput[]
    by: SubscriptionPaymentsScalarFieldEnum[] | SubscriptionPaymentsScalarFieldEnum
    having?: SubscriptionPaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionPaymentsCountAggregateInputType | true
    _avg?: SubscriptionPaymentsAvgAggregateInputType
    _sum?: SubscriptionPaymentsSumAggregateInputType
    _min?: SubscriptionPaymentsMinAggregateInputType
    _max?: SubscriptionPaymentsMaxAggregateInputType
  }

  export type SubscriptionPaymentsGroupByOutputType = {
    id: number
    title: string
    price: number
    _count: SubscriptionPaymentsCountAggregateOutputType | null
    _avg: SubscriptionPaymentsAvgAggregateOutputType | null
    _sum: SubscriptionPaymentsSumAggregateOutputType | null
    _min: SubscriptionPaymentsMinAggregateOutputType | null
    _max: SubscriptionPaymentsMaxAggregateOutputType | null
  }

  type GetSubscriptionPaymentsGroupByPayload<T extends SubscriptionPaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionPaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionPaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionPaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionPaymentsGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionPaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
  }, ExtArgs["result"]["subscriptionPayments"]>

  export type SubscriptionPaymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
  }, ExtArgs["result"]["subscriptionPayments"]>

  export type SubscriptionPaymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
  }, ExtArgs["result"]["subscriptionPayments"]>

  export type SubscriptionPaymentsSelectScalar = {
    id?: boolean
    title?: boolean
    price?: boolean
  }

  export type SubscriptionPaymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "price", ExtArgs["result"]["subscriptionPayments"]>

  export type $SubscriptionPaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionPayments"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      price: number
    }, ExtArgs["result"]["subscriptionPayments"]>
    composites: {}
  }

  type SubscriptionPaymentsGetPayload<S extends boolean | null | undefined | SubscriptionPaymentsDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPaymentsPayload, S>

  type SubscriptionPaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionPaymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionPaymentsCountAggregateInputType | true
    }

  export interface SubscriptionPaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionPayments'], meta: { name: 'SubscriptionPayments' } }
    /**
     * Find zero or one SubscriptionPayments that matches the filter.
     * @param {SubscriptionPaymentsFindUniqueArgs} args - Arguments to find a SubscriptionPayments
     * @example
     * // Get one SubscriptionPayments
     * const subscriptionPayments = await prisma.subscriptionPayments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionPaymentsFindUniqueArgs>(args: SelectSubset<T, SubscriptionPaymentsFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionPaymentsClient<$Result.GetResult<Prisma.$SubscriptionPaymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubscriptionPayments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionPaymentsFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionPayments
     * @example
     * // Get one SubscriptionPayments
     * const subscriptionPayments = await prisma.subscriptionPayments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionPaymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionPaymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPaymentsClient<$Result.GetResult<Prisma.$SubscriptionPaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPaymentsFindFirstArgs} args - Arguments to find a SubscriptionPayments
     * @example
     * // Get one SubscriptionPayments
     * const subscriptionPayments = await prisma.subscriptionPayments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionPaymentsFindFirstArgs>(args?: SelectSubset<T, SubscriptionPaymentsFindFirstArgs<ExtArgs>>): Prisma__SubscriptionPaymentsClient<$Result.GetResult<Prisma.$SubscriptionPaymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPayments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPaymentsFindFirstOrThrowArgs} args - Arguments to find a SubscriptionPayments
     * @example
     * // Get one SubscriptionPayments
     * const subscriptionPayments = await prisma.subscriptionPayments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionPaymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionPaymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPaymentsClient<$Result.GetResult<Prisma.$SubscriptionPaymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscriptionPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionPayments
     * const subscriptionPayments = await prisma.subscriptionPayments.findMany()
     * 
     * // Get first 10 SubscriptionPayments
     * const subscriptionPayments = await prisma.subscriptionPayments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionPaymentsWithIdOnly = await prisma.subscriptionPayments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionPaymentsFindManyArgs>(args?: SelectSubset<T, SubscriptionPaymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubscriptionPayments.
     * @param {SubscriptionPaymentsCreateArgs} args - Arguments to create a SubscriptionPayments.
     * @example
     * // Create one SubscriptionPayments
     * const SubscriptionPayments = await prisma.subscriptionPayments.create({
     *   data: {
     *     // ... data to create a SubscriptionPayments
     *   }
     * })
     * 
     */
    create<T extends SubscriptionPaymentsCreateArgs>(args: SelectSubset<T, SubscriptionPaymentsCreateArgs<ExtArgs>>): Prisma__SubscriptionPaymentsClient<$Result.GetResult<Prisma.$SubscriptionPaymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubscriptionPayments.
     * @param {SubscriptionPaymentsCreateManyArgs} args - Arguments to create many SubscriptionPayments.
     * @example
     * // Create many SubscriptionPayments
     * const subscriptionPayments = await prisma.subscriptionPayments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionPaymentsCreateManyArgs>(args?: SelectSubset<T, SubscriptionPaymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionPayments and returns the data saved in the database.
     * @param {SubscriptionPaymentsCreateManyAndReturnArgs} args - Arguments to create many SubscriptionPayments.
     * @example
     * // Create many SubscriptionPayments
     * const subscriptionPayments = await prisma.subscriptionPayments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubscriptionPayments and only return the `id`
     * const subscriptionPaymentsWithIdOnly = await prisma.subscriptionPayments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionPaymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionPaymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPaymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubscriptionPayments.
     * @param {SubscriptionPaymentsDeleteArgs} args - Arguments to delete one SubscriptionPayments.
     * @example
     * // Delete one SubscriptionPayments
     * const SubscriptionPayments = await prisma.subscriptionPayments.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionPayments
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionPaymentsDeleteArgs>(args: SelectSubset<T, SubscriptionPaymentsDeleteArgs<ExtArgs>>): Prisma__SubscriptionPaymentsClient<$Result.GetResult<Prisma.$SubscriptionPaymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubscriptionPayments.
     * @param {SubscriptionPaymentsUpdateArgs} args - Arguments to update one SubscriptionPayments.
     * @example
     * // Update one SubscriptionPayments
     * const subscriptionPayments = await prisma.subscriptionPayments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionPaymentsUpdateArgs>(args: SelectSubset<T, SubscriptionPaymentsUpdateArgs<ExtArgs>>): Prisma__SubscriptionPaymentsClient<$Result.GetResult<Prisma.$SubscriptionPaymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubscriptionPayments.
     * @param {SubscriptionPaymentsDeleteManyArgs} args - Arguments to filter SubscriptionPayments to delete.
     * @example
     * // Delete a few SubscriptionPayments
     * const { count } = await prisma.subscriptionPayments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionPaymentsDeleteManyArgs>(args?: SelectSubset<T, SubscriptionPaymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionPayments
     * const subscriptionPayments = await prisma.subscriptionPayments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionPaymentsUpdateManyArgs>(args: SelectSubset<T, SubscriptionPaymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPayments and returns the data updated in the database.
     * @param {SubscriptionPaymentsUpdateManyAndReturnArgs} args - Arguments to update many SubscriptionPayments.
     * @example
     * // Update many SubscriptionPayments
     * const subscriptionPayments = await prisma.subscriptionPayments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubscriptionPayments and only return the `id`
     * const subscriptionPaymentsWithIdOnly = await prisma.subscriptionPayments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubscriptionPaymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionPaymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPaymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubscriptionPayments.
     * @param {SubscriptionPaymentsUpsertArgs} args - Arguments to update or create a SubscriptionPayments.
     * @example
     * // Update or create a SubscriptionPayments
     * const subscriptionPayments = await prisma.subscriptionPayments.upsert({
     *   create: {
     *     // ... data to create a SubscriptionPayments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionPayments we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionPaymentsUpsertArgs>(args: SelectSubset<T, SubscriptionPaymentsUpsertArgs<ExtArgs>>): Prisma__SubscriptionPaymentsClient<$Result.GetResult<Prisma.$SubscriptionPaymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubscriptionPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPaymentsCountArgs} args - Arguments to filter SubscriptionPayments to count.
     * @example
     * // Count the number of SubscriptionPayments
     * const count = await prisma.subscriptionPayments.count({
     *   where: {
     *     // ... the filter for the SubscriptionPayments we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionPaymentsCountArgs>(
      args?: Subset<T, SubscriptionPaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionPaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubscriptionPaymentsAggregateArgs>(args: Subset<T, SubscriptionPaymentsAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionPaymentsAggregateType<T>>

    /**
     * Group by SubscriptionPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPaymentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubscriptionPaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionPaymentsGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionPaymentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubscriptionPaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionPayments model
   */
  readonly fields: SubscriptionPaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionPayments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionPaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubscriptionPayments model
   */
  interface SubscriptionPaymentsFieldRefs {
    readonly id: FieldRef<"SubscriptionPayments", 'Int'>
    readonly title: FieldRef<"SubscriptionPayments", 'String'>
    readonly price: FieldRef<"SubscriptionPayments", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionPayments findUnique
   */
  export type SubscriptionPaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPayments
     */
    select?: SubscriptionPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayments
     */
    omit?: SubscriptionPaymentsOmit<ExtArgs> | null
    /**
     * Filter, which SubscriptionPayments to fetch.
     */
    where: SubscriptionPaymentsWhereUniqueInput
  }

  /**
   * SubscriptionPayments findUniqueOrThrow
   */
  export type SubscriptionPaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPayments
     */
    select?: SubscriptionPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayments
     */
    omit?: SubscriptionPaymentsOmit<ExtArgs> | null
    /**
     * Filter, which SubscriptionPayments to fetch.
     */
    where: SubscriptionPaymentsWhereUniqueInput
  }

  /**
   * SubscriptionPayments findFirst
   */
  export type SubscriptionPaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPayments
     */
    select?: SubscriptionPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayments
     */
    omit?: SubscriptionPaymentsOmit<ExtArgs> | null
    /**
     * Filter, which SubscriptionPayments to fetch.
     */
    where?: SubscriptionPaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPayments to fetch.
     */
    orderBy?: SubscriptionPaymentsOrderByWithRelationInput | SubscriptionPaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPayments.
     */
    cursor?: SubscriptionPaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPayments.
     */
    distinct?: SubscriptionPaymentsScalarFieldEnum | SubscriptionPaymentsScalarFieldEnum[]
  }

  /**
   * SubscriptionPayments findFirstOrThrow
   */
  export type SubscriptionPaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPayments
     */
    select?: SubscriptionPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayments
     */
    omit?: SubscriptionPaymentsOmit<ExtArgs> | null
    /**
     * Filter, which SubscriptionPayments to fetch.
     */
    where?: SubscriptionPaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPayments to fetch.
     */
    orderBy?: SubscriptionPaymentsOrderByWithRelationInput | SubscriptionPaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPayments.
     */
    cursor?: SubscriptionPaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPayments.
     */
    distinct?: SubscriptionPaymentsScalarFieldEnum | SubscriptionPaymentsScalarFieldEnum[]
  }

  /**
   * SubscriptionPayments findMany
   */
  export type SubscriptionPaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPayments
     */
    select?: SubscriptionPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayments
     */
    omit?: SubscriptionPaymentsOmit<ExtArgs> | null
    /**
     * Filter, which SubscriptionPayments to fetch.
     */
    where?: SubscriptionPaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPayments to fetch.
     */
    orderBy?: SubscriptionPaymentsOrderByWithRelationInput | SubscriptionPaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionPayments.
     */
    cursor?: SubscriptionPaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPayments.
     */
    skip?: number
    distinct?: SubscriptionPaymentsScalarFieldEnum | SubscriptionPaymentsScalarFieldEnum[]
  }

  /**
   * SubscriptionPayments create
   */
  export type SubscriptionPaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPayments
     */
    select?: SubscriptionPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayments
     */
    omit?: SubscriptionPaymentsOmit<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionPayments.
     */
    data: XOR<SubscriptionPaymentsCreateInput, SubscriptionPaymentsUncheckedCreateInput>
  }

  /**
   * SubscriptionPayments createMany
   */
  export type SubscriptionPaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionPayments.
     */
    data: SubscriptionPaymentsCreateManyInput | SubscriptionPaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionPayments createManyAndReturn
   */
  export type SubscriptionPaymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPayments
     */
    select?: SubscriptionPaymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayments
     */
    omit?: SubscriptionPaymentsOmit<ExtArgs> | null
    /**
     * The data used to create many SubscriptionPayments.
     */
    data: SubscriptionPaymentsCreateManyInput | SubscriptionPaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionPayments update
   */
  export type SubscriptionPaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPayments
     */
    select?: SubscriptionPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayments
     */
    omit?: SubscriptionPaymentsOmit<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionPayments.
     */
    data: XOR<SubscriptionPaymentsUpdateInput, SubscriptionPaymentsUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionPayments to update.
     */
    where: SubscriptionPaymentsWhereUniqueInput
  }

  /**
   * SubscriptionPayments updateMany
   */
  export type SubscriptionPaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionPayments.
     */
    data: XOR<SubscriptionPaymentsUpdateManyMutationInput, SubscriptionPaymentsUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPayments to update
     */
    where?: SubscriptionPaymentsWhereInput
    /**
     * Limit how many SubscriptionPayments to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPayments updateManyAndReturn
   */
  export type SubscriptionPaymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPayments
     */
    select?: SubscriptionPaymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayments
     */
    omit?: SubscriptionPaymentsOmit<ExtArgs> | null
    /**
     * The data used to update SubscriptionPayments.
     */
    data: XOR<SubscriptionPaymentsUpdateManyMutationInput, SubscriptionPaymentsUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPayments to update
     */
    where?: SubscriptionPaymentsWhereInput
    /**
     * Limit how many SubscriptionPayments to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPayments upsert
   */
  export type SubscriptionPaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPayments
     */
    select?: SubscriptionPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayments
     */
    omit?: SubscriptionPaymentsOmit<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionPayments to update in case it exists.
     */
    where: SubscriptionPaymentsWhereUniqueInput
    /**
     * In case the SubscriptionPayments found by the `where` argument doesn't exist, create a new SubscriptionPayments with this data.
     */
    create: XOR<SubscriptionPaymentsCreateInput, SubscriptionPaymentsUncheckedCreateInput>
    /**
     * In case the SubscriptionPayments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionPaymentsUpdateInput, SubscriptionPaymentsUncheckedUpdateInput>
  }

  /**
   * SubscriptionPayments delete
   */
  export type SubscriptionPaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPayments
     */
    select?: SubscriptionPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayments
     */
    omit?: SubscriptionPaymentsOmit<ExtArgs> | null
    /**
     * Filter which SubscriptionPayments to delete.
     */
    where: SubscriptionPaymentsWhereUniqueInput
  }

  /**
   * SubscriptionPayments deleteMany
   */
  export type SubscriptionPaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPayments to delete
     */
    where?: SubscriptionPaymentsWhereInput
    /**
     * Limit how many SubscriptionPayments to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionPayments without action
   */
  export type SubscriptionPaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPayments
     */
    select?: SubscriptionPaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPayments
     */
    omit?: SubscriptionPaymentsOmit<ExtArgs> | null
  }


  /**
   * Model PaymentsTransactions
   */

  export type AggregatePaymentsTransactions = {
    _count: PaymentsTransactionsCountAggregateOutputType | null
    _avg: PaymentsTransactionsAvgAggregateOutputType | null
    _sum: PaymentsTransactionsSumAggregateOutputType | null
    _min: PaymentsTransactionsMinAggregateOutputType | null
    _max: PaymentsTransactionsMaxAggregateOutputType | null
  }

  export type PaymentsTransactionsAvgAggregateOutputType = {
    id: number | null
    productIds: number | null
    price: number | null
    userId: number | null
  }

  export type PaymentsTransactionsSumAggregateOutputType = {
    id: number | null
    productIds: number | null
    price: number | null
    userId: number | null
  }

  export type PaymentsTransactionsMinAggregateOutputType = {
    id: number | null
    productIds: number | null
    price: number | null
    paymentSystems: string | null
    status: $Enums.PaymentStatus | null
    createAt: Date | null
    updateAt: Date | null
    url: string | null
    anyPaymentsSystemData: string | null
    userId: number | null
  }

  export type PaymentsTransactionsMaxAggregateOutputType = {
    id: number | null
    productIds: number | null
    price: number | null
    paymentSystems: string | null
    status: $Enums.PaymentStatus | null
    createAt: Date | null
    updateAt: Date | null
    url: string | null
    anyPaymentsSystemData: string | null
    userId: number | null
  }

  export type PaymentsTransactionsCountAggregateOutputType = {
    id: number
    productIds: number
    price: number
    paymentSystems: number
    status: number
    createAt: number
    updateAt: number
    url: number
    anyPaymentsSystemData: number
    userId: number
    _all: number
  }


  export type PaymentsTransactionsAvgAggregateInputType = {
    id?: true
    productIds?: true
    price?: true
    userId?: true
  }

  export type PaymentsTransactionsSumAggregateInputType = {
    id?: true
    productIds?: true
    price?: true
    userId?: true
  }

  export type PaymentsTransactionsMinAggregateInputType = {
    id?: true
    productIds?: true
    price?: true
    paymentSystems?: true
    status?: true
    createAt?: true
    updateAt?: true
    url?: true
    anyPaymentsSystemData?: true
    userId?: true
  }

  export type PaymentsTransactionsMaxAggregateInputType = {
    id?: true
    productIds?: true
    price?: true
    paymentSystems?: true
    status?: true
    createAt?: true
    updateAt?: true
    url?: true
    anyPaymentsSystemData?: true
    userId?: true
  }

  export type PaymentsTransactionsCountAggregateInputType = {
    id?: true
    productIds?: true
    price?: true
    paymentSystems?: true
    status?: true
    createAt?: true
    updateAt?: true
    url?: true
    anyPaymentsSystemData?: true
    userId?: true
    _all?: true
  }

  export type PaymentsTransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentsTransactions to aggregate.
     */
    where?: PaymentsTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentsTransactions to fetch.
     */
    orderBy?: PaymentsTransactionsOrderByWithRelationInput | PaymentsTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentsTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentsTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentsTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentsTransactions
    **/
    _count?: true | PaymentsTransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentsTransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentsTransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentsTransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentsTransactionsMaxAggregateInputType
  }

  export type GetPaymentsTransactionsAggregateType<T extends PaymentsTransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentsTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentsTransactions[P]>
      : GetScalarType<T[P], AggregatePaymentsTransactions[P]>
  }




  export type PaymentsTransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentsTransactionsWhereInput
    orderBy?: PaymentsTransactionsOrderByWithAggregationInput | PaymentsTransactionsOrderByWithAggregationInput[]
    by: PaymentsTransactionsScalarFieldEnum[] | PaymentsTransactionsScalarFieldEnum
    having?: PaymentsTransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentsTransactionsCountAggregateInputType | true
    _avg?: PaymentsTransactionsAvgAggregateInputType
    _sum?: PaymentsTransactionsSumAggregateInputType
    _min?: PaymentsTransactionsMinAggregateInputType
    _max?: PaymentsTransactionsMaxAggregateInputType
  }

  export type PaymentsTransactionsGroupByOutputType = {
    id: number
    productIds: number
    price: number
    paymentSystems: string
    status: $Enums.PaymentStatus
    createAt: Date
    updateAt: Date | null
    url: string
    anyPaymentsSystemData: string | null
    userId: number
    _count: PaymentsTransactionsCountAggregateOutputType | null
    _avg: PaymentsTransactionsAvgAggregateOutputType | null
    _sum: PaymentsTransactionsSumAggregateOutputType | null
    _min: PaymentsTransactionsMinAggregateOutputType | null
    _max: PaymentsTransactionsMaxAggregateOutputType | null
  }

  type GetPaymentsTransactionsGroupByPayload<T extends PaymentsTransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentsTransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentsTransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentsTransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentsTransactionsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentsTransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productIds?: boolean
    price?: boolean
    paymentSystems?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
    url?: boolean
    anyPaymentsSystemData?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentsTransactions"]>

  export type PaymentsTransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productIds?: boolean
    price?: boolean
    paymentSystems?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
    url?: boolean
    anyPaymentsSystemData?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentsTransactions"]>

  export type PaymentsTransactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productIds?: boolean
    price?: boolean
    paymentSystems?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
    url?: boolean
    anyPaymentsSystemData?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentsTransactions"]>

  export type PaymentsTransactionsSelectScalar = {
    id?: boolean
    productIds?: boolean
    price?: boolean
    paymentSystems?: boolean
    status?: boolean
    createAt?: boolean
    updateAt?: boolean
    url?: boolean
    anyPaymentsSystemData?: boolean
    userId?: boolean
  }

  export type PaymentsTransactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productIds" | "price" | "paymentSystems" | "status" | "createAt" | "updateAt" | "url" | "anyPaymentsSystemData" | "userId", ExtArgs["result"]["paymentsTransactions"]>
  export type PaymentsTransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentsTransactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentsTransactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentsTransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentsTransactions"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productIds: number
      price: number
      paymentSystems: string
      status: $Enums.PaymentStatus
      createAt: Date
      updateAt: Date | null
      url: string
      anyPaymentsSystemData: string | null
      userId: number
    }, ExtArgs["result"]["paymentsTransactions"]>
    composites: {}
  }

  type PaymentsTransactionsGetPayload<S extends boolean | null | undefined | PaymentsTransactionsDefaultArgs> = $Result.GetResult<Prisma.$PaymentsTransactionsPayload, S>

  type PaymentsTransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentsTransactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentsTransactionsCountAggregateInputType | true
    }

  export interface PaymentsTransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentsTransactions'], meta: { name: 'PaymentsTransactions' } }
    /**
     * Find zero or one PaymentsTransactions that matches the filter.
     * @param {PaymentsTransactionsFindUniqueArgs} args - Arguments to find a PaymentsTransactions
     * @example
     * // Get one PaymentsTransactions
     * const paymentsTransactions = await prisma.paymentsTransactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentsTransactionsFindUniqueArgs>(args: SelectSubset<T, PaymentsTransactionsFindUniqueArgs<ExtArgs>>): Prisma__PaymentsTransactionsClient<$Result.GetResult<Prisma.$PaymentsTransactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaymentsTransactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentsTransactionsFindUniqueOrThrowArgs} args - Arguments to find a PaymentsTransactions
     * @example
     * // Get one PaymentsTransactions
     * const paymentsTransactions = await prisma.paymentsTransactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentsTransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentsTransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentsTransactionsClient<$Result.GetResult<Prisma.$PaymentsTransactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentsTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsTransactionsFindFirstArgs} args - Arguments to find a PaymentsTransactions
     * @example
     * // Get one PaymentsTransactions
     * const paymentsTransactions = await prisma.paymentsTransactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentsTransactionsFindFirstArgs>(args?: SelectSubset<T, PaymentsTransactionsFindFirstArgs<ExtArgs>>): Prisma__PaymentsTransactionsClient<$Result.GetResult<Prisma.$PaymentsTransactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaymentsTransactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsTransactionsFindFirstOrThrowArgs} args - Arguments to find a PaymentsTransactions
     * @example
     * // Get one PaymentsTransactions
     * const paymentsTransactions = await prisma.paymentsTransactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentsTransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentsTransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentsTransactionsClient<$Result.GetResult<Prisma.$PaymentsTransactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaymentsTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsTransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentsTransactions
     * const paymentsTransactions = await prisma.paymentsTransactions.findMany()
     * 
     * // Get first 10 PaymentsTransactions
     * const paymentsTransactions = await prisma.paymentsTransactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentsTransactionsWithIdOnly = await prisma.paymentsTransactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentsTransactionsFindManyArgs>(args?: SelectSubset<T, PaymentsTransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsTransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaymentsTransactions.
     * @param {PaymentsTransactionsCreateArgs} args - Arguments to create a PaymentsTransactions.
     * @example
     * // Create one PaymentsTransactions
     * const PaymentsTransactions = await prisma.paymentsTransactions.create({
     *   data: {
     *     // ... data to create a PaymentsTransactions
     *   }
     * })
     * 
     */
    create<T extends PaymentsTransactionsCreateArgs>(args: SelectSubset<T, PaymentsTransactionsCreateArgs<ExtArgs>>): Prisma__PaymentsTransactionsClient<$Result.GetResult<Prisma.$PaymentsTransactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaymentsTransactions.
     * @param {PaymentsTransactionsCreateManyArgs} args - Arguments to create many PaymentsTransactions.
     * @example
     * // Create many PaymentsTransactions
     * const paymentsTransactions = await prisma.paymentsTransactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentsTransactionsCreateManyArgs>(args?: SelectSubset<T, PaymentsTransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentsTransactions and returns the data saved in the database.
     * @param {PaymentsTransactionsCreateManyAndReturnArgs} args - Arguments to create many PaymentsTransactions.
     * @example
     * // Create many PaymentsTransactions
     * const paymentsTransactions = await prisma.paymentsTransactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentsTransactions and only return the `id`
     * const paymentsTransactionsWithIdOnly = await prisma.paymentsTransactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentsTransactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentsTransactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsTransactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaymentsTransactions.
     * @param {PaymentsTransactionsDeleteArgs} args - Arguments to delete one PaymentsTransactions.
     * @example
     * // Delete one PaymentsTransactions
     * const PaymentsTransactions = await prisma.paymentsTransactions.delete({
     *   where: {
     *     // ... filter to delete one PaymentsTransactions
     *   }
     * })
     * 
     */
    delete<T extends PaymentsTransactionsDeleteArgs>(args: SelectSubset<T, PaymentsTransactionsDeleteArgs<ExtArgs>>): Prisma__PaymentsTransactionsClient<$Result.GetResult<Prisma.$PaymentsTransactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaymentsTransactions.
     * @param {PaymentsTransactionsUpdateArgs} args - Arguments to update one PaymentsTransactions.
     * @example
     * // Update one PaymentsTransactions
     * const paymentsTransactions = await prisma.paymentsTransactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentsTransactionsUpdateArgs>(args: SelectSubset<T, PaymentsTransactionsUpdateArgs<ExtArgs>>): Prisma__PaymentsTransactionsClient<$Result.GetResult<Prisma.$PaymentsTransactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaymentsTransactions.
     * @param {PaymentsTransactionsDeleteManyArgs} args - Arguments to filter PaymentsTransactions to delete.
     * @example
     * // Delete a few PaymentsTransactions
     * const { count } = await prisma.paymentsTransactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentsTransactionsDeleteManyArgs>(args?: SelectSubset<T, PaymentsTransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentsTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsTransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentsTransactions
     * const paymentsTransactions = await prisma.paymentsTransactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentsTransactionsUpdateManyArgs>(args: SelectSubset<T, PaymentsTransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentsTransactions and returns the data updated in the database.
     * @param {PaymentsTransactionsUpdateManyAndReturnArgs} args - Arguments to update many PaymentsTransactions.
     * @example
     * // Update many PaymentsTransactions
     * const paymentsTransactions = await prisma.paymentsTransactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaymentsTransactions and only return the `id`
     * const paymentsTransactionsWithIdOnly = await prisma.paymentsTransactions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentsTransactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentsTransactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentsTransactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaymentsTransactions.
     * @param {PaymentsTransactionsUpsertArgs} args - Arguments to update or create a PaymentsTransactions.
     * @example
     * // Update or create a PaymentsTransactions
     * const paymentsTransactions = await prisma.paymentsTransactions.upsert({
     *   create: {
     *     // ... data to create a PaymentsTransactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentsTransactions we want to update
     *   }
     * })
     */
    upsert<T extends PaymentsTransactionsUpsertArgs>(args: SelectSubset<T, PaymentsTransactionsUpsertArgs<ExtArgs>>): Prisma__PaymentsTransactionsClient<$Result.GetResult<Prisma.$PaymentsTransactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaymentsTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsTransactionsCountArgs} args - Arguments to filter PaymentsTransactions to count.
     * @example
     * // Count the number of PaymentsTransactions
     * const count = await prisma.paymentsTransactions.count({
     *   where: {
     *     // ... the filter for the PaymentsTransactions we want to count
     *   }
     * })
    **/
    count<T extends PaymentsTransactionsCountArgs>(
      args?: Subset<T, PaymentsTransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentsTransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentsTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsTransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentsTransactionsAggregateArgs>(args: Subset<T, PaymentsTransactionsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsTransactionsAggregateType<T>>

    /**
     * Group by PaymentsTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentsTransactionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentsTransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentsTransactionsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentsTransactionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentsTransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentsTransactions model
   */
  readonly fields: PaymentsTransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentsTransactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentsTransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentsTransactions model
   */
  interface PaymentsTransactionsFieldRefs {
    readonly id: FieldRef<"PaymentsTransactions", 'Int'>
    readonly productIds: FieldRef<"PaymentsTransactions", 'Int'>
    readonly price: FieldRef<"PaymentsTransactions", 'Int'>
    readonly paymentSystems: FieldRef<"PaymentsTransactions", 'String'>
    readonly status: FieldRef<"PaymentsTransactions", 'PaymentStatus'>
    readonly createAt: FieldRef<"PaymentsTransactions", 'DateTime'>
    readonly updateAt: FieldRef<"PaymentsTransactions", 'DateTime'>
    readonly url: FieldRef<"PaymentsTransactions", 'String'>
    readonly anyPaymentsSystemData: FieldRef<"PaymentsTransactions", 'String'>
    readonly userId: FieldRef<"PaymentsTransactions", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PaymentsTransactions findUnique
   */
  export type PaymentsTransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsTransactions
     */
    select?: PaymentsTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentsTransactions
     */
    omit?: PaymentsTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentsTransactions to fetch.
     */
    where: PaymentsTransactionsWhereUniqueInput
  }

  /**
   * PaymentsTransactions findUniqueOrThrow
   */
  export type PaymentsTransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsTransactions
     */
    select?: PaymentsTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentsTransactions
     */
    omit?: PaymentsTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentsTransactions to fetch.
     */
    where: PaymentsTransactionsWhereUniqueInput
  }

  /**
   * PaymentsTransactions findFirst
   */
  export type PaymentsTransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsTransactions
     */
    select?: PaymentsTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentsTransactions
     */
    omit?: PaymentsTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentsTransactions to fetch.
     */
    where?: PaymentsTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentsTransactions to fetch.
     */
    orderBy?: PaymentsTransactionsOrderByWithRelationInput | PaymentsTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentsTransactions.
     */
    cursor?: PaymentsTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentsTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentsTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentsTransactions.
     */
    distinct?: PaymentsTransactionsScalarFieldEnum | PaymentsTransactionsScalarFieldEnum[]
  }

  /**
   * PaymentsTransactions findFirstOrThrow
   */
  export type PaymentsTransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsTransactions
     */
    select?: PaymentsTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentsTransactions
     */
    omit?: PaymentsTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentsTransactions to fetch.
     */
    where?: PaymentsTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentsTransactions to fetch.
     */
    orderBy?: PaymentsTransactionsOrderByWithRelationInput | PaymentsTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentsTransactions.
     */
    cursor?: PaymentsTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentsTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentsTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentsTransactions.
     */
    distinct?: PaymentsTransactionsScalarFieldEnum | PaymentsTransactionsScalarFieldEnum[]
  }

  /**
   * PaymentsTransactions findMany
   */
  export type PaymentsTransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsTransactions
     */
    select?: PaymentsTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentsTransactions
     */
    omit?: PaymentsTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentsTransactions to fetch.
     */
    where?: PaymentsTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentsTransactions to fetch.
     */
    orderBy?: PaymentsTransactionsOrderByWithRelationInput | PaymentsTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentsTransactions.
     */
    cursor?: PaymentsTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentsTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentsTransactions.
     */
    skip?: number
    distinct?: PaymentsTransactionsScalarFieldEnum | PaymentsTransactionsScalarFieldEnum[]
  }

  /**
   * PaymentsTransactions create
   */
  export type PaymentsTransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsTransactions
     */
    select?: PaymentsTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentsTransactions
     */
    omit?: PaymentsTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsTransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentsTransactions.
     */
    data: XOR<PaymentsTransactionsCreateInput, PaymentsTransactionsUncheckedCreateInput>
  }

  /**
   * PaymentsTransactions createMany
   */
  export type PaymentsTransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentsTransactions.
     */
    data: PaymentsTransactionsCreateManyInput | PaymentsTransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentsTransactions createManyAndReturn
   */
  export type PaymentsTransactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsTransactions
     */
    select?: PaymentsTransactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentsTransactions
     */
    omit?: PaymentsTransactionsOmit<ExtArgs> | null
    /**
     * The data used to create many PaymentsTransactions.
     */
    data: PaymentsTransactionsCreateManyInput | PaymentsTransactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsTransactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentsTransactions update
   */
  export type PaymentsTransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsTransactions
     */
    select?: PaymentsTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentsTransactions
     */
    omit?: PaymentsTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsTransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentsTransactions.
     */
    data: XOR<PaymentsTransactionsUpdateInput, PaymentsTransactionsUncheckedUpdateInput>
    /**
     * Choose, which PaymentsTransactions to update.
     */
    where: PaymentsTransactionsWhereUniqueInput
  }

  /**
   * PaymentsTransactions updateMany
   */
  export type PaymentsTransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentsTransactions.
     */
    data: XOR<PaymentsTransactionsUpdateManyMutationInput, PaymentsTransactionsUncheckedUpdateManyInput>
    /**
     * Filter which PaymentsTransactions to update
     */
    where?: PaymentsTransactionsWhereInput
    /**
     * Limit how many PaymentsTransactions to update.
     */
    limit?: number
  }

  /**
   * PaymentsTransactions updateManyAndReturn
   */
  export type PaymentsTransactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsTransactions
     */
    select?: PaymentsTransactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentsTransactions
     */
    omit?: PaymentsTransactionsOmit<ExtArgs> | null
    /**
     * The data used to update PaymentsTransactions.
     */
    data: XOR<PaymentsTransactionsUpdateManyMutationInput, PaymentsTransactionsUncheckedUpdateManyInput>
    /**
     * Filter which PaymentsTransactions to update
     */
    where?: PaymentsTransactionsWhereInput
    /**
     * Limit how many PaymentsTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsTransactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaymentsTransactions upsert
   */
  export type PaymentsTransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsTransactions
     */
    select?: PaymentsTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentsTransactions
     */
    omit?: PaymentsTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsTransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentsTransactions to update in case it exists.
     */
    where: PaymentsTransactionsWhereUniqueInput
    /**
     * In case the PaymentsTransactions found by the `where` argument doesn't exist, create a new PaymentsTransactions with this data.
     */
    create: XOR<PaymentsTransactionsCreateInput, PaymentsTransactionsUncheckedCreateInput>
    /**
     * In case the PaymentsTransactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentsTransactionsUpdateInput, PaymentsTransactionsUncheckedUpdateInput>
  }

  /**
   * PaymentsTransactions delete
   */
  export type PaymentsTransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsTransactions
     */
    select?: PaymentsTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentsTransactions
     */
    omit?: PaymentsTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsTransactionsInclude<ExtArgs> | null
    /**
     * Filter which PaymentsTransactions to delete.
     */
    where: PaymentsTransactionsWhereUniqueInput
  }

  /**
   * PaymentsTransactions deleteMany
   */
  export type PaymentsTransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentsTransactions to delete
     */
    where?: PaymentsTransactionsWhereInput
    /**
     * Limit how many PaymentsTransactions to delete.
     */
    limit?: number
  }

  /**
   * PaymentsTransactions without action
   */
  export type PaymentsTransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentsTransactions
     */
    select?: PaymentsTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaymentsTransactions
     */
    omit?: PaymentsTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentsTransactionsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    firstName: 'firstName',
    lastName: 'lastName',
    dateOfBirth: 'dateOfBirth',
    country: 'country',
    city: 'city',
    aboutMe: 'aboutMe',
    passwordHash: 'passwordHash',
    deletionStatus: 'deletionStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserMetadataScalarFieldEnum: {
    userId: 'userId',
    emailConfirmationCode: 'emailConfirmationCode',
    emailConfirmationExpiration: 'emailConfirmationExpiration',
    isEmailConfirmed: 'isEmailConfirmed',
    passwordRecoveryCode: 'passwordRecoveryCode',
    passwordRecoveryExpiration: 'passwordRecoveryExpiration'
  };

  export type UserMetadataScalarFieldEnum = (typeof UserMetadataScalarFieldEnum)[keyof typeof UserMetadataScalarFieldEnum]


  export const UserAvatarScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    avatarUrl: 'avatarUrl',
    createdAt: 'createdAt',
    deletionStatus: 'deletionStatus'
  };

  export type UserAvatarScalarFieldEnum = (typeof UserAvatarScalarFieldEnum)[keyof typeof UserAvatarScalarFieldEnum]


  export const AuthAccountScalarFieldEnum: {
    id: 'id',
    provider: 'provider',
    providerId: 'providerId',
    userId: 'userId',
    createdAt: 'createdAt'
  };

  export type AuthAccountScalarFieldEnum = (typeof AuthAccountScalarFieldEnum)[keyof typeof AuthAccountScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    description: 'description',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    deletionStatus: 'deletionStatus'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const DeviceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    title: 'title',
    ip: 'ip',
    lastActiveDate: 'lastActiveDate',
    expirationDate: 'expirationDate',
    deletionStatus: 'deletionStatus'
  };

  export type DeviceScalarFieldEnum = (typeof DeviceScalarFieldEnum)[keyof typeof DeviceScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    planName: 'planName',
    expireAt: 'expireAt',
    nextPaymentDate: 'nextPaymentDate',
    autoRenewal: 'autoRenewal',
    paymentMethod: 'paymentMethod',
    isActive: 'isActive'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const SubscriptionPaymentsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    price: 'price'
  };

  export type SubscriptionPaymentsScalarFieldEnum = (typeof SubscriptionPaymentsScalarFieldEnum)[keyof typeof SubscriptionPaymentsScalarFieldEnum]


  export const PaymentsTransactionsScalarFieldEnum: {
    id: 'id',
    productIds: 'productIds',
    price: 'price',
    paymentSystems: 'paymentSystems',
    status: 'status',
    createAt: 'createAt',
    updateAt: 'updateAt',
    url: 'url',
    anyPaymentsSystemData: 'anyPaymentsSystemData',
    userId: 'userId'
  };

  export type PaymentsTransactionsScalarFieldEnum = (typeof PaymentsTransactionsScalarFieldEnum)[keyof typeof PaymentsTransactionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'DeletionStatus'
   */
  export type EnumDeletionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeletionStatus'>
    


  /**
   * Reference to a field of type 'DeletionStatus[]'
   */
  export type ListEnumDeletionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeletionStatus[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    country?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    aboutMe?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    deletionStatus?: EnumDeletionStatusFilter<"User"> | $Enums.DeletionStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userMetadata?: XOR<UserMetadataNullableScalarRelationFilter, UserMetadataWhereInput> | null
    authAccounts?: AuthAccountListRelationFilter
    devices?: DeviceListRelationFilter
    posts?: PostListRelationFilter
    userAvatars?: UserAvatarListRelationFilter
    subscription?: SubscriptionListRelationFilter
    payments?: PaymentsTransactionsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    aboutMe?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    deletionStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userMetadata?: UserMetadataOrderByWithRelationInput
    authAccounts?: AuthAccountOrderByRelationAggregateInput
    devices?: DeviceOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    userAvatars?: UserAvatarOrderByRelationAggregateInput
    subscription?: SubscriptionOrderByRelationAggregateInput
    payments?: PaymentsTransactionsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    country?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    aboutMe?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    deletionStatus?: EnumDeletionStatusFilter<"User"> | $Enums.DeletionStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userMetadata?: XOR<UserMetadataNullableScalarRelationFilter, UserMetadataWhereInput> | null
    authAccounts?: AuthAccountListRelationFilter
    devices?: DeviceListRelationFilter
    posts?: PostListRelationFilter
    userAvatars?: UserAvatarListRelationFilter
    subscription?: SubscriptionListRelationFilter
    payments?: PaymentsTransactionsListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    aboutMe?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    deletionStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    aboutMe?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    deletionStatus?: EnumDeletionStatusWithAggregatesFilter<"User"> | $Enums.DeletionStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserMetadataWhereInput = {
    AND?: UserMetadataWhereInput | UserMetadataWhereInput[]
    OR?: UserMetadataWhereInput[]
    NOT?: UserMetadataWhereInput | UserMetadataWhereInput[]
    userId?: IntFilter<"UserMetadata"> | number
    emailConfirmationCode?: StringNullableFilter<"UserMetadata"> | string | null
    emailConfirmationExpiration?: DateTimeNullableFilter<"UserMetadata"> | Date | string | null
    isEmailConfirmed?: BoolFilter<"UserMetadata"> | boolean
    passwordRecoveryCode?: StringNullableFilter<"UserMetadata"> | string | null
    passwordRecoveryExpiration?: DateTimeNullableFilter<"UserMetadata"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserMetadataOrderByWithRelationInput = {
    userId?: SortOrder
    emailConfirmationCode?: SortOrderInput | SortOrder
    emailConfirmationExpiration?: SortOrderInput | SortOrder
    isEmailConfirmed?: SortOrder
    passwordRecoveryCode?: SortOrderInput | SortOrder
    passwordRecoveryExpiration?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserMetadataWhereUniqueInput = Prisma.AtLeast<{
    userId?: number
    AND?: UserMetadataWhereInput | UserMetadataWhereInput[]
    OR?: UserMetadataWhereInput[]
    NOT?: UserMetadataWhereInput | UserMetadataWhereInput[]
    emailConfirmationCode?: StringNullableFilter<"UserMetadata"> | string | null
    emailConfirmationExpiration?: DateTimeNullableFilter<"UserMetadata"> | Date | string | null
    isEmailConfirmed?: BoolFilter<"UserMetadata"> | boolean
    passwordRecoveryCode?: StringNullableFilter<"UserMetadata"> | string | null
    passwordRecoveryExpiration?: DateTimeNullableFilter<"UserMetadata"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId">

  export type UserMetadataOrderByWithAggregationInput = {
    userId?: SortOrder
    emailConfirmationCode?: SortOrderInput | SortOrder
    emailConfirmationExpiration?: SortOrderInput | SortOrder
    isEmailConfirmed?: SortOrder
    passwordRecoveryCode?: SortOrderInput | SortOrder
    passwordRecoveryExpiration?: SortOrderInput | SortOrder
    _count?: UserMetadataCountOrderByAggregateInput
    _avg?: UserMetadataAvgOrderByAggregateInput
    _max?: UserMetadataMaxOrderByAggregateInput
    _min?: UserMetadataMinOrderByAggregateInput
    _sum?: UserMetadataSumOrderByAggregateInput
  }

  export type UserMetadataScalarWhereWithAggregatesInput = {
    AND?: UserMetadataScalarWhereWithAggregatesInput | UserMetadataScalarWhereWithAggregatesInput[]
    OR?: UserMetadataScalarWhereWithAggregatesInput[]
    NOT?: UserMetadataScalarWhereWithAggregatesInput | UserMetadataScalarWhereWithAggregatesInput[]
    userId?: IntWithAggregatesFilter<"UserMetadata"> | number
    emailConfirmationCode?: StringNullableWithAggregatesFilter<"UserMetadata"> | string | null
    emailConfirmationExpiration?: DateTimeNullableWithAggregatesFilter<"UserMetadata"> | Date | string | null
    isEmailConfirmed?: BoolWithAggregatesFilter<"UserMetadata"> | boolean
    passwordRecoveryCode?: StringNullableWithAggregatesFilter<"UserMetadata"> | string | null
    passwordRecoveryExpiration?: DateTimeNullableWithAggregatesFilter<"UserMetadata"> | Date | string | null
  }

  export type UserAvatarWhereInput = {
    AND?: UserAvatarWhereInput | UserAvatarWhereInput[]
    OR?: UserAvatarWhereInput[]
    NOT?: UserAvatarWhereInput | UserAvatarWhereInput[]
    id?: IntFilter<"UserAvatar"> | number
    userId?: IntFilter<"UserAvatar"> | number
    avatarUrl?: StringFilter<"UserAvatar"> | string
    createdAt?: DateTimeFilter<"UserAvatar"> | Date | string
    deletionStatus?: EnumDeletionStatusFilter<"UserAvatar"> | $Enums.DeletionStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserAvatarOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    deletionStatus?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserAvatarWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserAvatarWhereInput | UserAvatarWhereInput[]
    OR?: UserAvatarWhereInput[]
    NOT?: UserAvatarWhereInput | UserAvatarWhereInput[]
    userId?: IntFilter<"UserAvatar"> | number
    avatarUrl?: StringFilter<"UserAvatar"> | string
    createdAt?: DateTimeFilter<"UserAvatar"> | Date | string
    deletionStatus?: EnumDeletionStatusFilter<"UserAvatar"> | $Enums.DeletionStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type UserAvatarOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    deletionStatus?: SortOrder
    _count?: UserAvatarCountOrderByAggregateInput
    _avg?: UserAvatarAvgOrderByAggregateInput
    _max?: UserAvatarMaxOrderByAggregateInput
    _min?: UserAvatarMinOrderByAggregateInput
    _sum?: UserAvatarSumOrderByAggregateInput
  }

  export type UserAvatarScalarWhereWithAggregatesInput = {
    AND?: UserAvatarScalarWhereWithAggregatesInput | UserAvatarScalarWhereWithAggregatesInput[]
    OR?: UserAvatarScalarWhereWithAggregatesInput[]
    NOT?: UserAvatarScalarWhereWithAggregatesInput | UserAvatarScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserAvatar"> | number
    userId?: IntWithAggregatesFilter<"UserAvatar"> | number
    avatarUrl?: StringWithAggregatesFilter<"UserAvatar"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserAvatar"> | Date | string
    deletionStatus?: EnumDeletionStatusWithAggregatesFilter<"UserAvatar"> | $Enums.DeletionStatus
  }

  export type AuthAccountWhereInput = {
    AND?: AuthAccountWhereInput | AuthAccountWhereInput[]
    OR?: AuthAccountWhereInput[]
    NOT?: AuthAccountWhereInput | AuthAccountWhereInput[]
    id?: IntFilter<"AuthAccount"> | number
    provider?: StringFilter<"AuthAccount"> | string
    providerId?: StringFilter<"AuthAccount"> | string
    userId?: IntFilter<"AuthAccount"> | number
    createdAt?: DateTimeFilter<"AuthAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuthAccountOrderByWithRelationInput = {
    id?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuthAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    provider_providerId?: AuthAccountProviderProviderIdCompoundUniqueInput
    AND?: AuthAccountWhereInput | AuthAccountWhereInput[]
    OR?: AuthAccountWhereInput[]
    NOT?: AuthAccountWhereInput | AuthAccountWhereInput[]
    provider?: StringFilter<"AuthAccount"> | string
    providerId?: StringFilter<"AuthAccount"> | string
    userId?: IntFilter<"AuthAccount"> | number
    createdAt?: DateTimeFilter<"AuthAccount"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerId">

  export type AuthAccountOrderByWithAggregationInput = {
    id?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    _count?: AuthAccountCountOrderByAggregateInput
    _avg?: AuthAccountAvgOrderByAggregateInput
    _max?: AuthAccountMaxOrderByAggregateInput
    _min?: AuthAccountMinOrderByAggregateInput
    _sum?: AuthAccountSumOrderByAggregateInput
  }

  export type AuthAccountScalarWhereWithAggregatesInput = {
    AND?: AuthAccountScalarWhereWithAggregatesInput | AuthAccountScalarWhereWithAggregatesInput[]
    OR?: AuthAccountScalarWhereWithAggregatesInput[]
    NOT?: AuthAccountScalarWhereWithAggregatesInput | AuthAccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AuthAccount"> | number
    provider?: StringWithAggregatesFilter<"AuthAccount"> | string
    providerId?: StringWithAggregatesFilter<"AuthAccount"> | string
    userId?: IntWithAggregatesFilter<"AuthAccount"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AuthAccount"> | Date | string
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    userId?: IntFilter<"Post"> | number
    description?: StringNullableFilter<"Post"> | string | null
    imageUrl?: StringNullableListFilter<"Post">
    createdAt?: DateTimeFilter<"Post"> | Date | string
    deletionStatus?: EnumDeletionStatusFilter<"Post"> | $Enums.DeletionStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    deletionStatus?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    userId?: IntFilter<"Post"> | number
    description?: StringNullableFilter<"Post"> | string | null
    imageUrl?: StringNullableListFilter<"Post">
    createdAt?: DateTimeFilter<"Post"> | Date | string
    deletionStatus?: EnumDeletionStatusFilter<"Post"> | $Enums.DeletionStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    description?: SortOrderInput | SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    deletionStatus?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    userId?: IntWithAggregatesFilter<"Post"> | number
    description?: StringNullableWithAggregatesFilter<"Post"> | string | null
    imageUrl?: StringNullableListFilter<"Post">
    createdAt?: DateTimeWithAggregatesFilter<"Post"> | Date | string
    deletionStatus?: EnumDeletionStatusWithAggregatesFilter<"Post"> | $Enums.DeletionStatus
  }

  export type DeviceWhereInput = {
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    id?: UuidFilter<"Device"> | string
    userId?: IntFilter<"Device"> | number
    title?: StringFilter<"Device"> | string
    ip?: StringFilter<"Device"> | string
    lastActiveDate?: DateTimeFilter<"Device"> | Date | string
    expirationDate?: DateTimeFilter<"Device"> | Date | string
    deletionStatus?: EnumDeletionStatusFilter<"Device"> | $Enums.DeletionStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type DeviceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    ip?: SortOrder
    lastActiveDate?: SortOrder
    expirationDate?: SortOrder
    deletionStatus?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DeviceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeviceWhereInput | DeviceWhereInput[]
    OR?: DeviceWhereInput[]
    NOT?: DeviceWhereInput | DeviceWhereInput[]
    userId?: IntFilter<"Device"> | number
    title?: StringFilter<"Device"> | string
    ip?: StringFilter<"Device"> | string
    lastActiveDate?: DateTimeFilter<"Device"> | Date | string
    expirationDate?: DateTimeFilter<"Device"> | Date | string
    deletionStatus?: EnumDeletionStatusFilter<"Device"> | $Enums.DeletionStatus
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type DeviceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    ip?: SortOrder
    lastActiveDate?: SortOrder
    expirationDate?: SortOrder
    deletionStatus?: SortOrder
    _count?: DeviceCountOrderByAggregateInput
    _avg?: DeviceAvgOrderByAggregateInput
    _max?: DeviceMaxOrderByAggregateInput
    _min?: DeviceMinOrderByAggregateInput
    _sum?: DeviceSumOrderByAggregateInput
  }

  export type DeviceScalarWhereWithAggregatesInput = {
    AND?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    OR?: DeviceScalarWhereWithAggregatesInput[]
    NOT?: DeviceScalarWhereWithAggregatesInput | DeviceScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Device"> | string
    userId?: IntWithAggregatesFilter<"Device"> | number
    title?: StringWithAggregatesFilter<"Device"> | string
    ip?: StringWithAggregatesFilter<"Device"> | string
    lastActiveDate?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    expirationDate?: DateTimeWithAggregatesFilter<"Device"> | Date | string
    deletionStatus?: EnumDeletionStatusWithAggregatesFilter<"Device"> | $Enums.DeletionStatus
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: IntFilter<"Subscription"> | number
    userId?: IntFilter<"Subscription"> | number
    planName?: StringFilter<"Subscription"> | string
    expireAt?: DateTimeFilter<"Subscription"> | Date | string
    nextPaymentDate?: DateTimeFilter<"Subscription"> | Date | string
    autoRenewal?: BoolFilter<"Subscription"> | boolean
    paymentMethod?: StringFilter<"Subscription"> | string
    isActive?: BoolFilter<"Subscription"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    planName?: SortOrder
    expireAt?: SortOrder
    nextPaymentDate?: SortOrder
    autoRenewal?: SortOrder
    paymentMethod?: SortOrder
    isActive?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    userId?: IntFilter<"Subscription"> | number
    planName?: StringFilter<"Subscription"> | string
    expireAt?: DateTimeFilter<"Subscription"> | Date | string
    nextPaymentDate?: DateTimeFilter<"Subscription"> | Date | string
    autoRenewal?: BoolFilter<"Subscription"> | boolean
    paymentMethod?: StringFilter<"Subscription"> | string
    isActive?: BoolFilter<"Subscription"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    planName?: SortOrder
    expireAt?: SortOrder
    nextPaymentDate?: SortOrder
    autoRenewal?: SortOrder
    paymentMethod?: SortOrder
    isActive?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subscription"> | number
    userId?: IntWithAggregatesFilter<"Subscription"> | number
    planName?: StringWithAggregatesFilter<"Subscription"> | string
    expireAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    nextPaymentDate?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    autoRenewal?: BoolWithAggregatesFilter<"Subscription"> | boolean
    paymentMethod?: StringWithAggregatesFilter<"Subscription"> | string
    isActive?: BoolWithAggregatesFilter<"Subscription"> | boolean
  }

  export type SubscriptionPaymentsWhereInput = {
    AND?: SubscriptionPaymentsWhereInput | SubscriptionPaymentsWhereInput[]
    OR?: SubscriptionPaymentsWhereInput[]
    NOT?: SubscriptionPaymentsWhereInput | SubscriptionPaymentsWhereInput[]
    id?: IntFilter<"SubscriptionPayments"> | number
    title?: StringFilter<"SubscriptionPayments"> | string
    price?: IntFilter<"SubscriptionPayments"> | number
  }

  export type SubscriptionPaymentsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
  }

  export type SubscriptionPaymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubscriptionPaymentsWhereInput | SubscriptionPaymentsWhereInput[]
    OR?: SubscriptionPaymentsWhereInput[]
    NOT?: SubscriptionPaymentsWhereInput | SubscriptionPaymentsWhereInput[]
    title?: StringFilter<"SubscriptionPayments"> | string
    price?: IntFilter<"SubscriptionPayments"> | number
  }, "id">

  export type SubscriptionPaymentsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    _count?: SubscriptionPaymentsCountOrderByAggregateInput
    _avg?: SubscriptionPaymentsAvgOrderByAggregateInput
    _max?: SubscriptionPaymentsMaxOrderByAggregateInput
    _min?: SubscriptionPaymentsMinOrderByAggregateInput
    _sum?: SubscriptionPaymentsSumOrderByAggregateInput
  }

  export type SubscriptionPaymentsScalarWhereWithAggregatesInput = {
    AND?: SubscriptionPaymentsScalarWhereWithAggregatesInput | SubscriptionPaymentsScalarWhereWithAggregatesInput[]
    OR?: SubscriptionPaymentsScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionPaymentsScalarWhereWithAggregatesInput | SubscriptionPaymentsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubscriptionPayments"> | number
    title?: StringWithAggregatesFilter<"SubscriptionPayments"> | string
    price?: IntWithAggregatesFilter<"SubscriptionPayments"> | number
  }

  export type PaymentsTransactionsWhereInput = {
    AND?: PaymentsTransactionsWhereInput | PaymentsTransactionsWhereInput[]
    OR?: PaymentsTransactionsWhereInput[]
    NOT?: PaymentsTransactionsWhereInput | PaymentsTransactionsWhereInput[]
    id?: IntFilter<"PaymentsTransactions"> | number
    productIds?: IntFilter<"PaymentsTransactions"> | number
    price?: IntFilter<"PaymentsTransactions"> | number
    paymentSystems?: StringFilter<"PaymentsTransactions"> | string
    status?: EnumPaymentStatusFilter<"PaymentsTransactions"> | $Enums.PaymentStatus
    createAt?: DateTimeFilter<"PaymentsTransactions"> | Date | string
    updateAt?: DateTimeNullableFilter<"PaymentsTransactions"> | Date | string | null
    url?: StringFilter<"PaymentsTransactions"> | string
    anyPaymentsSystemData?: StringNullableFilter<"PaymentsTransactions"> | string | null
    userId?: IntFilter<"PaymentsTransactions"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentsTransactionsOrderByWithRelationInput = {
    id?: SortOrder
    productIds?: SortOrder
    price?: SortOrder
    paymentSystems?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrderInput | SortOrder
    url?: SortOrder
    anyPaymentsSystemData?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PaymentsTransactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentsTransactionsWhereInput | PaymentsTransactionsWhereInput[]
    OR?: PaymentsTransactionsWhereInput[]
    NOT?: PaymentsTransactionsWhereInput | PaymentsTransactionsWhereInput[]
    productIds?: IntFilter<"PaymentsTransactions"> | number
    price?: IntFilter<"PaymentsTransactions"> | number
    paymentSystems?: StringFilter<"PaymentsTransactions"> | string
    status?: EnumPaymentStatusFilter<"PaymentsTransactions"> | $Enums.PaymentStatus
    createAt?: DateTimeFilter<"PaymentsTransactions"> | Date | string
    updateAt?: DateTimeNullableFilter<"PaymentsTransactions"> | Date | string | null
    url?: StringFilter<"PaymentsTransactions"> | string
    anyPaymentsSystemData?: StringNullableFilter<"PaymentsTransactions"> | string | null
    userId?: IntFilter<"PaymentsTransactions"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PaymentsTransactionsOrderByWithAggregationInput = {
    id?: SortOrder
    productIds?: SortOrder
    price?: SortOrder
    paymentSystems?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrderInput | SortOrder
    url?: SortOrder
    anyPaymentsSystemData?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: PaymentsTransactionsCountOrderByAggregateInput
    _avg?: PaymentsTransactionsAvgOrderByAggregateInput
    _max?: PaymentsTransactionsMaxOrderByAggregateInput
    _min?: PaymentsTransactionsMinOrderByAggregateInput
    _sum?: PaymentsTransactionsSumOrderByAggregateInput
  }

  export type PaymentsTransactionsScalarWhereWithAggregatesInput = {
    AND?: PaymentsTransactionsScalarWhereWithAggregatesInput | PaymentsTransactionsScalarWhereWithAggregatesInput[]
    OR?: PaymentsTransactionsScalarWhereWithAggregatesInput[]
    NOT?: PaymentsTransactionsScalarWhereWithAggregatesInput | PaymentsTransactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentsTransactions"> | number
    productIds?: IntWithAggregatesFilter<"PaymentsTransactions"> | number
    price?: IntWithAggregatesFilter<"PaymentsTransactions"> | number
    paymentSystems?: StringWithAggregatesFilter<"PaymentsTransactions"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"PaymentsTransactions"> | $Enums.PaymentStatus
    createAt?: DateTimeWithAggregatesFilter<"PaymentsTransactions"> | Date | string
    updateAt?: DateTimeNullableWithAggregatesFilter<"PaymentsTransactions"> | Date | string | null
    url?: StringWithAggregatesFilter<"PaymentsTransactions"> | string
    anyPaymentsSystemData?: StringNullableWithAggregatesFilter<"PaymentsTransactions"> | string | null
    userId?: IntWithAggregatesFilter<"PaymentsTransactions"> | number
  }

  export type UserCreateInput = {
    username: string
    email: string
    firstName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    city?: string | null
    aboutMe?: string | null
    passwordHash?: string | null
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedManyWithoutUserInput
    payments?: PaymentsTransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    firstName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    city?: string | null
    aboutMe?: string | null
    passwordHash?: string | null
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataUncheckedCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentsTransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateManyWithoutUserNestedInput
    payments?: PaymentsTransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUncheckedUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentsTransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    firstName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    city?: string | null
    aboutMe?: string | null
    passwordHash?: string | null
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserMetadataCreateInput = {
    emailConfirmationCode?: string | null
    emailConfirmationExpiration?: Date | string | null
    isEmailConfirmed?: boolean
    passwordRecoveryCode?: string | null
    passwordRecoveryExpiration?: Date | string | null
    user: UserCreateNestedOneWithoutUserMetadataInput
  }

  export type UserMetadataUncheckedCreateInput = {
    userId: number
    emailConfirmationCode?: string | null
    emailConfirmationExpiration?: Date | string | null
    isEmailConfirmed?: boolean
    passwordRecoveryCode?: string | null
    passwordRecoveryExpiration?: Date | string | null
  }

  export type UserMetadataUpdateInput = {
    emailConfirmationCode?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    passwordRecoveryCode?: NullableStringFieldUpdateOperationsInput | string | null
    passwordRecoveryExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutUserMetadataNestedInput
  }

  export type UserMetadataUncheckedUpdateInput = {
    userId?: IntFieldUpdateOperationsInput | number
    emailConfirmationCode?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    passwordRecoveryCode?: NullableStringFieldUpdateOperationsInput | string | null
    passwordRecoveryExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserMetadataCreateManyInput = {
    userId: number
    emailConfirmationCode?: string | null
    emailConfirmationExpiration?: Date | string | null
    isEmailConfirmed?: boolean
    passwordRecoveryCode?: string | null
    passwordRecoveryExpiration?: Date | string | null
  }

  export type UserMetadataUpdateManyMutationInput = {
    emailConfirmationCode?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    passwordRecoveryCode?: NullableStringFieldUpdateOperationsInput | string | null
    passwordRecoveryExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserMetadataUncheckedUpdateManyInput = {
    userId?: IntFieldUpdateOperationsInput | number
    emailConfirmationCode?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    passwordRecoveryCode?: NullableStringFieldUpdateOperationsInput | string | null
    passwordRecoveryExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserAvatarCreateInput = {
    avatarUrl: string
    createdAt?: Date | string
    deletionStatus?: $Enums.DeletionStatus
    user: UserCreateNestedOneWithoutUserAvatarsInput
  }

  export type UserAvatarUncheckedCreateInput = {
    id?: number
    userId: number
    avatarUrl: string
    createdAt?: Date | string
    deletionStatus?: $Enums.DeletionStatus
  }

  export type UserAvatarUpdateInput = {
    avatarUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    user?: UserUpdateOneRequiredWithoutUserAvatarsNestedInput
  }

  export type UserAvatarUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    avatarUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
  }

  export type UserAvatarCreateManyInput = {
    id?: number
    userId: number
    avatarUrl: string
    createdAt?: Date | string
    deletionStatus?: $Enums.DeletionStatus
  }

  export type UserAvatarUpdateManyMutationInput = {
    avatarUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
  }

  export type UserAvatarUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    avatarUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
  }

  export type AuthAccountCreateInput = {
    provider: string
    providerId: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuthAccountsInput
  }

  export type AuthAccountUncheckedCreateInput = {
    id?: number
    provider: string
    providerId: string
    userId: number
    createdAt?: Date | string
  }

  export type AuthAccountUpdateInput = {
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuthAccountsNestedInput
  }

  export type AuthAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthAccountCreateManyInput = {
    id?: number
    provider: string
    providerId: string
    userId: number
    createdAt?: Date | string
  }

  export type AuthAccountUpdateManyMutationInput = {
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostCreateInput = {
    description?: string | null
    imageUrl?: PostCreateimageUrlInput | string[]
    createdAt?: Date | string
    deletionStatus?: $Enums.DeletionStatus
    user: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    userId: number
    description?: string | null
    imageUrl?: PostCreateimageUrlInput | string[]
    createdAt?: Date | string
    deletionStatus?: $Enums.DeletionStatus
  }

  export type PostUpdateInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: PostUpdateimageUrlInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    user?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: PostUpdateimageUrlInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
  }

  export type PostCreateManyInput = {
    id?: number
    userId: number
    description?: string | null
    imageUrl?: PostCreateimageUrlInput | string[]
    createdAt?: Date | string
    deletionStatus?: $Enums.DeletionStatus
  }

  export type PostUpdateManyMutationInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: PostUpdateimageUrlInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: PostUpdateimageUrlInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
  }

  export type DeviceCreateInput = {
    id: string
    title: string
    ip: string
    lastActiveDate: Date | string
    expirationDate: Date | string
    deletionStatus?: $Enums.DeletionStatus
    user: UserCreateNestedOneWithoutDevicesInput
  }

  export type DeviceUncheckedCreateInput = {
    id: string
    userId: number
    title: string
    ip: string
    lastActiveDate: Date | string
    expirationDate: Date | string
    deletionStatus?: $Enums.DeletionStatus
  }

  export type DeviceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lastActiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    user?: UserUpdateOneRequiredWithoutDevicesNestedInput
  }

  export type DeviceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lastActiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
  }

  export type DeviceCreateManyInput = {
    id: string
    userId: number
    title: string
    ip: string
    lastActiveDate: Date | string
    expirationDate: Date | string
    deletionStatus?: $Enums.DeletionStatus
  }

  export type DeviceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lastActiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
  }

  export type DeviceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lastActiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
  }

  export type SubscriptionCreateInput = {
    planName: string
    expireAt: Date | string
    nextPaymentDate: Date | string
    autoRenewal?: boolean
    paymentMethod: string
    isActive: boolean
    user: UserCreateNestedOneWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: number
    userId: number
    planName: string
    expireAt: Date | string
    nextPaymentDate: Date | string
    autoRenewal?: boolean
    paymentMethod: string
    isActive: boolean
  }

  export type SubscriptionUpdateInput = {
    planName?: StringFieldUpdateOperationsInput | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextPaymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    autoRenewal?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    planName?: StringFieldUpdateOperationsInput | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextPaymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    autoRenewal?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionCreateManyInput = {
    id?: number
    userId: number
    planName: string
    expireAt: Date | string
    nextPaymentDate: Date | string
    autoRenewal?: boolean
    paymentMethod: string
    isActive: boolean
  }

  export type SubscriptionUpdateManyMutationInput = {
    planName?: StringFieldUpdateOperationsInput | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextPaymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    autoRenewal?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    planName?: StringFieldUpdateOperationsInput | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextPaymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    autoRenewal?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionPaymentsCreateInput = {
    title: string
    price: number
  }

  export type SubscriptionPaymentsUncheckedCreateInput = {
    id?: number
    title: string
    price: number
  }

  export type SubscriptionPaymentsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type SubscriptionPaymentsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type SubscriptionPaymentsCreateManyInput = {
    id?: number
    title: string
    price: number
  }

  export type SubscriptionPaymentsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type SubscriptionPaymentsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentsTransactionsCreateInput = {
    productIds: number
    price: number
    paymentSystems: string
    status?: $Enums.PaymentStatus
    createAt: Date | string
    updateAt?: Date | string | null
    url: string
    anyPaymentsSystemData?: string | null
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentsTransactionsUncheckedCreateInput = {
    id?: number
    productIds: number
    price: number
    paymentSystems: string
    status?: $Enums.PaymentStatus
    createAt: Date | string
    updateAt?: Date | string | null
    url: string
    anyPaymentsSystemData?: string | null
    userId: number
  }

  export type PaymentsTransactionsUpdateInput = {
    productIds?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    paymentSystems?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: StringFieldUpdateOperationsInput | string
    anyPaymentsSystemData?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentsTransactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productIds?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    paymentSystems?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: StringFieldUpdateOperationsInput | string
    anyPaymentsSystemData?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentsTransactionsCreateManyInput = {
    id?: number
    productIds: number
    price: number
    paymentSystems: string
    status?: $Enums.PaymentStatus
    createAt: Date | string
    updateAt?: Date | string | null
    url: string
    anyPaymentsSystemData?: string | null
    userId: number
  }

  export type PaymentsTransactionsUpdateManyMutationInput = {
    productIds?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    paymentSystems?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: StringFieldUpdateOperationsInput | string
    anyPaymentsSystemData?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentsTransactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productIds?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    paymentSystems?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: StringFieldUpdateOperationsInput | string
    anyPaymentsSystemData?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumDeletionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeletionStatus | EnumDeletionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeletionStatus[] | ListEnumDeletionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeletionStatus[] | ListEnumDeletionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeletionStatusFilter<$PrismaModel> | $Enums.DeletionStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserMetadataNullableScalarRelationFilter = {
    is?: UserMetadataWhereInput | null
    isNot?: UserMetadataWhereInput | null
  }

  export type AuthAccountListRelationFilter = {
    every?: AuthAccountWhereInput
    some?: AuthAccountWhereInput
    none?: AuthAccountWhereInput
  }

  export type DeviceListRelationFilter = {
    every?: DeviceWhereInput
    some?: DeviceWhereInput
    none?: DeviceWhereInput
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type UserAvatarListRelationFilter = {
    every?: UserAvatarWhereInput
    some?: UserAvatarWhereInput
    none?: UserAvatarWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type PaymentsTransactionsListRelationFilter = {
    every?: PaymentsTransactionsWhereInput
    some?: PaymentsTransactionsWhereInput
    none?: PaymentsTransactionsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AuthAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DeviceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserAvatarOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentsTransactionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    country?: SortOrder
    city?: SortOrder
    aboutMe?: SortOrder
    passwordHash?: SortOrder
    deletionStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    country?: SortOrder
    city?: SortOrder
    aboutMe?: SortOrder
    passwordHash?: SortOrder
    deletionStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    country?: SortOrder
    city?: SortOrder
    aboutMe?: SortOrder
    passwordHash?: SortOrder
    deletionStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumDeletionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeletionStatus | EnumDeletionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeletionStatus[] | ListEnumDeletionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeletionStatus[] | ListEnumDeletionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeletionStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeletionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeletionStatusFilter<$PrismaModel>
    _max?: NestedEnumDeletionStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserMetadataCountOrderByAggregateInput = {
    userId?: SortOrder
    emailConfirmationCode?: SortOrder
    emailConfirmationExpiration?: SortOrder
    isEmailConfirmed?: SortOrder
    passwordRecoveryCode?: SortOrder
    passwordRecoveryExpiration?: SortOrder
  }

  export type UserMetadataAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type UserMetadataMaxOrderByAggregateInput = {
    userId?: SortOrder
    emailConfirmationCode?: SortOrder
    emailConfirmationExpiration?: SortOrder
    isEmailConfirmed?: SortOrder
    passwordRecoveryCode?: SortOrder
    passwordRecoveryExpiration?: SortOrder
  }

  export type UserMetadataMinOrderByAggregateInput = {
    userId?: SortOrder
    emailConfirmationCode?: SortOrder
    emailConfirmationExpiration?: SortOrder
    isEmailConfirmed?: SortOrder
    passwordRecoveryCode?: SortOrder
    passwordRecoveryExpiration?: SortOrder
  }

  export type UserMetadataSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserAvatarCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    deletionStatus?: SortOrder
  }

  export type UserAvatarAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserAvatarMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    deletionStatus?: SortOrder
  }

  export type UserAvatarMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    deletionStatus?: SortOrder
  }

  export type UserAvatarSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AuthAccountProviderProviderIdCompoundUniqueInput = {
    provider: string
    providerId: string
  }

  export type AuthAccountCountOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AuthAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthAccountMinOrderByAggregateInput = {
    id?: SortOrder
    provider?: SortOrder
    providerId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
  }

  export type AuthAccountSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    deletionStatus?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    deletionStatus?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    deletionStatus?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type DeviceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    ip?: SortOrder
    lastActiveDate?: SortOrder
    expirationDate?: SortOrder
    deletionStatus?: SortOrder
  }

  export type DeviceAvgOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type DeviceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    ip?: SortOrder
    lastActiveDate?: SortOrder
    expirationDate?: SortOrder
    deletionStatus?: SortOrder
  }

  export type DeviceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    title?: SortOrder
    ip?: SortOrder
    lastActiveDate?: SortOrder
    expirationDate?: SortOrder
    deletionStatus?: SortOrder
  }

  export type DeviceSumOrderByAggregateInput = {
    userId?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planName?: SortOrder
    expireAt?: SortOrder
    nextPaymentDate?: SortOrder
    autoRenewal?: SortOrder
    paymentMethod?: SortOrder
    isActive?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planName?: SortOrder
    expireAt?: SortOrder
    nextPaymentDate?: SortOrder
    autoRenewal?: SortOrder
    paymentMethod?: SortOrder
    isActive?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planName?: SortOrder
    expireAt?: SortOrder
    nextPaymentDate?: SortOrder
    autoRenewal?: SortOrder
    paymentMethod?: SortOrder
    isActive?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SubscriptionPaymentsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
  }

  export type SubscriptionPaymentsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type SubscriptionPaymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
  }

  export type SubscriptionPaymentsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
  }

  export type SubscriptionPaymentsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentsTransactionsCountOrderByAggregateInput = {
    id?: SortOrder
    productIds?: SortOrder
    price?: SortOrder
    paymentSystems?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    url?: SortOrder
    anyPaymentsSystemData?: SortOrder
    userId?: SortOrder
  }

  export type PaymentsTransactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    productIds?: SortOrder
    price?: SortOrder
    userId?: SortOrder
  }

  export type PaymentsTransactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    productIds?: SortOrder
    price?: SortOrder
    paymentSystems?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    url?: SortOrder
    anyPaymentsSystemData?: SortOrder
    userId?: SortOrder
  }

  export type PaymentsTransactionsMinOrderByAggregateInput = {
    id?: SortOrder
    productIds?: SortOrder
    price?: SortOrder
    paymentSystems?: SortOrder
    status?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    url?: SortOrder
    anyPaymentsSystemData?: SortOrder
    userId?: SortOrder
  }

  export type PaymentsTransactionsSumOrderByAggregateInput = {
    id?: SortOrder
    productIds?: SortOrder
    price?: SortOrder
    userId?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type UserMetadataCreateNestedOneWithoutUserInput = {
    create?: XOR<UserMetadataCreateWithoutUserInput, UserMetadataUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserMetadataCreateOrConnectWithoutUserInput
    connect?: UserMetadataWhereUniqueInput
  }

  export type AuthAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput> | AuthAccountCreateWithoutUserInput[] | AuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthAccountCreateOrConnectWithoutUserInput | AuthAccountCreateOrConnectWithoutUserInput[]
    createMany?: AuthAccountCreateManyUserInputEnvelope
    connect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
  }

  export type DeviceCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type PostCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type UserAvatarCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAvatarCreateWithoutUserInput, UserAvatarUncheckedCreateWithoutUserInput> | UserAvatarCreateWithoutUserInput[] | UserAvatarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAvatarCreateOrConnectWithoutUserInput | UserAvatarCreateOrConnectWithoutUserInput[]
    createMany?: UserAvatarCreateManyUserInputEnvelope
    connect?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type PaymentsTransactionsCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentsTransactionsCreateWithoutUserInput, PaymentsTransactionsUncheckedCreateWithoutUserInput> | PaymentsTransactionsCreateWithoutUserInput[] | PaymentsTransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentsTransactionsCreateOrConnectWithoutUserInput | PaymentsTransactionsCreateOrConnectWithoutUserInput[]
    createMany?: PaymentsTransactionsCreateManyUserInputEnvelope
    connect?: PaymentsTransactionsWhereUniqueInput | PaymentsTransactionsWhereUniqueInput[]
  }

  export type UserMetadataUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserMetadataCreateWithoutUserInput, UserMetadataUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserMetadataCreateOrConnectWithoutUserInput
    connect?: UserMetadataWhereUniqueInput
  }

  export type AuthAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput> | AuthAccountCreateWithoutUserInput[] | AuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthAccountCreateOrConnectWithoutUserInput | AuthAccountCreateOrConnectWithoutUserInput[]
    createMany?: AuthAccountCreateManyUserInputEnvelope
    connect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
  }

  export type DeviceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type UserAvatarUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserAvatarCreateWithoutUserInput, UserAvatarUncheckedCreateWithoutUserInput> | UserAvatarCreateWithoutUserInput[] | UserAvatarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAvatarCreateOrConnectWithoutUserInput | UserAvatarCreateOrConnectWithoutUserInput[]
    createMany?: UserAvatarCreateManyUserInputEnvelope
    connect?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type PaymentsTransactionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentsTransactionsCreateWithoutUserInput, PaymentsTransactionsUncheckedCreateWithoutUserInput> | PaymentsTransactionsCreateWithoutUserInput[] | PaymentsTransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentsTransactionsCreateOrConnectWithoutUserInput | PaymentsTransactionsCreateOrConnectWithoutUserInput[]
    createMany?: PaymentsTransactionsCreateManyUserInputEnvelope
    connect?: PaymentsTransactionsWhereUniqueInput | PaymentsTransactionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumDeletionStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeletionStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserMetadataUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserMetadataCreateWithoutUserInput, UserMetadataUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserMetadataCreateOrConnectWithoutUserInput
    upsert?: UserMetadataUpsertWithoutUserInput
    disconnect?: UserMetadataWhereInput | boolean
    delete?: UserMetadataWhereInput | boolean
    connect?: UserMetadataWhereUniqueInput
    update?: XOR<XOR<UserMetadataUpdateToOneWithWhereWithoutUserInput, UserMetadataUpdateWithoutUserInput>, UserMetadataUncheckedUpdateWithoutUserInput>
  }

  export type AuthAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput> | AuthAccountCreateWithoutUserInput[] | AuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthAccountCreateOrConnectWithoutUserInput | AuthAccountCreateOrConnectWithoutUserInput[]
    upsert?: AuthAccountUpsertWithWhereUniqueWithoutUserInput | AuthAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthAccountCreateManyUserInputEnvelope
    set?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    disconnect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    delete?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    connect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    update?: AuthAccountUpdateWithWhereUniqueWithoutUserInput | AuthAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthAccountUpdateManyWithWhereWithoutUserInput | AuthAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthAccountScalarWhereInput | AuthAccountScalarWhereInput[]
  }

  export type DeviceUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutUserInput | DeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutUserInput | DeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutUserInput | DeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type PostUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserAvatarUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAvatarCreateWithoutUserInput, UserAvatarUncheckedCreateWithoutUserInput> | UserAvatarCreateWithoutUserInput[] | UserAvatarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAvatarCreateOrConnectWithoutUserInput | UserAvatarCreateOrConnectWithoutUserInput[]
    upsert?: UserAvatarUpsertWithWhereUniqueWithoutUserInput | UserAvatarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAvatarCreateManyUserInputEnvelope
    set?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    disconnect?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    delete?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    connect?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    update?: UserAvatarUpdateWithWhereUniqueWithoutUserInput | UserAvatarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAvatarUpdateManyWithWhereWithoutUserInput | UserAvatarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAvatarScalarWhereInput | UserAvatarScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type PaymentsTransactionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentsTransactionsCreateWithoutUserInput, PaymentsTransactionsUncheckedCreateWithoutUserInput> | PaymentsTransactionsCreateWithoutUserInput[] | PaymentsTransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentsTransactionsCreateOrConnectWithoutUserInput | PaymentsTransactionsCreateOrConnectWithoutUserInput[]
    upsert?: PaymentsTransactionsUpsertWithWhereUniqueWithoutUserInput | PaymentsTransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentsTransactionsCreateManyUserInputEnvelope
    set?: PaymentsTransactionsWhereUniqueInput | PaymentsTransactionsWhereUniqueInput[]
    disconnect?: PaymentsTransactionsWhereUniqueInput | PaymentsTransactionsWhereUniqueInput[]
    delete?: PaymentsTransactionsWhereUniqueInput | PaymentsTransactionsWhereUniqueInput[]
    connect?: PaymentsTransactionsWhereUniqueInput | PaymentsTransactionsWhereUniqueInput[]
    update?: PaymentsTransactionsUpdateWithWhereUniqueWithoutUserInput | PaymentsTransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentsTransactionsUpdateManyWithWhereWithoutUserInput | PaymentsTransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentsTransactionsScalarWhereInput | PaymentsTransactionsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserMetadataUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserMetadataCreateWithoutUserInput, UserMetadataUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserMetadataCreateOrConnectWithoutUserInput
    upsert?: UserMetadataUpsertWithoutUserInput
    disconnect?: UserMetadataWhereInput | boolean
    delete?: UserMetadataWhereInput | boolean
    connect?: UserMetadataWhereUniqueInput
    update?: XOR<XOR<UserMetadataUpdateToOneWithWhereWithoutUserInput, UserMetadataUpdateWithoutUserInput>, UserMetadataUncheckedUpdateWithoutUserInput>
  }

  export type AuthAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput> | AuthAccountCreateWithoutUserInput[] | AuthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuthAccountCreateOrConnectWithoutUserInput | AuthAccountCreateOrConnectWithoutUserInput[]
    upsert?: AuthAccountUpsertWithWhereUniqueWithoutUserInput | AuthAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuthAccountCreateManyUserInputEnvelope
    set?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    disconnect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    delete?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    connect?: AuthAccountWhereUniqueInput | AuthAccountWhereUniqueInput[]
    update?: AuthAccountUpdateWithWhereUniqueWithoutUserInput | AuthAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuthAccountUpdateManyWithWhereWithoutUserInput | AuthAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuthAccountScalarWhereInput | AuthAccountScalarWhereInput[]
  }

  export type DeviceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput> | DeviceCreateWithoutUserInput[] | DeviceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DeviceCreateOrConnectWithoutUserInput | DeviceCreateOrConnectWithoutUserInput[]
    upsert?: DeviceUpsertWithWhereUniqueWithoutUserInput | DeviceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DeviceCreateManyUserInputEnvelope
    set?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    disconnect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    delete?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    connect?: DeviceWhereUniqueInput | DeviceWhereUniqueInput[]
    update?: DeviceUpdateWithWhereUniqueWithoutUserInput | DeviceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DeviceUpdateManyWithWhereWithoutUserInput | DeviceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
  }

  export type PostUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput> | PostCreateWithoutUserInput[] | PostUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PostCreateOrConnectWithoutUserInput | PostCreateOrConnectWithoutUserInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutUserInput | PostUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PostCreateManyUserInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutUserInput | PostUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PostUpdateManyWithWhereWithoutUserInput | PostUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserAvatarUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserAvatarCreateWithoutUserInput, UserAvatarUncheckedCreateWithoutUserInput> | UserAvatarCreateWithoutUserInput[] | UserAvatarUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserAvatarCreateOrConnectWithoutUserInput | UserAvatarCreateOrConnectWithoutUserInput[]
    upsert?: UserAvatarUpsertWithWhereUniqueWithoutUserInput | UserAvatarUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserAvatarCreateManyUserInputEnvelope
    set?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    disconnect?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    delete?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    connect?: UserAvatarWhereUniqueInput | UserAvatarWhereUniqueInput[]
    update?: UserAvatarUpdateWithWhereUniqueWithoutUserInput | UserAvatarUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserAvatarUpdateManyWithWhereWithoutUserInput | UserAvatarUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserAvatarScalarWhereInput | UserAvatarScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type PaymentsTransactionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentsTransactionsCreateWithoutUserInput, PaymentsTransactionsUncheckedCreateWithoutUserInput> | PaymentsTransactionsCreateWithoutUserInput[] | PaymentsTransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentsTransactionsCreateOrConnectWithoutUserInput | PaymentsTransactionsCreateOrConnectWithoutUserInput[]
    upsert?: PaymentsTransactionsUpsertWithWhereUniqueWithoutUserInput | PaymentsTransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentsTransactionsCreateManyUserInputEnvelope
    set?: PaymentsTransactionsWhereUniqueInput | PaymentsTransactionsWhereUniqueInput[]
    disconnect?: PaymentsTransactionsWhereUniqueInput | PaymentsTransactionsWhereUniqueInput[]
    delete?: PaymentsTransactionsWhereUniqueInput | PaymentsTransactionsWhereUniqueInput[]
    connect?: PaymentsTransactionsWhereUniqueInput | PaymentsTransactionsWhereUniqueInput[]
    update?: PaymentsTransactionsUpdateWithWhereUniqueWithoutUserInput | PaymentsTransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentsTransactionsUpdateManyWithWhereWithoutUserInput | PaymentsTransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentsTransactionsScalarWhereInput | PaymentsTransactionsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserMetadataInput = {
    create?: XOR<UserCreateWithoutUserMetadataInput, UserUncheckedCreateWithoutUserMetadataInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserMetadataInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutUserMetadataNestedInput = {
    create?: XOR<UserCreateWithoutUserMetadataInput, UserUncheckedCreateWithoutUserMetadataInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserMetadataInput
    upsert?: UserUpsertWithoutUserMetadataInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserMetadataInput, UserUpdateWithoutUserMetadataInput>, UserUncheckedUpdateWithoutUserMetadataInput>
  }

  export type UserCreateNestedOneWithoutUserAvatarsInput = {
    create?: XOR<UserCreateWithoutUserAvatarsInput, UserUncheckedCreateWithoutUserAvatarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAvatarsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserAvatarsNestedInput = {
    create?: XOR<UserCreateWithoutUserAvatarsInput, UserUncheckedCreateWithoutUserAvatarsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserAvatarsInput
    upsert?: UserUpsertWithoutUserAvatarsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserAvatarsInput, UserUpdateWithoutUserAvatarsInput>, UserUncheckedUpdateWithoutUserAvatarsInput>
  }

  export type UserCreateNestedOneWithoutAuthAccountsInput = {
    create?: XOR<UserCreateWithoutAuthAccountsInput, UserUncheckedCreateWithoutAuthAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuthAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAuthAccountsInput, UserUncheckedCreateWithoutAuthAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuthAccountsInput
    upsert?: UserUpsertWithoutAuthAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuthAccountsInput, UserUpdateWithoutAuthAccountsInput>, UserUncheckedUpdateWithoutAuthAccountsInput>
  }

  export type PostCreateimageUrlInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type PostUpdateimageUrlInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserCreateNestedOneWithoutDevicesInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDevicesNestedInput = {
    create?: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDevicesInput
    upsert?: UserUpsertWithoutDevicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDevicesInput, UserUpdateWithoutDevicesInput>, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumDeletionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeletionStatus | EnumDeletionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeletionStatus[] | ListEnumDeletionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeletionStatus[] | ListEnumDeletionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeletionStatusFilter<$PrismaModel> | $Enums.DeletionStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumDeletionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeletionStatus | EnumDeletionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeletionStatus[] | ListEnumDeletionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeletionStatus[] | ListEnumDeletionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeletionStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeletionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeletionStatusFilter<$PrismaModel>
    _max?: NestedEnumDeletionStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type UserMetadataCreateWithoutUserInput = {
    emailConfirmationCode?: string | null
    emailConfirmationExpiration?: Date | string | null
    isEmailConfirmed?: boolean
    passwordRecoveryCode?: string | null
    passwordRecoveryExpiration?: Date | string | null
  }

  export type UserMetadataUncheckedCreateWithoutUserInput = {
    emailConfirmationCode?: string | null
    emailConfirmationExpiration?: Date | string | null
    isEmailConfirmed?: boolean
    passwordRecoveryCode?: string | null
    passwordRecoveryExpiration?: Date | string | null
  }

  export type UserMetadataCreateOrConnectWithoutUserInput = {
    where: UserMetadataWhereUniqueInput
    create: XOR<UserMetadataCreateWithoutUserInput, UserMetadataUncheckedCreateWithoutUserInput>
  }

  export type AuthAccountCreateWithoutUserInput = {
    provider: string
    providerId: string
    createdAt?: Date | string
  }

  export type AuthAccountUncheckedCreateWithoutUserInput = {
    id?: number
    provider: string
    providerId: string
    createdAt?: Date | string
  }

  export type AuthAccountCreateOrConnectWithoutUserInput = {
    where: AuthAccountWhereUniqueInput
    create: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput>
  }

  export type AuthAccountCreateManyUserInputEnvelope = {
    data: AuthAccountCreateManyUserInput | AuthAccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DeviceCreateWithoutUserInput = {
    id: string
    title: string
    ip: string
    lastActiveDate: Date | string
    expirationDate: Date | string
    deletionStatus?: $Enums.DeletionStatus
  }

  export type DeviceUncheckedCreateWithoutUserInput = {
    id: string
    title: string
    ip: string
    lastActiveDate: Date | string
    expirationDate: Date | string
    deletionStatus?: $Enums.DeletionStatus
  }

  export type DeviceCreateOrConnectWithoutUserInput = {
    where: DeviceWhereUniqueInput
    create: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput>
  }

  export type DeviceCreateManyUserInputEnvelope = {
    data: DeviceCreateManyUserInput | DeviceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PostCreateWithoutUserInput = {
    description?: string | null
    imageUrl?: PostCreateimageUrlInput | string[]
    createdAt?: Date | string
    deletionStatus?: $Enums.DeletionStatus
  }

  export type PostUncheckedCreateWithoutUserInput = {
    id?: number
    description?: string | null
    imageUrl?: PostCreateimageUrlInput | string[]
    createdAt?: Date | string
    deletionStatus?: $Enums.DeletionStatus
  }

  export type PostCreateOrConnectWithoutUserInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostCreateManyUserInputEnvelope = {
    data: PostCreateManyUserInput | PostCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserAvatarCreateWithoutUserInput = {
    avatarUrl: string
    createdAt?: Date | string
    deletionStatus?: $Enums.DeletionStatus
  }

  export type UserAvatarUncheckedCreateWithoutUserInput = {
    id?: number
    avatarUrl: string
    createdAt?: Date | string
    deletionStatus?: $Enums.DeletionStatus
  }

  export type UserAvatarCreateOrConnectWithoutUserInput = {
    where: UserAvatarWhereUniqueInput
    create: XOR<UserAvatarCreateWithoutUserInput, UserAvatarUncheckedCreateWithoutUserInput>
  }

  export type UserAvatarCreateManyUserInputEnvelope = {
    data: UserAvatarCreateManyUserInput | UserAvatarCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionCreateWithoutUserInput = {
    planName: string
    expireAt: Date | string
    nextPaymentDate: Date | string
    autoRenewal?: boolean
    paymentMethod: string
    isActive: boolean
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: number
    planName: string
    expireAt: Date | string
    nextPaymentDate: Date | string
    autoRenewal?: boolean
    paymentMethod: string
    isActive: boolean
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateManyUserInputEnvelope = {
    data: SubscriptionCreateManyUserInput | SubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PaymentsTransactionsCreateWithoutUserInput = {
    productIds: number
    price: number
    paymentSystems: string
    status?: $Enums.PaymentStatus
    createAt: Date | string
    updateAt?: Date | string | null
    url: string
    anyPaymentsSystemData?: string | null
  }

  export type PaymentsTransactionsUncheckedCreateWithoutUserInput = {
    id?: number
    productIds: number
    price: number
    paymentSystems: string
    status?: $Enums.PaymentStatus
    createAt: Date | string
    updateAt?: Date | string | null
    url: string
    anyPaymentsSystemData?: string | null
  }

  export type PaymentsTransactionsCreateOrConnectWithoutUserInput = {
    where: PaymentsTransactionsWhereUniqueInput
    create: XOR<PaymentsTransactionsCreateWithoutUserInput, PaymentsTransactionsUncheckedCreateWithoutUserInput>
  }

  export type PaymentsTransactionsCreateManyUserInputEnvelope = {
    data: PaymentsTransactionsCreateManyUserInput | PaymentsTransactionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserMetadataUpsertWithoutUserInput = {
    update: XOR<UserMetadataUpdateWithoutUserInput, UserMetadataUncheckedUpdateWithoutUserInput>
    create: XOR<UserMetadataCreateWithoutUserInput, UserMetadataUncheckedCreateWithoutUserInput>
    where?: UserMetadataWhereInput
  }

  export type UserMetadataUpdateToOneWithWhereWithoutUserInput = {
    where?: UserMetadataWhereInput
    data: XOR<UserMetadataUpdateWithoutUserInput, UserMetadataUncheckedUpdateWithoutUserInput>
  }

  export type UserMetadataUpdateWithoutUserInput = {
    emailConfirmationCode?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    passwordRecoveryCode?: NullableStringFieldUpdateOperationsInput | string | null
    passwordRecoveryExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserMetadataUncheckedUpdateWithoutUserInput = {
    emailConfirmationCode?: NullableStringFieldUpdateOperationsInput | string | null
    emailConfirmationExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isEmailConfirmed?: BoolFieldUpdateOperationsInput | boolean
    passwordRecoveryCode?: NullableStringFieldUpdateOperationsInput | string | null
    passwordRecoveryExpiration?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AuthAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AuthAccountWhereUniqueInput
    update: XOR<AuthAccountUpdateWithoutUserInput, AuthAccountUncheckedUpdateWithoutUserInput>
    create: XOR<AuthAccountCreateWithoutUserInput, AuthAccountUncheckedCreateWithoutUserInput>
  }

  export type AuthAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AuthAccountWhereUniqueInput
    data: XOR<AuthAccountUpdateWithoutUserInput, AuthAccountUncheckedUpdateWithoutUserInput>
  }

  export type AuthAccountUpdateManyWithWhereWithoutUserInput = {
    where: AuthAccountScalarWhereInput
    data: XOR<AuthAccountUpdateManyMutationInput, AuthAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AuthAccountScalarWhereInput = {
    AND?: AuthAccountScalarWhereInput | AuthAccountScalarWhereInput[]
    OR?: AuthAccountScalarWhereInput[]
    NOT?: AuthAccountScalarWhereInput | AuthAccountScalarWhereInput[]
    id?: IntFilter<"AuthAccount"> | number
    provider?: StringFilter<"AuthAccount"> | string
    providerId?: StringFilter<"AuthAccount"> | string
    userId?: IntFilter<"AuthAccount"> | number
    createdAt?: DateTimeFilter<"AuthAccount"> | Date | string
  }

  export type DeviceUpsertWithWhereUniqueWithoutUserInput = {
    where: DeviceWhereUniqueInput
    update: XOR<DeviceUpdateWithoutUserInput, DeviceUncheckedUpdateWithoutUserInput>
    create: XOR<DeviceCreateWithoutUserInput, DeviceUncheckedCreateWithoutUserInput>
  }

  export type DeviceUpdateWithWhereUniqueWithoutUserInput = {
    where: DeviceWhereUniqueInput
    data: XOR<DeviceUpdateWithoutUserInput, DeviceUncheckedUpdateWithoutUserInput>
  }

  export type DeviceUpdateManyWithWhereWithoutUserInput = {
    where: DeviceScalarWhereInput
    data: XOR<DeviceUpdateManyMutationInput, DeviceUncheckedUpdateManyWithoutUserInput>
  }

  export type DeviceScalarWhereInput = {
    AND?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    OR?: DeviceScalarWhereInput[]
    NOT?: DeviceScalarWhereInput | DeviceScalarWhereInput[]
    id?: UuidFilter<"Device"> | string
    userId?: IntFilter<"Device"> | number
    title?: StringFilter<"Device"> | string
    ip?: StringFilter<"Device"> | string
    lastActiveDate?: DateTimeFilter<"Device"> | Date | string
    expirationDate?: DateTimeFilter<"Device"> | Date | string
    deletionStatus?: EnumDeletionStatusFilter<"Device"> | $Enums.DeletionStatus
  }

  export type PostUpsertWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
    create: XOR<PostCreateWithoutUserInput, PostUncheckedCreateWithoutUserInput>
  }

  export type PostUpdateWithWhereUniqueWithoutUserInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutUserInput, PostUncheckedUpdateWithoutUserInput>
  }

  export type PostUpdateManyWithWhereWithoutUserInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutUserInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    userId?: IntFilter<"Post"> | number
    description?: StringNullableFilter<"Post"> | string | null
    imageUrl?: StringNullableListFilter<"Post">
    createdAt?: DateTimeFilter<"Post"> | Date | string
    deletionStatus?: EnumDeletionStatusFilter<"Post"> | $Enums.DeletionStatus
  }

  export type UserAvatarUpsertWithWhereUniqueWithoutUserInput = {
    where: UserAvatarWhereUniqueInput
    update: XOR<UserAvatarUpdateWithoutUserInput, UserAvatarUncheckedUpdateWithoutUserInput>
    create: XOR<UserAvatarCreateWithoutUserInput, UserAvatarUncheckedCreateWithoutUserInput>
  }

  export type UserAvatarUpdateWithWhereUniqueWithoutUserInput = {
    where: UserAvatarWhereUniqueInput
    data: XOR<UserAvatarUpdateWithoutUserInput, UserAvatarUncheckedUpdateWithoutUserInput>
  }

  export type UserAvatarUpdateManyWithWhereWithoutUserInput = {
    where: UserAvatarScalarWhereInput
    data: XOR<UserAvatarUpdateManyMutationInput, UserAvatarUncheckedUpdateManyWithoutUserInput>
  }

  export type UserAvatarScalarWhereInput = {
    AND?: UserAvatarScalarWhereInput | UserAvatarScalarWhereInput[]
    OR?: UserAvatarScalarWhereInput[]
    NOT?: UserAvatarScalarWhereInput | UserAvatarScalarWhereInput[]
    id?: IntFilter<"UserAvatar"> | number
    userId?: IntFilter<"UserAvatar"> | number
    avatarUrl?: StringFilter<"UserAvatar"> | string
    createdAt?: DateTimeFilter<"UserAvatar"> | Date | string
    deletionStatus?: EnumDeletionStatusFilter<"UserAvatar"> | $Enums.DeletionStatus
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: IntFilter<"Subscription"> | number
    userId?: IntFilter<"Subscription"> | number
    planName?: StringFilter<"Subscription"> | string
    expireAt?: DateTimeFilter<"Subscription"> | Date | string
    nextPaymentDate?: DateTimeFilter<"Subscription"> | Date | string
    autoRenewal?: BoolFilter<"Subscription"> | boolean
    paymentMethod?: StringFilter<"Subscription"> | string
    isActive?: BoolFilter<"Subscription"> | boolean
  }

  export type PaymentsTransactionsUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentsTransactionsWhereUniqueInput
    update: XOR<PaymentsTransactionsUpdateWithoutUserInput, PaymentsTransactionsUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentsTransactionsCreateWithoutUserInput, PaymentsTransactionsUncheckedCreateWithoutUserInput>
  }

  export type PaymentsTransactionsUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentsTransactionsWhereUniqueInput
    data: XOR<PaymentsTransactionsUpdateWithoutUserInput, PaymentsTransactionsUncheckedUpdateWithoutUserInput>
  }

  export type PaymentsTransactionsUpdateManyWithWhereWithoutUserInput = {
    where: PaymentsTransactionsScalarWhereInput
    data: XOR<PaymentsTransactionsUpdateManyMutationInput, PaymentsTransactionsUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentsTransactionsScalarWhereInput = {
    AND?: PaymentsTransactionsScalarWhereInput | PaymentsTransactionsScalarWhereInput[]
    OR?: PaymentsTransactionsScalarWhereInput[]
    NOT?: PaymentsTransactionsScalarWhereInput | PaymentsTransactionsScalarWhereInput[]
    id?: IntFilter<"PaymentsTransactions"> | number
    productIds?: IntFilter<"PaymentsTransactions"> | number
    price?: IntFilter<"PaymentsTransactions"> | number
    paymentSystems?: StringFilter<"PaymentsTransactions"> | string
    status?: EnumPaymentStatusFilter<"PaymentsTransactions"> | $Enums.PaymentStatus
    createAt?: DateTimeFilter<"PaymentsTransactions"> | Date | string
    updateAt?: DateTimeNullableFilter<"PaymentsTransactions"> | Date | string | null
    url?: StringFilter<"PaymentsTransactions"> | string
    anyPaymentsSystemData?: StringNullableFilter<"PaymentsTransactions"> | string | null
    userId?: IntFilter<"PaymentsTransactions"> | number
  }

  export type UserCreateWithoutUserMetadataInput = {
    username: string
    email: string
    firstName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    city?: string | null
    aboutMe?: string | null
    passwordHash?: string | null
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    authAccounts?: AuthAccountCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedManyWithoutUserInput
    payments?: PaymentsTransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserMetadataInput = {
    id?: number
    username: string
    email: string
    firstName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    city?: string | null
    aboutMe?: string | null
    passwordHash?: string | null
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    authAccounts?: AuthAccountUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentsTransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserMetadataInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserMetadataInput, UserUncheckedCreateWithoutUserMetadataInput>
  }

  export type UserUpsertWithoutUserMetadataInput = {
    update: XOR<UserUpdateWithoutUserMetadataInput, UserUncheckedUpdateWithoutUserMetadataInput>
    create: XOR<UserCreateWithoutUserMetadataInput, UserUncheckedCreateWithoutUserMetadataInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserMetadataInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserMetadataInput, UserUncheckedUpdateWithoutUserMetadataInput>
  }

  export type UserUpdateWithoutUserMetadataInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: AuthAccountUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateManyWithoutUserNestedInput
    payments?: PaymentsTransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserMetadataInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: AuthAccountUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentsTransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserAvatarsInput = {
    username: string
    email: string
    firstName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    city?: string | null
    aboutMe?: string | null
    passwordHash?: string | null
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedManyWithoutUserInput
    payments?: PaymentsTransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserAvatarsInput = {
    id?: number
    username: string
    email: string
    firstName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    city?: string | null
    aboutMe?: string | null
    passwordHash?: string | null
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataUncheckedCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentsTransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserAvatarsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserAvatarsInput, UserUncheckedCreateWithoutUserAvatarsInput>
  }

  export type UserUpsertWithoutUserAvatarsInput = {
    update: XOR<UserUpdateWithoutUserAvatarsInput, UserUncheckedUpdateWithoutUserAvatarsInput>
    create: XOR<UserCreateWithoutUserAvatarsInput, UserUncheckedCreateWithoutUserAvatarsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserAvatarsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserAvatarsInput, UserUncheckedUpdateWithoutUserAvatarsInput>
  }

  export type UserUpdateWithoutUserAvatarsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateManyWithoutUserNestedInput
    payments?: PaymentsTransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserAvatarsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUncheckedUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentsTransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAuthAccountsInput = {
    username: string
    email: string
    firstName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    city?: string | null
    aboutMe?: string | null
    passwordHash?: string | null
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataCreateNestedOneWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedManyWithoutUserInput
    payments?: PaymentsTransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuthAccountsInput = {
    id?: number
    username: string
    email: string
    firstName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    city?: string | null
    aboutMe?: string | null
    passwordHash?: string | null
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataUncheckedCreateNestedOneWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentsTransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuthAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuthAccountsInput, UserUncheckedCreateWithoutAuthAccountsInput>
  }

  export type UserUpsertWithoutAuthAccountsInput = {
    update: XOR<UserUpdateWithoutAuthAccountsInput, UserUncheckedUpdateWithoutAuthAccountsInput>
    create: XOR<UserCreateWithoutAuthAccountsInput, UserUncheckedCreateWithoutAuthAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuthAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuthAccountsInput, UserUncheckedUpdateWithoutAuthAccountsInput>
  }

  export type UserUpdateWithoutAuthAccountsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUpdateOneWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateManyWithoutUserNestedInput
    payments?: PaymentsTransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuthAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUncheckedUpdateOneWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentsTransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPostsInput = {
    username: string
    email: string
    firstName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    city?: string | null
    aboutMe?: string | null
    passwordHash?: string | null
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedManyWithoutUserInput
    payments?: PaymentsTransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    username: string
    email: string
    firstName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    city?: string | null
    aboutMe?: string | null
    passwordHash?: string | null
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataUncheckedCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentsTransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateManyWithoutUserNestedInput
    payments?: PaymentsTransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUncheckedUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentsTransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDevicesInput = {
    username: string
    email: string
    firstName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    city?: string | null
    aboutMe?: string | null
    passwordHash?: string | null
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedManyWithoutUserInput
    payments?: PaymentsTransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDevicesInput = {
    id?: number
    username: string
    email: string
    firstName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    city?: string | null
    aboutMe?: string | null
    passwordHash?: string | null
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataUncheckedCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentsTransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDevicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
  }

  export type UserUpsertWithoutDevicesInput = {
    update: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
    create: XOR<UserCreateWithoutDevicesInput, UserUncheckedCreateWithoutDevicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDevicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDevicesInput, UserUncheckedUpdateWithoutDevicesInput>
  }

  export type UserUpdateWithoutDevicesInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateManyWithoutUserNestedInput
    payments?: PaymentsTransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDevicesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUncheckedUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentsTransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSubscriptionInput = {
    username: string
    email: string
    firstName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    city?: string | null
    aboutMe?: string | null
    passwordHash?: string | null
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarCreateNestedManyWithoutUserInput
    payments?: PaymentsTransactionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionInput = {
    id?: number
    username: string
    email: string
    firstName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    city?: string | null
    aboutMe?: string | null
    passwordHash?: string | null
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataUncheckedCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarUncheckedCreateNestedManyWithoutUserInput
    payments?: PaymentsTransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type UserUpsertWithoutSubscriptionInput = {
    update: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionInput, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type UserUpdateWithoutSubscriptionInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUpdateManyWithoutUserNestedInput
    payments?: PaymentsTransactionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUncheckedUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUncheckedUpdateManyWithoutUserNestedInput
    payments?: PaymentsTransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPaymentsInput = {
    username: string
    email: string
    firstName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    city?: string | null
    aboutMe?: string | null
    passwordHash?: string | null
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarCreateNestedManyWithoutUserInput
    subscription?: SubscriptionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: number
    username: string
    email: string
    firstName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    country?: string | null
    city?: string | null
    aboutMe?: string | null
    passwordHash?: string | null
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataUncheckedCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarUncheckedCreateNestedManyWithoutUserInput
    subscription?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    aboutMe?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUncheckedUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUncheckedUpdateManyWithoutUserNestedInput
    subscription?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AuthAccountCreateManyUserInput = {
    id?: number
    provider: string
    providerId: string
    createdAt?: Date | string
  }

  export type DeviceCreateManyUserInput = {
    id: string
    title: string
    ip: string
    lastActiveDate: Date | string
    expirationDate: Date | string
    deletionStatus?: $Enums.DeletionStatus
  }

  export type PostCreateManyUserInput = {
    id?: number
    description?: string | null
    imageUrl?: PostCreateimageUrlInput | string[]
    createdAt?: Date | string
    deletionStatus?: $Enums.DeletionStatus
  }

  export type UserAvatarCreateManyUserInput = {
    id?: number
    avatarUrl: string
    createdAt?: Date | string
    deletionStatus?: $Enums.DeletionStatus
  }

  export type SubscriptionCreateManyUserInput = {
    id?: number
    planName: string
    expireAt: Date | string
    nextPaymentDate: Date | string
    autoRenewal?: boolean
    paymentMethod: string
    isActive: boolean
  }

  export type PaymentsTransactionsCreateManyUserInput = {
    id?: number
    productIds: number
    price: number
    paymentSystems: string
    status?: $Enums.PaymentStatus
    createAt: Date | string
    updateAt?: Date | string | null
    url: string
    anyPaymentsSystemData?: string | null
  }

  export type AuthAccountUpdateWithoutUserInput = {
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthAccountUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuthAccountUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    provider?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeviceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lastActiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
  }

  export type DeviceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lastActiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
  }

  export type DeviceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    ip?: StringFieldUpdateOperationsInput | string
    lastActiveDate?: DateTimeFieldUpdateOperationsInput | Date | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
  }

  export type PostUpdateWithoutUserInput = {
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: PostUpdateimageUrlInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
  }

  export type PostUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: PostUpdateimageUrlInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
  }

  export type PostUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: PostUpdateimageUrlInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
  }

  export type UserAvatarUpdateWithoutUserInput = {
    avatarUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
  }

  export type UserAvatarUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatarUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
  }

  export type UserAvatarUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    avatarUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
  }

  export type SubscriptionUpdateWithoutUserInput = {
    planName?: StringFieldUpdateOperationsInput | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextPaymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    autoRenewal?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    planName?: StringFieldUpdateOperationsInput | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextPaymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    autoRenewal?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    planName?: StringFieldUpdateOperationsInput | string
    expireAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nextPaymentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    autoRenewal?: BoolFieldUpdateOperationsInput | boolean
    paymentMethod?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PaymentsTransactionsUpdateWithoutUserInput = {
    productIds?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    paymentSystems?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: StringFieldUpdateOperationsInput | string
    anyPaymentsSystemData?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentsTransactionsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productIds?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    paymentSystems?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: StringFieldUpdateOperationsInput | string
    anyPaymentsSystemData?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentsTransactionsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    productIds?: IntFieldUpdateOperationsInput | number
    price?: IntFieldUpdateOperationsInput | number
    paymentSystems?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    url?: StringFieldUpdateOperationsInput | string
    anyPaymentsSystemData?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}