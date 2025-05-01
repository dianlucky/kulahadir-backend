
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
 * Model Level
 * 
 */
export type Level = $Result.DefaultSelection<Prisma.$LevelPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Schedule
 * 
 */
export type Schedule = $Result.DefaultSelection<Prisma.$SchedulePayload>
/**
 * Model EmployeeLoan
 * 
 */
export type EmployeeLoan = $Result.DefaultSelection<Prisma.$EmployeeLoanPayload>
/**
 * Model SalaryDeduction
 * 
 */
export type SalaryDeduction = $Result.DefaultSelection<Prisma.$SalaryDeductionPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model Leave
 * 
 */
export type Leave = $Result.DefaultSelection<Prisma.$LeavePayload>
/**
 * Model PaidLeave
 * 
 */
export type PaidLeave = $Result.DefaultSelection<Prisma.$PaidLeavePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Levels
 * const levels = await prisma.level.findMany()
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
   * // Fetch zero or more Levels
   * const levels = await prisma.level.findMany()
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
   * `prisma.level`: Exposes CRUD operations for the **Level** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Levels
    * const levels = await prisma.level.findMany()
    * ```
    */
  get level(): Prisma.LevelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.schedule`: Exposes CRUD operations for the **Schedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedules
    * const schedules = await prisma.schedule.findMany()
    * ```
    */
  get schedule(): Prisma.ScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employeeLoan`: Exposes CRUD operations for the **EmployeeLoan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EmployeeLoans
    * const employeeLoans = await prisma.employeeLoan.findMany()
    * ```
    */
  get employeeLoan(): Prisma.EmployeeLoanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salaryDeduction`: Exposes CRUD operations for the **SalaryDeduction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalaryDeductions
    * const salaryDeductions = await prisma.salaryDeduction.findMany()
    * ```
    */
  get salaryDeduction(): Prisma.SalaryDeductionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leave`: Exposes CRUD operations for the **Leave** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leaves
    * const leaves = await prisma.leave.findMany()
    * ```
    */
  get leave(): Prisma.LeaveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paidLeave`: Exposes CRUD operations for the **PaidLeave** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaidLeaves
    * const paidLeaves = await prisma.paidLeave.findMany()
    * ```
    */
  get paidLeave(): Prisma.PaidLeaveDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    Level: 'Level',
    Account: 'Account',
    Employee: 'Employee',
    Schedule: 'Schedule',
    EmployeeLoan: 'EmployeeLoan',
    SalaryDeduction: 'SalaryDeduction',
    Attendance: 'Attendance',
    Leave: 'Leave',
    PaidLeave: 'PaidLeave'
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
      modelProps: "level" | "account" | "employee" | "schedule" | "employeeLoan" | "salaryDeduction" | "attendance" | "leave" | "paidLeave"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Level: {
        payload: Prisma.$LevelPayload<ExtArgs>
        fields: Prisma.LevelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LevelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LevelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          findFirst: {
            args: Prisma.LevelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LevelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          findMany: {
            args: Prisma.LevelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>[]
          }
          create: {
            args: Prisma.LevelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          createMany: {
            args: Prisma.LevelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LevelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          update: {
            args: Prisma.LevelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          deleteMany: {
            args: Prisma.LevelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LevelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LevelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LevelPayload>
          }
          aggregate: {
            args: Prisma.LevelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLevel>
          }
          groupBy: {
            args: Prisma.LevelGroupByArgs<ExtArgs>
            result: $Utils.Optional<LevelGroupByOutputType>[]
          }
          count: {
            args: Prisma.LevelCountArgs<ExtArgs>
            result: $Utils.Optional<LevelCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Schedule: {
        payload: Prisma.$SchedulePayload<ExtArgs>
        fields: Prisma.ScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findFirst: {
            args: Prisma.ScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          findMany: {
            args: Prisma.ScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>[]
          }
          create: {
            args: Prisma.ScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          createMany: {
            args: Prisma.ScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          update: {
            args: Prisma.ScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          deleteMany: {
            args: Prisma.ScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulePayload>
          }
          aggregate: {
            args: Prisma.ScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchedule>
          }
          groupBy: {
            args: Prisma.ScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<ScheduleCountAggregateOutputType> | number
          }
        }
      }
      EmployeeLoan: {
        payload: Prisma.$EmployeeLoanPayload<ExtArgs>
        fields: Prisma.EmployeeLoanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeLoanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeLoanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeLoanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeLoanPayload>
          }
          findFirst: {
            args: Prisma.EmployeeLoanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeLoanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeLoanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeLoanPayload>
          }
          findMany: {
            args: Prisma.EmployeeLoanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeLoanPayload>[]
          }
          create: {
            args: Prisma.EmployeeLoanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeLoanPayload>
          }
          createMany: {
            args: Prisma.EmployeeLoanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EmployeeLoanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeLoanPayload>
          }
          update: {
            args: Prisma.EmployeeLoanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeLoanPayload>
          }
          deleteMany: {
            args: Prisma.EmployeeLoanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeLoanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EmployeeLoanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeeLoanPayload>
          }
          aggregate: {
            args: Prisma.EmployeeLoanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployeeLoan>
          }
          groupBy: {
            args: Prisma.EmployeeLoanGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeLoanGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeLoanCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeLoanCountAggregateOutputType> | number
          }
        }
      }
      SalaryDeduction: {
        payload: Prisma.$SalaryDeductionPayload<ExtArgs>
        fields: Prisma.SalaryDeductionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalaryDeductionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryDeductionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalaryDeductionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryDeductionPayload>
          }
          findFirst: {
            args: Prisma.SalaryDeductionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryDeductionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalaryDeductionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryDeductionPayload>
          }
          findMany: {
            args: Prisma.SalaryDeductionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryDeductionPayload>[]
          }
          create: {
            args: Prisma.SalaryDeductionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryDeductionPayload>
          }
          createMany: {
            args: Prisma.SalaryDeductionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SalaryDeductionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryDeductionPayload>
          }
          update: {
            args: Prisma.SalaryDeductionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryDeductionPayload>
          }
          deleteMany: {
            args: Prisma.SalaryDeductionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalaryDeductionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SalaryDeductionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryDeductionPayload>
          }
          aggregate: {
            args: Prisma.SalaryDeductionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalaryDeduction>
          }
          groupBy: {
            args: Prisma.SalaryDeductionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalaryDeductionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalaryDeductionCountArgs<ExtArgs>
            result: $Utils.Optional<SalaryDeductionCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      Leave: {
        payload: Prisma.$LeavePayload<ExtArgs>
        fields: Prisma.LeaveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          findFirst: {
            args: Prisma.LeaveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          findMany: {
            args: Prisma.LeaveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>[]
          }
          create: {
            args: Prisma.LeaveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          createMany: {
            args: Prisma.LeaveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.LeaveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          update: {
            args: Prisma.LeaveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          deleteMany: {
            args: Prisma.LeaveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.LeaveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          aggregate: {
            args: Prisma.LeaveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeave>
          }
          groupBy: {
            args: Prisma.LeaveGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaveGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaveCountArgs<ExtArgs>
            result: $Utils.Optional<LeaveCountAggregateOutputType> | number
          }
        }
      }
      PaidLeave: {
        payload: Prisma.$PaidLeavePayload<ExtArgs>
        fields: Prisma.PaidLeaveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaidLeaveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaidLeavePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaidLeaveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaidLeavePayload>
          }
          findFirst: {
            args: Prisma.PaidLeaveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaidLeavePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaidLeaveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaidLeavePayload>
          }
          findMany: {
            args: Prisma.PaidLeaveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaidLeavePayload>[]
          }
          create: {
            args: Prisma.PaidLeaveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaidLeavePayload>
          }
          createMany: {
            args: Prisma.PaidLeaveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PaidLeaveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaidLeavePayload>
          }
          update: {
            args: Prisma.PaidLeaveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaidLeavePayload>
          }
          deleteMany: {
            args: Prisma.PaidLeaveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaidLeaveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaidLeaveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaidLeavePayload>
          }
          aggregate: {
            args: Prisma.PaidLeaveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaidLeave>
          }
          groupBy: {
            args: Prisma.PaidLeaveGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaidLeaveGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaidLeaveCountArgs<ExtArgs>
            result: $Utils.Optional<PaidLeaveCountAggregateOutputType> | number
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
    level?: LevelOmit
    account?: AccountOmit
    employee?: EmployeeOmit
    schedule?: ScheduleOmit
    employeeLoan?: EmployeeLoanOmit
    salaryDeduction?: SalaryDeductionOmit
    attendance?: AttendanceOmit
    leave?: LeaveOmit
    paidLeave?: PaidLeaveOmit
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
   * Count Type LevelCountOutputType
   */

  export type LevelCountOutputType = {
    accounts: number
  }

  export type LevelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | LevelCountOutputTypeCountAccountsArgs
  }

  // Custom InputTypes
  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LevelCountOutputType
     */
    select?: LevelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LevelCountOutputType without action
   */
  export type LevelCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * Count Type AccountCountOutputType
   */

  export type AccountCountOutputType = {
    employees: number
  }

  export type AccountCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | AccountCountOutputTypeCountEmployeesArgs
  }

  // Custom InputTypes
  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    schedules: number
    employee_loans: number
    salary_deductions: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedules?: boolean | EmployeeCountOutputTypeCountSchedulesArgs
    employee_loans?: boolean | EmployeeCountOutputTypeCountEmployee_loansArgs
    salary_deductions?: boolean | EmployeeCountOutputTypeCountSalary_deductionsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountEmployee_loansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeLoanWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountSalary_deductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaryDeductionWhereInput
  }


  /**
   * Count Type ScheduleCountOutputType
   */

  export type ScheduleCountOutputType = {
    attendances: number
    leaves: number
    paid_leaves: number
  }

  export type ScheduleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    attendances?: boolean | ScheduleCountOutputTypeCountAttendancesArgs
    leaves?: boolean | ScheduleCountOutputTypeCountLeavesArgs
    paid_leaves?: boolean | ScheduleCountOutputTypeCountPaid_leavesArgs
  }

  // Custom InputTypes
  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ScheduleCountOutputType
     */
    select?: ScheduleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveWhereInput
  }

  /**
   * ScheduleCountOutputType without action
   */
  export type ScheduleCountOutputTypeCountPaid_leavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaidLeaveWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Level
   */

  export type AggregateLevel = {
    _count: LevelCountAggregateOutputType | null
    _avg: LevelAvgAggregateOutputType | null
    _sum: LevelSumAggregateOutputType | null
    _min: LevelMinAggregateOutputType | null
    _max: LevelMaxAggregateOutputType | null
  }

  export type LevelAvgAggregateOutputType = {
    id: number | null
  }

  export type LevelSumAggregateOutputType = {
    id: number | null
  }

  export type LevelMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type LevelMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type LevelCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type LevelAvgAggregateInputType = {
    id?: true
  }

  export type LevelSumAggregateInputType = {
    id?: true
  }

  export type LevelMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type LevelMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type LevelCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type LevelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Level to aggregate.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Levels
    **/
    _count?: true | LevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LevelMaxAggregateInputType
  }

  export type GetLevelAggregateType<T extends LevelAggregateArgs> = {
        [P in keyof T & keyof AggregateLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLevel[P]>
      : GetScalarType<T[P], AggregateLevel[P]>
  }




  export type LevelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LevelWhereInput
    orderBy?: LevelOrderByWithAggregationInput | LevelOrderByWithAggregationInput[]
    by: LevelScalarFieldEnum[] | LevelScalarFieldEnum
    having?: LevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LevelCountAggregateInputType | true
    _avg?: LevelAvgAggregateInputType
    _sum?: LevelSumAggregateInputType
    _min?: LevelMinAggregateInputType
    _max?: LevelMaxAggregateInputType
  }

  export type LevelGroupByOutputType = {
    id: number
    name: string
    _count: LevelCountAggregateOutputType | null
    _avg: LevelAvgAggregateOutputType | null
    _sum: LevelSumAggregateOutputType | null
    _min: LevelMinAggregateOutputType | null
    _max: LevelMaxAggregateOutputType | null
  }

  type GetLevelGroupByPayload<T extends LevelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LevelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LevelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LevelGroupByOutputType[P]>
            : GetScalarType<T[P], LevelGroupByOutputType[P]>
        }
      >
    >


  export type LevelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    accounts?: boolean | Level$accountsArgs<ExtArgs>
    _count?: boolean | LevelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["level"]>



  export type LevelSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type LevelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["level"]>
  export type LevelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | Level$accountsArgs<ExtArgs>
    _count?: boolean | LevelCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $LevelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Level"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["level"]>
    composites: {}
  }

  type LevelGetPayload<S extends boolean | null | undefined | LevelDefaultArgs> = $Result.GetResult<Prisma.$LevelPayload, S>

  type LevelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LevelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LevelCountAggregateInputType | true
    }

  export interface LevelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Level'], meta: { name: 'Level' } }
    /**
     * Find zero or one Level that matches the filter.
     * @param {LevelFindUniqueArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LevelFindUniqueArgs>(args: SelectSubset<T, LevelFindUniqueArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Level that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LevelFindUniqueOrThrowArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LevelFindUniqueOrThrowArgs>(args: SelectSubset<T, LevelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Level that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindFirstArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LevelFindFirstArgs>(args?: SelectSubset<T, LevelFindFirstArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Level that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindFirstOrThrowArgs} args - Arguments to find a Level
     * @example
     * // Get one Level
     * const level = await prisma.level.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LevelFindFirstOrThrowArgs>(args?: SelectSubset<T, LevelFindFirstOrThrowArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Levels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Levels
     * const levels = await prisma.level.findMany()
     * 
     * // Get first 10 Levels
     * const levels = await prisma.level.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const levelWithIdOnly = await prisma.level.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LevelFindManyArgs>(args?: SelectSubset<T, LevelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Level.
     * @param {LevelCreateArgs} args - Arguments to create a Level.
     * @example
     * // Create one Level
     * const Level = await prisma.level.create({
     *   data: {
     *     // ... data to create a Level
     *   }
     * })
     * 
     */
    create<T extends LevelCreateArgs>(args: SelectSubset<T, LevelCreateArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Levels.
     * @param {LevelCreateManyArgs} args - Arguments to create many Levels.
     * @example
     * // Create many Levels
     * const level = await prisma.level.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LevelCreateManyArgs>(args?: SelectSubset<T, LevelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Level.
     * @param {LevelDeleteArgs} args - Arguments to delete one Level.
     * @example
     * // Delete one Level
     * const Level = await prisma.level.delete({
     *   where: {
     *     // ... filter to delete one Level
     *   }
     * })
     * 
     */
    delete<T extends LevelDeleteArgs>(args: SelectSubset<T, LevelDeleteArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Level.
     * @param {LevelUpdateArgs} args - Arguments to update one Level.
     * @example
     * // Update one Level
     * const level = await prisma.level.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LevelUpdateArgs>(args: SelectSubset<T, LevelUpdateArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Levels.
     * @param {LevelDeleteManyArgs} args - Arguments to filter Levels to delete.
     * @example
     * // Delete a few Levels
     * const { count } = await prisma.level.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LevelDeleteManyArgs>(args?: SelectSubset<T, LevelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Levels
     * const level = await prisma.level.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LevelUpdateManyArgs>(args: SelectSubset<T, LevelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Level.
     * @param {LevelUpsertArgs} args - Arguments to update or create a Level.
     * @example
     * // Update or create a Level
     * const level = await prisma.level.upsert({
     *   create: {
     *     // ... data to create a Level
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Level we want to update
     *   }
     * })
     */
    upsert<T extends LevelUpsertArgs>(args: SelectSubset<T, LevelUpsertArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Levels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelCountArgs} args - Arguments to filter Levels to count.
     * @example
     * // Count the number of Levels
     * const count = await prisma.level.count({
     *   where: {
     *     // ... the filter for the Levels we want to count
     *   }
     * })
    **/
    count<T extends LevelCountArgs>(
      args?: Subset<T, LevelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LevelAggregateArgs>(args: Subset<T, LevelAggregateArgs>): Prisma.PrismaPromise<GetLevelAggregateType<T>>

    /**
     * Group by Level.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LevelGroupByArgs} args - Group by arguments.
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
      T extends LevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LevelGroupByArgs['orderBy'] }
        : { orderBy?: LevelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLevelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Level model
   */
  readonly fields: LevelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Level.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LevelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends Level$accountsArgs<ExtArgs> = {}>(args?: Subset<T, Level$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Level model
   */
  interface LevelFieldRefs {
    readonly id: FieldRef<"Level", 'Int'>
    readonly name: FieldRef<"Level", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Level findUnique
   */
  export type LevelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level findUniqueOrThrow
   */
  export type LevelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level findFirst
   */
  export type LevelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level findFirstOrThrow
   */
  export type LevelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Level to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Levels.
     */
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level findMany
   */
  export type LevelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter, which Levels to fetch.
     */
    where?: LevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Levels to fetch.
     */
    orderBy?: LevelOrderByWithRelationInput | LevelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Levels.
     */
    cursor?: LevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Levels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Levels.
     */
    skip?: number
    distinct?: LevelScalarFieldEnum | LevelScalarFieldEnum[]
  }

  /**
   * Level create
   */
  export type LevelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The data needed to create a Level.
     */
    data: XOR<LevelCreateInput, LevelUncheckedCreateInput>
  }

  /**
   * Level createMany
   */
  export type LevelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Levels.
     */
    data: LevelCreateManyInput | LevelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Level update
   */
  export type LevelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The data needed to update a Level.
     */
    data: XOR<LevelUpdateInput, LevelUncheckedUpdateInput>
    /**
     * Choose, which Level to update.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level updateMany
   */
  export type LevelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Levels.
     */
    data: XOR<LevelUpdateManyMutationInput, LevelUncheckedUpdateManyInput>
    /**
     * Filter which Levels to update
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to update.
     */
    limit?: number
  }

  /**
   * Level upsert
   */
  export type LevelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * The filter to search for the Level to update in case it exists.
     */
    where: LevelWhereUniqueInput
    /**
     * In case the Level found by the `where` argument doesn't exist, create a new Level with this data.
     */
    create: XOR<LevelCreateInput, LevelUncheckedCreateInput>
    /**
     * In case the Level was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LevelUpdateInput, LevelUncheckedUpdateInput>
  }

  /**
   * Level delete
   */
  export type LevelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
    /**
     * Filter which Level to delete.
     */
    where: LevelWhereUniqueInput
  }

  /**
   * Level deleteMany
   */
  export type LevelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Levels to delete
     */
    where?: LevelWhereInput
    /**
     * Limit how many Levels to delete.
     */
    limit?: number
  }

  /**
   * Level.accounts
   */
  export type Level$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Level without action
   */
  export type LevelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Level
     */
    select?: LevelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Level
     */
    omit?: LevelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LevelInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
    level_id: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
    level_id: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    token: string | null
    level_id: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    token: string | null
    level_id: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    username: number
    password: number
    token: number
    level_id: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
    level_id?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
    level_id?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    token?: true
    level_id?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    token?: true
    level_id?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    token?: true
    level_id?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: number
    username: string
    password: string | null
    token: string | null
    level_id: number
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    token?: boolean
    level_id?: boolean
    level?: boolean | LevelDefaultArgs<ExtArgs>
    employees?: boolean | Account$employeesArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>



  export type AccountSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    token?: boolean
    level_id?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "token" | "level_id", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    level?: boolean | LevelDefaultArgs<ExtArgs>
    employees?: boolean | Account$employeesArgs<ExtArgs>
    _count?: boolean | AccountCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      level: Prisma.$LevelPayload<ExtArgs>
      employees: Prisma.$EmployeePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string | null
      token: string | null
      level_id: number
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    level<T extends LevelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LevelDefaultArgs<ExtArgs>>): Prisma__LevelClient<$Result.GetResult<Prisma.$LevelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employees<T extends Account$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Account$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'Int'>
    readonly username: FieldRef<"Account", 'String'>
    readonly password: FieldRef<"Account", 'String'>
    readonly token: FieldRef<"Account", 'String'>
    readonly level_id: FieldRef<"Account", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account.employees
   */
  export type Account$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    id: number | null
    account_id: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    id: number | null
    account_id: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: number | null
    name: string | null
    birth_date: Date | null
    phone: string | null
    account_id: number | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    birth_date: Date | null
    phone: string | null
    account_id: number | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    name: number
    birth_date: number
    phone: number
    account_id: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    id?: true
    account_id?: true
  }

  export type EmployeeSumAggregateInputType = {
    id?: true
    account_id?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    name?: true
    birth_date?: true
    phone?: true
    account_id?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    name?: true
    birth_date?: true
    phone?: true
    account_id?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    name?: true
    birth_date?: true
    phone?: true
    account_id?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: number
    name: string
    birth_date: Date
    phone: string
    account_id: number
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    birth_date?: boolean
    phone?: boolean
    account_id?: boolean
    account?: boolean | AccountDefaultArgs<ExtArgs>
    schedules?: boolean | Employee$schedulesArgs<ExtArgs>
    employee_loans?: boolean | Employee$employee_loansArgs<ExtArgs>
    salary_deductions?: boolean | Employee$salary_deductionsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>



  export type EmployeeSelectScalar = {
    id?: boolean
    name?: boolean
    birth_date?: boolean
    phone?: boolean
    account_id?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "birth_date" | "phone" | "account_id", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    account?: boolean | AccountDefaultArgs<ExtArgs>
    schedules?: boolean | Employee$schedulesArgs<ExtArgs>
    employee_loans?: boolean | Employee$employee_loansArgs<ExtArgs>
    salary_deductions?: boolean | Employee$salary_deductionsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      account: Prisma.$AccountPayload<ExtArgs>
      schedules: Prisma.$SchedulePayload<ExtArgs>[]
      employee_loans: Prisma.$EmployeeLoanPayload<ExtArgs>[]
      salary_deductions: Prisma.$SalaryDeductionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      birth_date: Date
      phone: string
      account_id: number
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    account<T extends AccountDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AccountDefaultArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedules<T extends Employee$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Employee$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    employee_loans<T extends Employee$employee_loansArgs<ExtArgs> = {}>(args?: Subset<T, Employee$employee_loansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeLoanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    salary_deductions<T extends Employee$salary_deductionsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$salary_deductionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryDeductionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'Int'>
    readonly name: FieldRef<"Employee", 'String'>
    readonly birth_date: FieldRef<"Employee", 'DateTime'>
    readonly phone: FieldRef<"Employee", 'String'>
    readonly account_id: FieldRef<"Employee", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.schedules
   */
  export type Employee$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    cursor?: ScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Employee.employee_loans
   */
  export type Employee$employee_loansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLoan
     */
    select?: EmployeeLoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLoan
     */
    omit?: EmployeeLoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLoanInclude<ExtArgs> | null
    where?: EmployeeLoanWhereInput
    orderBy?: EmployeeLoanOrderByWithRelationInput | EmployeeLoanOrderByWithRelationInput[]
    cursor?: EmployeeLoanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeLoanScalarFieldEnum | EmployeeLoanScalarFieldEnum[]
  }

  /**
   * Employee.salary_deductions
   */
  export type Employee$salary_deductionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryDeduction
     */
    select?: SalaryDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryDeduction
     */
    omit?: SalaryDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryDeductionInclude<ExtArgs> | null
    where?: SalaryDeductionWhereInput
    orderBy?: SalaryDeductionOrderByWithRelationInput | SalaryDeductionOrderByWithRelationInput[]
    cursor?: SalaryDeductionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalaryDeductionScalarFieldEnum | SalaryDeductionScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Schedule
   */

  export type AggregateSchedule = {
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  export type ScheduleAvgAggregateOutputType = {
    id: number | null
    employee_id: number | null
  }

  export type ScheduleSumAggregateOutputType = {
    id: number | null
    employee_id: number | null
  }

  export type ScheduleMinAggregateOutputType = {
    id: number | null
    date: string | null
    status: string | null
    attendance_status: string | null
    employee_id: number | null
  }

  export type ScheduleMaxAggregateOutputType = {
    id: number | null
    date: string | null
    status: string | null
    attendance_status: string | null
    employee_id: number | null
  }

  export type ScheduleCountAggregateOutputType = {
    id: number
    date: number
    status: number
    attendance_status: number
    employee_id: number
    _all: number
  }


  export type ScheduleAvgAggregateInputType = {
    id?: true
    employee_id?: true
  }

  export type ScheduleSumAggregateInputType = {
    id?: true
    employee_id?: true
  }

  export type ScheduleMinAggregateInputType = {
    id?: true
    date?: true
    status?: true
    attendance_status?: true
    employee_id?: true
  }

  export type ScheduleMaxAggregateInputType = {
    id?: true
    date?: true
    status?: true
    attendance_status?: true
    employee_id?: true
  }

  export type ScheduleCountAggregateInputType = {
    id?: true
    date?: true
    status?: true
    attendance_status?: true
    employee_id?: true
    _all?: true
  }

  export type ScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedule to aggregate.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedules
    **/
    _count?: true | ScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ScheduleMaxAggregateInputType
  }

  export type GetScheduleAggregateType<T extends ScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchedule[P]>
      : GetScalarType<T[P], AggregateSchedule[P]>
  }




  export type ScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ScheduleWhereInput
    orderBy?: ScheduleOrderByWithAggregationInput | ScheduleOrderByWithAggregationInput[]
    by: ScheduleScalarFieldEnum[] | ScheduleScalarFieldEnum
    having?: ScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ScheduleCountAggregateInputType | true
    _avg?: ScheduleAvgAggregateInputType
    _sum?: ScheduleSumAggregateInputType
    _min?: ScheduleMinAggregateInputType
    _max?: ScheduleMaxAggregateInputType
  }

  export type ScheduleGroupByOutputType = {
    id: number
    date: string
    status: string
    attendance_status: string
    employee_id: number
    _count: ScheduleCountAggregateOutputType | null
    _avg: ScheduleAvgAggregateOutputType | null
    _sum: ScheduleSumAggregateOutputType | null
    _min: ScheduleMinAggregateOutputType | null
    _max: ScheduleMaxAggregateOutputType | null
  }

  type GetScheduleGroupByPayload<T extends ScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], ScheduleGroupByOutputType[P]>
        }
      >
    >


  export type ScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    date?: boolean
    status?: boolean
    attendance_status?: boolean
    employee_id?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    attendances?: boolean | Schedule$attendancesArgs<ExtArgs>
    leaves?: boolean | Schedule$leavesArgs<ExtArgs>
    paid_leaves?: boolean | Schedule$paid_leavesArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schedule"]>



  export type ScheduleSelectScalar = {
    id?: boolean
    date?: boolean
    status?: boolean
    attendance_status?: boolean
    employee_id?: boolean
  }

  export type ScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "date" | "status" | "attendance_status" | "employee_id", ExtArgs["result"]["schedule"]>
  export type ScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    attendances?: boolean | Schedule$attendancesArgs<ExtArgs>
    leaves?: boolean | Schedule$leavesArgs<ExtArgs>
    paid_leaves?: boolean | Schedule$paid_leavesArgs<ExtArgs>
    _count?: boolean | ScheduleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Schedule"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      leaves: Prisma.$LeavePayload<ExtArgs>[]
      paid_leaves: Prisma.$PaidLeavePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      date: string
      status: string
      attendance_status: string
      employee_id: number
    }, ExtArgs["result"]["schedule"]>
    composites: {}
  }

  type ScheduleGetPayload<S extends boolean | null | undefined | ScheduleDefaultArgs> = $Result.GetResult<Prisma.$SchedulePayload, S>

  type ScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ScheduleCountAggregateInputType | true
    }

  export interface ScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Schedule'], meta: { name: 'Schedule' } }
    /**
     * Find zero or one Schedule that matches the filter.
     * @param {ScheduleFindUniqueArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ScheduleFindUniqueArgs>(args: SelectSubset<T, ScheduleFindUniqueArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Schedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ScheduleFindUniqueOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, ScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ScheduleFindFirstArgs>(args?: SelectSubset<T, ScheduleFindFirstArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Schedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindFirstOrThrowArgs} args - Arguments to find a Schedule
     * @example
     * // Get one Schedule
     * const schedule = await prisma.schedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, ScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedules
     * const schedules = await prisma.schedule.findMany()
     * 
     * // Get first 10 Schedules
     * const schedules = await prisma.schedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const scheduleWithIdOnly = await prisma.schedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ScheduleFindManyArgs>(args?: SelectSubset<T, ScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Schedule.
     * @param {ScheduleCreateArgs} args - Arguments to create a Schedule.
     * @example
     * // Create one Schedule
     * const Schedule = await prisma.schedule.create({
     *   data: {
     *     // ... data to create a Schedule
     *   }
     * })
     * 
     */
    create<T extends ScheduleCreateArgs>(args: SelectSubset<T, ScheduleCreateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedules.
     * @param {ScheduleCreateManyArgs} args - Arguments to create many Schedules.
     * @example
     * // Create many Schedules
     * const schedule = await prisma.schedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ScheduleCreateManyArgs>(args?: SelectSubset<T, ScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Schedule.
     * @param {ScheduleDeleteArgs} args - Arguments to delete one Schedule.
     * @example
     * // Delete one Schedule
     * const Schedule = await prisma.schedule.delete({
     *   where: {
     *     // ... filter to delete one Schedule
     *   }
     * })
     * 
     */
    delete<T extends ScheduleDeleteArgs>(args: SelectSubset<T, ScheduleDeleteArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Schedule.
     * @param {ScheduleUpdateArgs} args - Arguments to update one Schedule.
     * @example
     * // Update one Schedule
     * const schedule = await prisma.schedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ScheduleUpdateArgs>(args: SelectSubset<T, ScheduleUpdateArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedules.
     * @param {ScheduleDeleteManyArgs} args - Arguments to filter Schedules to delete.
     * @example
     * // Delete a few Schedules
     * const { count } = await prisma.schedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ScheduleDeleteManyArgs>(args?: SelectSubset<T, ScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedules
     * const schedule = await prisma.schedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ScheduleUpdateManyArgs>(args: SelectSubset<T, ScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Schedule.
     * @param {ScheduleUpsertArgs} args - Arguments to update or create a Schedule.
     * @example
     * // Update or create a Schedule
     * const schedule = await prisma.schedule.upsert({
     *   create: {
     *     // ... data to create a Schedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Schedule we want to update
     *   }
     * })
     */
    upsert<T extends ScheduleUpsertArgs>(args: SelectSubset<T, ScheduleUpsertArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleCountArgs} args - Arguments to filter Schedules to count.
     * @example
     * // Count the number of Schedules
     * const count = await prisma.schedule.count({
     *   where: {
     *     // ... the filter for the Schedules we want to count
     *   }
     * })
    **/
    count<T extends ScheduleCountArgs>(
      args?: Subset<T, ScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ScheduleAggregateArgs>(args: Subset<T, ScheduleAggregateArgs>): Prisma.PrismaPromise<GetScheduleAggregateType<T>>

    /**
     * Group by Schedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ScheduleGroupByArgs} args - Group by arguments.
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
      T extends ScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ScheduleGroupByArgs['orderBy'] }
        : { orderBy?: ScheduleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Schedule model
   */
  readonly fields: ScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Schedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    attendances<T extends Schedule$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leaves<T extends Schedule$leavesArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$leavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    paid_leaves<T extends Schedule$paid_leavesArgs<ExtArgs> = {}>(args?: Subset<T, Schedule$paid_leavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaidLeavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Schedule model
   */
  interface ScheduleFieldRefs {
    readonly id: FieldRef<"Schedule", 'Int'>
    readonly date: FieldRef<"Schedule", 'String'>
    readonly status: FieldRef<"Schedule", 'String'>
    readonly attendance_status: FieldRef<"Schedule", 'String'>
    readonly employee_id: FieldRef<"Schedule", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Schedule findUnique
   */
  export type ScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findUniqueOrThrow
   */
  export type ScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule findFirst
   */
  export type ScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findFirstOrThrow
   */
  export type ScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedule to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedules.
     */
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule findMany
   */
  export type ScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter, which Schedules to fetch.
     */
    where?: ScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedules to fetch.
     */
    orderBy?: ScheduleOrderByWithRelationInput | ScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedules.
     */
    cursor?: ScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedules.
     */
    skip?: number
    distinct?: ScheduleScalarFieldEnum | ScheduleScalarFieldEnum[]
  }

  /**
   * Schedule create
   */
  export type ScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a Schedule.
     */
    data: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
  }

  /**
   * Schedule createMany
   */
  export type ScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedules.
     */
    data: ScheduleCreateManyInput | ScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Schedule update
   */
  export type ScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a Schedule.
     */
    data: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
    /**
     * Choose, which Schedule to update.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule updateMany
   */
  export type ScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedules.
     */
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyInput>
    /**
     * Filter which Schedules to update
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to update.
     */
    limit?: number
  }

  /**
   * Schedule upsert
   */
  export type ScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the Schedule to update in case it exists.
     */
    where: ScheduleWhereUniqueInput
    /**
     * In case the Schedule found by the `where` argument doesn't exist, create a new Schedule with this data.
     */
    create: XOR<ScheduleCreateInput, ScheduleUncheckedCreateInput>
    /**
     * In case the Schedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ScheduleUpdateInput, ScheduleUncheckedUpdateInput>
  }

  /**
   * Schedule delete
   */
  export type ScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
    /**
     * Filter which Schedule to delete.
     */
    where: ScheduleWhereUniqueInput
  }

  /**
   * Schedule deleteMany
   */
  export type ScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedules to delete
     */
    where?: ScheduleWhereInput
    /**
     * Limit how many Schedules to delete.
     */
    limit?: number
  }

  /**
   * Schedule.attendances
   */
  export type Schedule$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Schedule.leaves
   */
  export type Schedule$leavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    where?: LeaveWhereInput
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    cursor?: LeaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * Schedule.paid_leaves
   */
  export type Schedule$paid_leavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaidLeave
     */
    select?: PaidLeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaidLeave
     */
    omit?: PaidLeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaidLeaveInclude<ExtArgs> | null
    where?: PaidLeaveWhereInput
    orderBy?: PaidLeaveOrderByWithRelationInput | PaidLeaveOrderByWithRelationInput[]
    cursor?: PaidLeaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaidLeaveScalarFieldEnum | PaidLeaveScalarFieldEnum[]
  }

  /**
   * Schedule without action
   */
  export type ScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Schedule
     */
    select?: ScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Schedule
     */
    omit?: ScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ScheduleInclude<ExtArgs> | null
  }


  /**
   * Model EmployeeLoan
   */

  export type AggregateEmployeeLoan = {
    _count: EmployeeLoanCountAggregateOutputType | null
    _avg: EmployeeLoanAvgAggregateOutputType | null
    _sum: EmployeeLoanSumAggregateOutputType | null
    _min: EmployeeLoanMinAggregateOutputType | null
    _max: EmployeeLoanMaxAggregateOutputType | null
  }

  export type EmployeeLoanAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    employee_id: number | null
  }

  export type EmployeeLoanSumAggregateOutputType = {
    id: number | null
    amount: number | null
    employee_id: number | null
  }

  export type EmployeeLoanMinAggregateOutputType = {
    id: number | null
    amount: number | null
    date: Date | null
    status: string | null
    employee_id: number | null
  }

  export type EmployeeLoanMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    date: Date | null
    status: string | null
    employee_id: number | null
  }

  export type EmployeeLoanCountAggregateOutputType = {
    id: number
    amount: number
    date: number
    status: number
    employee_id: number
    _all: number
  }


  export type EmployeeLoanAvgAggregateInputType = {
    id?: true
    amount?: true
    employee_id?: true
  }

  export type EmployeeLoanSumAggregateInputType = {
    id?: true
    amount?: true
    employee_id?: true
  }

  export type EmployeeLoanMinAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    status?: true
    employee_id?: true
  }

  export type EmployeeLoanMaxAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    status?: true
    employee_id?: true
  }

  export type EmployeeLoanCountAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    status?: true
    employee_id?: true
    _all?: true
  }

  export type EmployeeLoanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeLoan to aggregate.
     */
    where?: EmployeeLoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeLoans to fetch.
     */
    orderBy?: EmployeeLoanOrderByWithRelationInput | EmployeeLoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeLoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeLoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeLoans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EmployeeLoans
    **/
    _count?: true | EmployeeLoanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeLoanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeLoanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeLoanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeLoanMaxAggregateInputType
  }

  export type GetEmployeeLoanAggregateType<T extends EmployeeLoanAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployeeLoan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployeeLoan[P]>
      : GetScalarType<T[P], AggregateEmployeeLoan[P]>
  }




  export type EmployeeLoanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeLoanWhereInput
    orderBy?: EmployeeLoanOrderByWithAggregationInput | EmployeeLoanOrderByWithAggregationInput[]
    by: EmployeeLoanScalarFieldEnum[] | EmployeeLoanScalarFieldEnum
    having?: EmployeeLoanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeLoanCountAggregateInputType | true
    _avg?: EmployeeLoanAvgAggregateInputType
    _sum?: EmployeeLoanSumAggregateInputType
    _min?: EmployeeLoanMinAggregateInputType
    _max?: EmployeeLoanMaxAggregateInputType
  }

  export type EmployeeLoanGroupByOutputType = {
    id: number
    amount: number
    date: Date
    status: string
    employee_id: number
    _count: EmployeeLoanCountAggregateOutputType | null
    _avg: EmployeeLoanAvgAggregateOutputType | null
    _sum: EmployeeLoanSumAggregateOutputType | null
    _min: EmployeeLoanMinAggregateOutputType | null
    _max: EmployeeLoanMaxAggregateOutputType | null
  }

  type GetEmployeeLoanGroupByPayload<T extends EmployeeLoanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeLoanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeLoanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeLoanGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeLoanGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeLoanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    status?: boolean
    employee_id?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employeeLoan"]>



  export type EmployeeLoanSelectScalar = {
    id?: boolean
    amount?: boolean
    date?: boolean
    status?: boolean
    employee_id?: boolean
  }

  export type EmployeeLoanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "date" | "status" | "employee_id", ExtArgs["result"]["employeeLoan"]>
  export type EmployeeLoanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $EmployeeLoanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EmployeeLoan"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      date: Date
      status: string
      employee_id: number
    }, ExtArgs["result"]["employeeLoan"]>
    composites: {}
  }

  type EmployeeLoanGetPayload<S extends boolean | null | undefined | EmployeeLoanDefaultArgs> = $Result.GetResult<Prisma.$EmployeeLoanPayload, S>

  type EmployeeLoanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeLoanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeLoanCountAggregateInputType | true
    }

  export interface EmployeeLoanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EmployeeLoan'], meta: { name: 'EmployeeLoan' } }
    /**
     * Find zero or one EmployeeLoan that matches the filter.
     * @param {EmployeeLoanFindUniqueArgs} args - Arguments to find a EmployeeLoan
     * @example
     * // Get one EmployeeLoan
     * const employeeLoan = await prisma.employeeLoan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeLoanFindUniqueArgs>(args: SelectSubset<T, EmployeeLoanFindUniqueArgs<ExtArgs>>): Prisma__EmployeeLoanClient<$Result.GetResult<Prisma.$EmployeeLoanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EmployeeLoan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeLoanFindUniqueOrThrowArgs} args - Arguments to find a EmployeeLoan
     * @example
     * // Get one EmployeeLoan
     * const employeeLoan = await prisma.employeeLoan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeLoanFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeLoanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeLoanClient<$Result.GetResult<Prisma.$EmployeeLoanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeLoan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeLoanFindFirstArgs} args - Arguments to find a EmployeeLoan
     * @example
     * // Get one EmployeeLoan
     * const employeeLoan = await prisma.employeeLoan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeLoanFindFirstArgs>(args?: SelectSubset<T, EmployeeLoanFindFirstArgs<ExtArgs>>): Prisma__EmployeeLoanClient<$Result.GetResult<Prisma.$EmployeeLoanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EmployeeLoan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeLoanFindFirstOrThrowArgs} args - Arguments to find a EmployeeLoan
     * @example
     * // Get one EmployeeLoan
     * const employeeLoan = await prisma.employeeLoan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeLoanFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeLoanFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeLoanClient<$Result.GetResult<Prisma.$EmployeeLoanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EmployeeLoans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeLoanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmployeeLoans
     * const employeeLoans = await prisma.employeeLoan.findMany()
     * 
     * // Get first 10 EmployeeLoans
     * const employeeLoans = await prisma.employeeLoan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeLoanWithIdOnly = await prisma.employeeLoan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeLoanFindManyArgs>(args?: SelectSubset<T, EmployeeLoanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeeLoanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EmployeeLoan.
     * @param {EmployeeLoanCreateArgs} args - Arguments to create a EmployeeLoan.
     * @example
     * // Create one EmployeeLoan
     * const EmployeeLoan = await prisma.employeeLoan.create({
     *   data: {
     *     // ... data to create a EmployeeLoan
     *   }
     * })
     * 
     */
    create<T extends EmployeeLoanCreateArgs>(args: SelectSubset<T, EmployeeLoanCreateArgs<ExtArgs>>): Prisma__EmployeeLoanClient<$Result.GetResult<Prisma.$EmployeeLoanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EmployeeLoans.
     * @param {EmployeeLoanCreateManyArgs} args - Arguments to create many EmployeeLoans.
     * @example
     * // Create many EmployeeLoans
     * const employeeLoan = await prisma.employeeLoan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeLoanCreateManyArgs>(args?: SelectSubset<T, EmployeeLoanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EmployeeLoan.
     * @param {EmployeeLoanDeleteArgs} args - Arguments to delete one EmployeeLoan.
     * @example
     * // Delete one EmployeeLoan
     * const EmployeeLoan = await prisma.employeeLoan.delete({
     *   where: {
     *     // ... filter to delete one EmployeeLoan
     *   }
     * })
     * 
     */
    delete<T extends EmployeeLoanDeleteArgs>(args: SelectSubset<T, EmployeeLoanDeleteArgs<ExtArgs>>): Prisma__EmployeeLoanClient<$Result.GetResult<Prisma.$EmployeeLoanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EmployeeLoan.
     * @param {EmployeeLoanUpdateArgs} args - Arguments to update one EmployeeLoan.
     * @example
     * // Update one EmployeeLoan
     * const employeeLoan = await prisma.employeeLoan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeLoanUpdateArgs>(args: SelectSubset<T, EmployeeLoanUpdateArgs<ExtArgs>>): Prisma__EmployeeLoanClient<$Result.GetResult<Prisma.$EmployeeLoanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EmployeeLoans.
     * @param {EmployeeLoanDeleteManyArgs} args - Arguments to filter EmployeeLoans to delete.
     * @example
     * // Delete a few EmployeeLoans
     * const { count } = await prisma.employeeLoan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeLoanDeleteManyArgs>(args?: SelectSubset<T, EmployeeLoanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EmployeeLoans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeLoanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmployeeLoans
     * const employeeLoan = await prisma.employeeLoan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeLoanUpdateManyArgs>(args: SelectSubset<T, EmployeeLoanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EmployeeLoan.
     * @param {EmployeeLoanUpsertArgs} args - Arguments to update or create a EmployeeLoan.
     * @example
     * // Update or create a EmployeeLoan
     * const employeeLoan = await prisma.employeeLoan.upsert({
     *   create: {
     *     // ... data to create a EmployeeLoan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmployeeLoan we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeLoanUpsertArgs>(args: SelectSubset<T, EmployeeLoanUpsertArgs<ExtArgs>>): Prisma__EmployeeLoanClient<$Result.GetResult<Prisma.$EmployeeLoanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EmployeeLoans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeLoanCountArgs} args - Arguments to filter EmployeeLoans to count.
     * @example
     * // Count the number of EmployeeLoans
     * const count = await prisma.employeeLoan.count({
     *   where: {
     *     // ... the filter for the EmployeeLoans we want to count
     *   }
     * })
    **/
    count<T extends EmployeeLoanCountArgs>(
      args?: Subset<T, EmployeeLoanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeLoanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EmployeeLoan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeLoanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeLoanAggregateArgs>(args: Subset<T, EmployeeLoanAggregateArgs>): Prisma.PrismaPromise<GetEmployeeLoanAggregateType<T>>

    /**
     * Group by EmployeeLoan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeLoanGroupByArgs} args - Group by arguments.
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
      T extends EmployeeLoanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeLoanGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeLoanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeLoanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeLoanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EmployeeLoan model
   */
  readonly fields: EmployeeLoanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EmployeeLoan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeLoanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the EmployeeLoan model
   */
  interface EmployeeLoanFieldRefs {
    readonly id: FieldRef<"EmployeeLoan", 'Int'>
    readonly amount: FieldRef<"EmployeeLoan", 'Int'>
    readonly date: FieldRef<"EmployeeLoan", 'DateTime'>
    readonly status: FieldRef<"EmployeeLoan", 'String'>
    readonly employee_id: FieldRef<"EmployeeLoan", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EmployeeLoan findUnique
   */
  export type EmployeeLoanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLoan
     */
    select?: EmployeeLoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLoan
     */
    omit?: EmployeeLoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLoanInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeLoan to fetch.
     */
    where: EmployeeLoanWhereUniqueInput
  }

  /**
   * EmployeeLoan findUniqueOrThrow
   */
  export type EmployeeLoanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLoan
     */
    select?: EmployeeLoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLoan
     */
    omit?: EmployeeLoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLoanInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeLoan to fetch.
     */
    where: EmployeeLoanWhereUniqueInput
  }

  /**
   * EmployeeLoan findFirst
   */
  export type EmployeeLoanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLoan
     */
    select?: EmployeeLoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLoan
     */
    omit?: EmployeeLoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLoanInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeLoan to fetch.
     */
    where?: EmployeeLoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeLoans to fetch.
     */
    orderBy?: EmployeeLoanOrderByWithRelationInput | EmployeeLoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeLoans.
     */
    cursor?: EmployeeLoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeLoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeLoans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeLoans.
     */
    distinct?: EmployeeLoanScalarFieldEnum | EmployeeLoanScalarFieldEnum[]
  }

  /**
   * EmployeeLoan findFirstOrThrow
   */
  export type EmployeeLoanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLoan
     */
    select?: EmployeeLoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLoan
     */
    omit?: EmployeeLoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLoanInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeLoan to fetch.
     */
    where?: EmployeeLoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeLoans to fetch.
     */
    orderBy?: EmployeeLoanOrderByWithRelationInput | EmployeeLoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EmployeeLoans.
     */
    cursor?: EmployeeLoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeLoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeLoans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EmployeeLoans.
     */
    distinct?: EmployeeLoanScalarFieldEnum | EmployeeLoanScalarFieldEnum[]
  }

  /**
   * EmployeeLoan findMany
   */
  export type EmployeeLoanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLoan
     */
    select?: EmployeeLoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLoan
     */
    omit?: EmployeeLoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLoanInclude<ExtArgs> | null
    /**
     * Filter, which EmployeeLoans to fetch.
     */
    where?: EmployeeLoanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EmployeeLoans to fetch.
     */
    orderBy?: EmployeeLoanOrderByWithRelationInput | EmployeeLoanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EmployeeLoans.
     */
    cursor?: EmployeeLoanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EmployeeLoans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EmployeeLoans.
     */
    skip?: number
    distinct?: EmployeeLoanScalarFieldEnum | EmployeeLoanScalarFieldEnum[]
  }

  /**
   * EmployeeLoan create
   */
  export type EmployeeLoanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLoan
     */
    select?: EmployeeLoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLoan
     */
    omit?: EmployeeLoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLoanInclude<ExtArgs> | null
    /**
     * The data needed to create a EmployeeLoan.
     */
    data: XOR<EmployeeLoanCreateInput, EmployeeLoanUncheckedCreateInput>
  }

  /**
   * EmployeeLoan createMany
   */
  export type EmployeeLoanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmployeeLoans.
     */
    data: EmployeeLoanCreateManyInput | EmployeeLoanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EmployeeLoan update
   */
  export type EmployeeLoanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLoan
     */
    select?: EmployeeLoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLoan
     */
    omit?: EmployeeLoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLoanInclude<ExtArgs> | null
    /**
     * The data needed to update a EmployeeLoan.
     */
    data: XOR<EmployeeLoanUpdateInput, EmployeeLoanUncheckedUpdateInput>
    /**
     * Choose, which EmployeeLoan to update.
     */
    where: EmployeeLoanWhereUniqueInput
  }

  /**
   * EmployeeLoan updateMany
   */
  export type EmployeeLoanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EmployeeLoans.
     */
    data: XOR<EmployeeLoanUpdateManyMutationInput, EmployeeLoanUncheckedUpdateManyInput>
    /**
     * Filter which EmployeeLoans to update
     */
    where?: EmployeeLoanWhereInput
    /**
     * Limit how many EmployeeLoans to update.
     */
    limit?: number
  }

  /**
   * EmployeeLoan upsert
   */
  export type EmployeeLoanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLoan
     */
    select?: EmployeeLoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLoan
     */
    omit?: EmployeeLoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLoanInclude<ExtArgs> | null
    /**
     * The filter to search for the EmployeeLoan to update in case it exists.
     */
    where: EmployeeLoanWhereUniqueInput
    /**
     * In case the EmployeeLoan found by the `where` argument doesn't exist, create a new EmployeeLoan with this data.
     */
    create: XOR<EmployeeLoanCreateInput, EmployeeLoanUncheckedCreateInput>
    /**
     * In case the EmployeeLoan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeLoanUpdateInput, EmployeeLoanUncheckedUpdateInput>
  }

  /**
   * EmployeeLoan delete
   */
  export type EmployeeLoanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLoan
     */
    select?: EmployeeLoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLoan
     */
    omit?: EmployeeLoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLoanInclude<ExtArgs> | null
    /**
     * Filter which EmployeeLoan to delete.
     */
    where: EmployeeLoanWhereUniqueInput
  }

  /**
   * EmployeeLoan deleteMany
   */
  export type EmployeeLoanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EmployeeLoans to delete
     */
    where?: EmployeeLoanWhereInput
    /**
     * Limit how many EmployeeLoans to delete.
     */
    limit?: number
  }

  /**
   * EmployeeLoan without action
   */
  export type EmployeeLoanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeLoan
     */
    select?: EmployeeLoanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EmployeeLoan
     */
    omit?: EmployeeLoanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeLoanInclude<ExtArgs> | null
  }


  /**
   * Model SalaryDeduction
   */

  export type AggregateSalaryDeduction = {
    _count: SalaryDeductionCountAggregateOutputType | null
    _avg: SalaryDeductionAvgAggregateOutputType | null
    _sum: SalaryDeductionSumAggregateOutputType | null
    _min: SalaryDeductionMinAggregateOutputType | null
    _max: SalaryDeductionMaxAggregateOutputType | null
  }

  export type SalaryDeductionAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    employee_id: number | null
  }

  export type SalaryDeductionSumAggregateOutputType = {
    id: number | null
    amount: number | null
    employee_id: number | null
  }

  export type SalaryDeductionMinAggregateOutputType = {
    id: number | null
    amount: number | null
    date: Date | null
    employee_id: number | null
  }

  export type SalaryDeductionMaxAggregateOutputType = {
    id: number | null
    amount: number | null
    date: Date | null
    employee_id: number | null
  }

  export type SalaryDeductionCountAggregateOutputType = {
    id: number
    amount: number
    date: number
    employee_id: number
    _all: number
  }


  export type SalaryDeductionAvgAggregateInputType = {
    id?: true
    amount?: true
    employee_id?: true
  }

  export type SalaryDeductionSumAggregateInputType = {
    id?: true
    amount?: true
    employee_id?: true
  }

  export type SalaryDeductionMinAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    employee_id?: true
  }

  export type SalaryDeductionMaxAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    employee_id?: true
  }

  export type SalaryDeductionCountAggregateInputType = {
    id?: true
    amount?: true
    date?: true
    employee_id?: true
    _all?: true
  }

  export type SalaryDeductionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalaryDeduction to aggregate.
     */
    where?: SalaryDeductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryDeductions to fetch.
     */
    orderBy?: SalaryDeductionOrderByWithRelationInput | SalaryDeductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalaryDeductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryDeductions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryDeductions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalaryDeductions
    **/
    _count?: true | SalaryDeductionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalaryDeductionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalaryDeductionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalaryDeductionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalaryDeductionMaxAggregateInputType
  }

  export type GetSalaryDeductionAggregateType<T extends SalaryDeductionAggregateArgs> = {
        [P in keyof T & keyof AggregateSalaryDeduction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalaryDeduction[P]>
      : GetScalarType<T[P], AggregateSalaryDeduction[P]>
  }




  export type SalaryDeductionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaryDeductionWhereInput
    orderBy?: SalaryDeductionOrderByWithAggregationInput | SalaryDeductionOrderByWithAggregationInput[]
    by: SalaryDeductionScalarFieldEnum[] | SalaryDeductionScalarFieldEnum
    having?: SalaryDeductionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalaryDeductionCountAggregateInputType | true
    _avg?: SalaryDeductionAvgAggregateInputType
    _sum?: SalaryDeductionSumAggregateInputType
    _min?: SalaryDeductionMinAggregateInputType
    _max?: SalaryDeductionMaxAggregateInputType
  }

  export type SalaryDeductionGroupByOutputType = {
    id: number
    amount: number
    date: Date
    employee_id: number
    _count: SalaryDeductionCountAggregateOutputType | null
    _avg: SalaryDeductionAvgAggregateOutputType | null
    _sum: SalaryDeductionSumAggregateOutputType | null
    _min: SalaryDeductionMinAggregateOutputType | null
    _max: SalaryDeductionMaxAggregateOutputType | null
  }

  type GetSalaryDeductionGroupByPayload<T extends SalaryDeductionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalaryDeductionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalaryDeductionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalaryDeductionGroupByOutputType[P]>
            : GetScalarType<T[P], SalaryDeductionGroupByOutputType[P]>
        }
      >
    >


  export type SalaryDeductionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    date?: boolean
    employee_id?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salaryDeduction"]>



  export type SalaryDeductionSelectScalar = {
    id?: boolean
    amount?: boolean
    date?: boolean
    employee_id?: boolean
  }

  export type SalaryDeductionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "date" | "employee_id", ExtArgs["result"]["salaryDeduction"]>
  export type SalaryDeductionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $SalaryDeductionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalaryDeduction"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amount: number
      date: Date
      employee_id: number
    }, ExtArgs["result"]["salaryDeduction"]>
    composites: {}
  }

  type SalaryDeductionGetPayload<S extends boolean | null | undefined | SalaryDeductionDefaultArgs> = $Result.GetResult<Prisma.$SalaryDeductionPayload, S>

  type SalaryDeductionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalaryDeductionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalaryDeductionCountAggregateInputType | true
    }

  export interface SalaryDeductionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalaryDeduction'], meta: { name: 'SalaryDeduction' } }
    /**
     * Find zero or one SalaryDeduction that matches the filter.
     * @param {SalaryDeductionFindUniqueArgs} args - Arguments to find a SalaryDeduction
     * @example
     * // Get one SalaryDeduction
     * const salaryDeduction = await prisma.salaryDeduction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalaryDeductionFindUniqueArgs>(args: SelectSubset<T, SalaryDeductionFindUniqueArgs<ExtArgs>>): Prisma__SalaryDeductionClient<$Result.GetResult<Prisma.$SalaryDeductionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalaryDeduction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalaryDeductionFindUniqueOrThrowArgs} args - Arguments to find a SalaryDeduction
     * @example
     * // Get one SalaryDeduction
     * const salaryDeduction = await prisma.salaryDeduction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalaryDeductionFindUniqueOrThrowArgs>(args: SelectSubset<T, SalaryDeductionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalaryDeductionClient<$Result.GetResult<Prisma.$SalaryDeductionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalaryDeduction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryDeductionFindFirstArgs} args - Arguments to find a SalaryDeduction
     * @example
     * // Get one SalaryDeduction
     * const salaryDeduction = await prisma.salaryDeduction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalaryDeductionFindFirstArgs>(args?: SelectSubset<T, SalaryDeductionFindFirstArgs<ExtArgs>>): Prisma__SalaryDeductionClient<$Result.GetResult<Prisma.$SalaryDeductionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalaryDeduction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryDeductionFindFirstOrThrowArgs} args - Arguments to find a SalaryDeduction
     * @example
     * // Get one SalaryDeduction
     * const salaryDeduction = await prisma.salaryDeduction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalaryDeductionFindFirstOrThrowArgs>(args?: SelectSubset<T, SalaryDeductionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalaryDeductionClient<$Result.GetResult<Prisma.$SalaryDeductionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalaryDeductions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryDeductionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalaryDeductions
     * const salaryDeductions = await prisma.salaryDeduction.findMany()
     * 
     * // Get first 10 SalaryDeductions
     * const salaryDeductions = await prisma.salaryDeduction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salaryDeductionWithIdOnly = await prisma.salaryDeduction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalaryDeductionFindManyArgs>(args?: SelectSubset<T, SalaryDeductionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryDeductionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalaryDeduction.
     * @param {SalaryDeductionCreateArgs} args - Arguments to create a SalaryDeduction.
     * @example
     * // Create one SalaryDeduction
     * const SalaryDeduction = await prisma.salaryDeduction.create({
     *   data: {
     *     // ... data to create a SalaryDeduction
     *   }
     * })
     * 
     */
    create<T extends SalaryDeductionCreateArgs>(args: SelectSubset<T, SalaryDeductionCreateArgs<ExtArgs>>): Prisma__SalaryDeductionClient<$Result.GetResult<Prisma.$SalaryDeductionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalaryDeductions.
     * @param {SalaryDeductionCreateManyArgs} args - Arguments to create many SalaryDeductions.
     * @example
     * // Create many SalaryDeductions
     * const salaryDeduction = await prisma.salaryDeduction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalaryDeductionCreateManyArgs>(args?: SelectSubset<T, SalaryDeductionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a SalaryDeduction.
     * @param {SalaryDeductionDeleteArgs} args - Arguments to delete one SalaryDeduction.
     * @example
     * // Delete one SalaryDeduction
     * const SalaryDeduction = await prisma.salaryDeduction.delete({
     *   where: {
     *     // ... filter to delete one SalaryDeduction
     *   }
     * })
     * 
     */
    delete<T extends SalaryDeductionDeleteArgs>(args: SelectSubset<T, SalaryDeductionDeleteArgs<ExtArgs>>): Prisma__SalaryDeductionClient<$Result.GetResult<Prisma.$SalaryDeductionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalaryDeduction.
     * @param {SalaryDeductionUpdateArgs} args - Arguments to update one SalaryDeduction.
     * @example
     * // Update one SalaryDeduction
     * const salaryDeduction = await prisma.salaryDeduction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalaryDeductionUpdateArgs>(args: SelectSubset<T, SalaryDeductionUpdateArgs<ExtArgs>>): Prisma__SalaryDeductionClient<$Result.GetResult<Prisma.$SalaryDeductionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalaryDeductions.
     * @param {SalaryDeductionDeleteManyArgs} args - Arguments to filter SalaryDeductions to delete.
     * @example
     * // Delete a few SalaryDeductions
     * const { count } = await prisma.salaryDeduction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalaryDeductionDeleteManyArgs>(args?: SelectSubset<T, SalaryDeductionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalaryDeductions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryDeductionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalaryDeductions
     * const salaryDeduction = await prisma.salaryDeduction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalaryDeductionUpdateManyArgs>(args: SelectSubset<T, SalaryDeductionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SalaryDeduction.
     * @param {SalaryDeductionUpsertArgs} args - Arguments to update or create a SalaryDeduction.
     * @example
     * // Update or create a SalaryDeduction
     * const salaryDeduction = await prisma.salaryDeduction.upsert({
     *   create: {
     *     // ... data to create a SalaryDeduction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalaryDeduction we want to update
     *   }
     * })
     */
    upsert<T extends SalaryDeductionUpsertArgs>(args: SelectSubset<T, SalaryDeductionUpsertArgs<ExtArgs>>): Prisma__SalaryDeductionClient<$Result.GetResult<Prisma.$SalaryDeductionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SalaryDeductions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryDeductionCountArgs} args - Arguments to filter SalaryDeductions to count.
     * @example
     * // Count the number of SalaryDeductions
     * const count = await prisma.salaryDeduction.count({
     *   where: {
     *     // ... the filter for the SalaryDeductions we want to count
     *   }
     * })
    **/
    count<T extends SalaryDeductionCountArgs>(
      args?: Subset<T, SalaryDeductionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalaryDeductionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalaryDeduction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryDeductionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalaryDeductionAggregateArgs>(args: Subset<T, SalaryDeductionAggregateArgs>): Prisma.PrismaPromise<GetSalaryDeductionAggregateType<T>>

    /**
     * Group by SalaryDeduction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryDeductionGroupByArgs} args - Group by arguments.
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
      T extends SalaryDeductionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalaryDeductionGroupByArgs['orderBy'] }
        : { orderBy?: SalaryDeductionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalaryDeductionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaryDeductionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalaryDeduction model
   */
  readonly fields: SalaryDeductionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalaryDeduction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalaryDeductionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SalaryDeduction model
   */
  interface SalaryDeductionFieldRefs {
    readonly id: FieldRef<"SalaryDeduction", 'Int'>
    readonly amount: FieldRef<"SalaryDeduction", 'Int'>
    readonly date: FieldRef<"SalaryDeduction", 'DateTime'>
    readonly employee_id: FieldRef<"SalaryDeduction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SalaryDeduction findUnique
   */
  export type SalaryDeductionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryDeduction
     */
    select?: SalaryDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryDeduction
     */
    omit?: SalaryDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryDeductionInclude<ExtArgs> | null
    /**
     * Filter, which SalaryDeduction to fetch.
     */
    where: SalaryDeductionWhereUniqueInput
  }

  /**
   * SalaryDeduction findUniqueOrThrow
   */
  export type SalaryDeductionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryDeduction
     */
    select?: SalaryDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryDeduction
     */
    omit?: SalaryDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryDeductionInclude<ExtArgs> | null
    /**
     * Filter, which SalaryDeduction to fetch.
     */
    where: SalaryDeductionWhereUniqueInput
  }

  /**
   * SalaryDeduction findFirst
   */
  export type SalaryDeductionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryDeduction
     */
    select?: SalaryDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryDeduction
     */
    omit?: SalaryDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryDeductionInclude<ExtArgs> | null
    /**
     * Filter, which SalaryDeduction to fetch.
     */
    where?: SalaryDeductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryDeductions to fetch.
     */
    orderBy?: SalaryDeductionOrderByWithRelationInput | SalaryDeductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalaryDeductions.
     */
    cursor?: SalaryDeductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryDeductions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryDeductions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalaryDeductions.
     */
    distinct?: SalaryDeductionScalarFieldEnum | SalaryDeductionScalarFieldEnum[]
  }

  /**
   * SalaryDeduction findFirstOrThrow
   */
  export type SalaryDeductionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryDeduction
     */
    select?: SalaryDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryDeduction
     */
    omit?: SalaryDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryDeductionInclude<ExtArgs> | null
    /**
     * Filter, which SalaryDeduction to fetch.
     */
    where?: SalaryDeductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryDeductions to fetch.
     */
    orderBy?: SalaryDeductionOrderByWithRelationInput | SalaryDeductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalaryDeductions.
     */
    cursor?: SalaryDeductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryDeductions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryDeductions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalaryDeductions.
     */
    distinct?: SalaryDeductionScalarFieldEnum | SalaryDeductionScalarFieldEnum[]
  }

  /**
   * SalaryDeduction findMany
   */
  export type SalaryDeductionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryDeduction
     */
    select?: SalaryDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryDeduction
     */
    omit?: SalaryDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryDeductionInclude<ExtArgs> | null
    /**
     * Filter, which SalaryDeductions to fetch.
     */
    where?: SalaryDeductionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalaryDeductions to fetch.
     */
    orderBy?: SalaryDeductionOrderByWithRelationInput | SalaryDeductionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalaryDeductions.
     */
    cursor?: SalaryDeductionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalaryDeductions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalaryDeductions.
     */
    skip?: number
    distinct?: SalaryDeductionScalarFieldEnum | SalaryDeductionScalarFieldEnum[]
  }

  /**
   * SalaryDeduction create
   */
  export type SalaryDeductionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryDeduction
     */
    select?: SalaryDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryDeduction
     */
    omit?: SalaryDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryDeductionInclude<ExtArgs> | null
    /**
     * The data needed to create a SalaryDeduction.
     */
    data: XOR<SalaryDeductionCreateInput, SalaryDeductionUncheckedCreateInput>
  }

  /**
   * SalaryDeduction createMany
   */
  export type SalaryDeductionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalaryDeductions.
     */
    data: SalaryDeductionCreateManyInput | SalaryDeductionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalaryDeduction update
   */
  export type SalaryDeductionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryDeduction
     */
    select?: SalaryDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryDeduction
     */
    omit?: SalaryDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryDeductionInclude<ExtArgs> | null
    /**
     * The data needed to update a SalaryDeduction.
     */
    data: XOR<SalaryDeductionUpdateInput, SalaryDeductionUncheckedUpdateInput>
    /**
     * Choose, which SalaryDeduction to update.
     */
    where: SalaryDeductionWhereUniqueInput
  }

  /**
   * SalaryDeduction updateMany
   */
  export type SalaryDeductionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalaryDeductions.
     */
    data: XOR<SalaryDeductionUpdateManyMutationInput, SalaryDeductionUncheckedUpdateManyInput>
    /**
     * Filter which SalaryDeductions to update
     */
    where?: SalaryDeductionWhereInput
    /**
     * Limit how many SalaryDeductions to update.
     */
    limit?: number
  }

  /**
   * SalaryDeduction upsert
   */
  export type SalaryDeductionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryDeduction
     */
    select?: SalaryDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryDeduction
     */
    omit?: SalaryDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryDeductionInclude<ExtArgs> | null
    /**
     * The filter to search for the SalaryDeduction to update in case it exists.
     */
    where: SalaryDeductionWhereUniqueInput
    /**
     * In case the SalaryDeduction found by the `where` argument doesn't exist, create a new SalaryDeduction with this data.
     */
    create: XOR<SalaryDeductionCreateInput, SalaryDeductionUncheckedCreateInput>
    /**
     * In case the SalaryDeduction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalaryDeductionUpdateInput, SalaryDeductionUncheckedUpdateInput>
  }

  /**
   * SalaryDeduction delete
   */
  export type SalaryDeductionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryDeduction
     */
    select?: SalaryDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryDeduction
     */
    omit?: SalaryDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryDeductionInclude<ExtArgs> | null
    /**
     * Filter which SalaryDeduction to delete.
     */
    where: SalaryDeductionWhereUniqueInput
  }

  /**
   * SalaryDeduction deleteMany
   */
  export type SalaryDeductionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalaryDeductions to delete
     */
    where?: SalaryDeductionWhereInput
    /**
     * Limit how many SalaryDeductions to delete.
     */
    limit?: number
  }

  /**
   * SalaryDeduction without action
   */
  export type SalaryDeductionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalaryDeduction
     */
    select?: SalaryDeductionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalaryDeduction
     */
    omit?: SalaryDeductionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryDeductionInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceAvgAggregateOutputType = {
    id: number | null
    schedule_id: number | null
  }

  export type AttendanceSumAggregateOutputType = {
    id: number | null
    schedule_id: number | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: number | null
    check_in: Date | null
    check_out: Date | null
    status: string | null
    schedule_id: number | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: number | null
    check_in: Date | null
    check_out: Date | null
    status: string | null
    schedule_id: number | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    check_in: number
    check_out: number
    status: number
    schedule_id: number
    _all: number
  }


  export type AttendanceAvgAggregateInputType = {
    id?: true
    schedule_id?: true
  }

  export type AttendanceSumAggregateInputType = {
    id?: true
    schedule_id?: true
  }

  export type AttendanceMinAggregateInputType = {
    id?: true
    check_in?: true
    check_out?: true
    status?: true
    schedule_id?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    check_in?: true
    check_out?: true
    status?: true
    schedule_id?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    check_in?: true
    check_out?: true
    status?: true
    schedule_id?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AttendanceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AttendanceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _avg?: AttendanceAvgAggregateInputType
    _sum?: AttendanceSumAggregateInputType
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: number
    check_in: Date
    check_out: Date
    status: string
    schedule_id: number
    _count: AttendanceCountAggregateOutputType | null
    _avg: AttendanceAvgAggregateOutputType | null
    _sum: AttendanceSumAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    check_in?: boolean
    check_out?: boolean
    status?: boolean
    schedule_id?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>



  export type AttendanceSelectScalar = {
    id?: boolean
    check_in?: boolean
    check_out?: boolean
    status?: boolean
    schedule_id?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "check_in" | "check_out" | "status" | "schedule_id", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      schedule: Prisma.$SchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      check_in: Date
      check_out: Date
      status: string
      schedule_id: number
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedule<T extends ScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleDefaultArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'Int'>
    readonly check_in: FieldRef<"Attendance", 'DateTime'>
    readonly check_out: FieldRef<"Attendance", 'DateTime'>
    readonly status: FieldRef<"Attendance", 'String'>
    readonly schedule_id: FieldRef<"Attendance", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model Leave
   */

  export type AggregateLeave = {
    _count: LeaveCountAggregateOutputType | null
    _avg: LeaveAvgAggregateOutputType | null
    _sum: LeaveSumAggregateOutputType | null
    _min: LeaveMinAggregateOutputType | null
    _max: LeaveMaxAggregateOutputType | null
  }

  export type LeaveAvgAggregateOutputType = {
    id: number | null
    schedule_id: number | null
  }

  export type LeaveSumAggregateOutputType = {
    id: number | null
    schedule_id: number | null
  }

  export type LeaveMinAggregateOutputType = {
    id: number | null
    reason: string | null
    status: string | null
    schedule_id: number | null
  }

  export type LeaveMaxAggregateOutputType = {
    id: number | null
    reason: string | null
    status: string | null
    schedule_id: number | null
  }

  export type LeaveCountAggregateOutputType = {
    id: number
    reason: number
    status: number
    schedule_id: number
    _all: number
  }


  export type LeaveAvgAggregateInputType = {
    id?: true
    schedule_id?: true
  }

  export type LeaveSumAggregateInputType = {
    id?: true
    schedule_id?: true
  }

  export type LeaveMinAggregateInputType = {
    id?: true
    reason?: true
    status?: true
    schedule_id?: true
  }

  export type LeaveMaxAggregateInputType = {
    id?: true
    reason?: true
    status?: true
    schedule_id?: true
  }

  export type LeaveCountAggregateInputType = {
    id?: true
    reason?: true
    status?: true
    schedule_id?: true
    _all?: true
  }

  export type LeaveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leave to aggregate.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leaves
    **/
    _count?: true | LeaveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeaveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeaveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaveMaxAggregateInputType
  }

  export type GetLeaveAggregateType<T extends LeaveAggregateArgs> = {
        [P in keyof T & keyof AggregateLeave]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeave[P]>
      : GetScalarType<T[P], AggregateLeave[P]>
  }




  export type LeaveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveWhereInput
    orderBy?: LeaveOrderByWithAggregationInput | LeaveOrderByWithAggregationInput[]
    by: LeaveScalarFieldEnum[] | LeaveScalarFieldEnum
    having?: LeaveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaveCountAggregateInputType | true
    _avg?: LeaveAvgAggregateInputType
    _sum?: LeaveSumAggregateInputType
    _min?: LeaveMinAggregateInputType
    _max?: LeaveMaxAggregateInputType
  }

  export type LeaveGroupByOutputType = {
    id: number
    reason: string
    status: string
    schedule_id: number
    _count: LeaveCountAggregateOutputType | null
    _avg: LeaveAvgAggregateOutputType | null
    _sum: LeaveSumAggregateOutputType | null
    _min: LeaveMinAggregateOutputType | null
    _max: LeaveMaxAggregateOutputType | null
  }

  type GetLeaveGroupByPayload<T extends LeaveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaveGroupByOutputType[P]>
            : GetScalarType<T[P], LeaveGroupByOutputType[P]>
        }
      >
    >


  export type LeaveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    status?: boolean
    schedule_id?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leave"]>



  export type LeaveSelectScalar = {
    id?: boolean
    reason?: boolean
    status?: boolean
    schedule_id?: boolean
  }

  export type LeaveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reason" | "status" | "schedule_id", ExtArgs["result"]["leave"]>
  export type LeaveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }

  export type $LeavePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Leave"
    objects: {
      schedule: Prisma.$SchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reason: string
      status: string
      schedule_id: number
    }, ExtArgs["result"]["leave"]>
    composites: {}
  }

  type LeaveGetPayload<S extends boolean | null | undefined | LeaveDefaultArgs> = $Result.GetResult<Prisma.$LeavePayload, S>

  type LeaveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaveCountAggregateInputType | true
    }

  export interface LeaveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Leave'], meta: { name: 'Leave' } }
    /**
     * Find zero or one Leave that matches the filter.
     * @param {LeaveFindUniqueArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaveFindUniqueArgs>(args: SelectSubset<T, LeaveFindUniqueArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leave that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaveFindUniqueOrThrowArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaveFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leave that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveFindFirstArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaveFindFirstArgs>(args?: SelectSubset<T, LeaveFindFirstArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leave that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveFindFirstOrThrowArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaveFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaveFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leaves
     * const leaves = await prisma.leave.findMany()
     * 
     * // Get first 10 Leaves
     * const leaves = await prisma.leave.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaveWithIdOnly = await prisma.leave.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaveFindManyArgs>(args?: SelectSubset<T, LeaveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leave.
     * @param {LeaveCreateArgs} args - Arguments to create a Leave.
     * @example
     * // Create one Leave
     * const Leave = await prisma.leave.create({
     *   data: {
     *     // ... data to create a Leave
     *   }
     * })
     * 
     */
    create<T extends LeaveCreateArgs>(args: SelectSubset<T, LeaveCreateArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leaves.
     * @param {LeaveCreateManyArgs} args - Arguments to create many Leaves.
     * @example
     * // Create many Leaves
     * const leave = await prisma.leave.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaveCreateManyArgs>(args?: SelectSubset<T, LeaveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Leave.
     * @param {LeaveDeleteArgs} args - Arguments to delete one Leave.
     * @example
     * // Delete one Leave
     * const Leave = await prisma.leave.delete({
     *   where: {
     *     // ... filter to delete one Leave
     *   }
     * })
     * 
     */
    delete<T extends LeaveDeleteArgs>(args: SelectSubset<T, LeaveDeleteArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leave.
     * @param {LeaveUpdateArgs} args - Arguments to update one Leave.
     * @example
     * // Update one Leave
     * const leave = await prisma.leave.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaveUpdateArgs>(args: SelectSubset<T, LeaveUpdateArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leaves.
     * @param {LeaveDeleteManyArgs} args - Arguments to filter Leaves to delete.
     * @example
     * // Delete a few Leaves
     * const { count } = await prisma.leave.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaveDeleteManyArgs>(args?: SelectSubset<T, LeaveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leaves
     * const leave = await prisma.leave.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaveUpdateManyArgs>(args: SelectSubset<T, LeaveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Leave.
     * @param {LeaveUpsertArgs} args - Arguments to update or create a Leave.
     * @example
     * // Update or create a Leave
     * const leave = await prisma.leave.upsert({
     *   create: {
     *     // ... data to create a Leave
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leave we want to update
     *   }
     * })
     */
    upsert<T extends LeaveUpsertArgs>(args: SelectSubset<T, LeaveUpsertArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveCountArgs} args - Arguments to filter Leaves to count.
     * @example
     * // Count the number of Leaves
     * const count = await prisma.leave.count({
     *   where: {
     *     // ... the filter for the Leaves we want to count
     *   }
     * })
    **/
    count<T extends LeaveCountArgs>(
      args?: Subset<T, LeaveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaveAggregateArgs>(args: Subset<T, LeaveAggregateArgs>): Prisma.PrismaPromise<GetLeaveAggregateType<T>>

    /**
     * Group by Leave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveGroupByArgs} args - Group by arguments.
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
      T extends LeaveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaveGroupByArgs['orderBy'] }
        : { orderBy?: LeaveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeaveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Leave model
   */
  readonly fields: LeaveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Leave.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedule<T extends ScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleDefaultArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Leave model
   */
  interface LeaveFieldRefs {
    readonly id: FieldRef<"Leave", 'Int'>
    readonly reason: FieldRef<"Leave", 'String'>
    readonly status: FieldRef<"Leave", 'String'>
    readonly schedule_id: FieldRef<"Leave", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Leave findUnique
   */
  export type LeaveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave findUniqueOrThrow
   */
  export type LeaveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave findFirst
   */
  export type LeaveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaves.
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaves.
     */
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * Leave findFirstOrThrow
   */
  export type LeaveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaves.
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaves.
     */
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * Leave findMany
   */
  export type LeaveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leaves to fetch.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leaves.
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * Leave create
   */
  export type LeaveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * The data needed to create a Leave.
     */
    data: XOR<LeaveCreateInput, LeaveUncheckedCreateInput>
  }

  /**
   * Leave createMany
   */
  export type LeaveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leaves.
     */
    data: LeaveCreateManyInput | LeaveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leave update
   */
  export type LeaveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * The data needed to update a Leave.
     */
    data: XOR<LeaveUpdateInput, LeaveUncheckedUpdateInput>
    /**
     * Choose, which Leave to update.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave updateMany
   */
  export type LeaveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leaves.
     */
    data: XOR<LeaveUpdateManyMutationInput, LeaveUncheckedUpdateManyInput>
    /**
     * Filter which Leaves to update
     */
    where?: LeaveWhereInput
    /**
     * Limit how many Leaves to update.
     */
    limit?: number
  }

  /**
   * Leave upsert
   */
  export type LeaveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * The filter to search for the Leave to update in case it exists.
     */
    where: LeaveWhereUniqueInput
    /**
     * In case the Leave found by the `where` argument doesn't exist, create a new Leave with this data.
     */
    create: XOR<LeaveCreateInput, LeaveUncheckedCreateInput>
    /**
     * In case the Leave was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaveUpdateInput, LeaveUncheckedUpdateInput>
  }

  /**
   * Leave delete
   */
  export type LeaveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter which Leave to delete.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave deleteMany
   */
  export type LeaveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leaves to delete
     */
    where?: LeaveWhereInput
    /**
     * Limit how many Leaves to delete.
     */
    limit?: number
  }

  /**
   * Leave without action
   */
  export type LeaveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
  }


  /**
   * Model PaidLeave
   */

  export type AggregatePaidLeave = {
    _count: PaidLeaveCountAggregateOutputType | null
    _avg: PaidLeaveAvgAggregateOutputType | null
    _sum: PaidLeaveSumAggregateOutputType | null
    _min: PaidLeaveMinAggregateOutputType | null
    _max: PaidLeaveMaxAggregateOutputType | null
  }

  export type PaidLeaveAvgAggregateOutputType = {
    id: number | null
    schedule_id: number | null
  }

  export type PaidLeaveSumAggregateOutputType = {
    id: number | null
    schedule_id: number | null
  }

  export type PaidLeaveMinAggregateOutputType = {
    id: number | null
    reason: string | null
    status: string | null
    schedule_id: number | null
  }

  export type PaidLeaveMaxAggregateOutputType = {
    id: number | null
    reason: string | null
    status: string | null
    schedule_id: number | null
  }

  export type PaidLeaveCountAggregateOutputType = {
    id: number
    reason: number
    status: number
    schedule_id: number
    _all: number
  }


  export type PaidLeaveAvgAggregateInputType = {
    id?: true
    schedule_id?: true
  }

  export type PaidLeaveSumAggregateInputType = {
    id?: true
    schedule_id?: true
  }

  export type PaidLeaveMinAggregateInputType = {
    id?: true
    reason?: true
    status?: true
    schedule_id?: true
  }

  export type PaidLeaveMaxAggregateInputType = {
    id?: true
    reason?: true
    status?: true
    schedule_id?: true
  }

  export type PaidLeaveCountAggregateInputType = {
    id?: true
    reason?: true
    status?: true
    schedule_id?: true
    _all?: true
  }

  export type PaidLeaveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaidLeave to aggregate.
     */
    where?: PaidLeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaidLeaves to fetch.
     */
    orderBy?: PaidLeaveOrderByWithRelationInput | PaidLeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaidLeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaidLeaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaidLeaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaidLeaves
    **/
    _count?: true | PaidLeaveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaidLeaveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaidLeaveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaidLeaveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaidLeaveMaxAggregateInputType
  }

  export type GetPaidLeaveAggregateType<T extends PaidLeaveAggregateArgs> = {
        [P in keyof T & keyof AggregatePaidLeave]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaidLeave[P]>
      : GetScalarType<T[P], AggregatePaidLeave[P]>
  }




  export type PaidLeaveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaidLeaveWhereInput
    orderBy?: PaidLeaveOrderByWithAggregationInput | PaidLeaveOrderByWithAggregationInput[]
    by: PaidLeaveScalarFieldEnum[] | PaidLeaveScalarFieldEnum
    having?: PaidLeaveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaidLeaveCountAggregateInputType | true
    _avg?: PaidLeaveAvgAggregateInputType
    _sum?: PaidLeaveSumAggregateInputType
    _min?: PaidLeaveMinAggregateInputType
    _max?: PaidLeaveMaxAggregateInputType
  }

  export type PaidLeaveGroupByOutputType = {
    id: number
    reason: string
    status: string
    schedule_id: number
    _count: PaidLeaveCountAggregateOutputType | null
    _avg: PaidLeaveAvgAggregateOutputType | null
    _sum: PaidLeaveSumAggregateOutputType | null
    _min: PaidLeaveMinAggregateOutputType | null
    _max: PaidLeaveMaxAggregateOutputType | null
  }

  type GetPaidLeaveGroupByPayload<T extends PaidLeaveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaidLeaveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaidLeaveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaidLeaveGroupByOutputType[P]>
            : GetScalarType<T[P], PaidLeaveGroupByOutputType[P]>
        }
      >
    >


  export type PaidLeaveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reason?: boolean
    status?: boolean
    schedule_id?: boolean
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paidLeave"]>



  export type PaidLeaveSelectScalar = {
    id?: boolean
    reason?: boolean
    status?: boolean
    schedule_id?: boolean
  }

  export type PaidLeaveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reason" | "status" | "schedule_id", ExtArgs["result"]["paidLeave"]>
  export type PaidLeaveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedule?: boolean | ScheduleDefaultArgs<ExtArgs>
  }

  export type $PaidLeavePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaidLeave"
    objects: {
      schedule: Prisma.$SchedulePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reason: string
      status: string
      schedule_id: number
    }, ExtArgs["result"]["paidLeave"]>
    composites: {}
  }

  type PaidLeaveGetPayload<S extends boolean | null | undefined | PaidLeaveDefaultArgs> = $Result.GetResult<Prisma.$PaidLeavePayload, S>

  type PaidLeaveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaidLeaveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaidLeaveCountAggregateInputType | true
    }

  export interface PaidLeaveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaidLeave'], meta: { name: 'PaidLeave' } }
    /**
     * Find zero or one PaidLeave that matches the filter.
     * @param {PaidLeaveFindUniqueArgs} args - Arguments to find a PaidLeave
     * @example
     * // Get one PaidLeave
     * const paidLeave = await prisma.paidLeave.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaidLeaveFindUniqueArgs>(args: SelectSubset<T, PaidLeaveFindUniqueArgs<ExtArgs>>): Prisma__PaidLeaveClient<$Result.GetResult<Prisma.$PaidLeavePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaidLeave that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaidLeaveFindUniqueOrThrowArgs} args - Arguments to find a PaidLeave
     * @example
     * // Get one PaidLeave
     * const paidLeave = await prisma.paidLeave.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaidLeaveFindUniqueOrThrowArgs>(args: SelectSubset<T, PaidLeaveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaidLeaveClient<$Result.GetResult<Prisma.$PaidLeavePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaidLeave that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaidLeaveFindFirstArgs} args - Arguments to find a PaidLeave
     * @example
     * // Get one PaidLeave
     * const paidLeave = await prisma.paidLeave.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaidLeaveFindFirstArgs>(args?: SelectSubset<T, PaidLeaveFindFirstArgs<ExtArgs>>): Prisma__PaidLeaveClient<$Result.GetResult<Prisma.$PaidLeavePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaidLeave that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaidLeaveFindFirstOrThrowArgs} args - Arguments to find a PaidLeave
     * @example
     * // Get one PaidLeave
     * const paidLeave = await prisma.paidLeave.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaidLeaveFindFirstOrThrowArgs>(args?: SelectSubset<T, PaidLeaveFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaidLeaveClient<$Result.GetResult<Prisma.$PaidLeavePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaidLeaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaidLeaveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaidLeaves
     * const paidLeaves = await prisma.paidLeave.findMany()
     * 
     * // Get first 10 PaidLeaves
     * const paidLeaves = await prisma.paidLeave.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paidLeaveWithIdOnly = await prisma.paidLeave.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaidLeaveFindManyArgs>(args?: SelectSubset<T, PaidLeaveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaidLeavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaidLeave.
     * @param {PaidLeaveCreateArgs} args - Arguments to create a PaidLeave.
     * @example
     * // Create one PaidLeave
     * const PaidLeave = await prisma.paidLeave.create({
     *   data: {
     *     // ... data to create a PaidLeave
     *   }
     * })
     * 
     */
    create<T extends PaidLeaveCreateArgs>(args: SelectSubset<T, PaidLeaveCreateArgs<ExtArgs>>): Prisma__PaidLeaveClient<$Result.GetResult<Prisma.$PaidLeavePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaidLeaves.
     * @param {PaidLeaveCreateManyArgs} args - Arguments to create many PaidLeaves.
     * @example
     * // Create many PaidLeaves
     * const paidLeave = await prisma.paidLeave.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaidLeaveCreateManyArgs>(args?: SelectSubset<T, PaidLeaveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaidLeave.
     * @param {PaidLeaveDeleteArgs} args - Arguments to delete one PaidLeave.
     * @example
     * // Delete one PaidLeave
     * const PaidLeave = await prisma.paidLeave.delete({
     *   where: {
     *     // ... filter to delete one PaidLeave
     *   }
     * })
     * 
     */
    delete<T extends PaidLeaveDeleteArgs>(args: SelectSubset<T, PaidLeaveDeleteArgs<ExtArgs>>): Prisma__PaidLeaveClient<$Result.GetResult<Prisma.$PaidLeavePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaidLeave.
     * @param {PaidLeaveUpdateArgs} args - Arguments to update one PaidLeave.
     * @example
     * // Update one PaidLeave
     * const paidLeave = await prisma.paidLeave.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaidLeaveUpdateArgs>(args: SelectSubset<T, PaidLeaveUpdateArgs<ExtArgs>>): Prisma__PaidLeaveClient<$Result.GetResult<Prisma.$PaidLeavePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaidLeaves.
     * @param {PaidLeaveDeleteManyArgs} args - Arguments to filter PaidLeaves to delete.
     * @example
     * // Delete a few PaidLeaves
     * const { count } = await prisma.paidLeave.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaidLeaveDeleteManyArgs>(args?: SelectSubset<T, PaidLeaveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaidLeaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaidLeaveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaidLeaves
     * const paidLeave = await prisma.paidLeave.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaidLeaveUpdateManyArgs>(args: SelectSubset<T, PaidLeaveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaidLeave.
     * @param {PaidLeaveUpsertArgs} args - Arguments to update or create a PaidLeave.
     * @example
     * // Update or create a PaidLeave
     * const paidLeave = await prisma.paidLeave.upsert({
     *   create: {
     *     // ... data to create a PaidLeave
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaidLeave we want to update
     *   }
     * })
     */
    upsert<T extends PaidLeaveUpsertArgs>(args: SelectSubset<T, PaidLeaveUpsertArgs<ExtArgs>>): Prisma__PaidLeaveClient<$Result.GetResult<Prisma.$PaidLeavePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaidLeaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaidLeaveCountArgs} args - Arguments to filter PaidLeaves to count.
     * @example
     * // Count the number of PaidLeaves
     * const count = await prisma.paidLeave.count({
     *   where: {
     *     // ... the filter for the PaidLeaves we want to count
     *   }
     * })
    **/
    count<T extends PaidLeaveCountArgs>(
      args?: Subset<T, PaidLeaveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaidLeaveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaidLeave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaidLeaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaidLeaveAggregateArgs>(args: Subset<T, PaidLeaveAggregateArgs>): Prisma.PrismaPromise<GetPaidLeaveAggregateType<T>>

    /**
     * Group by PaidLeave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaidLeaveGroupByArgs} args - Group by arguments.
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
      T extends PaidLeaveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaidLeaveGroupByArgs['orderBy'] }
        : { orderBy?: PaidLeaveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaidLeaveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaidLeaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaidLeave model
   */
  readonly fields: PaidLeaveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaidLeave.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaidLeaveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedule<T extends ScheduleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ScheduleDefaultArgs<ExtArgs>>): Prisma__ScheduleClient<$Result.GetResult<Prisma.$SchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PaidLeave model
   */
  interface PaidLeaveFieldRefs {
    readonly id: FieldRef<"PaidLeave", 'Int'>
    readonly reason: FieldRef<"PaidLeave", 'String'>
    readonly status: FieldRef<"PaidLeave", 'String'>
    readonly schedule_id: FieldRef<"PaidLeave", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PaidLeave findUnique
   */
  export type PaidLeaveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaidLeave
     */
    select?: PaidLeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaidLeave
     */
    omit?: PaidLeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaidLeaveInclude<ExtArgs> | null
    /**
     * Filter, which PaidLeave to fetch.
     */
    where: PaidLeaveWhereUniqueInput
  }

  /**
   * PaidLeave findUniqueOrThrow
   */
  export type PaidLeaveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaidLeave
     */
    select?: PaidLeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaidLeave
     */
    omit?: PaidLeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaidLeaveInclude<ExtArgs> | null
    /**
     * Filter, which PaidLeave to fetch.
     */
    where: PaidLeaveWhereUniqueInput
  }

  /**
   * PaidLeave findFirst
   */
  export type PaidLeaveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaidLeave
     */
    select?: PaidLeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaidLeave
     */
    omit?: PaidLeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaidLeaveInclude<ExtArgs> | null
    /**
     * Filter, which PaidLeave to fetch.
     */
    where?: PaidLeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaidLeaves to fetch.
     */
    orderBy?: PaidLeaveOrderByWithRelationInput | PaidLeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaidLeaves.
     */
    cursor?: PaidLeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaidLeaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaidLeaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaidLeaves.
     */
    distinct?: PaidLeaveScalarFieldEnum | PaidLeaveScalarFieldEnum[]
  }

  /**
   * PaidLeave findFirstOrThrow
   */
  export type PaidLeaveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaidLeave
     */
    select?: PaidLeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaidLeave
     */
    omit?: PaidLeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaidLeaveInclude<ExtArgs> | null
    /**
     * Filter, which PaidLeave to fetch.
     */
    where?: PaidLeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaidLeaves to fetch.
     */
    orderBy?: PaidLeaveOrderByWithRelationInput | PaidLeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaidLeaves.
     */
    cursor?: PaidLeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaidLeaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaidLeaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaidLeaves.
     */
    distinct?: PaidLeaveScalarFieldEnum | PaidLeaveScalarFieldEnum[]
  }

  /**
   * PaidLeave findMany
   */
  export type PaidLeaveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaidLeave
     */
    select?: PaidLeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaidLeave
     */
    omit?: PaidLeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaidLeaveInclude<ExtArgs> | null
    /**
     * Filter, which PaidLeaves to fetch.
     */
    where?: PaidLeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaidLeaves to fetch.
     */
    orderBy?: PaidLeaveOrderByWithRelationInput | PaidLeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaidLeaves.
     */
    cursor?: PaidLeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaidLeaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaidLeaves.
     */
    skip?: number
    distinct?: PaidLeaveScalarFieldEnum | PaidLeaveScalarFieldEnum[]
  }

  /**
   * PaidLeave create
   */
  export type PaidLeaveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaidLeave
     */
    select?: PaidLeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaidLeave
     */
    omit?: PaidLeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaidLeaveInclude<ExtArgs> | null
    /**
     * The data needed to create a PaidLeave.
     */
    data: XOR<PaidLeaveCreateInput, PaidLeaveUncheckedCreateInput>
  }

  /**
   * PaidLeave createMany
   */
  export type PaidLeaveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaidLeaves.
     */
    data: PaidLeaveCreateManyInput | PaidLeaveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaidLeave update
   */
  export type PaidLeaveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaidLeave
     */
    select?: PaidLeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaidLeave
     */
    omit?: PaidLeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaidLeaveInclude<ExtArgs> | null
    /**
     * The data needed to update a PaidLeave.
     */
    data: XOR<PaidLeaveUpdateInput, PaidLeaveUncheckedUpdateInput>
    /**
     * Choose, which PaidLeave to update.
     */
    where: PaidLeaveWhereUniqueInput
  }

  /**
   * PaidLeave updateMany
   */
  export type PaidLeaveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaidLeaves.
     */
    data: XOR<PaidLeaveUpdateManyMutationInput, PaidLeaveUncheckedUpdateManyInput>
    /**
     * Filter which PaidLeaves to update
     */
    where?: PaidLeaveWhereInput
    /**
     * Limit how many PaidLeaves to update.
     */
    limit?: number
  }

  /**
   * PaidLeave upsert
   */
  export type PaidLeaveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaidLeave
     */
    select?: PaidLeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaidLeave
     */
    omit?: PaidLeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaidLeaveInclude<ExtArgs> | null
    /**
     * The filter to search for the PaidLeave to update in case it exists.
     */
    where: PaidLeaveWhereUniqueInput
    /**
     * In case the PaidLeave found by the `where` argument doesn't exist, create a new PaidLeave with this data.
     */
    create: XOR<PaidLeaveCreateInput, PaidLeaveUncheckedCreateInput>
    /**
     * In case the PaidLeave was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaidLeaveUpdateInput, PaidLeaveUncheckedUpdateInput>
  }

  /**
   * PaidLeave delete
   */
  export type PaidLeaveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaidLeave
     */
    select?: PaidLeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaidLeave
     */
    omit?: PaidLeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaidLeaveInclude<ExtArgs> | null
    /**
     * Filter which PaidLeave to delete.
     */
    where: PaidLeaveWhereUniqueInput
  }

  /**
   * PaidLeave deleteMany
   */
  export type PaidLeaveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaidLeaves to delete
     */
    where?: PaidLeaveWhereInput
    /**
     * Limit how many PaidLeaves to delete.
     */
    limit?: number
  }

  /**
   * PaidLeave without action
   */
  export type PaidLeaveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaidLeave
     */
    select?: PaidLeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaidLeave
     */
    omit?: PaidLeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaidLeaveInclude<ExtArgs> | null
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


  export const LevelScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type LevelScalarFieldEnum = (typeof LevelScalarFieldEnum)[keyof typeof LevelScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    token: 'token',
    level_id: 'level_id'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    birth_date: 'birth_date',
    phone: 'phone',
    account_id: 'account_id'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const ScheduleScalarFieldEnum: {
    id: 'id',
    date: 'date',
    status: 'status',
    attendance_status: 'attendance_status',
    employee_id: 'employee_id'
  };

  export type ScheduleScalarFieldEnum = (typeof ScheduleScalarFieldEnum)[keyof typeof ScheduleScalarFieldEnum]


  export const EmployeeLoanScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    date: 'date',
    status: 'status',
    employee_id: 'employee_id'
  };

  export type EmployeeLoanScalarFieldEnum = (typeof EmployeeLoanScalarFieldEnum)[keyof typeof EmployeeLoanScalarFieldEnum]


  export const SalaryDeductionScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    date: 'date',
    employee_id: 'employee_id'
  };

  export type SalaryDeductionScalarFieldEnum = (typeof SalaryDeductionScalarFieldEnum)[keyof typeof SalaryDeductionScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    check_in: 'check_in',
    check_out: 'check_out',
    status: 'status',
    schedule_id: 'schedule_id'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const LeaveScalarFieldEnum: {
    id: 'id',
    reason: 'reason',
    status: 'status',
    schedule_id: 'schedule_id'
  };

  export type LeaveScalarFieldEnum = (typeof LeaveScalarFieldEnum)[keyof typeof LeaveScalarFieldEnum]


  export const PaidLeaveScalarFieldEnum: {
    id: 'id',
    reason: 'reason',
    status: 'status',
    schedule_id: 'schedule_id'
  };

  export type PaidLeaveScalarFieldEnum = (typeof PaidLeaveScalarFieldEnum)[keyof typeof PaidLeaveScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const LevelOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type LevelOrderByRelevanceFieldEnum = (typeof LevelOrderByRelevanceFieldEnum)[keyof typeof LevelOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AccountOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password',
    token: 'token'
  };

  export type AccountOrderByRelevanceFieldEnum = (typeof AccountOrderByRelevanceFieldEnum)[keyof typeof AccountOrderByRelevanceFieldEnum]


  export const EmployeeOrderByRelevanceFieldEnum: {
    name: 'name',
    phone: 'phone'
  };

  export type EmployeeOrderByRelevanceFieldEnum = (typeof EmployeeOrderByRelevanceFieldEnum)[keyof typeof EmployeeOrderByRelevanceFieldEnum]


  export const ScheduleOrderByRelevanceFieldEnum: {
    date: 'date',
    status: 'status',
    attendance_status: 'attendance_status'
  };

  export type ScheduleOrderByRelevanceFieldEnum = (typeof ScheduleOrderByRelevanceFieldEnum)[keyof typeof ScheduleOrderByRelevanceFieldEnum]


  export const EmployeeLoanOrderByRelevanceFieldEnum: {
    status: 'status'
  };

  export type EmployeeLoanOrderByRelevanceFieldEnum = (typeof EmployeeLoanOrderByRelevanceFieldEnum)[keyof typeof EmployeeLoanOrderByRelevanceFieldEnum]


  export const AttendanceOrderByRelevanceFieldEnum: {
    status: 'status'
  };

  export type AttendanceOrderByRelevanceFieldEnum = (typeof AttendanceOrderByRelevanceFieldEnum)[keyof typeof AttendanceOrderByRelevanceFieldEnum]


  export const LeaveOrderByRelevanceFieldEnum: {
    reason: 'reason',
    status: 'status'
  };

  export type LeaveOrderByRelevanceFieldEnum = (typeof LeaveOrderByRelevanceFieldEnum)[keyof typeof LeaveOrderByRelevanceFieldEnum]


  export const PaidLeaveOrderByRelevanceFieldEnum: {
    reason: 'reason',
    status: 'status'
  };

  export type PaidLeaveOrderByRelevanceFieldEnum = (typeof PaidLeaveOrderByRelevanceFieldEnum)[keyof typeof PaidLeaveOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type LevelWhereInput = {
    AND?: LevelWhereInput | LevelWhereInput[]
    OR?: LevelWhereInput[]
    NOT?: LevelWhereInput | LevelWhereInput[]
    id?: IntFilter<"Level"> | number
    name?: StringFilter<"Level"> | string
    accounts?: AccountListRelationFilter
  }

  export type LevelOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    _relevance?: LevelOrderByRelevanceInput
  }

  export type LevelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LevelWhereInput | LevelWhereInput[]
    OR?: LevelWhereInput[]
    NOT?: LevelWhereInput | LevelWhereInput[]
    name?: StringFilter<"Level"> | string
    accounts?: AccountListRelationFilter
  }, "id">

  export type LevelOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: LevelCountOrderByAggregateInput
    _avg?: LevelAvgOrderByAggregateInput
    _max?: LevelMaxOrderByAggregateInput
    _min?: LevelMinOrderByAggregateInput
    _sum?: LevelSumOrderByAggregateInput
  }

  export type LevelScalarWhereWithAggregatesInput = {
    AND?: LevelScalarWhereWithAggregatesInput | LevelScalarWhereWithAggregatesInput[]
    OR?: LevelScalarWhereWithAggregatesInput[]
    NOT?: LevelScalarWhereWithAggregatesInput | LevelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Level"> | number
    name?: StringWithAggregatesFilter<"Level"> | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: IntFilter<"Account"> | number
    username?: StringFilter<"Account"> | string
    password?: StringNullableFilter<"Account"> | string | null
    token?: StringNullableFilter<"Account"> | string | null
    level_id?: IntFilter<"Account"> | number
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
    employees?: EmployeeListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    level_id?: SortOrder
    level?: LevelOrderByWithRelationInput
    employees?: EmployeeOrderByRelationAggregateInput
    _relevance?: AccountOrderByRelevanceInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    username?: StringFilter<"Account"> | string
    password?: StringNullableFilter<"Account"> | string | null
    token?: StringNullableFilter<"Account"> | string | null
    level_id?: IntFilter<"Account"> | number
    level?: XOR<LevelScalarRelationFilter, LevelWhereInput>
    employees?: EmployeeListRelationFilter
  }, "id">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    level_id?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Account"> | number
    username?: StringWithAggregatesFilter<"Account"> | string
    password?: StringNullableWithAggregatesFilter<"Account"> | string | null
    token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    level_id?: IntWithAggregatesFilter<"Account"> | number
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: IntFilter<"Employee"> | number
    name?: StringFilter<"Employee"> | string
    birth_date?: DateTimeFilter<"Employee"> | Date | string
    phone?: StringFilter<"Employee"> | string
    account_id?: IntFilter<"Employee"> | number
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    schedules?: ScheduleListRelationFilter
    employee_loans?: EmployeeLoanListRelationFilter
    salary_deductions?: SalaryDeductionListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    birth_date?: SortOrder
    phone?: SortOrder
    account_id?: SortOrder
    account?: AccountOrderByWithRelationInput
    schedules?: ScheduleOrderByRelationAggregateInput
    employee_loans?: EmployeeLoanOrderByRelationAggregateInput
    salary_deductions?: SalaryDeductionOrderByRelationAggregateInput
    _relevance?: EmployeeOrderByRelevanceInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    account_id?: number
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    name?: StringFilter<"Employee"> | string
    birth_date?: DateTimeFilter<"Employee"> | Date | string
    phone?: StringFilter<"Employee"> | string
    account?: XOR<AccountScalarRelationFilter, AccountWhereInput>
    schedules?: ScheduleListRelationFilter
    employee_loans?: EmployeeLoanListRelationFilter
    salary_deductions?: SalaryDeductionListRelationFilter
  }, "id" | "account_id">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    birth_date?: SortOrder
    phone?: SortOrder
    account_id?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employee"> | number
    name?: StringWithAggregatesFilter<"Employee"> | string
    birth_date?: DateTimeWithAggregatesFilter<"Employee"> | Date | string
    phone?: StringWithAggregatesFilter<"Employee"> | string
    account_id?: IntWithAggregatesFilter<"Employee"> | number
  }

  export type ScheduleWhereInput = {
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    id?: IntFilter<"Schedule"> | number
    date?: StringFilter<"Schedule"> | string
    status?: StringFilter<"Schedule"> | string
    attendance_status?: StringFilter<"Schedule"> | string
    employee_id?: IntFilter<"Schedule"> | number
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    attendances?: AttendanceListRelationFilter
    leaves?: LeaveListRelationFilter
    paid_leaves?: PaidLeaveListRelationFilter
  }

  export type ScheduleOrderByWithRelationInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    attendance_status?: SortOrder
    employee_id?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    attendances?: AttendanceOrderByRelationAggregateInput
    leaves?: LeaveOrderByRelationAggregateInput
    paid_leaves?: PaidLeaveOrderByRelationAggregateInput
    _relevance?: ScheduleOrderByRelevanceInput
  }

  export type ScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ScheduleWhereInput | ScheduleWhereInput[]
    OR?: ScheduleWhereInput[]
    NOT?: ScheduleWhereInput | ScheduleWhereInput[]
    date?: StringFilter<"Schedule"> | string
    status?: StringFilter<"Schedule"> | string
    attendance_status?: StringFilter<"Schedule"> | string
    employee_id?: IntFilter<"Schedule"> | number
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    attendances?: AttendanceListRelationFilter
    leaves?: LeaveListRelationFilter
    paid_leaves?: PaidLeaveListRelationFilter
  }, "id">

  export type ScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    attendance_status?: SortOrder
    employee_id?: SortOrder
    _count?: ScheduleCountOrderByAggregateInput
    _avg?: ScheduleAvgOrderByAggregateInput
    _max?: ScheduleMaxOrderByAggregateInput
    _min?: ScheduleMinOrderByAggregateInput
    _sum?: ScheduleSumOrderByAggregateInput
  }

  export type ScheduleScalarWhereWithAggregatesInput = {
    AND?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    OR?: ScheduleScalarWhereWithAggregatesInput[]
    NOT?: ScheduleScalarWhereWithAggregatesInput | ScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Schedule"> | number
    date?: StringWithAggregatesFilter<"Schedule"> | string
    status?: StringWithAggregatesFilter<"Schedule"> | string
    attendance_status?: StringWithAggregatesFilter<"Schedule"> | string
    employee_id?: IntWithAggregatesFilter<"Schedule"> | number
  }

  export type EmployeeLoanWhereInput = {
    AND?: EmployeeLoanWhereInput | EmployeeLoanWhereInput[]
    OR?: EmployeeLoanWhereInput[]
    NOT?: EmployeeLoanWhereInput | EmployeeLoanWhereInput[]
    id?: IntFilter<"EmployeeLoan"> | number
    amount?: IntFilter<"EmployeeLoan"> | number
    date?: DateTimeFilter<"EmployeeLoan"> | Date | string
    status?: StringFilter<"EmployeeLoan"> | string
    employee_id?: IntFilter<"EmployeeLoan"> | number
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type EmployeeLoanOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    status?: SortOrder
    employee_id?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
    _relevance?: EmployeeLoanOrderByRelevanceInput
  }

  export type EmployeeLoanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EmployeeLoanWhereInput | EmployeeLoanWhereInput[]
    OR?: EmployeeLoanWhereInput[]
    NOT?: EmployeeLoanWhereInput | EmployeeLoanWhereInput[]
    amount?: IntFilter<"EmployeeLoan"> | number
    date?: DateTimeFilter<"EmployeeLoan"> | Date | string
    status?: StringFilter<"EmployeeLoan"> | string
    employee_id?: IntFilter<"EmployeeLoan"> | number
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type EmployeeLoanOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    status?: SortOrder
    employee_id?: SortOrder
    _count?: EmployeeLoanCountOrderByAggregateInput
    _avg?: EmployeeLoanAvgOrderByAggregateInput
    _max?: EmployeeLoanMaxOrderByAggregateInput
    _min?: EmployeeLoanMinOrderByAggregateInput
    _sum?: EmployeeLoanSumOrderByAggregateInput
  }

  export type EmployeeLoanScalarWhereWithAggregatesInput = {
    AND?: EmployeeLoanScalarWhereWithAggregatesInput | EmployeeLoanScalarWhereWithAggregatesInput[]
    OR?: EmployeeLoanScalarWhereWithAggregatesInput[]
    NOT?: EmployeeLoanScalarWhereWithAggregatesInput | EmployeeLoanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EmployeeLoan"> | number
    amount?: IntWithAggregatesFilter<"EmployeeLoan"> | number
    date?: DateTimeWithAggregatesFilter<"EmployeeLoan"> | Date | string
    status?: StringWithAggregatesFilter<"EmployeeLoan"> | string
    employee_id?: IntWithAggregatesFilter<"EmployeeLoan"> | number
  }

  export type SalaryDeductionWhereInput = {
    AND?: SalaryDeductionWhereInput | SalaryDeductionWhereInput[]
    OR?: SalaryDeductionWhereInput[]
    NOT?: SalaryDeductionWhereInput | SalaryDeductionWhereInput[]
    id?: IntFilter<"SalaryDeduction"> | number
    amount?: IntFilter<"SalaryDeduction"> | number
    date?: DateTimeFilter<"SalaryDeduction"> | Date | string
    employee_id?: IntFilter<"SalaryDeduction"> | number
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type SalaryDeductionOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    employee_id?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type SalaryDeductionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SalaryDeductionWhereInput | SalaryDeductionWhereInput[]
    OR?: SalaryDeductionWhereInput[]
    NOT?: SalaryDeductionWhereInput | SalaryDeductionWhereInput[]
    amount?: IntFilter<"SalaryDeduction"> | number
    date?: DateTimeFilter<"SalaryDeduction"> | Date | string
    employee_id?: IntFilter<"SalaryDeduction"> | number
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type SalaryDeductionOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    employee_id?: SortOrder
    _count?: SalaryDeductionCountOrderByAggregateInput
    _avg?: SalaryDeductionAvgOrderByAggregateInput
    _max?: SalaryDeductionMaxOrderByAggregateInput
    _min?: SalaryDeductionMinOrderByAggregateInput
    _sum?: SalaryDeductionSumOrderByAggregateInput
  }

  export type SalaryDeductionScalarWhereWithAggregatesInput = {
    AND?: SalaryDeductionScalarWhereWithAggregatesInput | SalaryDeductionScalarWhereWithAggregatesInput[]
    OR?: SalaryDeductionScalarWhereWithAggregatesInput[]
    NOT?: SalaryDeductionScalarWhereWithAggregatesInput | SalaryDeductionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SalaryDeduction"> | number
    amount?: IntWithAggregatesFilter<"SalaryDeduction"> | number
    date?: DateTimeWithAggregatesFilter<"SalaryDeduction"> | Date | string
    employee_id?: IntWithAggregatesFilter<"SalaryDeduction"> | number
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: IntFilter<"Attendance"> | number
    check_in?: DateTimeFilter<"Attendance"> | Date | string
    check_out?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringFilter<"Attendance"> | string
    schedule_id?: IntFilter<"Attendance"> | number
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    check_in?: SortOrder
    check_out?: SortOrder
    status?: SortOrder
    schedule_id?: SortOrder
    schedule?: ScheduleOrderByWithRelationInput
    _relevance?: AttendanceOrderByRelevanceInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    check_in?: DateTimeFilter<"Attendance"> | Date | string
    check_out?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringFilter<"Attendance"> | string
    schedule_id?: IntFilter<"Attendance"> | number
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    check_in?: SortOrder
    check_out?: SortOrder
    status?: SortOrder
    schedule_id?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _avg?: AttendanceAvgOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
    _sum?: AttendanceSumOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Attendance"> | number
    check_in?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    check_out?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    status?: StringWithAggregatesFilter<"Attendance"> | string
    schedule_id?: IntWithAggregatesFilter<"Attendance"> | number
  }

  export type LeaveWhereInput = {
    AND?: LeaveWhereInput | LeaveWhereInput[]
    OR?: LeaveWhereInput[]
    NOT?: LeaveWhereInput | LeaveWhereInput[]
    id?: IntFilter<"Leave"> | number
    reason?: StringFilter<"Leave"> | string
    status?: StringFilter<"Leave"> | string
    schedule_id?: IntFilter<"Leave"> | number
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }

  export type LeaveOrderByWithRelationInput = {
    id?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    schedule_id?: SortOrder
    schedule?: ScheduleOrderByWithRelationInput
    _relevance?: LeaveOrderByRelevanceInput
  }

  export type LeaveWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LeaveWhereInput | LeaveWhereInput[]
    OR?: LeaveWhereInput[]
    NOT?: LeaveWhereInput | LeaveWhereInput[]
    reason?: StringFilter<"Leave"> | string
    status?: StringFilter<"Leave"> | string
    schedule_id?: IntFilter<"Leave"> | number
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }, "id">

  export type LeaveOrderByWithAggregationInput = {
    id?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    schedule_id?: SortOrder
    _count?: LeaveCountOrderByAggregateInput
    _avg?: LeaveAvgOrderByAggregateInput
    _max?: LeaveMaxOrderByAggregateInput
    _min?: LeaveMinOrderByAggregateInput
    _sum?: LeaveSumOrderByAggregateInput
  }

  export type LeaveScalarWhereWithAggregatesInput = {
    AND?: LeaveScalarWhereWithAggregatesInput | LeaveScalarWhereWithAggregatesInput[]
    OR?: LeaveScalarWhereWithAggregatesInput[]
    NOT?: LeaveScalarWhereWithAggregatesInput | LeaveScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Leave"> | number
    reason?: StringWithAggregatesFilter<"Leave"> | string
    status?: StringWithAggregatesFilter<"Leave"> | string
    schedule_id?: IntWithAggregatesFilter<"Leave"> | number
  }

  export type PaidLeaveWhereInput = {
    AND?: PaidLeaveWhereInput | PaidLeaveWhereInput[]
    OR?: PaidLeaveWhereInput[]
    NOT?: PaidLeaveWhereInput | PaidLeaveWhereInput[]
    id?: IntFilter<"PaidLeave"> | number
    reason?: StringFilter<"PaidLeave"> | string
    status?: StringFilter<"PaidLeave"> | string
    schedule_id?: IntFilter<"PaidLeave"> | number
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }

  export type PaidLeaveOrderByWithRelationInput = {
    id?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    schedule_id?: SortOrder
    schedule?: ScheduleOrderByWithRelationInput
    _relevance?: PaidLeaveOrderByRelevanceInput
  }

  export type PaidLeaveWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaidLeaveWhereInput | PaidLeaveWhereInput[]
    OR?: PaidLeaveWhereInput[]
    NOT?: PaidLeaveWhereInput | PaidLeaveWhereInput[]
    reason?: StringFilter<"PaidLeave"> | string
    status?: StringFilter<"PaidLeave"> | string
    schedule_id?: IntFilter<"PaidLeave"> | number
    schedule?: XOR<ScheduleScalarRelationFilter, ScheduleWhereInput>
  }, "id">

  export type PaidLeaveOrderByWithAggregationInput = {
    id?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    schedule_id?: SortOrder
    _count?: PaidLeaveCountOrderByAggregateInput
    _avg?: PaidLeaveAvgOrderByAggregateInput
    _max?: PaidLeaveMaxOrderByAggregateInput
    _min?: PaidLeaveMinOrderByAggregateInput
    _sum?: PaidLeaveSumOrderByAggregateInput
  }

  export type PaidLeaveScalarWhereWithAggregatesInput = {
    AND?: PaidLeaveScalarWhereWithAggregatesInput | PaidLeaveScalarWhereWithAggregatesInput[]
    OR?: PaidLeaveScalarWhereWithAggregatesInput[]
    NOT?: PaidLeaveScalarWhereWithAggregatesInput | PaidLeaveScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaidLeave"> | number
    reason?: StringWithAggregatesFilter<"PaidLeave"> | string
    status?: StringWithAggregatesFilter<"PaidLeave"> | string
    schedule_id?: IntWithAggregatesFilter<"PaidLeave"> | number
  }

  export type LevelCreateInput = {
    name: string
    accounts?: AccountCreateNestedManyWithoutLevelInput
  }

  export type LevelUncheckedCreateInput = {
    id?: number
    name: string
    accounts?: AccountUncheckedCreateNestedManyWithoutLevelInput
  }

  export type LevelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUpdateManyWithoutLevelNestedInput
  }

  export type LevelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    accounts?: AccountUncheckedUpdateManyWithoutLevelNestedInput
  }

  export type LevelCreateManyInput = {
    id?: number
    name: string
  }

  export type LevelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LevelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateInput = {
    username: string
    password?: string | null
    token?: string | null
    level: LevelCreateNestedOneWithoutAccountsInput
    employees?: EmployeeCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: number
    username: string
    password?: string | null
    token?: string | null
    level_id: number
    employees?: EmployeeUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    level?: LevelUpdateOneRequiredWithoutAccountsNestedInput
    employees?: EmployeeUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    level_id?: IntFieldUpdateOperationsInput | number
    employees?: EmployeeUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: number
    username: string
    password?: string | null
    token?: string | null
    level_id: number
  }

  export type AccountUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    level_id?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeCreateInput = {
    name: string
    birth_date: Date | string
    phone: string
    account: AccountCreateNestedOneWithoutEmployeesInput
    schedules?: ScheduleCreateNestedManyWithoutEmployeeInput
    employee_loans?: EmployeeLoanCreateNestedManyWithoutEmployeeInput
    salary_deductions?: SalaryDeductionCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: number
    name: string
    birth_date: Date | string
    phone: string
    account_id: number
    schedules?: ScheduleUncheckedCreateNestedManyWithoutEmployeeInput
    employee_loans?: EmployeeLoanUncheckedCreateNestedManyWithoutEmployeeInput
    salary_deductions?: SalaryDeductionUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneRequiredWithoutEmployeesNestedInput
    schedules?: ScheduleUpdateManyWithoutEmployeeNestedInput
    employee_loans?: EmployeeLoanUpdateManyWithoutEmployeeNestedInput
    salary_deductions?: SalaryDeductionUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    account_id?: IntFieldUpdateOperationsInput | number
    schedules?: ScheduleUncheckedUpdateManyWithoutEmployeeNestedInput
    employee_loans?: EmployeeLoanUncheckedUpdateManyWithoutEmployeeNestedInput
    salary_deductions?: SalaryDeductionUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: number
    name: string
    birth_date: Date | string
    phone: string
    account_id: number
  }

  export type EmployeeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    account_id?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleCreateInput = {
    date: string
    status: string
    attendance_status: string
    employee: EmployeeCreateNestedOneWithoutSchedulesInput
    attendances?: AttendanceCreateNestedManyWithoutScheduleInput
    leaves?: LeaveCreateNestedManyWithoutScheduleInput
    paid_leaves?: PaidLeaveCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateInput = {
    id?: number
    date: string
    status: string
    attendance_status: string
    employee_id: number
    attendances?: AttendanceUncheckedCreateNestedManyWithoutScheduleInput
    leaves?: LeaveUncheckedCreateNestedManyWithoutScheduleInput
    paid_leaves?: PaidLeaveUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUpdateInput = {
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attendance_status?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateOneRequiredWithoutSchedulesNestedInput
    attendances?: AttendanceUpdateManyWithoutScheduleNestedInput
    leaves?: LeaveUpdateManyWithoutScheduleNestedInput
    paid_leaves?: PaidLeaveUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attendance_status?: StringFieldUpdateOperationsInput | string
    employee_id?: IntFieldUpdateOperationsInput | number
    attendances?: AttendanceUncheckedUpdateManyWithoutScheduleNestedInput
    leaves?: LeaveUncheckedUpdateManyWithoutScheduleNestedInput
    paid_leaves?: PaidLeaveUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleCreateManyInput = {
    id?: number
    date: string
    status: string
    attendance_status: string
    employee_id: number
  }

  export type ScheduleUpdateManyMutationInput = {
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attendance_status?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attendance_status?: StringFieldUpdateOperationsInput | string
    employee_id?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeLoanCreateInput = {
    amount: number
    date: Date | string
    status: string
    employee: EmployeeCreateNestedOneWithoutEmployee_loansInput
  }

  export type EmployeeLoanUncheckedCreateInput = {
    id?: number
    amount: number
    date: Date | string
    status: string
    employee_id: number
  }

  export type EmployeeLoanUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateOneRequiredWithoutEmployee_loansNestedInput
  }

  export type EmployeeLoanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    employee_id?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeLoanCreateManyInput = {
    id?: number
    amount: number
    date: Date | string
    status: string
    employee_id: number
  }

  export type EmployeeLoanUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeLoanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    employee_id?: IntFieldUpdateOperationsInput | number
  }

  export type SalaryDeductionCreateInput = {
    amount: number
    date: Date | string
    employee: EmployeeCreateNestedOneWithoutSalary_deductionsInput
  }

  export type SalaryDeductionUncheckedCreateInput = {
    id?: number
    amount: number
    date: Date | string
    employee_id: number
  }

  export type SalaryDeductionUpdateInput = {
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    employee?: EmployeeUpdateOneRequiredWithoutSalary_deductionsNestedInput
  }

  export type SalaryDeductionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    employee_id?: IntFieldUpdateOperationsInput | number
  }

  export type SalaryDeductionCreateManyInput = {
    id?: number
    amount: number
    date: Date | string
    employee_id: number
  }

  export type SalaryDeductionUpdateManyMutationInput = {
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryDeductionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    employee_id?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceCreateInput = {
    check_in: Date | string
    check_out: Date | string
    status: string
    schedule: ScheduleCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: number
    check_in: Date | string
    check_out: Date | string
    status: string
    schedule_id: number
  }

  export type AttendanceUpdateInput = {
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    schedule?: ScheduleUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    schedule_id?: IntFieldUpdateOperationsInput | number
  }

  export type AttendanceCreateManyInput = {
    id?: number
    check_in: Date | string
    check_out: Date | string
    status: string
    schedule_id: number
  }

  export type AttendanceUpdateManyMutationInput = {
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    schedule_id?: IntFieldUpdateOperationsInput | number
  }

  export type LeaveCreateInput = {
    reason: string
    status: string
    schedule: ScheduleCreateNestedOneWithoutLeavesInput
  }

  export type LeaveUncheckedCreateInput = {
    id?: number
    reason: string
    status: string
    schedule_id: number
  }

  export type LeaveUpdateInput = {
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    schedule?: ScheduleUpdateOneRequiredWithoutLeavesNestedInput
  }

  export type LeaveUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    schedule_id?: IntFieldUpdateOperationsInput | number
  }

  export type LeaveCreateManyInput = {
    id?: number
    reason: string
    status: string
    schedule_id: number
  }

  export type LeaveUpdateManyMutationInput = {
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LeaveUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    schedule_id?: IntFieldUpdateOperationsInput | number
  }

  export type PaidLeaveCreateInput = {
    reason: string
    status: string
    schedule: ScheduleCreateNestedOneWithoutPaid_leavesInput
  }

  export type PaidLeaveUncheckedCreateInput = {
    id?: number
    reason: string
    status: string
    schedule_id: number
  }

  export type PaidLeaveUpdateInput = {
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    schedule?: ScheduleUpdateOneRequiredWithoutPaid_leavesNestedInput
  }

  export type PaidLeaveUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    schedule_id?: IntFieldUpdateOperationsInput | number
  }

  export type PaidLeaveCreateManyInput = {
    id?: number
    reason: string
    status: string
    schedule_id: number
  }

  export type PaidLeaveUpdateManyMutationInput = {
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PaidLeaveUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    schedule_id?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LevelOrderByRelevanceInput = {
    fields: LevelOrderByRelevanceFieldEnum | LevelOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LevelCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LevelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LevelMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LevelMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type LevelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type LevelScalarRelationFilter = {
    is?: LevelWhereInput
    isNot?: LevelWhereInput
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountOrderByRelevanceInput = {
    fields: AccountOrderByRelevanceFieldEnum | AccountOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    token?: SortOrder
    level_id?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    id?: SortOrder
    level_id?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    token?: SortOrder
    level_id?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    token?: SortOrder
    level_id?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    id?: SortOrder
    level_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountScalarRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type ScheduleListRelationFilter = {
    every?: ScheduleWhereInput
    some?: ScheduleWhereInput
    none?: ScheduleWhereInput
  }

  export type EmployeeLoanListRelationFilter = {
    every?: EmployeeLoanWhereInput
    some?: EmployeeLoanWhereInput
    none?: EmployeeLoanWhereInput
  }

  export type SalaryDeductionListRelationFilter = {
    every?: SalaryDeductionWhereInput
    some?: SalaryDeductionWhereInput
    none?: SalaryDeductionWhereInput
  }

  export type ScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeLoanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalaryDeductionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeOrderByRelevanceInput = {
    fields: EmployeeOrderByRelevanceFieldEnum | EmployeeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birth_date?: SortOrder
    phone?: SortOrder
    account_id?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birth_date?: SortOrder
    phone?: SortOrder
    account_id?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    birth_date?: SortOrder
    phone?: SortOrder
    account_id?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    id?: SortOrder
    account_id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type LeaveListRelationFilter = {
    every?: LeaveWhereInput
    some?: LeaveWhereInput
    none?: LeaveWhereInput
  }

  export type PaidLeaveListRelationFilter = {
    every?: PaidLeaveWhereInput
    some?: PaidLeaveWhereInput
    none?: PaidLeaveWhereInput
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaidLeaveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ScheduleOrderByRelevanceInput = {
    fields: ScheduleOrderByRelevanceFieldEnum | ScheduleOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    attendance_status?: SortOrder
    employee_id?: SortOrder
  }

  export type ScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    employee_id?: SortOrder
  }

  export type ScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    attendance_status?: SortOrder
    employee_id?: SortOrder
  }

  export type ScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    date?: SortOrder
    status?: SortOrder
    attendance_status?: SortOrder
    employee_id?: SortOrder
  }

  export type ScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    employee_id?: SortOrder
  }

  export type EmployeeLoanOrderByRelevanceInput = {
    fields: EmployeeLoanOrderByRelevanceFieldEnum | EmployeeLoanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EmployeeLoanCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    status?: SortOrder
    employee_id?: SortOrder
  }

  export type EmployeeLoanAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    employee_id?: SortOrder
  }

  export type EmployeeLoanMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    status?: SortOrder
    employee_id?: SortOrder
  }

  export type EmployeeLoanMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    status?: SortOrder
    employee_id?: SortOrder
  }

  export type EmployeeLoanSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    employee_id?: SortOrder
  }

  export type SalaryDeductionCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    employee_id?: SortOrder
  }

  export type SalaryDeductionAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    employee_id?: SortOrder
  }

  export type SalaryDeductionMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    employee_id?: SortOrder
  }

  export type SalaryDeductionMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    date?: SortOrder
    employee_id?: SortOrder
  }

  export type SalaryDeductionSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    employee_id?: SortOrder
  }

  export type ScheduleScalarRelationFilter = {
    is?: ScheduleWhereInput
    isNot?: ScheduleWhereInput
  }

  export type AttendanceOrderByRelevanceInput = {
    fields: AttendanceOrderByRelevanceFieldEnum | AttendanceOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    check_in?: SortOrder
    check_out?: SortOrder
    status?: SortOrder
    schedule_id?: SortOrder
  }

  export type AttendanceAvgOrderByAggregateInput = {
    id?: SortOrder
    schedule_id?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    check_in?: SortOrder
    check_out?: SortOrder
    status?: SortOrder
    schedule_id?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    check_in?: SortOrder
    check_out?: SortOrder
    status?: SortOrder
    schedule_id?: SortOrder
  }

  export type AttendanceSumOrderByAggregateInput = {
    id?: SortOrder
    schedule_id?: SortOrder
  }

  export type LeaveOrderByRelevanceInput = {
    fields: LeaveOrderByRelevanceFieldEnum | LeaveOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type LeaveCountOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    schedule_id?: SortOrder
  }

  export type LeaveAvgOrderByAggregateInput = {
    id?: SortOrder
    schedule_id?: SortOrder
  }

  export type LeaveMaxOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    schedule_id?: SortOrder
  }

  export type LeaveMinOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    schedule_id?: SortOrder
  }

  export type LeaveSumOrderByAggregateInput = {
    id?: SortOrder
    schedule_id?: SortOrder
  }

  export type PaidLeaveOrderByRelevanceInput = {
    fields: PaidLeaveOrderByRelevanceFieldEnum | PaidLeaveOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PaidLeaveCountOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    schedule_id?: SortOrder
  }

  export type PaidLeaveAvgOrderByAggregateInput = {
    id?: SortOrder
    schedule_id?: SortOrder
  }

  export type PaidLeaveMaxOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    schedule_id?: SortOrder
  }

  export type PaidLeaveMinOrderByAggregateInput = {
    id?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    schedule_id?: SortOrder
  }

  export type PaidLeaveSumOrderByAggregateInput = {
    id?: SortOrder
    schedule_id?: SortOrder
  }

  export type AccountCreateNestedManyWithoutLevelInput = {
    create?: XOR<AccountCreateWithoutLevelInput, AccountUncheckedCreateWithoutLevelInput> | AccountCreateWithoutLevelInput[] | AccountUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutLevelInput | AccountCreateOrConnectWithoutLevelInput[]
    createMany?: AccountCreateManyLevelInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutLevelInput = {
    create?: XOR<AccountCreateWithoutLevelInput, AccountUncheckedCreateWithoutLevelInput> | AccountCreateWithoutLevelInput[] | AccountUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutLevelInput | AccountCreateOrConnectWithoutLevelInput[]
    createMany?: AccountCreateManyLevelInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AccountUpdateManyWithoutLevelNestedInput = {
    create?: XOR<AccountCreateWithoutLevelInput, AccountUncheckedCreateWithoutLevelInput> | AccountCreateWithoutLevelInput[] | AccountUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutLevelInput | AccountCreateOrConnectWithoutLevelInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutLevelInput | AccountUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: AccountCreateManyLevelInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutLevelInput | AccountUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutLevelInput | AccountUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountUncheckedUpdateManyWithoutLevelNestedInput = {
    create?: XOR<AccountCreateWithoutLevelInput, AccountUncheckedCreateWithoutLevelInput> | AccountCreateWithoutLevelInput[] | AccountUncheckedCreateWithoutLevelInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutLevelInput | AccountCreateOrConnectWithoutLevelInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutLevelInput | AccountUpsertWithWhereUniqueWithoutLevelInput[]
    createMany?: AccountCreateManyLevelInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutLevelInput | AccountUpdateWithWhereUniqueWithoutLevelInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutLevelInput | AccountUpdateManyWithWhereWithoutLevelInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type LevelCreateNestedOneWithoutAccountsInput = {
    create?: XOR<LevelCreateWithoutAccountsInput, LevelUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: LevelCreateOrConnectWithoutAccountsInput
    connect?: LevelWhereUniqueInput
  }

  export type EmployeeCreateNestedManyWithoutAccountInput = {
    create?: XOR<EmployeeCreateWithoutAccountInput, EmployeeUncheckedCreateWithoutAccountInput> | EmployeeCreateWithoutAccountInput[] | EmployeeUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutAccountInput | EmployeeCreateOrConnectWithoutAccountInput[]
    createMany?: EmployeeCreateManyAccountInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<EmployeeCreateWithoutAccountInput, EmployeeUncheckedCreateWithoutAccountInput> | EmployeeCreateWithoutAccountInput[] | EmployeeUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutAccountInput | EmployeeCreateOrConnectWithoutAccountInput[]
    createMany?: EmployeeCreateManyAccountInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LevelUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<LevelCreateWithoutAccountsInput, LevelUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: LevelCreateOrConnectWithoutAccountsInput
    upsert?: LevelUpsertWithoutAccountsInput
    connect?: LevelWhereUniqueInput
    update?: XOR<XOR<LevelUpdateToOneWithWhereWithoutAccountsInput, LevelUpdateWithoutAccountsInput>, LevelUncheckedUpdateWithoutAccountsInput>
  }

  export type EmployeeUpdateManyWithoutAccountNestedInput = {
    create?: XOR<EmployeeCreateWithoutAccountInput, EmployeeUncheckedCreateWithoutAccountInput> | EmployeeCreateWithoutAccountInput[] | EmployeeUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutAccountInput | EmployeeCreateOrConnectWithoutAccountInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutAccountInput | EmployeeUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: EmployeeCreateManyAccountInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutAccountInput | EmployeeUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutAccountInput | EmployeeUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<EmployeeCreateWithoutAccountInput, EmployeeUncheckedCreateWithoutAccountInput> | EmployeeCreateWithoutAccountInput[] | EmployeeUncheckedCreateWithoutAccountInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutAccountInput | EmployeeCreateOrConnectWithoutAccountInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutAccountInput | EmployeeUpsertWithWhereUniqueWithoutAccountInput[]
    createMany?: EmployeeCreateManyAccountInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutAccountInput | EmployeeUpdateWithWhereUniqueWithoutAccountInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutAccountInput | EmployeeUpdateManyWithWhereWithoutAccountInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type AccountCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<AccountCreateWithoutEmployeesInput, AccountUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutEmployeesInput
    connect?: AccountWhereUniqueInput
  }

  export type ScheduleCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ScheduleCreateWithoutEmployeeInput, ScheduleUncheckedCreateWithoutEmployeeInput> | ScheduleCreateWithoutEmployeeInput[] | ScheduleUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutEmployeeInput | ScheduleCreateOrConnectWithoutEmployeeInput[]
    createMany?: ScheduleCreateManyEmployeeInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type EmployeeLoanCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeLoanCreateWithoutEmployeeInput, EmployeeLoanUncheckedCreateWithoutEmployeeInput> | EmployeeLoanCreateWithoutEmployeeInput[] | EmployeeLoanUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeLoanCreateOrConnectWithoutEmployeeInput | EmployeeLoanCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeLoanCreateManyEmployeeInputEnvelope
    connect?: EmployeeLoanWhereUniqueInput | EmployeeLoanWhereUniqueInput[]
  }

  export type SalaryDeductionCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<SalaryDeductionCreateWithoutEmployeeInput, SalaryDeductionUncheckedCreateWithoutEmployeeInput> | SalaryDeductionCreateWithoutEmployeeInput[] | SalaryDeductionUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SalaryDeductionCreateOrConnectWithoutEmployeeInput | SalaryDeductionCreateOrConnectWithoutEmployeeInput[]
    createMany?: SalaryDeductionCreateManyEmployeeInputEnvelope
    connect?: SalaryDeductionWhereUniqueInput | SalaryDeductionWhereUniqueInput[]
  }

  export type ScheduleUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ScheduleCreateWithoutEmployeeInput, ScheduleUncheckedCreateWithoutEmployeeInput> | ScheduleCreateWithoutEmployeeInput[] | ScheduleUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutEmployeeInput | ScheduleCreateOrConnectWithoutEmployeeInput[]
    createMany?: ScheduleCreateManyEmployeeInputEnvelope
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
  }

  export type EmployeeLoanUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<EmployeeLoanCreateWithoutEmployeeInput, EmployeeLoanUncheckedCreateWithoutEmployeeInput> | EmployeeLoanCreateWithoutEmployeeInput[] | EmployeeLoanUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeLoanCreateOrConnectWithoutEmployeeInput | EmployeeLoanCreateOrConnectWithoutEmployeeInput[]
    createMany?: EmployeeLoanCreateManyEmployeeInputEnvelope
    connect?: EmployeeLoanWhereUniqueInput | EmployeeLoanWhereUniqueInput[]
  }

  export type SalaryDeductionUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<SalaryDeductionCreateWithoutEmployeeInput, SalaryDeductionUncheckedCreateWithoutEmployeeInput> | SalaryDeductionCreateWithoutEmployeeInput[] | SalaryDeductionUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SalaryDeductionCreateOrConnectWithoutEmployeeInput | SalaryDeductionCreateOrConnectWithoutEmployeeInput[]
    createMany?: SalaryDeductionCreateManyEmployeeInputEnvelope
    connect?: SalaryDeductionWhereUniqueInput | SalaryDeductionWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<AccountCreateWithoutEmployeesInput, AccountUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: AccountCreateOrConnectWithoutEmployeesInput
    upsert?: AccountUpsertWithoutEmployeesInput
    connect?: AccountWhereUniqueInput
    update?: XOR<XOR<AccountUpdateToOneWithWhereWithoutEmployeesInput, AccountUpdateWithoutEmployeesInput>, AccountUncheckedUpdateWithoutEmployeesInput>
  }

  export type ScheduleUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ScheduleCreateWithoutEmployeeInput, ScheduleUncheckedCreateWithoutEmployeeInput> | ScheduleCreateWithoutEmployeeInput[] | ScheduleUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutEmployeeInput | ScheduleCreateOrConnectWithoutEmployeeInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutEmployeeInput | ScheduleUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ScheduleCreateManyEmployeeInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutEmployeeInput | ScheduleUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutEmployeeInput | ScheduleUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type EmployeeLoanUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeLoanCreateWithoutEmployeeInput, EmployeeLoanUncheckedCreateWithoutEmployeeInput> | EmployeeLoanCreateWithoutEmployeeInput[] | EmployeeLoanUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeLoanCreateOrConnectWithoutEmployeeInput | EmployeeLoanCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeLoanUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeLoanUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeLoanCreateManyEmployeeInputEnvelope
    set?: EmployeeLoanWhereUniqueInput | EmployeeLoanWhereUniqueInput[]
    disconnect?: EmployeeLoanWhereUniqueInput | EmployeeLoanWhereUniqueInput[]
    delete?: EmployeeLoanWhereUniqueInput | EmployeeLoanWhereUniqueInput[]
    connect?: EmployeeLoanWhereUniqueInput | EmployeeLoanWhereUniqueInput[]
    update?: EmployeeLoanUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeLoanUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeLoanUpdateManyWithWhereWithoutEmployeeInput | EmployeeLoanUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeLoanScalarWhereInput | EmployeeLoanScalarWhereInput[]
  }

  export type SalaryDeductionUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<SalaryDeductionCreateWithoutEmployeeInput, SalaryDeductionUncheckedCreateWithoutEmployeeInput> | SalaryDeductionCreateWithoutEmployeeInput[] | SalaryDeductionUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SalaryDeductionCreateOrConnectWithoutEmployeeInput | SalaryDeductionCreateOrConnectWithoutEmployeeInput[]
    upsert?: SalaryDeductionUpsertWithWhereUniqueWithoutEmployeeInput | SalaryDeductionUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: SalaryDeductionCreateManyEmployeeInputEnvelope
    set?: SalaryDeductionWhereUniqueInput | SalaryDeductionWhereUniqueInput[]
    disconnect?: SalaryDeductionWhereUniqueInput | SalaryDeductionWhereUniqueInput[]
    delete?: SalaryDeductionWhereUniqueInput | SalaryDeductionWhereUniqueInput[]
    connect?: SalaryDeductionWhereUniqueInput | SalaryDeductionWhereUniqueInput[]
    update?: SalaryDeductionUpdateWithWhereUniqueWithoutEmployeeInput | SalaryDeductionUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: SalaryDeductionUpdateManyWithWhereWithoutEmployeeInput | SalaryDeductionUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: SalaryDeductionScalarWhereInput | SalaryDeductionScalarWhereInput[]
  }

  export type ScheduleUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ScheduleCreateWithoutEmployeeInput, ScheduleUncheckedCreateWithoutEmployeeInput> | ScheduleCreateWithoutEmployeeInput[] | ScheduleUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ScheduleCreateOrConnectWithoutEmployeeInput | ScheduleCreateOrConnectWithoutEmployeeInput[]
    upsert?: ScheduleUpsertWithWhereUniqueWithoutEmployeeInput | ScheduleUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ScheduleCreateManyEmployeeInputEnvelope
    set?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    disconnect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    delete?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    connect?: ScheduleWhereUniqueInput | ScheduleWhereUniqueInput[]
    update?: ScheduleUpdateWithWhereUniqueWithoutEmployeeInput | ScheduleUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ScheduleUpdateManyWithWhereWithoutEmployeeInput | ScheduleUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
  }

  export type EmployeeLoanUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<EmployeeLoanCreateWithoutEmployeeInput, EmployeeLoanUncheckedCreateWithoutEmployeeInput> | EmployeeLoanCreateWithoutEmployeeInput[] | EmployeeLoanUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: EmployeeLoanCreateOrConnectWithoutEmployeeInput | EmployeeLoanCreateOrConnectWithoutEmployeeInput[]
    upsert?: EmployeeLoanUpsertWithWhereUniqueWithoutEmployeeInput | EmployeeLoanUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: EmployeeLoanCreateManyEmployeeInputEnvelope
    set?: EmployeeLoanWhereUniqueInput | EmployeeLoanWhereUniqueInput[]
    disconnect?: EmployeeLoanWhereUniqueInput | EmployeeLoanWhereUniqueInput[]
    delete?: EmployeeLoanWhereUniqueInput | EmployeeLoanWhereUniqueInput[]
    connect?: EmployeeLoanWhereUniqueInput | EmployeeLoanWhereUniqueInput[]
    update?: EmployeeLoanUpdateWithWhereUniqueWithoutEmployeeInput | EmployeeLoanUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: EmployeeLoanUpdateManyWithWhereWithoutEmployeeInput | EmployeeLoanUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: EmployeeLoanScalarWhereInput | EmployeeLoanScalarWhereInput[]
  }

  export type SalaryDeductionUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<SalaryDeductionCreateWithoutEmployeeInput, SalaryDeductionUncheckedCreateWithoutEmployeeInput> | SalaryDeductionCreateWithoutEmployeeInput[] | SalaryDeductionUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SalaryDeductionCreateOrConnectWithoutEmployeeInput | SalaryDeductionCreateOrConnectWithoutEmployeeInput[]
    upsert?: SalaryDeductionUpsertWithWhereUniqueWithoutEmployeeInput | SalaryDeductionUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: SalaryDeductionCreateManyEmployeeInputEnvelope
    set?: SalaryDeductionWhereUniqueInput | SalaryDeductionWhereUniqueInput[]
    disconnect?: SalaryDeductionWhereUniqueInput | SalaryDeductionWhereUniqueInput[]
    delete?: SalaryDeductionWhereUniqueInput | SalaryDeductionWhereUniqueInput[]
    connect?: SalaryDeductionWhereUniqueInput | SalaryDeductionWhereUniqueInput[]
    update?: SalaryDeductionUpdateWithWhereUniqueWithoutEmployeeInput | SalaryDeductionUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: SalaryDeductionUpdateManyWithWhereWithoutEmployeeInput | SalaryDeductionUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: SalaryDeductionScalarWhereInput | SalaryDeductionScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<EmployeeCreateWithoutSchedulesInput, EmployeeUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutSchedulesInput
    connect?: EmployeeWhereUniqueInput
  }

  export type AttendanceCreateNestedManyWithoutScheduleInput = {
    create?: XOR<AttendanceCreateWithoutScheduleInput, AttendanceUncheckedCreateWithoutScheduleInput> | AttendanceCreateWithoutScheduleInput[] | AttendanceUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutScheduleInput | AttendanceCreateOrConnectWithoutScheduleInput[]
    createMany?: AttendanceCreateManyScheduleInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type LeaveCreateNestedManyWithoutScheduleInput = {
    create?: XOR<LeaveCreateWithoutScheduleInput, LeaveUncheckedCreateWithoutScheduleInput> | LeaveCreateWithoutScheduleInput[] | LeaveUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutScheduleInput | LeaveCreateOrConnectWithoutScheduleInput[]
    createMany?: LeaveCreateManyScheduleInputEnvelope
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
  }

  export type PaidLeaveCreateNestedManyWithoutScheduleInput = {
    create?: XOR<PaidLeaveCreateWithoutScheduleInput, PaidLeaveUncheckedCreateWithoutScheduleInput> | PaidLeaveCreateWithoutScheduleInput[] | PaidLeaveUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: PaidLeaveCreateOrConnectWithoutScheduleInput | PaidLeaveCreateOrConnectWithoutScheduleInput[]
    createMany?: PaidLeaveCreateManyScheduleInputEnvelope
    connect?: PaidLeaveWhereUniqueInput | PaidLeaveWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<AttendanceCreateWithoutScheduleInput, AttendanceUncheckedCreateWithoutScheduleInput> | AttendanceCreateWithoutScheduleInput[] | AttendanceUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutScheduleInput | AttendanceCreateOrConnectWithoutScheduleInput[]
    createMany?: AttendanceCreateManyScheduleInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type LeaveUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<LeaveCreateWithoutScheduleInput, LeaveUncheckedCreateWithoutScheduleInput> | LeaveCreateWithoutScheduleInput[] | LeaveUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutScheduleInput | LeaveCreateOrConnectWithoutScheduleInput[]
    createMany?: LeaveCreateManyScheduleInputEnvelope
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
  }

  export type PaidLeaveUncheckedCreateNestedManyWithoutScheduleInput = {
    create?: XOR<PaidLeaveCreateWithoutScheduleInput, PaidLeaveUncheckedCreateWithoutScheduleInput> | PaidLeaveCreateWithoutScheduleInput[] | PaidLeaveUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: PaidLeaveCreateOrConnectWithoutScheduleInput | PaidLeaveCreateOrConnectWithoutScheduleInput[]
    createMany?: PaidLeaveCreateManyScheduleInputEnvelope
    connect?: PaidLeaveWhereUniqueInput | PaidLeaveWhereUniqueInput[]
  }

  export type EmployeeUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<EmployeeCreateWithoutSchedulesInput, EmployeeUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutSchedulesInput
    upsert?: EmployeeUpsertWithoutSchedulesInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutSchedulesInput, EmployeeUpdateWithoutSchedulesInput>, EmployeeUncheckedUpdateWithoutSchedulesInput>
  }

  export type AttendanceUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<AttendanceCreateWithoutScheduleInput, AttendanceUncheckedCreateWithoutScheduleInput> | AttendanceCreateWithoutScheduleInput[] | AttendanceUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutScheduleInput | AttendanceCreateOrConnectWithoutScheduleInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutScheduleInput | AttendanceUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: AttendanceCreateManyScheduleInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutScheduleInput | AttendanceUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutScheduleInput | AttendanceUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type LeaveUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<LeaveCreateWithoutScheduleInput, LeaveUncheckedCreateWithoutScheduleInput> | LeaveCreateWithoutScheduleInput[] | LeaveUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutScheduleInput | LeaveCreateOrConnectWithoutScheduleInput[]
    upsert?: LeaveUpsertWithWhereUniqueWithoutScheduleInput | LeaveUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: LeaveCreateManyScheduleInputEnvelope
    set?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    disconnect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    delete?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    update?: LeaveUpdateWithWhereUniqueWithoutScheduleInput | LeaveUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: LeaveUpdateManyWithWhereWithoutScheduleInput | LeaveUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
  }

  export type PaidLeaveUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<PaidLeaveCreateWithoutScheduleInput, PaidLeaveUncheckedCreateWithoutScheduleInput> | PaidLeaveCreateWithoutScheduleInput[] | PaidLeaveUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: PaidLeaveCreateOrConnectWithoutScheduleInput | PaidLeaveCreateOrConnectWithoutScheduleInput[]
    upsert?: PaidLeaveUpsertWithWhereUniqueWithoutScheduleInput | PaidLeaveUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: PaidLeaveCreateManyScheduleInputEnvelope
    set?: PaidLeaveWhereUniqueInput | PaidLeaveWhereUniqueInput[]
    disconnect?: PaidLeaveWhereUniqueInput | PaidLeaveWhereUniqueInput[]
    delete?: PaidLeaveWhereUniqueInput | PaidLeaveWhereUniqueInput[]
    connect?: PaidLeaveWhereUniqueInput | PaidLeaveWhereUniqueInput[]
    update?: PaidLeaveUpdateWithWhereUniqueWithoutScheduleInput | PaidLeaveUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: PaidLeaveUpdateManyWithWhereWithoutScheduleInput | PaidLeaveUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: PaidLeaveScalarWhereInput | PaidLeaveScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<AttendanceCreateWithoutScheduleInput, AttendanceUncheckedCreateWithoutScheduleInput> | AttendanceCreateWithoutScheduleInput[] | AttendanceUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutScheduleInput | AttendanceCreateOrConnectWithoutScheduleInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutScheduleInput | AttendanceUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: AttendanceCreateManyScheduleInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutScheduleInput | AttendanceUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutScheduleInput | AttendanceUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type LeaveUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<LeaveCreateWithoutScheduleInput, LeaveUncheckedCreateWithoutScheduleInput> | LeaveCreateWithoutScheduleInput[] | LeaveUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutScheduleInput | LeaveCreateOrConnectWithoutScheduleInput[]
    upsert?: LeaveUpsertWithWhereUniqueWithoutScheduleInput | LeaveUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: LeaveCreateManyScheduleInputEnvelope
    set?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    disconnect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    delete?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    update?: LeaveUpdateWithWhereUniqueWithoutScheduleInput | LeaveUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: LeaveUpdateManyWithWhereWithoutScheduleInput | LeaveUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
  }

  export type PaidLeaveUncheckedUpdateManyWithoutScheduleNestedInput = {
    create?: XOR<PaidLeaveCreateWithoutScheduleInput, PaidLeaveUncheckedCreateWithoutScheduleInput> | PaidLeaveCreateWithoutScheduleInput[] | PaidLeaveUncheckedCreateWithoutScheduleInput[]
    connectOrCreate?: PaidLeaveCreateOrConnectWithoutScheduleInput | PaidLeaveCreateOrConnectWithoutScheduleInput[]
    upsert?: PaidLeaveUpsertWithWhereUniqueWithoutScheduleInput | PaidLeaveUpsertWithWhereUniqueWithoutScheduleInput[]
    createMany?: PaidLeaveCreateManyScheduleInputEnvelope
    set?: PaidLeaveWhereUniqueInput | PaidLeaveWhereUniqueInput[]
    disconnect?: PaidLeaveWhereUniqueInput | PaidLeaveWhereUniqueInput[]
    delete?: PaidLeaveWhereUniqueInput | PaidLeaveWhereUniqueInput[]
    connect?: PaidLeaveWhereUniqueInput | PaidLeaveWhereUniqueInput[]
    update?: PaidLeaveUpdateWithWhereUniqueWithoutScheduleInput | PaidLeaveUpdateWithWhereUniqueWithoutScheduleInput[]
    updateMany?: PaidLeaveUpdateManyWithWhereWithoutScheduleInput | PaidLeaveUpdateManyWithWhereWithoutScheduleInput[]
    deleteMany?: PaidLeaveScalarWhereInput | PaidLeaveScalarWhereInput[]
  }

  export type EmployeeCreateNestedOneWithoutEmployee_loansInput = {
    create?: XOR<EmployeeCreateWithoutEmployee_loansInput, EmployeeUncheckedCreateWithoutEmployee_loansInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmployee_loansInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutEmployee_loansNestedInput = {
    create?: XOR<EmployeeCreateWithoutEmployee_loansInput, EmployeeUncheckedCreateWithoutEmployee_loansInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutEmployee_loansInput
    upsert?: EmployeeUpsertWithoutEmployee_loansInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutEmployee_loansInput, EmployeeUpdateWithoutEmployee_loansInput>, EmployeeUncheckedUpdateWithoutEmployee_loansInput>
  }

  export type EmployeeCreateNestedOneWithoutSalary_deductionsInput = {
    create?: XOR<EmployeeCreateWithoutSalary_deductionsInput, EmployeeUncheckedCreateWithoutSalary_deductionsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutSalary_deductionsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutSalary_deductionsNestedInput = {
    create?: XOR<EmployeeCreateWithoutSalary_deductionsInput, EmployeeUncheckedCreateWithoutSalary_deductionsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutSalary_deductionsInput
    upsert?: EmployeeUpsertWithoutSalary_deductionsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutSalary_deductionsInput, EmployeeUpdateWithoutSalary_deductionsInput>, EmployeeUncheckedUpdateWithoutSalary_deductionsInput>
  }

  export type ScheduleCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<ScheduleCreateWithoutAttendancesInput, ScheduleUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutAttendancesInput
    connect?: ScheduleWhereUniqueInput
  }

  export type ScheduleUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<ScheduleCreateWithoutAttendancesInput, ScheduleUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutAttendancesInput
    upsert?: ScheduleUpsertWithoutAttendancesInput
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutAttendancesInput, ScheduleUpdateWithoutAttendancesInput>, ScheduleUncheckedUpdateWithoutAttendancesInput>
  }

  export type ScheduleCreateNestedOneWithoutLeavesInput = {
    create?: XOR<ScheduleCreateWithoutLeavesInput, ScheduleUncheckedCreateWithoutLeavesInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutLeavesInput
    connect?: ScheduleWhereUniqueInput
  }

  export type ScheduleUpdateOneRequiredWithoutLeavesNestedInput = {
    create?: XOR<ScheduleCreateWithoutLeavesInput, ScheduleUncheckedCreateWithoutLeavesInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutLeavesInput
    upsert?: ScheduleUpsertWithoutLeavesInput
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutLeavesInput, ScheduleUpdateWithoutLeavesInput>, ScheduleUncheckedUpdateWithoutLeavesInput>
  }

  export type ScheduleCreateNestedOneWithoutPaid_leavesInput = {
    create?: XOR<ScheduleCreateWithoutPaid_leavesInput, ScheduleUncheckedCreateWithoutPaid_leavesInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutPaid_leavesInput
    connect?: ScheduleWhereUniqueInput
  }

  export type ScheduleUpdateOneRequiredWithoutPaid_leavesNestedInput = {
    create?: XOR<ScheduleCreateWithoutPaid_leavesInput, ScheduleUncheckedCreateWithoutPaid_leavesInput>
    connectOrCreate?: ScheduleCreateOrConnectWithoutPaid_leavesInput
    upsert?: ScheduleUpsertWithoutPaid_leavesInput
    connect?: ScheduleWhereUniqueInput
    update?: XOR<XOR<ScheduleUpdateToOneWithWhereWithoutPaid_leavesInput, ScheduleUpdateWithoutPaid_leavesInput>, ScheduleUncheckedUpdateWithoutPaid_leavesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type AccountCreateWithoutLevelInput = {
    username: string
    password?: string | null
    token?: string | null
    employees?: EmployeeCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutLevelInput = {
    id?: number
    username: string
    password?: string | null
    token?: string | null
    employees?: EmployeeUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutLevelInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutLevelInput, AccountUncheckedCreateWithoutLevelInput>
  }

  export type AccountCreateManyLevelInputEnvelope = {
    data: AccountCreateManyLevelInput | AccountCreateManyLevelInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutLevelInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutLevelInput, AccountUncheckedUpdateWithoutLevelInput>
    create: XOR<AccountCreateWithoutLevelInput, AccountUncheckedCreateWithoutLevelInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutLevelInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutLevelInput, AccountUncheckedUpdateWithoutLevelInput>
  }

  export type AccountUpdateManyWithWhereWithoutLevelInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutLevelInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: IntFilter<"Account"> | number
    username?: StringFilter<"Account"> | string
    password?: StringNullableFilter<"Account"> | string | null
    token?: StringNullableFilter<"Account"> | string | null
    level_id?: IntFilter<"Account"> | number
  }

  export type LevelCreateWithoutAccountsInput = {
    name: string
  }

  export type LevelUncheckedCreateWithoutAccountsInput = {
    id?: number
    name: string
  }

  export type LevelCreateOrConnectWithoutAccountsInput = {
    where: LevelWhereUniqueInput
    create: XOR<LevelCreateWithoutAccountsInput, LevelUncheckedCreateWithoutAccountsInput>
  }

  export type EmployeeCreateWithoutAccountInput = {
    name: string
    birth_date: Date | string
    phone: string
    schedules?: ScheduleCreateNestedManyWithoutEmployeeInput
    employee_loans?: EmployeeLoanCreateNestedManyWithoutEmployeeInput
    salary_deductions?: SalaryDeductionCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutAccountInput = {
    id?: number
    name: string
    birth_date: Date | string
    phone: string
    schedules?: ScheduleUncheckedCreateNestedManyWithoutEmployeeInput
    employee_loans?: EmployeeLoanUncheckedCreateNestedManyWithoutEmployeeInput
    salary_deductions?: SalaryDeductionUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutAccountInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutAccountInput, EmployeeUncheckedCreateWithoutAccountInput>
  }

  export type EmployeeCreateManyAccountInputEnvelope = {
    data: EmployeeCreateManyAccountInput | EmployeeCreateManyAccountInput[]
    skipDuplicates?: boolean
  }

  export type LevelUpsertWithoutAccountsInput = {
    update: XOR<LevelUpdateWithoutAccountsInput, LevelUncheckedUpdateWithoutAccountsInput>
    create: XOR<LevelCreateWithoutAccountsInput, LevelUncheckedCreateWithoutAccountsInput>
    where?: LevelWhereInput
  }

  export type LevelUpdateToOneWithWhereWithoutAccountsInput = {
    where?: LevelWhereInput
    data: XOR<LevelUpdateWithoutAccountsInput, LevelUncheckedUpdateWithoutAccountsInput>
  }

  export type LevelUpdateWithoutAccountsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LevelUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUpsertWithWhereUniqueWithoutAccountInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutAccountInput, EmployeeUncheckedUpdateWithoutAccountInput>
    create: XOR<EmployeeCreateWithoutAccountInput, EmployeeUncheckedCreateWithoutAccountInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutAccountInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutAccountInput, EmployeeUncheckedUpdateWithoutAccountInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutAccountInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutAccountInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: IntFilter<"Employee"> | number
    name?: StringFilter<"Employee"> | string
    birth_date?: DateTimeFilter<"Employee"> | Date | string
    phone?: StringFilter<"Employee"> | string
    account_id?: IntFilter<"Employee"> | number
  }

  export type AccountCreateWithoutEmployeesInput = {
    username: string
    password?: string | null
    token?: string | null
    level: LevelCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateWithoutEmployeesInput = {
    id?: number
    username: string
    password?: string | null
    token?: string | null
    level_id: number
  }

  export type AccountCreateOrConnectWithoutEmployeesInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutEmployeesInput, AccountUncheckedCreateWithoutEmployeesInput>
  }

  export type ScheduleCreateWithoutEmployeeInput = {
    date: string
    status: string
    attendance_status: string
    attendances?: AttendanceCreateNestedManyWithoutScheduleInput
    leaves?: LeaveCreateNestedManyWithoutScheduleInput
    paid_leaves?: PaidLeaveCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutEmployeeInput = {
    id?: number
    date: string
    status: string
    attendance_status: string
    attendances?: AttendanceUncheckedCreateNestedManyWithoutScheduleInput
    leaves?: LeaveUncheckedCreateNestedManyWithoutScheduleInput
    paid_leaves?: PaidLeaveUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutEmployeeInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutEmployeeInput, ScheduleUncheckedCreateWithoutEmployeeInput>
  }

  export type ScheduleCreateManyEmployeeInputEnvelope = {
    data: ScheduleCreateManyEmployeeInput | ScheduleCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeLoanCreateWithoutEmployeeInput = {
    amount: number
    date: Date | string
    status: string
  }

  export type EmployeeLoanUncheckedCreateWithoutEmployeeInput = {
    id?: number
    amount: number
    date: Date | string
    status: string
  }

  export type EmployeeLoanCreateOrConnectWithoutEmployeeInput = {
    where: EmployeeLoanWhereUniqueInput
    create: XOR<EmployeeLoanCreateWithoutEmployeeInput, EmployeeLoanUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeLoanCreateManyEmployeeInputEnvelope = {
    data: EmployeeLoanCreateManyEmployeeInput | EmployeeLoanCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type SalaryDeductionCreateWithoutEmployeeInput = {
    amount: number
    date: Date | string
  }

  export type SalaryDeductionUncheckedCreateWithoutEmployeeInput = {
    id?: number
    amount: number
    date: Date | string
  }

  export type SalaryDeductionCreateOrConnectWithoutEmployeeInput = {
    where: SalaryDeductionWhereUniqueInput
    create: XOR<SalaryDeductionCreateWithoutEmployeeInput, SalaryDeductionUncheckedCreateWithoutEmployeeInput>
  }

  export type SalaryDeductionCreateManyEmployeeInputEnvelope = {
    data: SalaryDeductionCreateManyEmployeeInput | SalaryDeductionCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithoutEmployeesInput = {
    update: XOR<AccountUpdateWithoutEmployeesInput, AccountUncheckedUpdateWithoutEmployeesInput>
    create: XOR<AccountCreateWithoutEmployeesInput, AccountUncheckedCreateWithoutEmployeesInput>
    where?: AccountWhereInput
  }

  export type AccountUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: AccountWhereInput
    data: XOR<AccountUpdateWithoutEmployeesInput, AccountUncheckedUpdateWithoutEmployeesInput>
  }

  export type AccountUpdateWithoutEmployeesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    level?: LevelUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateWithoutEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    level_id?: IntFieldUpdateOperationsInput | number
  }

  export type ScheduleUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: ScheduleWhereUniqueInput
    update: XOR<ScheduleUpdateWithoutEmployeeInput, ScheduleUncheckedUpdateWithoutEmployeeInput>
    create: XOR<ScheduleCreateWithoutEmployeeInput, ScheduleUncheckedCreateWithoutEmployeeInput>
  }

  export type ScheduleUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: ScheduleWhereUniqueInput
    data: XOR<ScheduleUpdateWithoutEmployeeInput, ScheduleUncheckedUpdateWithoutEmployeeInput>
  }

  export type ScheduleUpdateManyWithWhereWithoutEmployeeInput = {
    where: ScheduleScalarWhereInput
    data: XOR<ScheduleUpdateManyMutationInput, ScheduleUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type ScheduleScalarWhereInput = {
    AND?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    OR?: ScheduleScalarWhereInput[]
    NOT?: ScheduleScalarWhereInput | ScheduleScalarWhereInput[]
    id?: IntFilter<"Schedule"> | number
    date?: StringFilter<"Schedule"> | string
    status?: StringFilter<"Schedule"> | string
    attendance_status?: StringFilter<"Schedule"> | string
    employee_id?: IntFilter<"Schedule"> | number
  }

  export type EmployeeLoanUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeLoanWhereUniqueInput
    update: XOR<EmployeeLoanUpdateWithoutEmployeeInput, EmployeeLoanUncheckedUpdateWithoutEmployeeInput>
    create: XOR<EmployeeLoanCreateWithoutEmployeeInput, EmployeeLoanUncheckedCreateWithoutEmployeeInput>
  }

  export type EmployeeLoanUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: EmployeeLoanWhereUniqueInput
    data: XOR<EmployeeLoanUpdateWithoutEmployeeInput, EmployeeLoanUncheckedUpdateWithoutEmployeeInput>
  }

  export type EmployeeLoanUpdateManyWithWhereWithoutEmployeeInput = {
    where: EmployeeLoanScalarWhereInput
    data: XOR<EmployeeLoanUpdateManyMutationInput, EmployeeLoanUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type EmployeeLoanScalarWhereInput = {
    AND?: EmployeeLoanScalarWhereInput | EmployeeLoanScalarWhereInput[]
    OR?: EmployeeLoanScalarWhereInput[]
    NOT?: EmployeeLoanScalarWhereInput | EmployeeLoanScalarWhereInput[]
    id?: IntFilter<"EmployeeLoan"> | number
    amount?: IntFilter<"EmployeeLoan"> | number
    date?: DateTimeFilter<"EmployeeLoan"> | Date | string
    status?: StringFilter<"EmployeeLoan"> | string
    employee_id?: IntFilter<"EmployeeLoan"> | number
  }

  export type SalaryDeductionUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: SalaryDeductionWhereUniqueInput
    update: XOR<SalaryDeductionUpdateWithoutEmployeeInput, SalaryDeductionUncheckedUpdateWithoutEmployeeInput>
    create: XOR<SalaryDeductionCreateWithoutEmployeeInput, SalaryDeductionUncheckedCreateWithoutEmployeeInput>
  }

  export type SalaryDeductionUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: SalaryDeductionWhereUniqueInput
    data: XOR<SalaryDeductionUpdateWithoutEmployeeInput, SalaryDeductionUncheckedUpdateWithoutEmployeeInput>
  }

  export type SalaryDeductionUpdateManyWithWhereWithoutEmployeeInput = {
    where: SalaryDeductionScalarWhereInput
    data: XOR<SalaryDeductionUpdateManyMutationInput, SalaryDeductionUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type SalaryDeductionScalarWhereInput = {
    AND?: SalaryDeductionScalarWhereInput | SalaryDeductionScalarWhereInput[]
    OR?: SalaryDeductionScalarWhereInput[]
    NOT?: SalaryDeductionScalarWhereInput | SalaryDeductionScalarWhereInput[]
    id?: IntFilter<"SalaryDeduction"> | number
    amount?: IntFilter<"SalaryDeduction"> | number
    date?: DateTimeFilter<"SalaryDeduction"> | Date | string
    employee_id?: IntFilter<"SalaryDeduction"> | number
  }

  export type EmployeeCreateWithoutSchedulesInput = {
    name: string
    birth_date: Date | string
    phone: string
    account: AccountCreateNestedOneWithoutEmployeesInput
    employee_loans?: EmployeeLoanCreateNestedManyWithoutEmployeeInput
    salary_deductions?: SalaryDeductionCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutSchedulesInput = {
    id?: number
    name: string
    birth_date: Date | string
    phone: string
    account_id: number
    employee_loans?: EmployeeLoanUncheckedCreateNestedManyWithoutEmployeeInput
    salary_deductions?: SalaryDeductionUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutSchedulesInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutSchedulesInput, EmployeeUncheckedCreateWithoutSchedulesInput>
  }

  export type AttendanceCreateWithoutScheduleInput = {
    check_in: Date | string
    check_out: Date | string
    status: string
  }

  export type AttendanceUncheckedCreateWithoutScheduleInput = {
    id?: number
    check_in: Date | string
    check_out: Date | string
    status: string
  }

  export type AttendanceCreateOrConnectWithoutScheduleInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutScheduleInput, AttendanceUncheckedCreateWithoutScheduleInput>
  }

  export type AttendanceCreateManyScheduleInputEnvelope = {
    data: AttendanceCreateManyScheduleInput | AttendanceCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type LeaveCreateWithoutScheduleInput = {
    reason: string
    status: string
  }

  export type LeaveUncheckedCreateWithoutScheduleInput = {
    id?: number
    reason: string
    status: string
  }

  export type LeaveCreateOrConnectWithoutScheduleInput = {
    where: LeaveWhereUniqueInput
    create: XOR<LeaveCreateWithoutScheduleInput, LeaveUncheckedCreateWithoutScheduleInput>
  }

  export type LeaveCreateManyScheduleInputEnvelope = {
    data: LeaveCreateManyScheduleInput | LeaveCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type PaidLeaveCreateWithoutScheduleInput = {
    reason: string
    status: string
  }

  export type PaidLeaveUncheckedCreateWithoutScheduleInput = {
    id?: number
    reason: string
    status: string
  }

  export type PaidLeaveCreateOrConnectWithoutScheduleInput = {
    where: PaidLeaveWhereUniqueInput
    create: XOR<PaidLeaveCreateWithoutScheduleInput, PaidLeaveUncheckedCreateWithoutScheduleInput>
  }

  export type PaidLeaveCreateManyScheduleInputEnvelope = {
    data: PaidLeaveCreateManyScheduleInput | PaidLeaveCreateManyScheduleInput[]
    skipDuplicates?: boolean
  }

  export type EmployeeUpsertWithoutSchedulesInput = {
    update: XOR<EmployeeUpdateWithoutSchedulesInput, EmployeeUncheckedUpdateWithoutSchedulesInput>
    create: XOR<EmployeeCreateWithoutSchedulesInput, EmployeeUncheckedCreateWithoutSchedulesInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutSchedulesInput, EmployeeUncheckedUpdateWithoutSchedulesInput>
  }

  export type EmployeeUpdateWithoutSchedulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneRequiredWithoutEmployeesNestedInput
    employee_loans?: EmployeeLoanUpdateManyWithoutEmployeeNestedInput
    salary_deductions?: SalaryDeductionUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    account_id?: IntFieldUpdateOperationsInput | number
    employee_loans?: EmployeeLoanUncheckedUpdateManyWithoutEmployeeNestedInput
    salary_deductions?: SalaryDeductionUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type AttendanceUpsertWithWhereUniqueWithoutScheduleInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutScheduleInput, AttendanceUncheckedUpdateWithoutScheduleInput>
    create: XOR<AttendanceCreateWithoutScheduleInput, AttendanceUncheckedCreateWithoutScheduleInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutScheduleInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutScheduleInput, AttendanceUncheckedUpdateWithoutScheduleInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutScheduleInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutScheduleInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: IntFilter<"Attendance"> | number
    check_in?: DateTimeFilter<"Attendance"> | Date | string
    check_out?: DateTimeFilter<"Attendance"> | Date | string
    status?: StringFilter<"Attendance"> | string
    schedule_id?: IntFilter<"Attendance"> | number
  }

  export type LeaveUpsertWithWhereUniqueWithoutScheduleInput = {
    where: LeaveWhereUniqueInput
    update: XOR<LeaveUpdateWithoutScheduleInput, LeaveUncheckedUpdateWithoutScheduleInput>
    create: XOR<LeaveCreateWithoutScheduleInput, LeaveUncheckedCreateWithoutScheduleInput>
  }

  export type LeaveUpdateWithWhereUniqueWithoutScheduleInput = {
    where: LeaveWhereUniqueInput
    data: XOR<LeaveUpdateWithoutScheduleInput, LeaveUncheckedUpdateWithoutScheduleInput>
  }

  export type LeaveUpdateManyWithWhereWithoutScheduleInput = {
    where: LeaveScalarWhereInput
    data: XOR<LeaveUpdateManyMutationInput, LeaveUncheckedUpdateManyWithoutScheduleInput>
  }

  export type LeaveScalarWhereInput = {
    AND?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
    OR?: LeaveScalarWhereInput[]
    NOT?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
    id?: IntFilter<"Leave"> | number
    reason?: StringFilter<"Leave"> | string
    status?: StringFilter<"Leave"> | string
    schedule_id?: IntFilter<"Leave"> | number
  }

  export type PaidLeaveUpsertWithWhereUniqueWithoutScheduleInput = {
    where: PaidLeaveWhereUniqueInput
    update: XOR<PaidLeaveUpdateWithoutScheduleInput, PaidLeaveUncheckedUpdateWithoutScheduleInput>
    create: XOR<PaidLeaveCreateWithoutScheduleInput, PaidLeaveUncheckedCreateWithoutScheduleInput>
  }

  export type PaidLeaveUpdateWithWhereUniqueWithoutScheduleInput = {
    where: PaidLeaveWhereUniqueInput
    data: XOR<PaidLeaveUpdateWithoutScheduleInput, PaidLeaveUncheckedUpdateWithoutScheduleInput>
  }

  export type PaidLeaveUpdateManyWithWhereWithoutScheduleInput = {
    where: PaidLeaveScalarWhereInput
    data: XOR<PaidLeaveUpdateManyMutationInput, PaidLeaveUncheckedUpdateManyWithoutScheduleInput>
  }

  export type PaidLeaveScalarWhereInput = {
    AND?: PaidLeaveScalarWhereInput | PaidLeaveScalarWhereInput[]
    OR?: PaidLeaveScalarWhereInput[]
    NOT?: PaidLeaveScalarWhereInput | PaidLeaveScalarWhereInput[]
    id?: IntFilter<"PaidLeave"> | number
    reason?: StringFilter<"PaidLeave"> | string
    status?: StringFilter<"PaidLeave"> | string
    schedule_id?: IntFilter<"PaidLeave"> | number
  }

  export type EmployeeCreateWithoutEmployee_loansInput = {
    name: string
    birth_date: Date | string
    phone: string
    account: AccountCreateNestedOneWithoutEmployeesInput
    schedules?: ScheduleCreateNestedManyWithoutEmployeeInput
    salary_deductions?: SalaryDeductionCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutEmployee_loansInput = {
    id?: number
    name: string
    birth_date: Date | string
    phone: string
    account_id: number
    schedules?: ScheduleUncheckedCreateNestedManyWithoutEmployeeInput
    salary_deductions?: SalaryDeductionUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutEmployee_loansInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutEmployee_loansInput, EmployeeUncheckedCreateWithoutEmployee_loansInput>
  }

  export type EmployeeUpsertWithoutEmployee_loansInput = {
    update: XOR<EmployeeUpdateWithoutEmployee_loansInput, EmployeeUncheckedUpdateWithoutEmployee_loansInput>
    create: XOR<EmployeeCreateWithoutEmployee_loansInput, EmployeeUncheckedCreateWithoutEmployee_loansInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutEmployee_loansInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutEmployee_loansInput, EmployeeUncheckedUpdateWithoutEmployee_loansInput>
  }

  export type EmployeeUpdateWithoutEmployee_loansInput = {
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneRequiredWithoutEmployeesNestedInput
    schedules?: ScheduleUpdateManyWithoutEmployeeNestedInput
    salary_deductions?: SalaryDeductionUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutEmployee_loansInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    account_id?: IntFieldUpdateOperationsInput | number
    schedules?: ScheduleUncheckedUpdateManyWithoutEmployeeNestedInput
    salary_deductions?: SalaryDeductionUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateWithoutSalary_deductionsInput = {
    name: string
    birth_date: Date | string
    phone: string
    account: AccountCreateNestedOneWithoutEmployeesInput
    schedules?: ScheduleCreateNestedManyWithoutEmployeeInput
    employee_loans?: EmployeeLoanCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutSalary_deductionsInput = {
    id?: number
    name: string
    birth_date: Date | string
    phone: string
    account_id: number
    schedules?: ScheduleUncheckedCreateNestedManyWithoutEmployeeInput
    employee_loans?: EmployeeLoanUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutSalary_deductionsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutSalary_deductionsInput, EmployeeUncheckedCreateWithoutSalary_deductionsInput>
  }

  export type EmployeeUpsertWithoutSalary_deductionsInput = {
    update: XOR<EmployeeUpdateWithoutSalary_deductionsInput, EmployeeUncheckedUpdateWithoutSalary_deductionsInput>
    create: XOR<EmployeeCreateWithoutSalary_deductionsInput, EmployeeUncheckedCreateWithoutSalary_deductionsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutSalary_deductionsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutSalary_deductionsInput, EmployeeUncheckedUpdateWithoutSalary_deductionsInput>
  }

  export type EmployeeUpdateWithoutSalary_deductionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneRequiredWithoutEmployeesNestedInput
    schedules?: ScheduleUpdateManyWithoutEmployeeNestedInput
    employee_loans?: EmployeeLoanUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutSalary_deductionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    account_id?: IntFieldUpdateOperationsInput | number
    schedules?: ScheduleUncheckedUpdateManyWithoutEmployeeNestedInput
    employee_loans?: EmployeeLoanUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type ScheduleCreateWithoutAttendancesInput = {
    date: string
    status: string
    attendance_status: string
    employee: EmployeeCreateNestedOneWithoutSchedulesInput
    leaves?: LeaveCreateNestedManyWithoutScheduleInput
    paid_leaves?: PaidLeaveCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutAttendancesInput = {
    id?: number
    date: string
    status: string
    attendance_status: string
    employee_id: number
    leaves?: LeaveUncheckedCreateNestedManyWithoutScheduleInput
    paid_leaves?: PaidLeaveUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutAttendancesInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutAttendancesInput, ScheduleUncheckedCreateWithoutAttendancesInput>
  }

  export type ScheduleUpsertWithoutAttendancesInput = {
    update: XOR<ScheduleUpdateWithoutAttendancesInput, ScheduleUncheckedUpdateWithoutAttendancesInput>
    create: XOR<ScheduleCreateWithoutAttendancesInput, ScheduleUncheckedCreateWithoutAttendancesInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutAttendancesInput, ScheduleUncheckedUpdateWithoutAttendancesInput>
  }

  export type ScheduleUpdateWithoutAttendancesInput = {
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attendance_status?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateOneRequiredWithoutSchedulesNestedInput
    leaves?: LeaveUpdateManyWithoutScheduleNestedInput
    paid_leaves?: PaidLeaveUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutAttendancesInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attendance_status?: StringFieldUpdateOperationsInput | string
    employee_id?: IntFieldUpdateOperationsInput | number
    leaves?: LeaveUncheckedUpdateManyWithoutScheduleNestedInput
    paid_leaves?: PaidLeaveUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleCreateWithoutLeavesInput = {
    date: string
    status: string
    attendance_status: string
    employee: EmployeeCreateNestedOneWithoutSchedulesInput
    attendances?: AttendanceCreateNestedManyWithoutScheduleInput
    paid_leaves?: PaidLeaveCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutLeavesInput = {
    id?: number
    date: string
    status: string
    attendance_status: string
    employee_id: number
    attendances?: AttendanceUncheckedCreateNestedManyWithoutScheduleInput
    paid_leaves?: PaidLeaveUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutLeavesInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutLeavesInput, ScheduleUncheckedCreateWithoutLeavesInput>
  }

  export type ScheduleUpsertWithoutLeavesInput = {
    update: XOR<ScheduleUpdateWithoutLeavesInput, ScheduleUncheckedUpdateWithoutLeavesInput>
    create: XOR<ScheduleCreateWithoutLeavesInput, ScheduleUncheckedCreateWithoutLeavesInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutLeavesInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutLeavesInput, ScheduleUncheckedUpdateWithoutLeavesInput>
  }

  export type ScheduleUpdateWithoutLeavesInput = {
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attendance_status?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateOneRequiredWithoutSchedulesNestedInput
    attendances?: AttendanceUpdateManyWithoutScheduleNestedInput
    paid_leaves?: PaidLeaveUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutLeavesInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attendance_status?: StringFieldUpdateOperationsInput | string
    employee_id?: IntFieldUpdateOperationsInput | number
    attendances?: AttendanceUncheckedUpdateManyWithoutScheduleNestedInput
    paid_leaves?: PaidLeaveUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleCreateWithoutPaid_leavesInput = {
    date: string
    status: string
    attendance_status: string
    employee: EmployeeCreateNestedOneWithoutSchedulesInput
    attendances?: AttendanceCreateNestedManyWithoutScheduleInput
    leaves?: LeaveCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleUncheckedCreateWithoutPaid_leavesInput = {
    id?: number
    date: string
    status: string
    attendance_status: string
    employee_id: number
    attendances?: AttendanceUncheckedCreateNestedManyWithoutScheduleInput
    leaves?: LeaveUncheckedCreateNestedManyWithoutScheduleInput
  }

  export type ScheduleCreateOrConnectWithoutPaid_leavesInput = {
    where: ScheduleWhereUniqueInput
    create: XOR<ScheduleCreateWithoutPaid_leavesInput, ScheduleUncheckedCreateWithoutPaid_leavesInput>
  }

  export type ScheduleUpsertWithoutPaid_leavesInput = {
    update: XOR<ScheduleUpdateWithoutPaid_leavesInput, ScheduleUncheckedUpdateWithoutPaid_leavesInput>
    create: XOR<ScheduleCreateWithoutPaid_leavesInput, ScheduleUncheckedCreateWithoutPaid_leavesInput>
    where?: ScheduleWhereInput
  }

  export type ScheduleUpdateToOneWithWhereWithoutPaid_leavesInput = {
    where?: ScheduleWhereInput
    data: XOR<ScheduleUpdateWithoutPaid_leavesInput, ScheduleUncheckedUpdateWithoutPaid_leavesInput>
  }

  export type ScheduleUpdateWithoutPaid_leavesInput = {
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attendance_status?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateOneRequiredWithoutSchedulesNestedInput
    attendances?: AttendanceUpdateManyWithoutScheduleNestedInput
    leaves?: LeaveUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutPaid_leavesInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attendance_status?: StringFieldUpdateOperationsInput | string
    employee_id?: IntFieldUpdateOperationsInput | number
    attendances?: AttendanceUncheckedUpdateManyWithoutScheduleNestedInput
    leaves?: LeaveUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type AccountCreateManyLevelInput = {
    id?: number
    username: string
    password?: string | null
    token?: string | null
  }

  export type AccountUpdateWithoutLevelInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: EmployeeUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutLevelInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    employees?: EmployeeUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateManyWithoutLevelInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeeCreateManyAccountInput = {
    id?: number
    name: string
    birth_date: Date | string
    phone: string
  }

  export type EmployeeUpdateWithoutAccountInput = {
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    schedules?: ScheduleUpdateManyWithoutEmployeeNestedInput
    employee_loans?: EmployeeLoanUpdateManyWithoutEmployeeNestedInput
    salary_deductions?: SalaryDeductionUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
    schedules?: ScheduleUncheckedUpdateManyWithoutEmployeeNestedInput
    employee_loans?: EmployeeLoanUncheckedUpdateManyWithoutEmployeeNestedInput
    salary_deductions?: SalaryDeductionUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    birth_date?: DateTimeFieldUpdateOperationsInput | Date | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type ScheduleCreateManyEmployeeInput = {
    id?: number
    date: string
    status: string
    attendance_status: string
  }

  export type EmployeeLoanCreateManyEmployeeInput = {
    id?: number
    amount: number
    date: Date | string
    status: string
  }

  export type SalaryDeductionCreateManyEmployeeInput = {
    id?: number
    amount: number
    date: Date | string
  }

  export type ScheduleUpdateWithoutEmployeeInput = {
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attendance_status?: StringFieldUpdateOperationsInput | string
    attendances?: AttendanceUpdateManyWithoutScheduleNestedInput
    leaves?: LeaveUpdateManyWithoutScheduleNestedInput
    paid_leaves?: PaidLeaveUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attendance_status?: StringFieldUpdateOperationsInput | string
    attendances?: AttendanceUncheckedUpdateManyWithoutScheduleNestedInput
    leaves?: LeaveUncheckedUpdateManyWithoutScheduleNestedInput
    paid_leaves?: PaidLeaveUncheckedUpdateManyWithoutScheduleNestedInput
  }

  export type ScheduleUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    attendance_status?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeLoanUpdateWithoutEmployeeInput = {
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeLoanUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeLoanUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SalaryDeductionUpdateWithoutEmployeeInput = {
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryDeductionUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryDeductionUncheckedUpdateManyWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyScheduleInput = {
    id?: number
    check_in: Date | string
    check_out: Date | string
    status: string
  }

  export type LeaveCreateManyScheduleInput = {
    id?: number
    reason: string
    status: string
  }

  export type PaidLeaveCreateManyScheduleInput = {
    id?: number
    reason: string
    status: string
  }

  export type AttendanceUpdateWithoutScheduleInput = {
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type AttendanceUncheckedUpdateManyWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    check_in?: DateTimeFieldUpdateOperationsInput | Date | string
    check_out?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LeaveUpdateWithoutScheduleInput = {
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LeaveUncheckedUpdateWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type LeaveUncheckedUpdateManyWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PaidLeaveUpdateWithoutScheduleInput = {
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PaidLeaveUncheckedUpdateWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PaidLeaveUncheckedUpdateManyWithoutScheduleInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
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