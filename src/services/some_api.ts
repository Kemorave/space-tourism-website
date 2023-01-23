// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { FullData } from '../types/somthing'

// Define a service using a base URL and expected endpoints
export const someApi = createApi({
  reducerPath: 'someApi',
  // global configuration for the api
  keepUnusedDataFor: 60*60,
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getAllData: builder.query<FullData|undefined|null, null>({
      query: () => `/assets/data.json`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllDataQuery } = someApi;