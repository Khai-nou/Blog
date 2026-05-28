import { get } from '../config/http-client'
import { API } from '../config/api'
import type { FetchPostsResponse } from '../types'

export const requestPosts = async (limit: number = 500, offset: number = 0): Promise<FetchPostsResponse> => {
  try {
    const response = await get(API.blogPosts, {
      params: {
        limit,
        offset,
      }
    })

    return response.data
  } catch (error) {
    throw error
  }
}