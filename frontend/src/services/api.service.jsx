import createHttp from "./http"

let http =createHttp(false);
export const ApiService = {
  auth(){
    http = createHttp(true)
  },

  get(resource, slug = "") {
    return http.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[MS] ApiService ${error}`);
    });
  },

  query(resource, params) {
    return http.get(resource, params).catch(error => {
      throw new Error(`[MS] ApiService ${error}`);
    });
  },
}