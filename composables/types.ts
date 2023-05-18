export interface ResDataDetail{
    id: number,
    attributes: Record<string, number | string | object>
}

export interface ResData {
  data: Ref<unknown | ResDataDetail>
  error: Ref<unknown | null>
}

