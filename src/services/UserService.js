import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const API_URL = "https://layout.solvintech.ru/nuxt/api";


// Define a service using a base URL and expected endpoints
export const UserApi = createApi({
  reducerPath: 'UserApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: `/`,
       
    }),
    }),
  }),
})



export const {useGetAllUsersQuery} = UserApi