export type NotRequested = "NotRequested";

export const NotRequested: Readonly<NotRequested> = "NotRequested";

export const isNotRequested = <T>(x: Loadable<T>): x is NotRequested => x === "NotRequested";

export type SUPERUSER = "SUPERUSER";

export const SUPERUSER: Readonly<SUPERUSER> = "SUPERUSER";

export const isSuperUser = <T>(x: string): x is SUPERUSER => x === "SUPERUSER";
export type USER = "USER";
export const USER: Readonly<USER> = "USER";

export type Loading = "Loading";

export const Loading: Readonly<Loading> = "Loading";

export const isLoading = <T>(x: Loadable<T>): x is Loading => x === "Loading";

export type Err = { tag: "Error"; error: any };

export const Err = (error: any): Err => ({ tag: "Error", error });

export const isErr = <T>(x: Loadable<T>): x is Err => typeof x === "object" && x.tag === "Error";

export type Ok<T> = {
  tag: "Ok";
  data: T;
};

export const Ok = <T>(data: T): Ok<T> => ({ tag: "Ok", data });
export const isOk = <T>(x: Loadable<T>): x is Ok<T> => typeof x === "object" && x.tag === "Ok";

export type Loadable<T> = Ok<T> | Err | Loading | NotRequested | SUPERUSER | USER;

type CaseOf<T, X> = {
  NotRequested: () => X;
  Loading: () => X;
  SUPERUSER: () => X;
  ISUSER: () => X;

  Err: (_: unknown) => X;
  Ok: (_: T) => X;
};

export const foldLoadable = <T, X>(x: Loadable<T>, cases: CaseOf<T, X>): X => {
  if (x === "NotRequested") {
    return cases.NotRequested();
  }
  if (x === "Loading") {
    return cases.Loading();
  }
  if (x === "SUPERUSER") {
    return cases.SUPERUSER();
  }
  if (x === "USER") {
    return cases.ISUSER();
  }
  if (x.tag === "Error") {
    return cases.Err(x.error);
  }
  return cases.Ok(x.data);
};
type Implements<T, U extends T> = {};
