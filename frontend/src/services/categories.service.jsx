import {getToken,destroyToken} from '../services/jwt.service'
import {ApiService} from './api.service'

const CategoriesService = {
  query(){
    return ApiService.query("fitness/category", {});
  },

  create(category){
    ApiService.auth();
    console.log(category);
    return ApiService.post("fitness/category", category )
  },
  
  destroy(idcategory) {
    return ApiService.delete(`fitness/category/${idcategory}`);
  },

  update(category) {
    return ApiService.put(`fitness/category/${category.id}`, category );
  },
}

export default CategoriesService;