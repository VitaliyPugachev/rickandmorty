export interface InfoModel {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null
  }

export interface ResponseModel<T> {
    info: InfoModel,
    results: T
}

export interface ResponseListModel<T> {
    info: InfoModel,
    results: T[]
}