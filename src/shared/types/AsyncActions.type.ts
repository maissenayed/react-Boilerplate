// app/actions/asyncAction.ts
export enum AsyncActionStatus {
  NOT_REQUESTED = 'Not requested',
  LOADING = 'Loading',
  OK = 'Ok',
  ERR = 'error',
}

// app/actions/asyncAction.ts
interface LoadingAsyncAction<T> {
  type: T
  status: AsyncActionStatus.LOADING
}

interface OkAsyncAction<T, P = unknown> {
  type: T
  status: AsyncActionStatus.OK
  payload: P
}

interface ErrAsyncAction<T> {
  type: T
  status: AsyncActionStatus.ERR
  payload: Error
}

export type AsyncAction<T, P = unknown> =
  | LoadingAsyncAction<T>
  | OkAsyncAction<T, P>
  | ErrAsyncAction<T>

// app/actions/asyncAction.ts
function startedAsyncAction<T>(type: T): LoadingAsyncAction<T> {
  return {
    type,
    status: AsyncActionStatus.LOADING,
  }
}

function succeededAsyncAction<T, P>(type: T, payload: P): OkAsyncAction<T, P> {
  return {
    type,
    status: AsyncActionStatus.OK,
    payload,
  }
}

function failedAsyncAction<T>(type: T, error: Error): ErrAsyncAction<T> {
  return {
    type,
    status: AsyncActionStatus.ERR,
    payload: error,
  }
}

// app/actions/asyncAction.ts
export function async<T, P>(
  type: T,
  action: (...args: any[]) => Promise<P>,
  ...args: any[]
) {
  return async (dispatch: any) => {
    dispatch(startedAsyncAction(type))
    try {
      const payload = await action(...args)
      dispatch(succeededAsyncAction(type, payload))
    } catch (error) {
      dispatch(failedAsyncAction(type, error))
    }
  }
}
