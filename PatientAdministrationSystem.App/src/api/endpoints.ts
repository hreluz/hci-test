export const endpoints = {
  patient: {
    list: (query:string) => `/patients?name=${query}`,
    find: (id:string) => `/patients/${id}`,
  },
};
