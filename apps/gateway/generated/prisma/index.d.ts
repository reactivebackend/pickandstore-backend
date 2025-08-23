
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
 * Model AvailableSubscription
 * 
 */
export type AvailableSubscription = $Result.DefaultSelection<Prisma.$AvailableSubscriptionPayload>
/**
 * Model SubscriptionTransactions
 * 
 */
export type SubscriptionTransactions = $Result.DefaultSelection<Prisma.$SubscriptionTransactionsPayload>
/**
 * Model UserSubscription
 * 
 */
export type UserSubscription = $Result.DefaultSelection<Prisma.$UserSubscriptionPayload>

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
  Confirmed: 'Confirmed',
  Pending: 'Pending'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const SubscriptionPeriod: {
  DAY: 'DAY',
  WEEK: 'WEEK',
  MONTH: 'MONTH'
};

export type SubscriptionPeriod = (typeof SubscriptionPeriod)[keyof typeof SubscriptionPeriod]


export const PaymentSystem: {
  STRIPE: 'STRIPE',
  PAYPAL: 'PAYPAL',
  CREDIT_CARD: 'CREDIT_CARD'
};

export type PaymentSystem = (typeof PaymentSystem)[keyof typeof PaymentSystem]

}

export type DeletionStatus = $Enums.DeletionStatus

export const DeletionStatus: typeof $Enums.DeletionStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type SubscriptionPeriod = $Enums.SubscriptionPeriod

export const SubscriptionPeriod: typeof $Enums.SubscriptionPeriod

export type PaymentSystem = $Enums.PaymentSystem

export const PaymentSystem: typeof $Enums.PaymentSystem

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
   * `prisma.availableSubscription`: Exposes CRUD operations for the **AvailableSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AvailableSubscriptions
    * const availableSubscriptions = await prisma.availableSubscription.findMany()
    * ```
    */
  get availableSubscription(): Prisma.AvailableSubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionTransactions`: Exposes CRUD operations for the **SubscriptionTransactions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionTransactions
    * const subscriptionTransactions = await prisma.subscriptionTransactions.findMany()
    * ```
    */
  get subscriptionTransactions(): Prisma.SubscriptionTransactionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userSubscription`: Exposes CRUD operations for the **UserSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSubscriptions
    * const userSubscriptions = await prisma.userSubscription.findMany()
    * ```
    */
  get userSubscription(): Prisma.UserSubscriptionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
    AvailableSubscription: 'AvailableSubscription',
    SubscriptionTransactions: 'SubscriptionTransactions',
    UserSubscription: 'UserSubscription'
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
      modelProps: "user" | "userMetadata" | "userAvatar" | "authAccount" | "post" | "device" | "availableSubscription" | "subscriptionTransactions" | "userSubscription"
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
      AvailableSubscription: {
        payload: Prisma.$AvailableSubscriptionPayload<ExtArgs>
        fields: Prisma.AvailableSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailableSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailableSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.AvailableSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailableSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableSubscriptionPayload>
          }
          findMany: {
            args: Prisma.AvailableSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableSubscriptionPayload>[]
          }
          create: {
            args: Prisma.AvailableSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableSubscriptionPayload>
          }
          createMany: {
            args: Prisma.AvailableSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AvailableSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.AvailableSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableSubscriptionPayload>
          }
          update: {
            args: Prisma.AvailableSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.AvailableSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AvailableSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AvailableSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.AvailableSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AvailableSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.AvailableSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAvailableSubscription>
          }
          groupBy: {
            args: Prisma.AvailableSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<AvailableSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailableSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<AvailableSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionTransactions: {
        payload: Prisma.$SubscriptionTransactionsPayload<ExtArgs>
        fields: Prisma.SubscriptionTransactionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionTransactionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionTransactionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionTransactionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionTransactionsPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionTransactionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionTransactionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionTransactionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionTransactionsPayload>
          }
          findMany: {
            args: Prisma.SubscriptionTransactionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionTransactionsPayload>[]
          }
          create: {
            args: Prisma.SubscriptionTransactionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionTransactionsPayload>
          }
          createMany: {
            args: Prisma.SubscriptionTransactionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionTransactionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionTransactionsPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionTransactionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionTransactionsPayload>
          }
          update: {
            args: Prisma.SubscriptionTransactionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionTransactionsPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionTransactionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionTransactionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionTransactionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionTransactionsPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionTransactionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionTransactionsPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionTransactionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionTransactions>
          }
          groupBy: {
            args: Prisma.SubscriptionTransactionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionTransactionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionTransactionsCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionTransactionsCountAggregateOutputType> | number
          }
        }
      }
      UserSubscription: {
        payload: Prisma.$UserSubscriptionPayload<ExtArgs>
        fields: Prisma.UserSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.UserSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          findMany: {
            args: Prisma.UserSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          create: {
            args: Prisma.UserSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          createMany: {
            args: Prisma.UserSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.UserSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          update: {
            args: Prisma.UserSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.UserSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.UserSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.UserSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSubscription>
          }
          groupBy: {
            args: Prisma.UserSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<UserSubscriptionCountAggregateOutputType> | number
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
    availableSubscription?: AvailableSubscriptionOmit
    subscriptionTransactions?: SubscriptionTransactionsOmit
    userSubscription?: UserSubscriptionOmit
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
    where?: UserSubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionTransactionsWhereInput
  }


  /**
   * Count Type AvailableSubscriptionCountOutputType
   */

  export type AvailableSubscriptionCountOutputType = {
    subscriptionTransactions: number
    userSubscriptions: number
  }

  export type AvailableSubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptionTransactions?: boolean | AvailableSubscriptionCountOutputTypeCountSubscriptionTransactionsArgs
    userSubscriptions?: boolean | AvailableSubscriptionCountOutputTypeCountUserSubscriptionsArgs
  }

  // Custom InputTypes
  /**
   * AvailableSubscriptionCountOutputType without action
   */
  export type AvailableSubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableSubscriptionCountOutputType
     */
    select?: AvailableSubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AvailableSubscriptionCountOutputType without action
   */
  export type AvailableSubscriptionCountOutputTypeCountSubscriptionTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionTransactionsWhereInput
  }

  /**
   * AvailableSubscriptionCountOutputType without action
   */
  export type AvailableSubscriptionCountOutputTypeCountUserSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscriptionWhereInput
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
    hasActiveSubscription: boolean | null
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
    hasActiveSubscription: boolean | null
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
    hasActiveSubscription: number
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
    hasActiveSubscription?: true
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
    hasActiveSubscription?: true
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
    hasActiveSubscription?: true
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
    hasActiveSubscription: boolean
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
    hasActiveSubscription?: boolean
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
    hasActiveSubscription?: boolean
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
    hasActiveSubscription?: boolean
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
    hasActiveSubscription?: boolean
    deletionStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "firstName" | "lastName" | "dateOfBirth" | "country" | "city" | "aboutMe" | "passwordHash" | "hasActiveSubscription" | "deletionStatus" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
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
      subscription: Prisma.$UserSubscriptionPayload<ExtArgs>[]
      payments: Prisma.$SubscriptionTransactionsPayload<ExtArgs>[]
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
      hasActiveSubscription: boolean
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
    subscription<T extends User$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionTransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly hasActiveSubscription: FieldRef<"User", 'Boolean'>
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
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    where?: UserSubscriptionWhereInput
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    cursor?: UserSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionTransactions
     */
    select?: SubscriptionTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionTransactions
     */
    omit?: SubscriptionTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionTransactionsInclude<ExtArgs> | null
    where?: SubscriptionTransactionsWhereInput
    orderBy?: SubscriptionTransactionsOrderByWithRelationInput | SubscriptionTransactionsOrderByWithRelationInput[]
    cursor?: SubscriptionTransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionTransactionsScalarFieldEnum | SubscriptionTransactionsScalarFieldEnum[]
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
   * Model AvailableSubscription
   */

  export type AggregateAvailableSubscription = {
    _count: AvailableSubscriptionCountAggregateOutputType | null
    _avg: AvailableSubscriptionAvgAggregateOutputType | null
    _sum: AvailableSubscriptionSumAggregateOutputType | null
    _min: AvailableSubscriptionMinAggregateOutputType | null
    _max: AvailableSubscriptionMaxAggregateOutputType | null
  }

  export type AvailableSubscriptionAvgAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type AvailableSubscriptionSumAggregateOutputType = {
    id: number | null
    price: number | null
  }

  export type AvailableSubscriptionMinAggregateOutputType = {
    id: number | null
    title: string | null
    price: number | null
    period: $Enums.SubscriptionPeriod | null
  }

  export type AvailableSubscriptionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    price: number | null
    period: $Enums.SubscriptionPeriod | null
  }

  export type AvailableSubscriptionCountAggregateOutputType = {
    id: number
    title: number
    price: number
    period: number
    _all: number
  }


  export type AvailableSubscriptionAvgAggregateInputType = {
    id?: true
    price?: true
  }

  export type AvailableSubscriptionSumAggregateInputType = {
    id?: true
    price?: true
  }

  export type AvailableSubscriptionMinAggregateInputType = {
    id?: true
    title?: true
    price?: true
    period?: true
  }

  export type AvailableSubscriptionMaxAggregateInputType = {
    id?: true
    title?: true
    price?: true
    period?: true
  }

  export type AvailableSubscriptionCountAggregateInputType = {
    id?: true
    title?: true
    price?: true
    period?: true
    _all?: true
  }

  export type AvailableSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableSubscription to aggregate.
     */
    where?: AvailableSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableSubscriptions to fetch.
     */
    orderBy?: AvailableSubscriptionOrderByWithRelationInput | AvailableSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailableSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AvailableSubscriptions
    **/
    _count?: true | AvailableSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AvailableSubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AvailableSubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailableSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailableSubscriptionMaxAggregateInputType
  }

  export type GetAvailableSubscriptionAggregateType<T extends AvailableSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailableSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailableSubscription[P]>
      : GetScalarType<T[P], AggregateAvailableSubscription[P]>
  }




  export type AvailableSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailableSubscriptionWhereInput
    orderBy?: AvailableSubscriptionOrderByWithAggregationInput | AvailableSubscriptionOrderByWithAggregationInput[]
    by: AvailableSubscriptionScalarFieldEnum[] | AvailableSubscriptionScalarFieldEnum
    having?: AvailableSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailableSubscriptionCountAggregateInputType | true
    _avg?: AvailableSubscriptionAvgAggregateInputType
    _sum?: AvailableSubscriptionSumAggregateInputType
    _min?: AvailableSubscriptionMinAggregateInputType
    _max?: AvailableSubscriptionMaxAggregateInputType
  }

  export type AvailableSubscriptionGroupByOutputType = {
    id: number
    title: string
    price: number
    period: $Enums.SubscriptionPeriod
    _count: AvailableSubscriptionCountAggregateOutputType | null
    _avg: AvailableSubscriptionAvgAggregateOutputType | null
    _sum: AvailableSubscriptionSumAggregateOutputType | null
    _min: AvailableSubscriptionMinAggregateOutputType | null
    _max: AvailableSubscriptionMaxAggregateOutputType | null
  }

  type GetAvailableSubscriptionGroupByPayload<T extends AvailableSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailableSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailableSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailableSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], AvailableSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type AvailableSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    period?: boolean
    subscriptionTransactions?: boolean | AvailableSubscription$subscriptionTransactionsArgs<ExtArgs>
    userSubscriptions?: boolean | AvailableSubscription$userSubscriptionsArgs<ExtArgs>
    _count?: boolean | AvailableSubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availableSubscription"]>

  export type AvailableSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    period?: boolean
  }, ExtArgs["result"]["availableSubscription"]>

  export type AvailableSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    price?: boolean
    period?: boolean
  }, ExtArgs["result"]["availableSubscription"]>

  export type AvailableSubscriptionSelectScalar = {
    id?: boolean
    title?: boolean
    price?: boolean
    period?: boolean
  }

  export type AvailableSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "price" | "period", ExtArgs["result"]["availableSubscription"]>
  export type AvailableSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    subscriptionTransactions?: boolean | AvailableSubscription$subscriptionTransactionsArgs<ExtArgs>
    userSubscriptions?: boolean | AvailableSubscription$userSubscriptionsArgs<ExtArgs>
    _count?: boolean | AvailableSubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AvailableSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AvailableSubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AvailableSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AvailableSubscription"
    objects: {
      subscriptionTransactions: Prisma.$SubscriptionTransactionsPayload<ExtArgs>[]
      userSubscriptions: Prisma.$UserSubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      price: number
      period: $Enums.SubscriptionPeriod
    }, ExtArgs["result"]["availableSubscription"]>
    composites: {}
  }

  type AvailableSubscriptionGetPayload<S extends boolean | null | undefined | AvailableSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$AvailableSubscriptionPayload, S>

  type AvailableSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AvailableSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AvailableSubscriptionCountAggregateInputType | true
    }

  export interface AvailableSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AvailableSubscription'], meta: { name: 'AvailableSubscription' } }
    /**
     * Find zero or one AvailableSubscription that matches the filter.
     * @param {AvailableSubscriptionFindUniqueArgs} args - Arguments to find a AvailableSubscription
     * @example
     * // Get one AvailableSubscription
     * const availableSubscription = await prisma.availableSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AvailableSubscriptionFindUniqueArgs>(args: SelectSubset<T, AvailableSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__AvailableSubscriptionClient<$Result.GetResult<Prisma.$AvailableSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AvailableSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AvailableSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a AvailableSubscription
     * @example
     * // Get one AvailableSubscription
     * const availableSubscription = await prisma.availableSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AvailableSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, AvailableSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AvailableSubscriptionClient<$Result.GetResult<Prisma.$AvailableSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableSubscriptionFindFirstArgs} args - Arguments to find a AvailableSubscription
     * @example
     * // Get one AvailableSubscription
     * const availableSubscription = await prisma.availableSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AvailableSubscriptionFindFirstArgs>(args?: SelectSubset<T, AvailableSubscriptionFindFirstArgs<ExtArgs>>): Prisma__AvailableSubscriptionClient<$Result.GetResult<Prisma.$AvailableSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AvailableSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableSubscriptionFindFirstOrThrowArgs} args - Arguments to find a AvailableSubscription
     * @example
     * // Get one AvailableSubscription
     * const availableSubscription = await prisma.availableSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AvailableSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, AvailableSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__AvailableSubscriptionClient<$Result.GetResult<Prisma.$AvailableSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AvailableSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AvailableSubscriptions
     * const availableSubscriptions = await prisma.availableSubscription.findMany()
     * 
     * // Get first 10 AvailableSubscriptions
     * const availableSubscriptions = await prisma.availableSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availableSubscriptionWithIdOnly = await prisma.availableSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AvailableSubscriptionFindManyArgs>(args?: SelectSubset<T, AvailableSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AvailableSubscription.
     * @param {AvailableSubscriptionCreateArgs} args - Arguments to create a AvailableSubscription.
     * @example
     * // Create one AvailableSubscription
     * const AvailableSubscription = await prisma.availableSubscription.create({
     *   data: {
     *     // ... data to create a AvailableSubscription
     *   }
     * })
     * 
     */
    create<T extends AvailableSubscriptionCreateArgs>(args: SelectSubset<T, AvailableSubscriptionCreateArgs<ExtArgs>>): Prisma__AvailableSubscriptionClient<$Result.GetResult<Prisma.$AvailableSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AvailableSubscriptions.
     * @param {AvailableSubscriptionCreateManyArgs} args - Arguments to create many AvailableSubscriptions.
     * @example
     * // Create many AvailableSubscriptions
     * const availableSubscription = await prisma.availableSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AvailableSubscriptionCreateManyArgs>(args?: SelectSubset<T, AvailableSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AvailableSubscriptions and returns the data saved in the database.
     * @param {AvailableSubscriptionCreateManyAndReturnArgs} args - Arguments to create many AvailableSubscriptions.
     * @example
     * // Create many AvailableSubscriptions
     * const availableSubscription = await prisma.availableSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AvailableSubscriptions and only return the `id`
     * const availableSubscriptionWithIdOnly = await prisma.availableSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AvailableSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, AvailableSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AvailableSubscription.
     * @param {AvailableSubscriptionDeleteArgs} args - Arguments to delete one AvailableSubscription.
     * @example
     * // Delete one AvailableSubscription
     * const AvailableSubscription = await prisma.availableSubscription.delete({
     *   where: {
     *     // ... filter to delete one AvailableSubscription
     *   }
     * })
     * 
     */
    delete<T extends AvailableSubscriptionDeleteArgs>(args: SelectSubset<T, AvailableSubscriptionDeleteArgs<ExtArgs>>): Prisma__AvailableSubscriptionClient<$Result.GetResult<Prisma.$AvailableSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AvailableSubscription.
     * @param {AvailableSubscriptionUpdateArgs} args - Arguments to update one AvailableSubscription.
     * @example
     * // Update one AvailableSubscription
     * const availableSubscription = await prisma.availableSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AvailableSubscriptionUpdateArgs>(args: SelectSubset<T, AvailableSubscriptionUpdateArgs<ExtArgs>>): Prisma__AvailableSubscriptionClient<$Result.GetResult<Prisma.$AvailableSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AvailableSubscriptions.
     * @param {AvailableSubscriptionDeleteManyArgs} args - Arguments to filter AvailableSubscriptions to delete.
     * @example
     * // Delete a few AvailableSubscriptions
     * const { count } = await prisma.availableSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AvailableSubscriptionDeleteManyArgs>(args?: SelectSubset<T, AvailableSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AvailableSubscriptions
     * const availableSubscription = await prisma.availableSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AvailableSubscriptionUpdateManyArgs>(args: SelectSubset<T, AvailableSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AvailableSubscriptions and returns the data updated in the database.
     * @param {AvailableSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many AvailableSubscriptions.
     * @example
     * // Update many AvailableSubscriptions
     * const availableSubscription = await prisma.availableSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AvailableSubscriptions and only return the `id`
     * const availableSubscriptionWithIdOnly = await prisma.availableSubscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends AvailableSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, AvailableSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailableSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AvailableSubscription.
     * @param {AvailableSubscriptionUpsertArgs} args - Arguments to update or create a AvailableSubscription.
     * @example
     * // Update or create a AvailableSubscription
     * const availableSubscription = await prisma.availableSubscription.upsert({
     *   create: {
     *     // ... data to create a AvailableSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AvailableSubscription we want to update
     *   }
     * })
     */
    upsert<T extends AvailableSubscriptionUpsertArgs>(args: SelectSubset<T, AvailableSubscriptionUpsertArgs<ExtArgs>>): Prisma__AvailableSubscriptionClient<$Result.GetResult<Prisma.$AvailableSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AvailableSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableSubscriptionCountArgs} args - Arguments to filter AvailableSubscriptions to count.
     * @example
     * // Count the number of AvailableSubscriptions
     * const count = await prisma.availableSubscription.count({
     *   where: {
     *     // ... the filter for the AvailableSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends AvailableSubscriptionCountArgs>(
      args?: Subset<T, AvailableSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailableSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AvailableSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AvailableSubscriptionAggregateArgs>(args: Subset<T, AvailableSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetAvailableSubscriptionAggregateType<T>>

    /**
     * Group by AvailableSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailableSubscriptionGroupByArgs} args - Group by arguments.
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
      T extends AvailableSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailableSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: AvailableSubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AvailableSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailableSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AvailableSubscription model
   */
  readonly fields: AvailableSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AvailableSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailableSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    subscriptionTransactions<T extends AvailableSubscription$subscriptionTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, AvailableSubscription$subscriptionTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionTransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    userSubscriptions<T extends AvailableSubscription$userSubscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, AvailableSubscription$userSubscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AvailableSubscription model
   */
  interface AvailableSubscriptionFieldRefs {
    readonly id: FieldRef<"AvailableSubscription", 'Int'>
    readonly title: FieldRef<"AvailableSubscription", 'String'>
    readonly price: FieldRef<"AvailableSubscription", 'Int'>
    readonly period: FieldRef<"AvailableSubscription", 'SubscriptionPeriod'>
  }
    

  // Custom InputTypes
  /**
   * AvailableSubscription findUnique
   */
  export type AvailableSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableSubscription
     */
    select?: AvailableSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableSubscription
     */
    omit?: AvailableSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableSubscription to fetch.
     */
    where: AvailableSubscriptionWhereUniqueInput
  }

  /**
   * AvailableSubscription findUniqueOrThrow
   */
  export type AvailableSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableSubscription
     */
    select?: AvailableSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableSubscription
     */
    omit?: AvailableSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableSubscription to fetch.
     */
    where: AvailableSubscriptionWhereUniqueInput
  }

  /**
   * AvailableSubscription findFirst
   */
  export type AvailableSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableSubscription
     */
    select?: AvailableSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableSubscription
     */
    omit?: AvailableSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableSubscription to fetch.
     */
    where?: AvailableSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableSubscriptions to fetch.
     */
    orderBy?: AvailableSubscriptionOrderByWithRelationInput | AvailableSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableSubscriptions.
     */
    cursor?: AvailableSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableSubscriptions.
     */
    distinct?: AvailableSubscriptionScalarFieldEnum | AvailableSubscriptionScalarFieldEnum[]
  }

  /**
   * AvailableSubscription findFirstOrThrow
   */
  export type AvailableSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableSubscription
     */
    select?: AvailableSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableSubscription
     */
    omit?: AvailableSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableSubscription to fetch.
     */
    where?: AvailableSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableSubscriptions to fetch.
     */
    orderBy?: AvailableSubscriptionOrderByWithRelationInput | AvailableSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AvailableSubscriptions.
     */
    cursor?: AvailableSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AvailableSubscriptions.
     */
    distinct?: AvailableSubscriptionScalarFieldEnum | AvailableSubscriptionScalarFieldEnum[]
  }

  /**
   * AvailableSubscription findMany
   */
  export type AvailableSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableSubscription
     */
    select?: AvailableSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableSubscription
     */
    omit?: AvailableSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which AvailableSubscriptions to fetch.
     */
    where?: AvailableSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AvailableSubscriptions to fetch.
     */
    orderBy?: AvailableSubscriptionOrderByWithRelationInput | AvailableSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AvailableSubscriptions.
     */
    cursor?: AvailableSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AvailableSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AvailableSubscriptions.
     */
    skip?: number
    distinct?: AvailableSubscriptionScalarFieldEnum | AvailableSubscriptionScalarFieldEnum[]
  }

  /**
   * AvailableSubscription create
   */
  export type AvailableSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableSubscription
     */
    select?: AvailableSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableSubscription
     */
    omit?: AvailableSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a AvailableSubscription.
     */
    data: XOR<AvailableSubscriptionCreateInput, AvailableSubscriptionUncheckedCreateInput>
  }

  /**
   * AvailableSubscription createMany
   */
  export type AvailableSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AvailableSubscriptions.
     */
    data: AvailableSubscriptionCreateManyInput | AvailableSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableSubscription createManyAndReturn
   */
  export type AvailableSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableSubscription
     */
    select?: AvailableSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableSubscription
     */
    omit?: AvailableSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many AvailableSubscriptions.
     */
    data: AvailableSubscriptionCreateManyInput | AvailableSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AvailableSubscription update
   */
  export type AvailableSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableSubscription
     */
    select?: AvailableSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableSubscription
     */
    omit?: AvailableSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a AvailableSubscription.
     */
    data: XOR<AvailableSubscriptionUpdateInput, AvailableSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which AvailableSubscription to update.
     */
    where: AvailableSubscriptionWhereUniqueInput
  }

  /**
   * AvailableSubscription updateMany
   */
  export type AvailableSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AvailableSubscriptions.
     */
    data: XOR<AvailableSubscriptionUpdateManyMutationInput, AvailableSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which AvailableSubscriptions to update
     */
    where?: AvailableSubscriptionWhereInput
    /**
     * Limit how many AvailableSubscriptions to update.
     */
    limit?: number
  }

  /**
   * AvailableSubscription updateManyAndReturn
   */
  export type AvailableSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableSubscription
     */
    select?: AvailableSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableSubscription
     */
    omit?: AvailableSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update AvailableSubscriptions.
     */
    data: XOR<AvailableSubscriptionUpdateManyMutationInput, AvailableSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which AvailableSubscriptions to update
     */
    where?: AvailableSubscriptionWhereInput
    /**
     * Limit how many AvailableSubscriptions to update.
     */
    limit?: number
  }

  /**
   * AvailableSubscription upsert
   */
  export type AvailableSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableSubscription
     */
    select?: AvailableSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableSubscription
     */
    omit?: AvailableSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the AvailableSubscription to update in case it exists.
     */
    where: AvailableSubscriptionWhereUniqueInput
    /**
     * In case the AvailableSubscription found by the `where` argument doesn't exist, create a new AvailableSubscription with this data.
     */
    create: XOR<AvailableSubscriptionCreateInput, AvailableSubscriptionUncheckedCreateInput>
    /**
     * In case the AvailableSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailableSubscriptionUpdateInput, AvailableSubscriptionUncheckedUpdateInput>
  }

  /**
   * AvailableSubscription delete
   */
  export type AvailableSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableSubscription
     */
    select?: AvailableSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableSubscription
     */
    omit?: AvailableSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which AvailableSubscription to delete.
     */
    where: AvailableSubscriptionWhereUniqueInput
  }

  /**
   * AvailableSubscription deleteMany
   */
  export type AvailableSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AvailableSubscriptions to delete
     */
    where?: AvailableSubscriptionWhereInput
    /**
     * Limit how many AvailableSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * AvailableSubscription.subscriptionTransactions
   */
  export type AvailableSubscription$subscriptionTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionTransactions
     */
    select?: SubscriptionTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionTransactions
     */
    omit?: SubscriptionTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionTransactionsInclude<ExtArgs> | null
    where?: SubscriptionTransactionsWhereInput
    orderBy?: SubscriptionTransactionsOrderByWithRelationInput | SubscriptionTransactionsOrderByWithRelationInput[]
    cursor?: SubscriptionTransactionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionTransactionsScalarFieldEnum | SubscriptionTransactionsScalarFieldEnum[]
  }

  /**
   * AvailableSubscription.userSubscriptions
   */
  export type AvailableSubscription$userSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    where?: UserSubscriptionWhereInput
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    cursor?: UserSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * AvailableSubscription without action
   */
  export type AvailableSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AvailableSubscription
     */
    select?: AvailableSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AvailableSubscription
     */
    omit?: AvailableSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AvailableSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model SubscriptionTransactions
   */

  export type AggregateSubscriptionTransactions = {
    _count: SubscriptionTransactionsCountAggregateOutputType | null
    _avg: SubscriptionTransactionsAvgAggregateOutputType | null
    _sum: SubscriptionTransactionsSumAggregateOutputType | null
    _min: SubscriptionTransactionsMinAggregateOutputType | null
    _max: SubscriptionTransactionsMaxAggregateOutputType | null
  }

  export type SubscriptionTransactionsAvgAggregateOutputType = {
    id: number | null
    subscriptionId: number | null
    userId: number | null
  }

  export type SubscriptionTransactionsSumAggregateOutputType = {
    id: number | null
    subscriptionId: number | null
    userId: number | null
  }

  export type SubscriptionTransactionsMinAggregateOutputType = {
    id: number | null
    subscriptionId: number | null
    userId: number | null
    externalTransactionId: string | null
    paymentSystem: $Enums.PaymentSystem | null
    status: $Enums.PaymentStatus | null
    paymentDate: Date | null
    createdAt: Date | null
    url: string | null
  }

  export type SubscriptionTransactionsMaxAggregateOutputType = {
    id: number | null
    subscriptionId: number | null
    userId: number | null
    externalTransactionId: string | null
    paymentSystem: $Enums.PaymentSystem | null
    status: $Enums.PaymentStatus | null
    paymentDate: Date | null
    createdAt: Date | null
    url: string | null
  }

  export type SubscriptionTransactionsCountAggregateOutputType = {
    id: number
    subscriptionId: number
    userId: number
    externalTransactionId: number
    paymentSystem: number
    status: number
    paymentDate: number
    createdAt: number
    url: number
    _all: number
  }


  export type SubscriptionTransactionsAvgAggregateInputType = {
    id?: true
    subscriptionId?: true
    userId?: true
  }

  export type SubscriptionTransactionsSumAggregateInputType = {
    id?: true
    subscriptionId?: true
    userId?: true
  }

  export type SubscriptionTransactionsMinAggregateInputType = {
    id?: true
    subscriptionId?: true
    userId?: true
    externalTransactionId?: true
    paymentSystem?: true
    status?: true
    paymentDate?: true
    createdAt?: true
    url?: true
  }

  export type SubscriptionTransactionsMaxAggregateInputType = {
    id?: true
    subscriptionId?: true
    userId?: true
    externalTransactionId?: true
    paymentSystem?: true
    status?: true
    paymentDate?: true
    createdAt?: true
    url?: true
  }

  export type SubscriptionTransactionsCountAggregateInputType = {
    id?: true
    subscriptionId?: true
    userId?: true
    externalTransactionId?: true
    paymentSystem?: true
    status?: true
    paymentDate?: true
    createdAt?: true
    url?: true
    _all?: true
  }

  export type SubscriptionTransactionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionTransactions to aggregate.
     */
    where?: SubscriptionTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionTransactions to fetch.
     */
    orderBy?: SubscriptionTransactionsOrderByWithRelationInput | SubscriptionTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionTransactions
    **/
    _count?: true | SubscriptionTransactionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionTransactionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionTransactionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionTransactionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionTransactionsMaxAggregateInputType
  }

  export type GetSubscriptionTransactionsAggregateType<T extends SubscriptionTransactionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionTransactions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionTransactions[P]>
      : GetScalarType<T[P], AggregateSubscriptionTransactions[P]>
  }




  export type SubscriptionTransactionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionTransactionsWhereInput
    orderBy?: SubscriptionTransactionsOrderByWithAggregationInput | SubscriptionTransactionsOrderByWithAggregationInput[]
    by: SubscriptionTransactionsScalarFieldEnum[] | SubscriptionTransactionsScalarFieldEnum
    having?: SubscriptionTransactionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionTransactionsCountAggregateInputType | true
    _avg?: SubscriptionTransactionsAvgAggregateInputType
    _sum?: SubscriptionTransactionsSumAggregateInputType
    _min?: SubscriptionTransactionsMinAggregateInputType
    _max?: SubscriptionTransactionsMaxAggregateInputType
  }

  export type SubscriptionTransactionsGroupByOutputType = {
    id: number
    subscriptionId: number
    userId: number
    externalTransactionId: string | null
    paymentSystem: $Enums.PaymentSystem
    status: $Enums.PaymentStatus
    paymentDate: Date | null
    createdAt: Date
    url: string | null
    _count: SubscriptionTransactionsCountAggregateOutputType | null
    _avg: SubscriptionTransactionsAvgAggregateOutputType | null
    _sum: SubscriptionTransactionsSumAggregateOutputType | null
    _min: SubscriptionTransactionsMinAggregateOutputType | null
    _max: SubscriptionTransactionsMaxAggregateOutputType | null
  }

  type GetSubscriptionTransactionsGroupByPayload<T extends SubscriptionTransactionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionTransactionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionTransactionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionTransactionsGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionTransactionsGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionTransactionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    userId?: boolean
    externalTransactionId?: boolean
    paymentSystem?: boolean
    status?: boolean
    paymentDate?: boolean
    createdAt?: boolean
    url?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    availableSubscription?: boolean | AvailableSubscriptionDefaultArgs<ExtArgs>
    userSubscription?: boolean | SubscriptionTransactions$userSubscriptionArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionTransactions"]>

  export type SubscriptionTransactionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    userId?: boolean
    externalTransactionId?: boolean
    paymentSystem?: boolean
    status?: boolean
    paymentDate?: boolean
    createdAt?: boolean
    url?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    availableSubscription?: boolean | AvailableSubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionTransactions"]>

  export type SubscriptionTransactionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subscriptionId?: boolean
    userId?: boolean
    externalTransactionId?: boolean
    paymentSystem?: boolean
    status?: boolean
    paymentDate?: boolean
    createdAt?: boolean
    url?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    availableSubscription?: boolean | AvailableSubscriptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionTransactions"]>

  export type SubscriptionTransactionsSelectScalar = {
    id?: boolean
    subscriptionId?: boolean
    userId?: boolean
    externalTransactionId?: boolean
    paymentSystem?: boolean
    status?: boolean
    paymentDate?: boolean
    createdAt?: boolean
    url?: boolean
  }

  export type SubscriptionTransactionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subscriptionId" | "userId" | "externalTransactionId" | "paymentSystem" | "status" | "paymentDate" | "createdAt" | "url", ExtArgs["result"]["subscriptionTransactions"]>
  export type SubscriptionTransactionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    availableSubscription?: boolean | AvailableSubscriptionDefaultArgs<ExtArgs>
    userSubscription?: boolean | SubscriptionTransactions$userSubscriptionArgs<ExtArgs>
  }
  export type SubscriptionTransactionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    availableSubscription?: boolean | AvailableSubscriptionDefaultArgs<ExtArgs>
  }
  export type SubscriptionTransactionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    availableSubscription?: boolean | AvailableSubscriptionDefaultArgs<ExtArgs>
  }

  export type $SubscriptionTransactionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionTransactions"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      availableSubscription: Prisma.$AvailableSubscriptionPayload<ExtArgs>
      userSubscription: Prisma.$UserSubscriptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      subscriptionId: number
      userId: number
      externalTransactionId: string | null
      paymentSystem: $Enums.PaymentSystem
      status: $Enums.PaymentStatus
      paymentDate: Date | null
      createdAt: Date
      url: string | null
    }, ExtArgs["result"]["subscriptionTransactions"]>
    composites: {}
  }

  type SubscriptionTransactionsGetPayload<S extends boolean | null | undefined | SubscriptionTransactionsDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionTransactionsPayload, S>

  type SubscriptionTransactionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionTransactionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionTransactionsCountAggregateInputType | true
    }

  export interface SubscriptionTransactionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionTransactions'], meta: { name: 'SubscriptionTransactions' } }
    /**
     * Find zero or one SubscriptionTransactions that matches the filter.
     * @param {SubscriptionTransactionsFindUniqueArgs} args - Arguments to find a SubscriptionTransactions
     * @example
     * // Get one SubscriptionTransactions
     * const subscriptionTransactions = await prisma.subscriptionTransactions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionTransactionsFindUniqueArgs>(args: SelectSubset<T, SubscriptionTransactionsFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionTransactionsClient<$Result.GetResult<Prisma.$SubscriptionTransactionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubscriptionTransactions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionTransactionsFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionTransactions
     * @example
     * // Get one SubscriptionTransactions
     * const subscriptionTransactions = await prisma.subscriptionTransactions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionTransactionsFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionTransactionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionTransactionsClient<$Result.GetResult<Prisma.$SubscriptionTransactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionTransactionsFindFirstArgs} args - Arguments to find a SubscriptionTransactions
     * @example
     * // Get one SubscriptionTransactions
     * const subscriptionTransactions = await prisma.subscriptionTransactions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionTransactionsFindFirstArgs>(args?: SelectSubset<T, SubscriptionTransactionsFindFirstArgs<ExtArgs>>): Prisma__SubscriptionTransactionsClient<$Result.GetResult<Prisma.$SubscriptionTransactionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionTransactions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionTransactionsFindFirstOrThrowArgs} args - Arguments to find a SubscriptionTransactions
     * @example
     * // Get one SubscriptionTransactions
     * const subscriptionTransactions = await prisma.subscriptionTransactions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionTransactionsFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionTransactionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionTransactionsClient<$Result.GetResult<Prisma.$SubscriptionTransactionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscriptionTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionTransactionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionTransactions
     * const subscriptionTransactions = await prisma.subscriptionTransactions.findMany()
     * 
     * // Get first 10 SubscriptionTransactions
     * const subscriptionTransactions = await prisma.subscriptionTransactions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionTransactionsWithIdOnly = await prisma.subscriptionTransactions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionTransactionsFindManyArgs>(args?: SelectSubset<T, SubscriptionTransactionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionTransactionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubscriptionTransactions.
     * @param {SubscriptionTransactionsCreateArgs} args - Arguments to create a SubscriptionTransactions.
     * @example
     * // Create one SubscriptionTransactions
     * const SubscriptionTransactions = await prisma.subscriptionTransactions.create({
     *   data: {
     *     // ... data to create a SubscriptionTransactions
     *   }
     * })
     * 
     */
    create<T extends SubscriptionTransactionsCreateArgs>(args: SelectSubset<T, SubscriptionTransactionsCreateArgs<ExtArgs>>): Prisma__SubscriptionTransactionsClient<$Result.GetResult<Prisma.$SubscriptionTransactionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubscriptionTransactions.
     * @param {SubscriptionTransactionsCreateManyArgs} args - Arguments to create many SubscriptionTransactions.
     * @example
     * // Create many SubscriptionTransactions
     * const subscriptionTransactions = await prisma.subscriptionTransactions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionTransactionsCreateManyArgs>(args?: SelectSubset<T, SubscriptionTransactionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionTransactions and returns the data saved in the database.
     * @param {SubscriptionTransactionsCreateManyAndReturnArgs} args - Arguments to create many SubscriptionTransactions.
     * @example
     * // Create many SubscriptionTransactions
     * const subscriptionTransactions = await prisma.subscriptionTransactions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubscriptionTransactions and only return the `id`
     * const subscriptionTransactionsWithIdOnly = await prisma.subscriptionTransactions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionTransactionsCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionTransactionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionTransactionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubscriptionTransactions.
     * @param {SubscriptionTransactionsDeleteArgs} args - Arguments to delete one SubscriptionTransactions.
     * @example
     * // Delete one SubscriptionTransactions
     * const SubscriptionTransactions = await prisma.subscriptionTransactions.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionTransactions
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionTransactionsDeleteArgs>(args: SelectSubset<T, SubscriptionTransactionsDeleteArgs<ExtArgs>>): Prisma__SubscriptionTransactionsClient<$Result.GetResult<Prisma.$SubscriptionTransactionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubscriptionTransactions.
     * @param {SubscriptionTransactionsUpdateArgs} args - Arguments to update one SubscriptionTransactions.
     * @example
     * // Update one SubscriptionTransactions
     * const subscriptionTransactions = await prisma.subscriptionTransactions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionTransactionsUpdateArgs>(args: SelectSubset<T, SubscriptionTransactionsUpdateArgs<ExtArgs>>): Prisma__SubscriptionTransactionsClient<$Result.GetResult<Prisma.$SubscriptionTransactionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubscriptionTransactions.
     * @param {SubscriptionTransactionsDeleteManyArgs} args - Arguments to filter SubscriptionTransactions to delete.
     * @example
     * // Delete a few SubscriptionTransactions
     * const { count } = await prisma.subscriptionTransactions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionTransactionsDeleteManyArgs>(args?: SelectSubset<T, SubscriptionTransactionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionTransactionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionTransactions
     * const subscriptionTransactions = await prisma.subscriptionTransactions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionTransactionsUpdateManyArgs>(args: SelectSubset<T, SubscriptionTransactionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionTransactions and returns the data updated in the database.
     * @param {SubscriptionTransactionsUpdateManyAndReturnArgs} args - Arguments to update many SubscriptionTransactions.
     * @example
     * // Update many SubscriptionTransactions
     * const subscriptionTransactions = await prisma.subscriptionTransactions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubscriptionTransactions and only return the `id`
     * const subscriptionTransactionsWithIdOnly = await prisma.subscriptionTransactions.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionTransactionsUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionTransactionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionTransactionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubscriptionTransactions.
     * @param {SubscriptionTransactionsUpsertArgs} args - Arguments to update or create a SubscriptionTransactions.
     * @example
     * // Update or create a SubscriptionTransactions
     * const subscriptionTransactions = await prisma.subscriptionTransactions.upsert({
     *   create: {
     *     // ... data to create a SubscriptionTransactions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionTransactions we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionTransactionsUpsertArgs>(args: SelectSubset<T, SubscriptionTransactionsUpsertArgs<ExtArgs>>): Prisma__SubscriptionTransactionsClient<$Result.GetResult<Prisma.$SubscriptionTransactionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubscriptionTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionTransactionsCountArgs} args - Arguments to filter SubscriptionTransactions to count.
     * @example
     * // Count the number of SubscriptionTransactions
     * const count = await prisma.subscriptionTransactions.count({
     *   where: {
     *     // ... the filter for the SubscriptionTransactions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionTransactionsCountArgs>(
      args?: Subset<T, SubscriptionTransactionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionTransactionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionTransactionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionTransactionsAggregateArgs>(args: Subset<T, SubscriptionTransactionsAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionTransactionsAggregateType<T>>

    /**
     * Group by SubscriptionTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionTransactionsGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionTransactionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionTransactionsGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionTransactionsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionTransactionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionTransactionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionTransactions model
   */
  readonly fields: SubscriptionTransactionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionTransactions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionTransactionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    availableSubscription<T extends AvailableSubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailableSubscriptionDefaultArgs<ExtArgs>>): Prisma__AvailableSubscriptionClient<$Result.GetResult<Prisma.$AvailableSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    userSubscription<T extends SubscriptionTransactions$userSubscriptionArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionTransactions$userSubscriptionArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SubscriptionTransactions model
   */
  interface SubscriptionTransactionsFieldRefs {
    readonly id: FieldRef<"SubscriptionTransactions", 'Int'>
    readonly subscriptionId: FieldRef<"SubscriptionTransactions", 'Int'>
    readonly userId: FieldRef<"SubscriptionTransactions", 'Int'>
    readonly externalTransactionId: FieldRef<"SubscriptionTransactions", 'String'>
    readonly paymentSystem: FieldRef<"SubscriptionTransactions", 'PaymentSystem'>
    readonly status: FieldRef<"SubscriptionTransactions", 'PaymentStatus'>
    readonly paymentDate: FieldRef<"SubscriptionTransactions", 'DateTime'>
    readonly createdAt: FieldRef<"SubscriptionTransactions", 'DateTime'>
    readonly url: FieldRef<"SubscriptionTransactions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionTransactions findUnique
   */
  export type SubscriptionTransactionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionTransactions
     */
    select?: SubscriptionTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionTransactions
     */
    omit?: SubscriptionTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionTransactions to fetch.
     */
    where: SubscriptionTransactionsWhereUniqueInput
  }

  /**
   * SubscriptionTransactions findUniqueOrThrow
   */
  export type SubscriptionTransactionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionTransactions
     */
    select?: SubscriptionTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionTransactions
     */
    omit?: SubscriptionTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionTransactions to fetch.
     */
    where: SubscriptionTransactionsWhereUniqueInput
  }

  /**
   * SubscriptionTransactions findFirst
   */
  export type SubscriptionTransactionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionTransactions
     */
    select?: SubscriptionTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionTransactions
     */
    omit?: SubscriptionTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionTransactions to fetch.
     */
    where?: SubscriptionTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionTransactions to fetch.
     */
    orderBy?: SubscriptionTransactionsOrderByWithRelationInput | SubscriptionTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionTransactions.
     */
    cursor?: SubscriptionTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionTransactions.
     */
    distinct?: SubscriptionTransactionsScalarFieldEnum | SubscriptionTransactionsScalarFieldEnum[]
  }

  /**
   * SubscriptionTransactions findFirstOrThrow
   */
  export type SubscriptionTransactionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionTransactions
     */
    select?: SubscriptionTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionTransactions
     */
    omit?: SubscriptionTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionTransactions to fetch.
     */
    where?: SubscriptionTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionTransactions to fetch.
     */
    orderBy?: SubscriptionTransactionsOrderByWithRelationInput | SubscriptionTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionTransactions.
     */
    cursor?: SubscriptionTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionTransactions.
     */
    distinct?: SubscriptionTransactionsScalarFieldEnum | SubscriptionTransactionsScalarFieldEnum[]
  }

  /**
   * SubscriptionTransactions findMany
   */
  export type SubscriptionTransactionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionTransactions
     */
    select?: SubscriptionTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionTransactions
     */
    omit?: SubscriptionTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionTransactionsInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionTransactions to fetch.
     */
    where?: SubscriptionTransactionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionTransactions to fetch.
     */
    orderBy?: SubscriptionTransactionsOrderByWithRelationInput | SubscriptionTransactionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionTransactions.
     */
    cursor?: SubscriptionTransactionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionTransactions.
     */
    skip?: number
    distinct?: SubscriptionTransactionsScalarFieldEnum | SubscriptionTransactionsScalarFieldEnum[]
  }

  /**
   * SubscriptionTransactions create
   */
  export type SubscriptionTransactionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionTransactions
     */
    select?: SubscriptionTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionTransactions
     */
    omit?: SubscriptionTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionTransactionsInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionTransactions.
     */
    data: XOR<SubscriptionTransactionsCreateInput, SubscriptionTransactionsUncheckedCreateInput>
  }

  /**
   * SubscriptionTransactions createMany
   */
  export type SubscriptionTransactionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionTransactions.
     */
    data: SubscriptionTransactionsCreateManyInput | SubscriptionTransactionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionTransactions createManyAndReturn
   */
  export type SubscriptionTransactionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionTransactions
     */
    select?: SubscriptionTransactionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionTransactions
     */
    omit?: SubscriptionTransactionsOmit<ExtArgs> | null
    /**
     * The data used to create many SubscriptionTransactions.
     */
    data: SubscriptionTransactionsCreateManyInput | SubscriptionTransactionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionTransactionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubscriptionTransactions update
   */
  export type SubscriptionTransactionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionTransactions
     */
    select?: SubscriptionTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionTransactions
     */
    omit?: SubscriptionTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionTransactionsInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionTransactions.
     */
    data: XOR<SubscriptionTransactionsUpdateInput, SubscriptionTransactionsUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionTransactions to update.
     */
    where: SubscriptionTransactionsWhereUniqueInput
  }

  /**
   * SubscriptionTransactions updateMany
   */
  export type SubscriptionTransactionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionTransactions.
     */
    data: XOR<SubscriptionTransactionsUpdateManyMutationInput, SubscriptionTransactionsUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionTransactions to update
     */
    where?: SubscriptionTransactionsWhereInput
    /**
     * Limit how many SubscriptionTransactions to update.
     */
    limit?: number
  }

  /**
   * SubscriptionTransactions updateManyAndReturn
   */
  export type SubscriptionTransactionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionTransactions
     */
    select?: SubscriptionTransactionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionTransactions
     */
    omit?: SubscriptionTransactionsOmit<ExtArgs> | null
    /**
     * The data used to update SubscriptionTransactions.
     */
    data: XOR<SubscriptionTransactionsUpdateManyMutationInput, SubscriptionTransactionsUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionTransactions to update
     */
    where?: SubscriptionTransactionsWhereInput
    /**
     * Limit how many SubscriptionTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionTransactionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubscriptionTransactions upsert
   */
  export type SubscriptionTransactionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionTransactions
     */
    select?: SubscriptionTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionTransactions
     */
    omit?: SubscriptionTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionTransactionsInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionTransactions to update in case it exists.
     */
    where: SubscriptionTransactionsWhereUniqueInput
    /**
     * In case the SubscriptionTransactions found by the `where` argument doesn't exist, create a new SubscriptionTransactions with this data.
     */
    create: XOR<SubscriptionTransactionsCreateInput, SubscriptionTransactionsUncheckedCreateInput>
    /**
     * In case the SubscriptionTransactions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionTransactionsUpdateInput, SubscriptionTransactionsUncheckedUpdateInput>
  }

  /**
   * SubscriptionTransactions delete
   */
  export type SubscriptionTransactionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionTransactions
     */
    select?: SubscriptionTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionTransactions
     */
    omit?: SubscriptionTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionTransactionsInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionTransactions to delete.
     */
    where: SubscriptionTransactionsWhereUniqueInput
  }

  /**
   * SubscriptionTransactions deleteMany
   */
  export type SubscriptionTransactionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionTransactions to delete
     */
    where?: SubscriptionTransactionsWhereInput
    /**
     * Limit how many SubscriptionTransactions to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionTransactions.userSubscription
   */
  export type SubscriptionTransactions$userSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    where?: UserSubscriptionWhereInput
  }

  /**
   * SubscriptionTransactions without action
   */
  export type SubscriptionTransactionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionTransactions
     */
    select?: SubscriptionTransactionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionTransactions
     */
    omit?: SubscriptionTransactionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionTransactionsInclude<ExtArgs> | null
  }


  /**
   * Model UserSubscription
   */

  export type AggregateUserSubscription = {
    _count: UserSubscriptionCountAggregateOutputType | null
    _avg: UserSubscriptionAvgAggregateOutputType | null
    _sum: UserSubscriptionSumAggregateOutputType | null
    _min: UserSubscriptionMinAggregateOutputType | null
    _max: UserSubscriptionMaxAggregateOutputType | null
  }

  export type UserSubscriptionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    subscriptionId: number | null
    transactionId: number | null
  }

  export type UserSubscriptionSumAggregateOutputType = {
    id: number | null
    userId: number | null
    subscriptionId: number | null
    transactionId: number | null
  }

  export type UserSubscriptionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    subscriptionId: number | null
    transactionId: number | null
    subscriptionStartDate: Date | null
    subscriptionEndDate: Date | null
    nextPaymentDate: Date | null
    autoRenewal: boolean | null
    notified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSubscriptionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    subscriptionId: number | null
    transactionId: number | null
    subscriptionStartDate: Date | null
    subscriptionEndDate: Date | null
    nextPaymentDate: Date | null
    autoRenewal: boolean | null
    notified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserSubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    subscriptionId: number
    transactionId: number
    subscriptionStartDate: number
    subscriptionEndDate: number
    nextPaymentDate: number
    autoRenewal: number
    notified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserSubscriptionAvgAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    transactionId?: true
  }

  export type UserSubscriptionSumAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    transactionId?: true
  }

  export type UserSubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    transactionId?: true
    subscriptionStartDate?: true
    subscriptionEndDate?: true
    nextPaymentDate?: true
    autoRenewal?: true
    notified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    transactionId?: true
    subscriptionStartDate?: true
    subscriptionEndDate?: true
    nextPaymentDate?: true
    autoRenewal?: true
    notified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserSubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    subscriptionId?: true
    transactionId?: true
    subscriptionStartDate?: true
    subscriptionEndDate?: true
    nextPaymentDate?: true
    autoRenewal?: true
    notified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSubscription to aggregate.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSubscriptions
    **/
    _count?: true | UserSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserSubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSubscriptionMaxAggregateInputType
  }

  export type GetUserSubscriptionAggregateType<T extends UserSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSubscription[P]>
      : GetScalarType<T[P], AggregateUserSubscription[P]>
  }




  export type UserSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscriptionWhereInput
    orderBy?: UserSubscriptionOrderByWithAggregationInput | UserSubscriptionOrderByWithAggregationInput[]
    by: UserSubscriptionScalarFieldEnum[] | UserSubscriptionScalarFieldEnum
    having?: UserSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSubscriptionCountAggregateInputType | true
    _avg?: UserSubscriptionAvgAggregateInputType
    _sum?: UserSubscriptionSumAggregateInputType
    _min?: UserSubscriptionMinAggregateInputType
    _max?: UserSubscriptionMaxAggregateInputType
  }

  export type UserSubscriptionGroupByOutputType = {
    id: number
    userId: number
    subscriptionId: number
    transactionId: number
    subscriptionStartDate: Date
    subscriptionEndDate: Date
    nextPaymentDate: Date | null
    autoRenewal: boolean
    notified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserSubscriptionCountAggregateOutputType | null
    _avg: UserSubscriptionAvgAggregateOutputType | null
    _sum: UserSubscriptionSumAggregateOutputType | null
    _min: UserSubscriptionMinAggregateOutputType | null
    _max: UserSubscriptionMaxAggregateOutputType | null
  }

  type GetUserSubscriptionGroupByPayload<T extends UserSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], UserSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type UserSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    transactionId?: boolean
    subscriptionStartDate?: boolean
    subscriptionEndDate?: boolean
    nextPaymentDate?: boolean
    autoRenewal?: boolean
    notified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    availableSubscription?: boolean | AvailableSubscriptionDefaultArgs<ExtArgs>
    subscriptionTransactions?: boolean | SubscriptionTransactionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    transactionId?: boolean
    subscriptionStartDate?: boolean
    subscriptionEndDate?: boolean
    nextPaymentDate?: boolean
    autoRenewal?: boolean
    notified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    availableSubscription?: boolean | AvailableSubscriptionDefaultArgs<ExtArgs>
    subscriptionTransactions?: boolean | SubscriptionTransactionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    transactionId?: boolean
    subscriptionStartDate?: boolean
    subscriptionEndDate?: boolean
    nextPaymentDate?: boolean
    autoRenewal?: boolean
    notified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    availableSubscription?: boolean | AvailableSubscriptionDefaultArgs<ExtArgs>
    subscriptionTransactions?: boolean | SubscriptionTransactionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    subscriptionId?: boolean
    transactionId?: boolean
    subscriptionStartDate?: boolean
    subscriptionEndDate?: boolean
    nextPaymentDate?: boolean
    autoRenewal?: boolean
    notified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "subscriptionId" | "transactionId" | "subscriptionStartDate" | "subscriptionEndDate" | "nextPaymentDate" | "autoRenewal" | "notified" | "createdAt" | "updatedAt", ExtArgs["result"]["userSubscription"]>
  export type UserSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    availableSubscription?: boolean | AvailableSubscriptionDefaultArgs<ExtArgs>
    subscriptionTransactions?: boolean | SubscriptionTransactionsDefaultArgs<ExtArgs>
  }
  export type UserSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    availableSubscription?: boolean | AvailableSubscriptionDefaultArgs<ExtArgs>
    subscriptionTransactions?: boolean | SubscriptionTransactionsDefaultArgs<ExtArgs>
  }
  export type UserSubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    availableSubscription?: boolean | AvailableSubscriptionDefaultArgs<ExtArgs>
    subscriptionTransactions?: boolean | SubscriptionTransactionsDefaultArgs<ExtArgs>
  }

  export type $UserSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSubscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      availableSubscription: Prisma.$AvailableSubscriptionPayload<ExtArgs>
      subscriptionTransactions: Prisma.$SubscriptionTransactionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      subscriptionId: number
      transactionId: number
      subscriptionStartDate: Date
      subscriptionEndDate: Date
      nextPaymentDate: Date | null
      autoRenewal: boolean
      notified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userSubscription"]>
    composites: {}
  }

  type UserSubscriptionGetPayload<S extends boolean | null | undefined | UserSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$UserSubscriptionPayload, S>

  type UserSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSubscriptionCountAggregateInputType | true
    }

  export interface UserSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSubscription'], meta: { name: 'UserSubscription' } }
    /**
     * Find zero or one UserSubscription that matches the filter.
     * @param {UserSubscriptionFindUniqueArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSubscriptionFindUniqueArgs>(args: SelectSubset<T, UserSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindFirstArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSubscriptionFindFirstArgs>(args?: SelectSubset<T, UserSubscriptionFindFirstArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindFirstOrThrowArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSubscriptions
     * const userSubscriptions = await prisma.userSubscription.findMany()
     * 
     * // Get first 10 UserSubscriptions
     * const userSubscriptions = await prisma.userSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSubscriptionFindManyArgs>(args?: SelectSubset<T, UserSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSubscription.
     * @param {UserSubscriptionCreateArgs} args - Arguments to create a UserSubscription.
     * @example
     * // Create one UserSubscription
     * const UserSubscription = await prisma.userSubscription.create({
     *   data: {
     *     // ... data to create a UserSubscription
     *   }
     * })
     * 
     */
    create<T extends UserSubscriptionCreateArgs>(args: SelectSubset<T, UserSubscriptionCreateArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSubscriptions.
     * @param {UserSubscriptionCreateManyArgs} args - Arguments to create many UserSubscriptions.
     * @example
     * // Create many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSubscriptionCreateManyArgs>(args?: SelectSubset<T, UserSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSubscriptions and returns the data saved in the database.
     * @param {UserSubscriptionCreateManyAndReturnArgs} args - Arguments to create many UserSubscriptions.
     * @example
     * // Create many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSubscriptions and only return the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSubscription.
     * @param {UserSubscriptionDeleteArgs} args - Arguments to delete one UserSubscription.
     * @example
     * // Delete one UserSubscription
     * const UserSubscription = await prisma.userSubscription.delete({
     *   where: {
     *     // ... filter to delete one UserSubscription
     *   }
     * })
     * 
     */
    delete<T extends UserSubscriptionDeleteArgs>(args: SelectSubset<T, UserSubscriptionDeleteArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSubscription.
     * @param {UserSubscriptionUpdateArgs} args - Arguments to update one UserSubscription.
     * @example
     * // Update one UserSubscription
     * const userSubscription = await prisma.userSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSubscriptionUpdateArgs>(args: SelectSubset<T, UserSubscriptionUpdateArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSubscriptions.
     * @param {UserSubscriptionDeleteManyArgs} args - Arguments to filter UserSubscriptions to delete.
     * @example
     * // Delete a few UserSubscriptions
     * const { count } = await prisma.userSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSubscriptionDeleteManyArgs>(args?: SelectSubset<T, UserSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSubscriptionUpdateManyArgs>(args: SelectSubset<T, UserSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSubscriptions and returns the data updated in the database.
     * @param {UserSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many UserSubscriptions.
     * @example
     * // Update many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSubscriptions and only return the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSubscription.
     * @param {UserSubscriptionUpsertArgs} args - Arguments to update or create a UserSubscription.
     * @example
     * // Update or create a UserSubscription
     * const userSubscription = await prisma.userSubscription.upsert({
     *   create: {
     *     // ... data to create a UserSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSubscription we want to update
     *   }
     * })
     */
    upsert<T extends UserSubscriptionUpsertArgs>(args: SelectSubset<T, UserSubscriptionUpsertArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionCountArgs} args - Arguments to filter UserSubscriptions to count.
     * @example
     * // Count the number of UserSubscriptions
     * const count = await prisma.userSubscription.count({
     *   where: {
     *     // ... the filter for the UserSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends UserSubscriptionCountArgs>(
      args?: Subset<T, UserSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSubscriptionAggregateArgs>(args: Subset<T, UserSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetUserSubscriptionAggregateType<T>>

    /**
     * Group by UserSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionGroupByArgs} args - Group by arguments.
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
      T extends UserSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: UserSubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSubscription model
   */
  readonly fields: UserSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    availableSubscription<T extends AvailableSubscriptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AvailableSubscriptionDefaultArgs<ExtArgs>>): Prisma__AvailableSubscriptionClient<$Result.GetResult<Prisma.$AvailableSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subscriptionTransactions<T extends SubscriptionTransactionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionTransactionsDefaultArgs<ExtArgs>>): Prisma__SubscriptionTransactionsClient<$Result.GetResult<Prisma.$SubscriptionTransactionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserSubscription model
   */
  interface UserSubscriptionFieldRefs {
    readonly id: FieldRef<"UserSubscription", 'Int'>
    readonly userId: FieldRef<"UserSubscription", 'Int'>
    readonly subscriptionId: FieldRef<"UserSubscription", 'Int'>
    readonly transactionId: FieldRef<"UserSubscription", 'Int'>
    readonly subscriptionStartDate: FieldRef<"UserSubscription", 'DateTime'>
    readonly subscriptionEndDate: FieldRef<"UserSubscription", 'DateTime'>
    readonly nextPaymentDate: FieldRef<"UserSubscription", 'DateTime'>
    readonly autoRenewal: FieldRef<"UserSubscription", 'Boolean'>
    readonly notified: FieldRef<"UserSubscription", 'Boolean'>
    readonly createdAt: FieldRef<"UserSubscription", 'DateTime'>
    readonly updatedAt: FieldRef<"UserSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserSubscription findUnique
   */
  export type UserSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription findUniqueOrThrow
   */
  export type UserSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription findFirst
   */
  export type UserSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubscriptions.
     */
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription findFirstOrThrow
   */
  export type UserSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubscriptions.
     */
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription findMany
   */
  export type UserSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscriptions to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription create
   */
  export type UserSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSubscription.
     */
    data: XOR<UserSubscriptionCreateInput, UserSubscriptionUncheckedCreateInput>
  }

  /**
   * UserSubscription createMany
   */
  export type UserSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSubscriptions.
     */
    data: UserSubscriptionCreateManyInput | UserSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSubscription createManyAndReturn
   */
  export type UserSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many UserSubscriptions.
     */
    data: UserSubscriptionCreateManyInput | UserSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSubscription update
   */
  export type UserSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSubscription.
     */
    data: XOR<UserSubscriptionUpdateInput, UserSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which UserSubscription to update.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription updateMany
   */
  export type UserSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSubscriptions.
     */
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which UserSubscriptions to update
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to update.
     */
    limit?: number
  }

  /**
   * UserSubscription updateManyAndReturn
   */
  export type UserSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update UserSubscriptions.
     */
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which UserSubscriptions to update
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSubscription upsert
   */
  export type UserSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSubscription to update in case it exists.
     */
    where: UserSubscriptionWhereUniqueInput
    /**
     * In case the UserSubscription found by the `where` argument doesn't exist, create a new UserSubscription with this data.
     */
    create: XOR<UserSubscriptionCreateInput, UserSubscriptionUncheckedCreateInput>
    /**
     * In case the UserSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSubscriptionUpdateInput, UserSubscriptionUncheckedUpdateInput>
  }

  /**
   * UserSubscription delete
   */
  export type UserSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which UserSubscription to delete.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription deleteMany
   */
  export type UserSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSubscriptions to delete
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * UserSubscription without action
   */
  export type UserSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
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
    hasActiveSubscription: 'hasActiveSubscription',
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


  export const AvailableSubscriptionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    price: 'price',
    period: 'period'
  };

  export type AvailableSubscriptionScalarFieldEnum = (typeof AvailableSubscriptionScalarFieldEnum)[keyof typeof AvailableSubscriptionScalarFieldEnum]


  export const SubscriptionTransactionsScalarFieldEnum: {
    id: 'id',
    subscriptionId: 'subscriptionId',
    userId: 'userId',
    externalTransactionId: 'externalTransactionId',
    paymentSystem: 'paymentSystem',
    status: 'status',
    paymentDate: 'paymentDate',
    createdAt: 'createdAt',
    url: 'url'
  };

  export type SubscriptionTransactionsScalarFieldEnum = (typeof SubscriptionTransactionsScalarFieldEnum)[keyof typeof SubscriptionTransactionsScalarFieldEnum]


  export const UserSubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    subscriptionId: 'subscriptionId',
    transactionId: 'transactionId',
    subscriptionStartDate: 'subscriptionStartDate',
    subscriptionEndDate: 'subscriptionEndDate',
    nextPaymentDate: 'nextPaymentDate',
    autoRenewal: 'autoRenewal',
    notified: 'notified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserSubscriptionScalarFieldEnum = (typeof UserSubscriptionScalarFieldEnum)[keyof typeof UserSubscriptionScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DeletionStatus'
   */
  export type EnumDeletionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeletionStatus'>
    


  /**
   * Reference to a field of type 'DeletionStatus[]'
   */
  export type ListEnumDeletionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeletionStatus[]'>
    


  /**
   * Reference to a field of type 'SubscriptionPeriod'
   */
  export type EnumSubscriptionPeriodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionPeriod'>
    


  /**
   * Reference to a field of type 'SubscriptionPeriod[]'
   */
  export type ListEnumSubscriptionPeriodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionPeriod[]'>
    


  /**
   * Reference to a field of type 'PaymentSystem'
   */
  export type EnumPaymentSystemFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentSystem'>
    


  /**
   * Reference to a field of type 'PaymentSystem[]'
   */
  export type ListEnumPaymentSystemFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentSystem[]'>
    


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
    hasActiveSubscription?: BoolFilter<"User"> | boolean
    deletionStatus?: EnumDeletionStatusFilter<"User"> | $Enums.DeletionStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userMetadata?: XOR<UserMetadataNullableScalarRelationFilter, UserMetadataWhereInput> | null
    authAccounts?: AuthAccountListRelationFilter
    devices?: DeviceListRelationFilter
    posts?: PostListRelationFilter
    userAvatars?: UserAvatarListRelationFilter
    subscription?: UserSubscriptionListRelationFilter
    payments?: SubscriptionTransactionsListRelationFilter
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
    hasActiveSubscription?: SortOrder
    deletionStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userMetadata?: UserMetadataOrderByWithRelationInput
    authAccounts?: AuthAccountOrderByRelationAggregateInput
    devices?: DeviceOrderByRelationAggregateInput
    posts?: PostOrderByRelationAggregateInput
    userAvatars?: UserAvatarOrderByRelationAggregateInput
    subscription?: UserSubscriptionOrderByRelationAggregateInput
    payments?: SubscriptionTransactionsOrderByRelationAggregateInput
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
    hasActiveSubscription?: BoolFilter<"User"> | boolean
    deletionStatus?: EnumDeletionStatusFilter<"User"> | $Enums.DeletionStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userMetadata?: XOR<UserMetadataNullableScalarRelationFilter, UserMetadataWhereInput> | null
    authAccounts?: AuthAccountListRelationFilter
    devices?: DeviceListRelationFilter
    posts?: PostListRelationFilter
    userAvatars?: UserAvatarListRelationFilter
    subscription?: UserSubscriptionListRelationFilter
    payments?: SubscriptionTransactionsListRelationFilter
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
    hasActiveSubscription?: SortOrder
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
    hasActiveSubscription?: BoolWithAggregatesFilter<"User"> | boolean
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

  export type AvailableSubscriptionWhereInput = {
    AND?: AvailableSubscriptionWhereInput | AvailableSubscriptionWhereInput[]
    OR?: AvailableSubscriptionWhereInput[]
    NOT?: AvailableSubscriptionWhereInput | AvailableSubscriptionWhereInput[]
    id?: IntFilter<"AvailableSubscription"> | number
    title?: StringFilter<"AvailableSubscription"> | string
    price?: IntFilter<"AvailableSubscription"> | number
    period?: EnumSubscriptionPeriodFilter<"AvailableSubscription"> | $Enums.SubscriptionPeriod
    subscriptionTransactions?: SubscriptionTransactionsListRelationFilter
    userSubscriptions?: UserSubscriptionListRelationFilter
  }

  export type AvailableSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    period?: SortOrder
    subscriptionTransactions?: SubscriptionTransactionsOrderByRelationAggregateInput
    userSubscriptions?: UserSubscriptionOrderByRelationAggregateInput
  }

  export type AvailableSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AvailableSubscriptionWhereInput | AvailableSubscriptionWhereInput[]
    OR?: AvailableSubscriptionWhereInput[]
    NOT?: AvailableSubscriptionWhereInput | AvailableSubscriptionWhereInput[]
    title?: StringFilter<"AvailableSubscription"> | string
    price?: IntFilter<"AvailableSubscription"> | number
    period?: EnumSubscriptionPeriodFilter<"AvailableSubscription"> | $Enums.SubscriptionPeriod
    subscriptionTransactions?: SubscriptionTransactionsListRelationFilter
    userSubscriptions?: UserSubscriptionListRelationFilter
  }, "id">

  export type AvailableSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    period?: SortOrder
    _count?: AvailableSubscriptionCountOrderByAggregateInput
    _avg?: AvailableSubscriptionAvgOrderByAggregateInput
    _max?: AvailableSubscriptionMaxOrderByAggregateInput
    _min?: AvailableSubscriptionMinOrderByAggregateInput
    _sum?: AvailableSubscriptionSumOrderByAggregateInput
  }

  export type AvailableSubscriptionScalarWhereWithAggregatesInput = {
    AND?: AvailableSubscriptionScalarWhereWithAggregatesInput | AvailableSubscriptionScalarWhereWithAggregatesInput[]
    OR?: AvailableSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: AvailableSubscriptionScalarWhereWithAggregatesInput | AvailableSubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AvailableSubscription"> | number
    title?: StringWithAggregatesFilter<"AvailableSubscription"> | string
    price?: IntWithAggregatesFilter<"AvailableSubscription"> | number
    period?: EnumSubscriptionPeriodWithAggregatesFilter<"AvailableSubscription"> | $Enums.SubscriptionPeriod
  }

  export type SubscriptionTransactionsWhereInput = {
    AND?: SubscriptionTransactionsWhereInput | SubscriptionTransactionsWhereInput[]
    OR?: SubscriptionTransactionsWhereInput[]
    NOT?: SubscriptionTransactionsWhereInput | SubscriptionTransactionsWhereInput[]
    id?: IntFilter<"SubscriptionTransactions"> | number
    subscriptionId?: IntFilter<"SubscriptionTransactions"> | number
    userId?: IntFilter<"SubscriptionTransactions"> | number
    externalTransactionId?: StringNullableFilter<"SubscriptionTransactions"> | string | null
    paymentSystem?: EnumPaymentSystemFilter<"SubscriptionTransactions"> | $Enums.PaymentSystem
    status?: EnumPaymentStatusFilter<"SubscriptionTransactions"> | $Enums.PaymentStatus
    paymentDate?: DateTimeNullableFilter<"SubscriptionTransactions"> | Date | string | null
    createdAt?: DateTimeFilter<"SubscriptionTransactions"> | Date | string
    url?: StringNullableFilter<"SubscriptionTransactions"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    availableSubscription?: XOR<AvailableSubscriptionScalarRelationFilter, AvailableSubscriptionWhereInput>
    userSubscription?: XOR<UserSubscriptionNullableScalarRelationFilter, UserSubscriptionWhereInput> | null
  }

  export type SubscriptionTransactionsOrderByWithRelationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    userId?: SortOrder
    externalTransactionId?: SortOrderInput | SortOrder
    paymentSystem?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    url?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    availableSubscription?: AvailableSubscriptionOrderByWithRelationInput
    userSubscription?: UserSubscriptionOrderByWithRelationInput
  }

  export type SubscriptionTransactionsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubscriptionTransactionsWhereInput | SubscriptionTransactionsWhereInput[]
    OR?: SubscriptionTransactionsWhereInput[]
    NOT?: SubscriptionTransactionsWhereInput | SubscriptionTransactionsWhereInput[]
    subscriptionId?: IntFilter<"SubscriptionTransactions"> | number
    userId?: IntFilter<"SubscriptionTransactions"> | number
    externalTransactionId?: StringNullableFilter<"SubscriptionTransactions"> | string | null
    paymentSystem?: EnumPaymentSystemFilter<"SubscriptionTransactions"> | $Enums.PaymentSystem
    status?: EnumPaymentStatusFilter<"SubscriptionTransactions"> | $Enums.PaymentStatus
    paymentDate?: DateTimeNullableFilter<"SubscriptionTransactions"> | Date | string | null
    createdAt?: DateTimeFilter<"SubscriptionTransactions"> | Date | string
    url?: StringNullableFilter<"SubscriptionTransactions"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    availableSubscription?: XOR<AvailableSubscriptionScalarRelationFilter, AvailableSubscriptionWhereInput>
    userSubscription?: XOR<UserSubscriptionNullableScalarRelationFilter, UserSubscriptionWhereInput> | null
  }, "id">

  export type SubscriptionTransactionsOrderByWithAggregationInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    userId?: SortOrder
    externalTransactionId?: SortOrderInput | SortOrder
    paymentSystem?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    url?: SortOrderInput | SortOrder
    _count?: SubscriptionTransactionsCountOrderByAggregateInput
    _avg?: SubscriptionTransactionsAvgOrderByAggregateInput
    _max?: SubscriptionTransactionsMaxOrderByAggregateInput
    _min?: SubscriptionTransactionsMinOrderByAggregateInput
    _sum?: SubscriptionTransactionsSumOrderByAggregateInput
  }

  export type SubscriptionTransactionsScalarWhereWithAggregatesInput = {
    AND?: SubscriptionTransactionsScalarWhereWithAggregatesInput | SubscriptionTransactionsScalarWhereWithAggregatesInput[]
    OR?: SubscriptionTransactionsScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionTransactionsScalarWhereWithAggregatesInput | SubscriptionTransactionsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SubscriptionTransactions"> | number
    subscriptionId?: IntWithAggregatesFilter<"SubscriptionTransactions"> | number
    userId?: IntWithAggregatesFilter<"SubscriptionTransactions"> | number
    externalTransactionId?: StringNullableWithAggregatesFilter<"SubscriptionTransactions"> | string | null
    paymentSystem?: EnumPaymentSystemWithAggregatesFilter<"SubscriptionTransactions"> | $Enums.PaymentSystem
    status?: EnumPaymentStatusWithAggregatesFilter<"SubscriptionTransactions"> | $Enums.PaymentStatus
    paymentDate?: DateTimeNullableWithAggregatesFilter<"SubscriptionTransactions"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SubscriptionTransactions"> | Date | string
    url?: StringNullableWithAggregatesFilter<"SubscriptionTransactions"> | string | null
  }

  export type UserSubscriptionWhereInput = {
    AND?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    OR?: UserSubscriptionWhereInput[]
    NOT?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    id?: IntFilter<"UserSubscription"> | number
    userId?: IntFilter<"UserSubscription"> | number
    subscriptionId?: IntFilter<"UserSubscription"> | number
    transactionId?: IntFilter<"UserSubscription"> | number
    subscriptionStartDate?: DateTimeFilter<"UserSubscription"> | Date | string
    subscriptionEndDate?: DateTimeFilter<"UserSubscription"> | Date | string
    nextPaymentDate?: DateTimeNullableFilter<"UserSubscription"> | Date | string | null
    autoRenewal?: BoolFilter<"UserSubscription"> | boolean
    notified?: BoolFilter<"UserSubscription"> | boolean
    createdAt?: DateTimeFilter<"UserSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"UserSubscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    availableSubscription?: XOR<AvailableSubscriptionScalarRelationFilter, AvailableSubscriptionWhereInput>
    subscriptionTransactions?: XOR<SubscriptionTransactionsScalarRelationFilter, SubscriptionTransactionsWhereInput>
  }

  export type UserSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    transactionId?: SortOrder
    subscriptionStartDate?: SortOrder
    subscriptionEndDate?: SortOrder
    nextPaymentDate?: SortOrderInput | SortOrder
    autoRenewal?: SortOrder
    notified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    availableSubscription?: AvailableSubscriptionOrderByWithRelationInput
    subscriptionTransactions?: SubscriptionTransactionsOrderByWithRelationInput
  }

  export type UserSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    transactionId?: number
    AND?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    OR?: UserSubscriptionWhereInput[]
    NOT?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    userId?: IntFilter<"UserSubscription"> | number
    subscriptionId?: IntFilter<"UserSubscription"> | number
    subscriptionStartDate?: DateTimeFilter<"UserSubscription"> | Date | string
    subscriptionEndDate?: DateTimeFilter<"UserSubscription"> | Date | string
    nextPaymentDate?: DateTimeNullableFilter<"UserSubscription"> | Date | string | null
    autoRenewal?: BoolFilter<"UserSubscription"> | boolean
    notified?: BoolFilter<"UserSubscription"> | boolean
    createdAt?: DateTimeFilter<"UserSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"UserSubscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    availableSubscription?: XOR<AvailableSubscriptionScalarRelationFilter, AvailableSubscriptionWhereInput>
    subscriptionTransactions?: XOR<SubscriptionTransactionsScalarRelationFilter, SubscriptionTransactionsWhereInput>
  }, "id" | "transactionId">

  export type UserSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    transactionId?: SortOrder
    subscriptionStartDate?: SortOrder
    subscriptionEndDate?: SortOrder
    nextPaymentDate?: SortOrderInput | SortOrder
    autoRenewal?: SortOrder
    notified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserSubscriptionCountOrderByAggregateInput
    _avg?: UserSubscriptionAvgOrderByAggregateInput
    _max?: UserSubscriptionMaxOrderByAggregateInput
    _min?: UserSubscriptionMinOrderByAggregateInput
    _sum?: UserSubscriptionSumOrderByAggregateInput
  }

  export type UserSubscriptionScalarWhereWithAggregatesInput = {
    AND?: UserSubscriptionScalarWhereWithAggregatesInput | UserSubscriptionScalarWhereWithAggregatesInput[]
    OR?: UserSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: UserSubscriptionScalarWhereWithAggregatesInput | UserSubscriptionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserSubscription"> | number
    userId?: IntWithAggregatesFilter<"UserSubscription"> | number
    subscriptionId?: IntWithAggregatesFilter<"UserSubscription"> | number
    transactionId?: IntWithAggregatesFilter<"UserSubscription"> | number
    subscriptionStartDate?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
    subscriptionEndDate?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
    nextPaymentDate?: DateTimeNullableWithAggregatesFilter<"UserSubscription"> | Date | string | null
    autoRenewal?: BoolWithAggregatesFilter<"UserSubscription"> | boolean
    notified?: BoolWithAggregatesFilter<"UserSubscription"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
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
    hasActiveSubscription?: boolean
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarCreateNestedManyWithoutUserInput
    subscription?: UserSubscriptionCreateNestedManyWithoutUserInput
    payments?: SubscriptionTransactionsCreateNestedManyWithoutUserInput
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
    hasActiveSubscription?: boolean
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataUncheckedCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarUncheckedCreateNestedManyWithoutUserInput
    subscription?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: SubscriptionTransactionsUncheckedCreateNestedManyWithoutUserInput
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
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUpdateManyWithoutUserNestedInput
    subscription?: UserSubscriptionUpdateManyWithoutUserNestedInput
    payments?: SubscriptionTransactionsUpdateManyWithoutUserNestedInput
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
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUncheckedUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUncheckedUpdateManyWithoutUserNestedInput
    subscription?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: SubscriptionTransactionsUncheckedUpdateManyWithoutUserNestedInput
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
    hasActiveSubscription?: boolean
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
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
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
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
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

  export type AvailableSubscriptionCreateInput = {
    title: string
    price: number
    period: $Enums.SubscriptionPeriod
    subscriptionTransactions?: SubscriptionTransactionsCreateNestedManyWithoutAvailableSubscriptionInput
    userSubscriptions?: UserSubscriptionCreateNestedManyWithoutAvailableSubscriptionInput
  }

  export type AvailableSubscriptionUncheckedCreateInput = {
    id?: number
    title: string
    price: number
    period: $Enums.SubscriptionPeriod
    subscriptionTransactions?: SubscriptionTransactionsUncheckedCreateNestedManyWithoutAvailableSubscriptionInput
    userSubscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutAvailableSubscriptionInput
  }

  export type AvailableSubscriptionUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    period?: EnumSubscriptionPeriodFieldUpdateOperationsInput | $Enums.SubscriptionPeriod
    subscriptionTransactions?: SubscriptionTransactionsUpdateManyWithoutAvailableSubscriptionNestedInput
    userSubscriptions?: UserSubscriptionUpdateManyWithoutAvailableSubscriptionNestedInput
  }

  export type AvailableSubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    period?: EnumSubscriptionPeriodFieldUpdateOperationsInput | $Enums.SubscriptionPeriod
    subscriptionTransactions?: SubscriptionTransactionsUncheckedUpdateManyWithoutAvailableSubscriptionNestedInput
    userSubscriptions?: UserSubscriptionUncheckedUpdateManyWithoutAvailableSubscriptionNestedInput
  }

  export type AvailableSubscriptionCreateManyInput = {
    id?: number
    title: string
    price: number
    period: $Enums.SubscriptionPeriod
  }

  export type AvailableSubscriptionUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    period?: EnumSubscriptionPeriodFieldUpdateOperationsInput | $Enums.SubscriptionPeriod
  }

  export type AvailableSubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    period?: EnumSubscriptionPeriodFieldUpdateOperationsInput | $Enums.SubscriptionPeriod
  }

  export type SubscriptionTransactionsCreateInput = {
    externalTransactionId?: string | null
    paymentSystem: $Enums.PaymentSystem
    status?: $Enums.PaymentStatus
    paymentDate?: Date | string | null
    createdAt?: Date | string
    url?: string | null
    user: UserCreateNestedOneWithoutPaymentsInput
    availableSubscription: AvailableSubscriptionCreateNestedOneWithoutSubscriptionTransactionsInput
    userSubscription?: UserSubscriptionCreateNestedOneWithoutSubscriptionTransactionsInput
  }

  export type SubscriptionTransactionsUncheckedCreateInput = {
    id?: number
    subscriptionId: number
    userId: number
    externalTransactionId?: string | null
    paymentSystem: $Enums.PaymentSystem
    status?: $Enums.PaymentStatus
    paymentDate?: Date | string | null
    createdAt?: Date | string
    url?: string | null
    userSubscription?: UserSubscriptionUncheckedCreateNestedOneWithoutSubscriptionTransactionsInput
  }

  export type SubscriptionTransactionsUpdateInput = {
    externalTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSystem?: EnumPaymentSystemFieldUpdateOperationsInput | $Enums.PaymentSystem
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    availableSubscription?: AvailableSubscriptionUpdateOneRequiredWithoutSubscriptionTransactionsNestedInput
    userSubscription?: UserSubscriptionUpdateOneWithoutSubscriptionTransactionsNestedInput
  }

  export type SubscriptionTransactionsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    externalTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSystem?: EnumPaymentSystemFieldUpdateOperationsInput | $Enums.PaymentSystem
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    userSubscription?: UserSubscriptionUncheckedUpdateOneWithoutSubscriptionTransactionsNestedInput
  }

  export type SubscriptionTransactionsCreateManyInput = {
    id?: number
    subscriptionId: number
    userId: number
    externalTransactionId?: string | null
    paymentSystem: $Enums.PaymentSystem
    status?: $Enums.PaymentStatus
    paymentDate?: Date | string | null
    createdAt?: Date | string
    url?: string | null
  }

  export type SubscriptionTransactionsUpdateManyMutationInput = {
    externalTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSystem?: EnumPaymentSystemFieldUpdateOperationsInput | $Enums.PaymentSystem
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionTransactionsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    externalTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSystem?: EnumPaymentSystemFieldUpdateOperationsInput | $Enums.PaymentSystem
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSubscriptionCreateInput = {
    subscriptionStartDate: Date | string
    subscriptionEndDate: Date | string
    nextPaymentDate?: Date | string | null
    autoRenewal?: boolean
    notified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionInput
    availableSubscription: AvailableSubscriptionCreateNestedOneWithoutUserSubscriptionsInput
    subscriptionTransactions: SubscriptionTransactionsCreateNestedOneWithoutUserSubscriptionInput
  }

  export type UserSubscriptionUncheckedCreateInput = {
    id?: number
    userId: number
    subscriptionId: number
    transactionId: number
    subscriptionStartDate: Date | string
    subscriptionEndDate: Date | string
    nextPaymentDate?: Date | string | null
    autoRenewal?: boolean
    notified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubscriptionUpdateInput = {
    subscriptionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenewal?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
    availableSubscription?: AvailableSubscriptionUpdateOneRequiredWithoutUserSubscriptionsNestedInput
    subscriptionTransactions?: SubscriptionTransactionsUpdateOneRequiredWithoutUserSubscriptionNestedInput
  }

  export type UserSubscriptionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    subscriptionId?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    subscriptionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenewal?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionCreateManyInput = {
    id?: number
    userId: number
    subscriptionId: number
    transactionId: number
    subscriptionStartDate: Date | string
    subscriptionEndDate: Date | string
    nextPaymentDate?: Date | string | null
    autoRenewal?: boolean
    notified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubscriptionUpdateManyMutationInput = {
    subscriptionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenewal?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    subscriptionId?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    subscriptionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenewal?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserSubscriptionListRelationFilter = {
    every?: UserSubscriptionWhereInput
    some?: UserSubscriptionWhereInput
    none?: UserSubscriptionWhereInput
  }

  export type SubscriptionTransactionsListRelationFilter = {
    every?: SubscriptionTransactionsWhereInput
    some?: SubscriptionTransactionsWhereInput
    none?: SubscriptionTransactionsWhereInput
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

  export type UserSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionTransactionsOrderByRelationAggregateInput = {
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
    hasActiveSubscription?: SortOrder
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
    hasActiveSubscription?: SortOrder
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
    hasActiveSubscription?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumSubscriptionPeriodFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPeriod | EnumSubscriptionPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPeriod[] | ListEnumSubscriptionPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPeriod[] | ListEnumSubscriptionPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPeriodFilter<$PrismaModel> | $Enums.SubscriptionPeriod
  }

  export type AvailableSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    period?: SortOrder
  }

  export type AvailableSubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type AvailableSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    period?: SortOrder
  }

  export type AvailableSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    price?: SortOrder
    period?: SortOrder
  }

  export type AvailableSubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
  }

  export type EnumSubscriptionPeriodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPeriod | EnumSubscriptionPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPeriod[] | ListEnumSubscriptionPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPeriod[] | ListEnumSubscriptionPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPeriodWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionPeriod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionPeriodFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionPeriodFilter<$PrismaModel>
  }

  export type EnumPaymentSystemFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentSystem | EnumPaymentSystemFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentSystem[] | ListEnumPaymentSystemFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentSystem[] | ListEnumPaymentSystemFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentSystemFilter<$PrismaModel> | $Enums.PaymentSystem
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type AvailableSubscriptionScalarRelationFilter = {
    is?: AvailableSubscriptionWhereInput
    isNot?: AvailableSubscriptionWhereInput
  }

  export type UserSubscriptionNullableScalarRelationFilter = {
    is?: UserSubscriptionWhereInput | null
    isNot?: UserSubscriptionWhereInput | null
  }

  export type SubscriptionTransactionsCountOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    userId?: SortOrder
    externalTransactionId?: SortOrder
    paymentSystem?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
  }

  export type SubscriptionTransactionsAvgOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    userId?: SortOrder
  }

  export type SubscriptionTransactionsMaxOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    userId?: SortOrder
    externalTransactionId?: SortOrder
    paymentSystem?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
  }

  export type SubscriptionTransactionsMinOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    userId?: SortOrder
    externalTransactionId?: SortOrder
    paymentSystem?: SortOrder
    status?: SortOrder
    paymentDate?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
  }

  export type SubscriptionTransactionsSumOrderByAggregateInput = {
    id?: SortOrder
    subscriptionId?: SortOrder
    userId?: SortOrder
  }

  export type EnumPaymentSystemWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentSystem | EnumPaymentSystemFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentSystem[] | ListEnumPaymentSystemFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentSystem[] | ListEnumPaymentSystemFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentSystemWithAggregatesFilter<$PrismaModel> | $Enums.PaymentSystem
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentSystemFilter<$PrismaModel>
    _max?: NestedEnumPaymentSystemFilter<$PrismaModel>
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

  export type SubscriptionTransactionsScalarRelationFilter = {
    is?: SubscriptionTransactionsWhereInput
    isNot?: SubscriptionTransactionsWhereInput
  }

  export type UserSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    transactionId?: SortOrder
    subscriptionStartDate?: SortOrder
    subscriptionEndDate?: SortOrder
    nextPaymentDate?: SortOrder
    autoRenewal?: SortOrder
    notified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSubscriptionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    transactionId?: SortOrder
  }

  export type UserSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    transactionId?: SortOrder
    subscriptionStartDate?: SortOrder
    subscriptionEndDate?: SortOrder
    nextPaymentDate?: SortOrder
    autoRenewal?: SortOrder
    notified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    transactionId?: SortOrder
    subscriptionStartDate?: SortOrder
    subscriptionEndDate?: SortOrder
    nextPaymentDate?: SortOrder
    autoRenewal?: SortOrder
    notified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSubscriptionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subscriptionId?: SortOrder
    transactionId?: SortOrder
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

  export type UserSubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type SubscriptionTransactionsCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionTransactionsCreateWithoutUserInput, SubscriptionTransactionsUncheckedCreateWithoutUserInput> | SubscriptionTransactionsCreateWithoutUserInput[] | SubscriptionTransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionTransactionsCreateOrConnectWithoutUserInput | SubscriptionTransactionsCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionTransactionsCreateManyUserInputEnvelope
    connect?: SubscriptionTransactionsWhereUniqueInput | SubscriptionTransactionsWhereUniqueInput[]
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

  export type UserSubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type SubscriptionTransactionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionTransactionsCreateWithoutUserInput, SubscriptionTransactionsUncheckedCreateWithoutUserInput> | SubscriptionTransactionsCreateWithoutUserInput[] | SubscriptionTransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionTransactionsCreateOrConnectWithoutUserInput | SubscriptionTransactionsCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionTransactionsCreateManyUserInputEnvelope
    connect?: SubscriptionTransactionsWhereUniqueInput | SubscriptionTransactionsWhereUniqueInput[]
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

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type UserSubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutUserInput | UserSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutUserInput | UserSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutUserInput | UserSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type SubscriptionTransactionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionTransactionsCreateWithoutUserInput, SubscriptionTransactionsUncheckedCreateWithoutUserInput> | SubscriptionTransactionsCreateWithoutUserInput[] | SubscriptionTransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionTransactionsCreateOrConnectWithoutUserInput | SubscriptionTransactionsCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionTransactionsUpsertWithWhereUniqueWithoutUserInput | SubscriptionTransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionTransactionsCreateManyUserInputEnvelope
    set?: SubscriptionTransactionsWhereUniqueInput | SubscriptionTransactionsWhereUniqueInput[]
    disconnect?: SubscriptionTransactionsWhereUniqueInput | SubscriptionTransactionsWhereUniqueInput[]
    delete?: SubscriptionTransactionsWhereUniqueInput | SubscriptionTransactionsWhereUniqueInput[]
    connect?: SubscriptionTransactionsWhereUniqueInput | SubscriptionTransactionsWhereUniqueInput[]
    update?: SubscriptionTransactionsUpdateWithWhereUniqueWithoutUserInput | SubscriptionTransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionTransactionsUpdateManyWithWhereWithoutUserInput | SubscriptionTransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionTransactionsScalarWhereInput | SubscriptionTransactionsScalarWhereInput[]
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

  export type UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput> | UserSubscriptionCreateWithoutUserInput[] | UserSubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput | UserSubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutUserInput | UserSubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserSubscriptionCreateManyUserInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutUserInput | UserSubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutUserInput | UserSubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type SubscriptionTransactionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionTransactionsCreateWithoutUserInput, SubscriptionTransactionsUncheckedCreateWithoutUserInput> | SubscriptionTransactionsCreateWithoutUserInput[] | SubscriptionTransactionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionTransactionsCreateOrConnectWithoutUserInput | SubscriptionTransactionsCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionTransactionsUpsertWithWhereUniqueWithoutUserInput | SubscriptionTransactionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionTransactionsCreateManyUserInputEnvelope
    set?: SubscriptionTransactionsWhereUniqueInput | SubscriptionTransactionsWhereUniqueInput[]
    disconnect?: SubscriptionTransactionsWhereUniqueInput | SubscriptionTransactionsWhereUniqueInput[]
    delete?: SubscriptionTransactionsWhereUniqueInput | SubscriptionTransactionsWhereUniqueInput[]
    connect?: SubscriptionTransactionsWhereUniqueInput | SubscriptionTransactionsWhereUniqueInput[]
    update?: SubscriptionTransactionsUpdateWithWhereUniqueWithoutUserInput | SubscriptionTransactionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionTransactionsUpdateManyWithWhereWithoutUserInput | SubscriptionTransactionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionTransactionsScalarWhereInput | SubscriptionTransactionsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserMetadataInput = {
    create?: XOR<UserCreateWithoutUserMetadataInput, UserUncheckedCreateWithoutUserMetadataInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserMetadataInput
    connect?: UserWhereUniqueInput
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

  export type SubscriptionTransactionsCreateNestedManyWithoutAvailableSubscriptionInput = {
    create?: XOR<SubscriptionTransactionsCreateWithoutAvailableSubscriptionInput, SubscriptionTransactionsUncheckedCreateWithoutAvailableSubscriptionInput> | SubscriptionTransactionsCreateWithoutAvailableSubscriptionInput[] | SubscriptionTransactionsUncheckedCreateWithoutAvailableSubscriptionInput[]
    connectOrCreate?: SubscriptionTransactionsCreateOrConnectWithoutAvailableSubscriptionInput | SubscriptionTransactionsCreateOrConnectWithoutAvailableSubscriptionInput[]
    createMany?: SubscriptionTransactionsCreateManyAvailableSubscriptionInputEnvelope
    connect?: SubscriptionTransactionsWhereUniqueInput | SubscriptionTransactionsWhereUniqueInput[]
  }

  export type UserSubscriptionCreateNestedManyWithoutAvailableSubscriptionInput = {
    create?: XOR<UserSubscriptionCreateWithoutAvailableSubscriptionInput, UserSubscriptionUncheckedCreateWithoutAvailableSubscriptionInput> | UserSubscriptionCreateWithoutAvailableSubscriptionInput[] | UserSubscriptionUncheckedCreateWithoutAvailableSubscriptionInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutAvailableSubscriptionInput | UserSubscriptionCreateOrConnectWithoutAvailableSubscriptionInput[]
    createMany?: UserSubscriptionCreateManyAvailableSubscriptionInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type SubscriptionTransactionsUncheckedCreateNestedManyWithoutAvailableSubscriptionInput = {
    create?: XOR<SubscriptionTransactionsCreateWithoutAvailableSubscriptionInput, SubscriptionTransactionsUncheckedCreateWithoutAvailableSubscriptionInput> | SubscriptionTransactionsCreateWithoutAvailableSubscriptionInput[] | SubscriptionTransactionsUncheckedCreateWithoutAvailableSubscriptionInput[]
    connectOrCreate?: SubscriptionTransactionsCreateOrConnectWithoutAvailableSubscriptionInput | SubscriptionTransactionsCreateOrConnectWithoutAvailableSubscriptionInput[]
    createMany?: SubscriptionTransactionsCreateManyAvailableSubscriptionInputEnvelope
    connect?: SubscriptionTransactionsWhereUniqueInput | SubscriptionTransactionsWhereUniqueInput[]
  }

  export type UserSubscriptionUncheckedCreateNestedManyWithoutAvailableSubscriptionInput = {
    create?: XOR<UserSubscriptionCreateWithoutAvailableSubscriptionInput, UserSubscriptionUncheckedCreateWithoutAvailableSubscriptionInput> | UserSubscriptionCreateWithoutAvailableSubscriptionInput[] | UserSubscriptionUncheckedCreateWithoutAvailableSubscriptionInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutAvailableSubscriptionInput | UserSubscriptionCreateOrConnectWithoutAvailableSubscriptionInput[]
    createMany?: UserSubscriptionCreateManyAvailableSubscriptionInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type EnumSubscriptionPeriodFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionPeriod
  }

  export type SubscriptionTransactionsUpdateManyWithoutAvailableSubscriptionNestedInput = {
    create?: XOR<SubscriptionTransactionsCreateWithoutAvailableSubscriptionInput, SubscriptionTransactionsUncheckedCreateWithoutAvailableSubscriptionInput> | SubscriptionTransactionsCreateWithoutAvailableSubscriptionInput[] | SubscriptionTransactionsUncheckedCreateWithoutAvailableSubscriptionInput[]
    connectOrCreate?: SubscriptionTransactionsCreateOrConnectWithoutAvailableSubscriptionInput | SubscriptionTransactionsCreateOrConnectWithoutAvailableSubscriptionInput[]
    upsert?: SubscriptionTransactionsUpsertWithWhereUniqueWithoutAvailableSubscriptionInput | SubscriptionTransactionsUpsertWithWhereUniqueWithoutAvailableSubscriptionInput[]
    createMany?: SubscriptionTransactionsCreateManyAvailableSubscriptionInputEnvelope
    set?: SubscriptionTransactionsWhereUniqueInput | SubscriptionTransactionsWhereUniqueInput[]
    disconnect?: SubscriptionTransactionsWhereUniqueInput | SubscriptionTransactionsWhereUniqueInput[]
    delete?: SubscriptionTransactionsWhereUniqueInput | SubscriptionTransactionsWhereUniqueInput[]
    connect?: SubscriptionTransactionsWhereUniqueInput | SubscriptionTransactionsWhereUniqueInput[]
    update?: SubscriptionTransactionsUpdateWithWhereUniqueWithoutAvailableSubscriptionInput | SubscriptionTransactionsUpdateWithWhereUniqueWithoutAvailableSubscriptionInput[]
    updateMany?: SubscriptionTransactionsUpdateManyWithWhereWithoutAvailableSubscriptionInput | SubscriptionTransactionsUpdateManyWithWhereWithoutAvailableSubscriptionInput[]
    deleteMany?: SubscriptionTransactionsScalarWhereInput | SubscriptionTransactionsScalarWhereInput[]
  }

  export type UserSubscriptionUpdateManyWithoutAvailableSubscriptionNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutAvailableSubscriptionInput, UserSubscriptionUncheckedCreateWithoutAvailableSubscriptionInput> | UserSubscriptionCreateWithoutAvailableSubscriptionInput[] | UserSubscriptionUncheckedCreateWithoutAvailableSubscriptionInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutAvailableSubscriptionInput | UserSubscriptionCreateOrConnectWithoutAvailableSubscriptionInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutAvailableSubscriptionInput | UserSubscriptionUpsertWithWhereUniqueWithoutAvailableSubscriptionInput[]
    createMany?: UserSubscriptionCreateManyAvailableSubscriptionInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutAvailableSubscriptionInput | UserSubscriptionUpdateWithWhereUniqueWithoutAvailableSubscriptionInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutAvailableSubscriptionInput | UserSubscriptionUpdateManyWithWhereWithoutAvailableSubscriptionInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type SubscriptionTransactionsUncheckedUpdateManyWithoutAvailableSubscriptionNestedInput = {
    create?: XOR<SubscriptionTransactionsCreateWithoutAvailableSubscriptionInput, SubscriptionTransactionsUncheckedCreateWithoutAvailableSubscriptionInput> | SubscriptionTransactionsCreateWithoutAvailableSubscriptionInput[] | SubscriptionTransactionsUncheckedCreateWithoutAvailableSubscriptionInput[]
    connectOrCreate?: SubscriptionTransactionsCreateOrConnectWithoutAvailableSubscriptionInput | SubscriptionTransactionsCreateOrConnectWithoutAvailableSubscriptionInput[]
    upsert?: SubscriptionTransactionsUpsertWithWhereUniqueWithoutAvailableSubscriptionInput | SubscriptionTransactionsUpsertWithWhereUniqueWithoutAvailableSubscriptionInput[]
    createMany?: SubscriptionTransactionsCreateManyAvailableSubscriptionInputEnvelope
    set?: SubscriptionTransactionsWhereUniqueInput | SubscriptionTransactionsWhereUniqueInput[]
    disconnect?: SubscriptionTransactionsWhereUniqueInput | SubscriptionTransactionsWhereUniqueInput[]
    delete?: SubscriptionTransactionsWhereUniqueInput | SubscriptionTransactionsWhereUniqueInput[]
    connect?: SubscriptionTransactionsWhereUniqueInput | SubscriptionTransactionsWhereUniqueInput[]
    update?: SubscriptionTransactionsUpdateWithWhereUniqueWithoutAvailableSubscriptionInput | SubscriptionTransactionsUpdateWithWhereUniqueWithoutAvailableSubscriptionInput[]
    updateMany?: SubscriptionTransactionsUpdateManyWithWhereWithoutAvailableSubscriptionInput | SubscriptionTransactionsUpdateManyWithWhereWithoutAvailableSubscriptionInput[]
    deleteMany?: SubscriptionTransactionsScalarWhereInput | SubscriptionTransactionsScalarWhereInput[]
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutAvailableSubscriptionNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutAvailableSubscriptionInput, UserSubscriptionUncheckedCreateWithoutAvailableSubscriptionInput> | UserSubscriptionCreateWithoutAvailableSubscriptionInput[] | UserSubscriptionUncheckedCreateWithoutAvailableSubscriptionInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutAvailableSubscriptionInput | UserSubscriptionCreateOrConnectWithoutAvailableSubscriptionInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutAvailableSubscriptionInput | UserSubscriptionUpsertWithWhereUniqueWithoutAvailableSubscriptionInput[]
    createMany?: UserSubscriptionCreateManyAvailableSubscriptionInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutAvailableSubscriptionInput | UserSubscriptionUpdateWithWhereUniqueWithoutAvailableSubscriptionInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutAvailableSubscriptionInput | UserSubscriptionUpdateManyWithWhereWithoutAvailableSubscriptionInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type AvailableSubscriptionCreateNestedOneWithoutSubscriptionTransactionsInput = {
    create?: XOR<AvailableSubscriptionCreateWithoutSubscriptionTransactionsInput, AvailableSubscriptionUncheckedCreateWithoutSubscriptionTransactionsInput>
    connectOrCreate?: AvailableSubscriptionCreateOrConnectWithoutSubscriptionTransactionsInput
    connect?: AvailableSubscriptionWhereUniqueInput
  }

  export type UserSubscriptionCreateNestedOneWithoutSubscriptionTransactionsInput = {
    create?: XOR<UserSubscriptionCreateWithoutSubscriptionTransactionsInput, UserSubscriptionUncheckedCreateWithoutSubscriptionTransactionsInput>
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutSubscriptionTransactionsInput
    connect?: UserSubscriptionWhereUniqueInput
  }

  export type UserSubscriptionUncheckedCreateNestedOneWithoutSubscriptionTransactionsInput = {
    create?: XOR<UserSubscriptionCreateWithoutSubscriptionTransactionsInput, UserSubscriptionUncheckedCreateWithoutSubscriptionTransactionsInput>
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutSubscriptionTransactionsInput
    connect?: UserSubscriptionWhereUniqueInput
  }

  export type EnumPaymentSystemFieldUpdateOperationsInput = {
    set?: $Enums.PaymentSystem
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

  export type AvailableSubscriptionUpdateOneRequiredWithoutSubscriptionTransactionsNestedInput = {
    create?: XOR<AvailableSubscriptionCreateWithoutSubscriptionTransactionsInput, AvailableSubscriptionUncheckedCreateWithoutSubscriptionTransactionsInput>
    connectOrCreate?: AvailableSubscriptionCreateOrConnectWithoutSubscriptionTransactionsInput
    upsert?: AvailableSubscriptionUpsertWithoutSubscriptionTransactionsInput
    connect?: AvailableSubscriptionWhereUniqueInput
    update?: XOR<XOR<AvailableSubscriptionUpdateToOneWithWhereWithoutSubscriptionTransactionsInput, AvailableSubscriptionUpdateWithoutSubscriptionTransactionsInput>, AvailableSubscriptionUncheckedUpdateWithoutSubscriptionTransactionsInput>
  }

  export type UserSubscriptionUpdateOneWithoutSubscriptionTransactionsNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutSubscriptionTransactionsInput, UserSubscriptionUncheckedCreateWithoutSubscriptionTransactionsInput>
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutSubscriptionTransactionsInput
    upsert?: UserSubscriptionUpsertWithoutSubscriptionTransactionsInput
    disconnect?: UserSubscriptionWhereInput | boolean
    delete?: UserSubscriptionWhereInput | boolean
    connect?: UserSubscriptionWhereUniqueInput
    update?: XOR<XOR<UserSubscriptionUpdateToOneWithWhereWithoutSubscriptionTransactionsInput, UserSubscriptionUpdateWithoutSubscriptionTransactionsInput>, UserSubscriptionUncheckedUpdateWithoutSubscriptionTransactionsInput>
  }

  export type UserSubscriptionUncheckedUpdateOneWithoutSubscriptionTransactionsNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutSubscriptionTransactionsInput, UserSubscriptionUncheckedCreateWithoutSubscriptionTransactionsInput>
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutSubscriptionTransactionsInput
    upsert?: UserSubscriptionUpsertWithoutSubscriptionTransactionsInput
    disconnect?: UserSubscriptionWhereInput | boolean
    delete?: UserSubscriptionWhereInput | boolean
    connect?: UserSubscriptionWhereUniqueInput
    update?: XOR<XOR<UserSubscriptionUpdateToOneWithWhereWithoutSubscriptionTransactionsInput, UserSubscriptionUpdateWithoutSubscriptionTransactionsInput>, UserSubscriptionUncheckedUpdateWithoutSubscriptionTransactionsInput>
  }

  export type UserCreateNestedOneWithoutSubscriptionInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type AvailableSubscriptionCreateNestedOneWithoutUserSubscriptionsInput = {
    create?: XOR<AvailableSubscriptionCreateWithoutUserSubscriptionsInput, AvailableSubscriptionUncheckedCreateWithoutUserSubscriptionsInput>
    connectOrCreate?: AvailableSubscriptionCreateOrConnectWithoutUserSubscriptionsInput
    connect?: AvailableSubscriptionWhereUniqueInput
  }

  export type SubscriptionTransactionsCreateNestedOneWithoutUserSubscriptionInput = {
    create?: XOR<SubscriptionTransactionsCreateWithoutUserSubscriptionInput, SubscriptionTransactionsUncheckedCreateWithoutUserSubscriptionInput>
    connectOrCreate?: SubscriptionTransactionsCreateOrConnectWithoutUserSubscriptionInput
    connect?: SubscriptionTransactionsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionInput
    upsert?: UserUpsertWithoutSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionInput, UserUpdateWithoutSubscriptionInput>, UserUncheckedUpdateWithoutSubscriptionInput>
  }

  export type AvailableSubscriptionUpdateOneRequiredWithoutUserSubscriptionsNestedInput = {
    create?: XOR<AvailableSubscriptionCreateWithoutUserSubscriptionsInput, AvailableSubscriptionUncheckedCreateWithoutUserSubscriptionsInput>
    connectOrCreate?: AvailableSubscriptionCreateOrConnectWithoutUserSubscriptionsInput
    upsert?: AvailableSubscriptionUpsertWithoutUserSubscriptionsInput
    connect?: AvailableSubscriptionWhereUniqueInput
    update?: XOR<XOR<AvailableSubscriptionUpdateToOneWithWhereWithoutUserSubscriptionsInput, AvailableSubscriptionUpdateWithoutUserSubscriptionsInput>, AvailableSubscriptionUncheckedUpdateWithoutUserSubscriptionsInput>
  }

  export type SubscriptionTransactionsUpdateOneRequiredWithoutUserSubscriptionNestedInput = {
    create?: XOR<SubscriptionTransactionsCreateWithoutUserSubscriptionInput, SubscriptionTransactionsUncheckedCreateWithoutUserSubscriptionInput>
    connectOrCreate?: SubscriptionTransactionsCreateOrConnectWithoutUserSubscriptionInput
    upsert?: SubscriptionTransactionsUpsertWithoutUserSubscriptionInput
    connect?: SubscriptionTransactionsWhereUniqueInput
    update?: XOR<XOR<SubscriptionTransactionsUpdateToOneWithWhereWithoutUserSubscriptionInput, SubscriptionTransactionsUpdateWithoutUserSubscriptionInput>, SubscriptionTransactionsUncheckedUpdateWithoutUserSubscriptionInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumSubscriptionPeriodFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPeriod | EnumSubscriptionPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPeriod[] | ListEnumSubscriptionPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPeriod[] | ListEnumSubscriptionPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPeriodFilter<$PrismaModel> | $Enums.SubscriptionPeriod
  }

  export type NestedEnumSubscriptionPeriodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionPeriod | EnumSubscriptionPeriodFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionPeriod[] | ListEnumSubscriptionPeriodFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionPeriod[] | ListEnumSubscriptionPeriodFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionPeriodWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionPeriod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionPeriodFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionPeriodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentSystemFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentSystem | EnumPaymentSystemFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentSystem[] | ListEnumPaymentSystemFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentSystem[] | ListEnumPaymentSystemFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentSystemFilter<$PrismaModel> | $Enums.PaymentSystem
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentSystemWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentSystem | EnumPaymentSystemFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentSystem[] | ListEnumPaymentSystemFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentSystem[] | ListEnumPaymentSystemFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentSystemWithAggregatesFilter<$PrismaModel> | $Enums.PaymentSystem
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentSystemFilter<$PrismaModel>
    _max?: NestedEnumPaymentSystemFilter<$PrismaModel>
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

  export type UserSubscriptionCreateWithoutUserInput = {
    subscriptionStartDate: Date | string
    subscriptionEndDate: Date | string
    nextPaymentDate?: Date | string | null
    autoRenewal?: boolean
    notified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    availableSubscription: AvailableSubscriptionCreateNestedOneWithoutUserSubscriptionsInput
    subscriptionTransactions: SubscriptionTransactionsCreateNestedOneWithoutUserSubscriptionInput
  }

  export type UserSubscriptionUncheckedCreateWithoutUserInput = {
    id?: number
    subscriptionId: number
    transactionId: number
    subscriptionStartDate: Date | string
    subscriptionEndDate: Date | string
    nextPaymentDate?: Date | string | null
    autoRenewal?: boolean
    notified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubscriptionCreateOrConnectWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    create: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type UserSubscriptionCreateManyUserInputEnvelope = {
    data: UserSubscriptionCreateManyUserInput | UserSubscriptionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionTransactionsCreateWithoutUserInput = {
    externalTransactionId?: string | null
    paymentSystem: $Enums.PaymentSystem
    status?: $Enums.PaymentStatus
    paymentDate?: Date | string | null
    createdAt?: Date | string
    url?: string | null
    availableSubscription: AvailableSubscriptionCreateNestedOneWithoutSubscriptionTransactionsInput
    userSubscription?: UserSubscriptionCreateNestedOneWithoutSubscriptionTransactionsInput
  }

  export type SubscriptionTransactionsUncheckedCreateWithoutUserInput = {
    id?: number
    subscriptionId: number
    externalTransactionId?: string | null
    paymentSystem: $Enums.PaymentSystem
    status?: $Enums.PaymentStatus
    paymentDate?: Date | string | null
    createdAt?: Date | string
    url?: string | null
    userSubscription?: UserSubscriptionUncheckedCreateNestedOneWithoutSubscriptionTransactionsInput
  }

  export type SubscriptionTransactionsCreateOrConnectWithoutUserInput = {
    where: SubscriptionTransactionsWhereUniqueInput
    create: XOR<SubscriptionTransactionsCreateWithoutUserInput, SubscriptionTransactionsUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionTransactionsCreateManyUserInputEnvelope = {
    data: SubscriptionTransactionsCreateManyUserInput | SubscriptionTransactionsCreateManyUserInput[]
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

  export type UserSubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    update: XOR<UserSubscriptionUpdateWithoutUserInput, UserSubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type UserSubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    data: XOR<UserSubscriptionUpdateWithoutUserInput, UserSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type UserSubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: UserSubscriptionScalarWhereInput
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSubscriptionScalarWhereInput = {
    AND?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
    OR?: UserSubscriptionScalarWhereInput[]
    NOT?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
    id?: IntFilter<"UserSubscription"> | number
    userId?: IntFilter<"UserSubscription"> | number
    subscriptionId?: IntFilter<"UserSubscription"> | number
    transactionId?: IntFilter<"UserSubscription"> | number
    subscriptionStartDate?: DateTimeFilter<"UserSubscription"> | Date | string
    subscriptionEndDate?: DateTimeFilter<"UserSubscription"> | Date | string
    nextPaymentDate?: DateTimeNullableFilter<"UserSubscription"> | Date | string | null
    autoRenewal?: BoolFilter<"UserSubscription"> | boolean
    notified?: BoolFilter<"UserSubscription"> | boolean
    createdAt?: DateTimeFilter<"UserSubscription"> | Date | string
    updatedAt?: DateTimeFilter<"UserSubscription"> | Date | string
  }

  export type SubscriptionTransactionsUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionTransactionsWhereUniqueInput
    update: XOR<SubscriptionTransactionsUpdateWithoutUserInput, SubscriptionTransactionsUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionTransactionsCreateWithoutUserInput, SubscriptionTransactionsUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionTransactionsUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionTransactionsWhereUniqueInput
    data: XOR<SubscriptionTransactionsUpdateWithoutUserInput, SubscriptionTransactionsUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionTransactionsUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionTransactionsScalarWhereInput
    data: XOR<SubscriptionTransactionsUpdateManyMutationInput, SubscriptionTransactionsUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionTransactionsScalarWhereInput = {
    AND?: SubscriptionTransactionsScalarWhereInput | SubscriptionTransactionsScalarWhereInput[]
    OR?: SubscriptionTransactionsScalarWhereInput[]
    NOT?: SubscriptionTransactionsScalarWhereInput | SubscriptionTransactionsScalarWhereInput[]
    id?: IntFilter<"SubscriptionTransactions"> | number
    subscriptionId?: IntFilter<"SubscriptionTransactions"> | number
    userId?: IntFilter<"SubscriptionTransactions"> | number
    externalTransactionId?: StringNullableFilter<"SubscriptionTransactions"> | string | null
    paymentSystem?: EnumPaymentSystemFilter<"SubscriptionTransactions"> | $Enums.PaymentSystem
    status?: EnumPaymentStatusFilter<"SubscriptionTransactions"> | $Enums.PaymentStatus
    paymentDate?: DateTimeNullableFilter<"SubscriptionTransactions"> | Date | string | null
    createdAt?: DateTimeFilter<"SubscriptionTransactions"> | Date | string
    url?: StringNullableFilter<"SubscriptionTransactions"> | string | null
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
    hasActiveSubscription?: boolean
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    authAccounts?: AuthAccountCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarCreateNestedManyWithoutUserInput
    subscription?: UserSubscriptionCreateNestedManyWithoutUserInput
    payments?: SubscriptionTransactionsCreateNestedManyWithoutUserInput
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
    hasActiveSubscription?: boolean
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    authAccounts?: AuthAccountUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarUncheckedCreateNestedManyWithoutUserInput
    subscription?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: SubscriptionTransactionsUncheckedCreateNestedManyWithoutUserInput
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
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: AuthAccountUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUpdateManyWithoutUserNestedInput
    subscription?: UserSubscriptionUpdateManyWithoutUserNestedInput
    payments?: SubscriptionTransactionsUpdateManyWithoutUserNestedInput
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
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authAccounts?: AuthAccountUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUncheckedUpdateManyWithoutUserNestedInput
    subscription?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: SubscriptionTransactionsUncheckedUpdateManyWithoutUserNestedInput
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
    hasActiveSubscription?: boolean
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    subscription?: UserSubscriptionCreateNestedManyWithoutUserInput
    payments?: SubscriptionTransactionsCreateNestedManyWithoutUserInput
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
    hasActiveSubscription?: boolean
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataUncheckedCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    subscription?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: SubscriptionTransactionsUncheckedCreateNestedManyWithoutUserInput
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
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    subscription?: UserSubscriptionUpdateManyWithoutUserNestedInput
    payments?: SubscriptionTransactionsUpdateManyWithoutUserNestedInput
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
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUncheckedUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    subscription?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: SubscriptionTransactionsUncheckedUpdateManyWithoutUserNestedInput
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
    hasActiveSubscription?: boolean
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataCreateNestedOneWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarCreateNestedManyWithoutUserInput
    subscription?: UserSubscriptionCreateNestedManyWithoutUserInput
    payments?: SubscriptionTransactionsCreateNestedManyWithoutUserInput
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
    hasActiveSubscription?: boolean
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataUncheckedCreateNestedOneWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarUncheckedCreateNestedManyWithoutUserInput
    subscription?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: SubscriptionTransactionsUncheckedCreateNestedManyWithoutUserInput
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
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUpdateOneWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUpdateManyWithoutUserNestedInput
    subscription?: UserSubscriptionUpdateManyWithoutUserNestedInput
    payments?: SubscriptionTransactionsUpdateManyWithoutUserNestedInput
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
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUncheckedUpdateOneWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUncheckedUpdateManyWithoutUserNestedInput
    subscription?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: SubscriptionTransactionsUncheckedUpdateManyWithoutUserNestedInput
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
    hasActiveSubscription?: boolean
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarCreateNestedManyWithoutUserInput
    subscription?: UserSubscriptionCreateNestedManyWithoutUserInput
    payments?: SubscriptionTransactionsCreateNestedManyWithoutUserInput
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
    hasActiveSubscription?: boolean
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataUncheckedCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarUncheckedCreateNestedManyWithoutUserInput
    subscription?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: SubscriptionTransactionsUncheckedCreateNestedManyWithoutUserInput
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
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUpdateManyWithoutUserNestedInput
    subscription?: UserSubscriptionUpdateManyWithoutUserNestedInput
    payments?: SubscriptionTransactionsUpdateManyWithoutUserNestedInput
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
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUncheckedUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUncheckedUpdateManyWithoutUserNestedInput
    subscription?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: SubscriptionTransactionsUncheckedUpdateManyWithoutUserNestedInput
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
    hasActiveSubscription?: boolean
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarCreateNestedManyWithoutUserInput
    subscription?: UserSubscriptionCreateNestedManyWithoutUserInput
    payments?: SubscriptionTransactionsCreateNestedManyWithoutUserInput
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
    hasActiveSubscription?: boolean
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataUncheckedCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarUncheckedCreateNestedManyWithoutUserInput
    subscription?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
    payments?: SubscriptionTransactionsUncheckedCreateNestedManyWithoutUserInput
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
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUpdateManyWithoutUserNestedInput
    subscription?: UserSubscriptionUpdateManyWithoutUserNestedInput
    payments?: SubscriptionTransactionsUpdateManyWithoutUserNestedInput
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
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUncheckedUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUncheckedUpdateManyWithoutUserNestedInput
    subscription?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
    payments?: SubscriptionTransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type SubscriptionTransactionsCreateWithoutAvailableSubscriptionInput = {
    externalTransactionId?: string | null
    paymentSystem: $Enums.PaymentSystem
    status?: $Enums.PaymentStatus
    paymentDate?: Date | string | null
    createdAt?: Date | string
    url?: string | null
    user: UserCreateNestedOneWithoutPaymentsInput
    userSubscription?: UserSubscriptionCreateNestedOneWithoutSubscriptionTransactionsInput
  }

  export type SubscriptionTransactionsUncheckedCreateWithoutAvailableSubscriptionInput = {
    id?: number
    userId: number
    externalTransactionId?: string | null
    paymentSystem: $Enums.PaymentSystem
    status?: $Enums.PaymentStatus
    paymentDate?: Date | string | null
    createdAt?: Date | string
    url?: string | null
    userSubscription?: UserSubscriptionUncheckedCreateNestedOneWithoutSubscriptionTransactionsInput
  }

  export type SubscriptionTransactionsCreateOrConnectWithoutAvailableSubscriptionInput = {
    where: SubscriptionTransactionsWhereUniqueInput
    create: XOR<SubscriptionTransactionsCreateWithoutAvailableSubscriptionInput, SubscriptionTransactionsUncheckedCreateWithoutAvailableSubscriptionInput>
  }

  export type SubscriptionTransactionsCreateManyAvailableSubscriptionInputEnvelope = {
    data: SubscriptionTransactionsCreateManyAvailableSubscriptionInput | SubscriptionTransactionsCreateManyAvailableSubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type UserSubscriptionCreateWithoutAvailableSubscriptionInput = {
    subscriptionStartDate: Date | string
    subscriptionEndDate: Date | string
    nextPaymentDate?: Date | string | null
    autoRenewal?: boolean
    notified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionInput
    subscriptionTransactions: SubscriptionTransactionsCreateNestedOneWithoutUserSubscriptionInput
  }

  export type UserSubscriptionUncheckedCreateWithoutAvailableSubscriptionInput = {
    id?: number
    userId: number
    transactionId: number
    subscriptionStartDate: Date | string
    subscriptionEndDate: Date | string
    nextPaymentDate?: Date | string | null
    autoRenewal?: boolean
    notified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubscriptionCreateOrConnectWithoutAvailableSubscriptionInput = {
    where: UserSubscriptionWhereUniqueInput
    create: XOR<UserSubscriptionCreateWithoutAvailableSubscriptionInput, UserSubscriptionUncheckedCreateWithoutAvailableSubscriptionInput>
  }

  export type UserSubscriptionCreateManyAvailableSubscriptionInputEnvelope = {
    data: UserSubscriptionCreateManyAvailableSubscriptionInput | UserSubscriptionCreateManyAvailableSubscriptionInput[]
    skipDuplicates?: boolean
  }

  export type SubscriptionTransactionsUpsertWithWhereUniqueWithoutAvailableSubscriptionInput = {
    where: SubscriptionTransactionsWhereUniqueInput
    update: XOR<SubscriptionTransactionsUpdateWithoutAvailableSubscriptionInput, SubscriptionTransactionsUncheckedUpdateWithoutAvailableSubscriptionInput>
    create: XOR<SubscriptionTransactionsCreateWithoutAvailableSubscriptionInput, SubscriptionTransactionsUncheckedCreateWithoutAvailableSubscriptionInput>
  }

  export type SubscriptionTransactionsUpdateWithWhereUniqueWithoutAvailableSubscriptionInput = {
    where: SubscriptionTransactionsWhereUniqueInput
    data: XOR<SubscriptionTransactionsUpdateWithoutAvailableSubscriptionInput, SubscriptionTransactionsUncheckedUpdateWithoutAvailableSubscriptionInput>
  }

  export type SubscriptionTransactionsUpdateManyWithWhereWithoutAvailableSubscriptionInput = {
    where: SubscriptionTransactionsScalarWhereInput
    data: XOR<SubscriptionTransactionsUpdateManyMutationInput, SubscriptionTransactionsUncheckedUpdateManyWithoutAvailableSubscriptionInput>
  }

  export type UserSubscriptionUpsertWithWhereUniqueWithoutAvailableSubscriptionInput = {
    where: UserSubscriptionWhereUniqueInput
    update: XOR<UserSubscriptionUpdateWithoutAvailableSubscriptionInput, UserSubscriptionUncheckedUpdateWithoutAvailableSubscriptionInput>
    create: XOR<UserSubscriptionCreateWithoutAvailableSubscriptionInput, UserSubscriptionUncheckedCreateWithoutAvailableSubscriptionInput>
  }

  export type UserSubscriptionUpdateWithWhereUniqueWithoutAvailableSubscriptionInput = {
    where: UserSubscriptionWhereUniqueInput
    data: XOR<UserSubscriptionUpdateWithoutAvailableSubscriptionInput, UserSubscriptionUncheckedUpdateWithoutAvailableSubscriptionInput>
  }

  export type UserSubscriptionUpdateManyWithWhereWithoutAvailableSubscriptionInput = {
    where: UserSubscriptionScalarWhereInput
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyWithoutAvailableSubscriptionInput>
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
    hasActiveSubscription?: boolean
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarCreateNestedManyWithoutUserInput
    subscription?: UserSubscriptionCreateNestedManyWithoutUserInput
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
    hasActiveSubscription?: boolean
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataUncheckedCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarUncheckedCreateNestedManyWithoutUserInput
    subscription?: UserSubscriptionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type AvailableSubscriptionCreateWithoutSubscriptionTransactionsInput = {
    title: string
    price: number
    period: $Enums.SubscriptionPeriod
    userSubscriptions?: UserSubscriptionCreateNestedManyWithoutAvailableSubscriptionInput
  }

  export type AvailableSubscriptionUncheckedCreateWithoutSubscriptionTransactionsInput = {
    id?: number
    title: string
    price: number
    period: $Enums.SubscriptionPeriod
    userSubscriptions?: UserSubscriptionUncheckedCreateNestedManyWithoutAvailableSubscriptionInput
  }

  export type AvailableSubscriptionCreateOrConnectWithoutSubscriptionTransactionsInput = {
    where: AvailableSubscriptionWhereUniqueInput
    create: XOR<AvailableSubscriptionCreateWithoutSubscriptionTransactionsInput, AvailableSubscriptionUncheckedCreateWithoutSubscriptionTransactionsInput>
  }

  export type UserSubscriptionCreateWithoutSubscriptionTransactionsInput = {
    subscriptionStartDate: Date | string
    subscriptionEndDate: Date | string
    nextPaymentDate?: Date | string | null
    autoRenewal?: boolean
    notified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionInput
    availableSubscription: AvailableSubscriptionCreateNestedOneWithoutUserSubscriptionsInput
  }

  export type UserSubscriptionUncheckedCreateWithoutSubscriptionTransactionsInput = {
    id?: number
    userId: number
    subscriptionId: number
    subscriptionStartDate: Date | string
    subscriptionEndDate: Date | string
    nextPaymentDate?: Date | string | null
    autoRenewal?: boolean
    notified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserSubscriptionCreateOrConnectWithoutSubscriptionTransactionsInput = {
    where: UserSubscriptionWhereUniqueInput
    create: XOR<UserSubscriptionCreateWithoutSubscriptionTransactionsInput, UserSubscriptionUncheckedCreateWithoutSubscriptionTransactionsInput>
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
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUpdateManyWithoutUserNestedInput
    subscription?: UserSubscriptionUpdateManyWithoutUserNestedInput
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
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUncheckedUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUncheckedUpdateManyWithoutUserNestedInput
    subscription?: UserSubscriptionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AvailableSubscriptionUpsertWithoutSubscriptionTransactionsInput = {
    update: XOR<AvailableSubscriptionUpdateWithoutSubscriptionTransactionsInput, AvailableSubscriptionUncheckedUpdateWithoutSubscriptionTransactionsInput>
    create: XOR<AvailableSubscriptionCreateWithoutSubscriptionTransactionsInput, AvailableSubscriptionUncheckedCreateWithoutSubscriptionTransactionsInput>
    where?: AvailableSubscriptionWhereInput
  }

  export type AvailableSubscriptionUpdateToOneWithWhereWithoutSubscriptionTransactionsInput = {
    where?: AvailableSubscriptionWhereInput
    data: XOR<AvailableSubscriptionUpdateWithoutSubscriptionTransactionsInput, AvailableSubscriptionUncheckedUpdateWithoutSubscriptionTransactionsInput>
  }

  export type AvailableSubscriptionUpdateWithoutSubscriptionTransactionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    period?: EnumSubscriptionPeriodFieldUpdateOperationsInput | $Enums.SubscriptionPeriod
    userSubscriptions?: UserSubscriptionUpdateManyWithoutAvailableSubscriptionNestedInput
  }

  export type AvailableSubscriptionUncheckedUpdateWithoutSubscriptionTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    period?: EnumSubscriptionPeriodFieldUpdateOperationsInput | $Enums.SubscriptionPeriod
    userSubscriptions?: UserSubscriptionUncheckedUpdateManyWithoutAvailableSubscriptionNestedInput
  }

  export type UserSubscriptionUpsertWithoutSubscriptionTransactionsInput = {
    update: XOR<UserSubscriptionUpdateWithoutSubscriptionTransactionsInput, UserSubscriptionUncheckedUpdateWithoutSubscriptionTransactionsInput>
    create: XOR<UserSubscriptionCreateWithoutSubscriptionTransactionsInput, UserSubscriptionUncheckedCreateWithoutSubscriptionTransactionsInput>
    where?: UserSubscriptionWhereInput
  }

  export type UserSubscriptionUpdateToOneWithWhereWithoutSubscriptionTransactionsInput = {
    where?: UserSubscriptionWhereInput
    data: XOR<UserSubscriptionUpdateWithoutSubscriptionTransactionsInput, UserSubscriptionUncheckedUpdateWithoutSubscriptionTransactionsInput>
  }

  export type UserSubscriptionUpdateWithoutSubscriptionTransactionsInput = {
    subscriptionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenewal?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
    availableSubscription?: AvailableSubscriptionUpdateOneRequiredWithoutUserSubscriptionsNestedInput
  }

  export type UserSubscriptionUncheckedUpdateWithoutSubscriptionTransactionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    subscriptionId?: IntFieldUpdateOperationsInput | number
    subscriptionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenewal?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    hasActiveSubscription?: boolean
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountCreateNestedManyWithoutUserInput
    devices?: DeviceCreateNestedManyWithoutUserInput
    posts?: PostCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarCreateNestedManyWithoutUserInput
    payments?: SubscriptionTransactionsCreateNestedManyWithoutUserInput
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
    hasActiveSubscription?: boolean
    deletionStatus?: $Enums.DeletionStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    userMetadata?: UserMetadataUncheckedCreateNestedOneWithoutUserInput
    authAccounts?: AuthAccountUncheckedCreateNestedManyWithoutUserInput
    devices?: DeviceUncheckedCreateNestedManyWithoutUserInput
    posts?: PostUncheckedCreateNestedManyWithoutUserInput
    userAvatars?: UserAvatarUncheckedCreateNestedManyWithoutUserInput
    payments?: SubscriptionTransactionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionInput, UserUncheckedCreateWithoutSubscriptionInput>
  }

  export type AvailableSubscriptionCreateWithoutUserSubscriptionsInput = {
    title: string
    price: number
    period: $Enums.SubscriptionPeriod
    subscriptionTransactions?: SubscriptionTransactionsCreateNestedManyWithoutAvailableSubscriptionInput
  }

  export type AvailableSubscriptionUncheckedCreateWithoutUserSubscriptionsInput = {
    id?: number
    title: string
    price: number
    period: $Enums.SubscriptionPeriod
    subscriptionTransactions?: SubscriptionTransactionsUncheckedCreateNestedManyWithoutAvailableSubscriptionInput
  }

  export type AvailableSubscriptionCreateOrConnectWithoutUserSubscriptionsInput = {
    where: AvailableSubscriptionWhereUniqueInput
    create: XOR<AvailableSubscriptionCreateWithoutUserSubscriptionsInput, AvailableSubscriptionUncheckedCreateWithoutUserSubscriptionsInput>
  }

  export type SubscriptionTransactionsCreateWithoutUserSubscriptionInput = {
    externalTransactionId?: string | null
    paymentSystem: $Enums.PaymentSystem
    status?: $Enums.PaymentStatus
    paymentDate?: Date | string | null
    createdAt?: Date | string
    url?: string | null
    user: UserCreateNestedOneWithoutPaymentsInput
    availableSubscription: AvailableSubscriptionCreateNestedOneWithoutSubscriptionTransactionsInput
  }

  export type SubscriptionTransactionsUncheckedCreateWithoutUserSubscriptionInput = {
    id?: number
    subscriptionId: number
    userId: number
    externalTransactionId?: string | null
    paymentSystem: $Enums.PaymentSystem
    status?: $Enums.PaymentStatus
    paymentDate?: Date | string | null
    createdAt?: Date | string
    url?: string | null
  }

  export type SubscriptionTransactionsCreateOrConnectWithoutUserSubscriptionInput = {
    where: SubscriptionTransactionsWhereUniqueInput
    create: XOR<SubscriptionTransactionsCreateWithoutUserSubscriptionInput, SubscriptionTransactionsUncheckedCreateWithoutUserSubscriptionInput>
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
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUpdateManyWithoutUserNestedInput
    devices?: DeviceUpdateManyWithoutUserNestedInput
    posts?: PostUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUpdateManyWithoutUserNestedInput
    payments?: SubscriptionTransactionsUpdateManyWithoutUserNestedInput
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
    hasActiveSubscription?: BoolFieldUpdateOperationsInput | boolean
    deletionStatus?: EnumDeletionStatusFieldUpdateOperationsInput | $Enums.DeletionStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userMetadata?: UserMetadataUncheckedUpdateOneWithoutUserNestedInput
    authAccounts?: AuthAccountUncheckedUpdateManyWithoutUserNestedInput
    devices?: DeviceUncheckedUpdateManyWithoutUserNestedInput
    posts?: PostUncheckedUpdateManyWithoutUserNestedInput
    userAvatars?: UserAvatarUncheckedUpdateManyWithoutUserNestedInput
    payments?: SubscriptionTransactionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AvailableSubscriptionUpsertWithoutUserSubscriptionsInput = {
    update: XOR<AvailableSubscriptionUpdateWithoutUserSubscriptionsInput, AvailableSubscriptionUncheckedUpdateWithoutUserSubscriptionsInput>
    create: XOR<AvailableSubscriptionCreateWithoutUserSubscriptionsInput, AvailableSubscriptionUncheckedCreateWithoutUserSubscriptionsInput>
    where?: AvailableSubscriptionWhereInput
  }

  export type AvailableSubscriptionUpdateToOneWithWhereWithoutUserSubscriptionsInput = {
    where?: AvailableSubscriptionWhereInput
    data: XOR<AvailableSubscriptionUpdateWithoutUserSubscriptionsInput, AvailableSubscriptionUncheckedUpdateWithoutUserSubscriptionsInput>
  }

  export type AvailableSubscriptionUpdateWithoutUserSubscriptionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    period?: EnumSubscriptionPeriodFieldUpdateOperationsInput | $Enums.SubscriptionPeriod
    subscriptionTransactions?: SubscriptionTransactionsUpdateManyWithoutAvailableSubscriptionNestedInput
  }

  export type AvailableSubscriptionUncheckedUpdateWithoutUserSubscriptionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    period?: EnumSubscriptionPeriodFieldUpdateOperationsInput | $Enums.SubscriptionPeriod
    subscriptionTransactions?: SubscriptionTransactionsUncheckedUpdateManyWithoutAvailableSubscriptionNestedInput
  }

  export type SubscriptionTransactionsUpsertWithoutUserSubscriptionInput = {
    update: XOR<SubscriptionTransactionsUpdateWithoutUserSubscriptionInput, SubscriptionTransactionsUncheckedUpdateWithoutUserSubscriptionInput>
    create: XOR<SubscriptionTransactionsCreateWithoutUserSubscriptionInput, SubscriptionTransactionsUncheckedCreateWithoutUserSubscriptionInput>
    where?: SubscriptionTransactionsWhereInput
  }

  export type SubscriptionTransactionsUpdateToOneWithWhereWithoutUserSubscriptionInput = {
    where?: SubscriptionTransactionsWhereInput
    data: XOR<SubscriptionTransactionsUpdateWithoutUserSubscriptionInput, SubscriptionTransactionsUncheckedUpdateWithoutUserSubscriptionInput>
  }

  export type SubscriptionTransactionsUpdateWithoutUserSubscriptionInput = {
    externalTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSystem?: EnumPaymentSystemFieldUpdateOperationsInput | $Enums.PaymentSystem
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    availableSubscription?: AvailableSubscriptionUpdateOneRequiredWithoutSubscriptionTransactionsNestedInput
  }

  export type SubscriptionTransactionsUncheckedUpdateWithoutUserSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    externalTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSystem?: EnumPaymentSystemFieldUpdateOperationsInput | $Enums.PaymentSystem
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type UserSubscriptionCreateManyUserInput = {
    id?: number
    subscriptionId: number
    transactionId: number
    subscriptionStartDate: Date | string
    subscriptionEndDate: Date | string
    nextPaymentDate?: Date | string | null
    autoRenewal?: boolean
    notified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionTransactionsCreateManyUserInput = {
    id?: number
    subscriptionId: number
    externalTransactionId?: string | null
    paymentSystem: $Enums.PaymentSystem
    status?: $Enums.PaymentStatus
    paymentDate?: Date | string | null
    createdAt?: Date | string
    url?: string | null
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

  export type UserSubscriptionUpdateWithoutUserInput = {
    subscriptionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenewal?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availableSubscription?: AvailableSubscriptionUpdateOneRequiredWithoutUserSubscriptionsNestedInput
    subscriptionTransactions?: SubscriptionTransactionsUpdateOneRequiredWithoutUserSubscriptionNestedInput
  }

  export type UserSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionId?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    subscriptionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenewal?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionId?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    subscriptionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenewal?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionTransactionsUpdateWithoutUserInput = {
    externalTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSystem?: EnumPaymentSystemFieldUpdateOperationsInput | $Enums.PaymentSystem
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    availableSubscription?: AvailableSubscriptionUpdateOneRequiredWithoutSubscriptionTransactionsNestedInput
    userSubscription?: UserSubscriptionUpdateOneWithoutSubscriptionTransactionsNestedInput
  }

  export type SubscriptionTransactionsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionId?: IntFieldUpdateOperationsInput | number
    externalTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSystem?: EnumPaymentSystemFieldUpdateOperationsInput | $Enums.PaymentSystem
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    userSubscription?: UserSubscriptionUncheckedUpdateOneWithoutSubscriptionTransactionsNestedInput
  }

  export type SubscriptionTransactionsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    subscriptionId?: IntFieldUpdateOperationsInput | number
    externalTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSystem?: EnumPaymentSystemFieldUpdateOperationsInput | $Enums.PaymentSystem
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionTransactionsCreateManyAvailableSubscriptionInput = {
    id?: number
    userId: number
    externalTransactionId?: string | null
    paymentSystem: $Enums.PaymentSystem
    status?: $Enums.PaymentStatus
    paymentDate?: Date | string | null
    createdAt?: Date | string
    url?: string | null
  }

  export type UserSubscriptionCreateManyAvailableSubscriptionInput = {
    id?: number
    userId: number
    transactionId: number
    subscriptionStartDate: Date | string
    subscriptionEndDate: Date | string
    nextPaymentDate?: Date | string | null
    autoRenewal?: boolean
    notified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionTransactionsUpdateWithoutAvailableSubscriptionInput = {
    externalTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSystem?: EnumPaymentSystemFieldUpdateOperationsInput | $Enums.PaymentSystem
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    userSubscription?: UserSubscriptionUpdateOneWithoutSubscriptionTransactionsNestedInput
  }

  export type SubscriptionTransactionsUncheckedUpdateWithoutAvailableSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    externalTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSystem?: EnumPaymentSystemFieldUpdateOperationsInput | $Enums.PaymentSystem
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    userSubscription?: UserSubscriptionUncheckedUpdateOneWithoutSubscriptionTransactionsNestedInput
  }

  export type SubscriptionTransactionsUncheckedUpdateManyWithoutAvailableSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    externalTransactionId?: NullableStringFieldUpdateOperationsInput | string | null
    paymentSystem?: EnumPaymentSystemFieldUpdateOperationsInput | $Enums.PaymentSystem
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSubscriptionUpdateWithoutAvailableSubscriptionInput = {
    subscriptionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenewal?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionNestedInput
    subscriptionTransactions?: SubscriptionTransactionsUpdateOneRequiredWithoutUserSubscriptionNestedInput
  }

  export type UserSubscriptionUncheckedUpdateWithoutAvailableSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    subscriptionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenewal?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutAvailableSubscriptionInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    transactionId?: IntFieldUpdateOperationsInput | number
    subscriptionStartDate?: DateTimeFieldUpdateOperationsInput | Date | string
    subscriptionEndDate?: DateTimeFieldUpdateOperationsInput | Date | string
    nextPaymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoRenewal?: BoolFieldUpdateOperationsInput | boolean
    notified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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