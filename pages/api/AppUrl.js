export class AppURL  {
    static baseUrl = "http://127.0.0.1:8000/api"
  

    static allbanners = this.baseUrl+"/allbanners";
    static collections = this.baseUrl+"/allcollections";
    static productbycollection(slug) {
        return `${this.baseUrl}/productbycollection/${slug}`;
      }
    static newarrivalproducts = this.baseUrl+"/newarrivalproducts";
    static featuredproducts = this.baseUrl+"/featuredproducts";
    static alltestimonials = this.baseUrl+"/alltestimonials";
    static productdetails(category_name,slug){
      return `${this.baseUrl}/productdetails/${category_name}/${slug}`;
    }

    static UserRegisteration = this.baseUrl+"/register";
    static UserLogin = this.baseUrl+"/login";
    static UserDetails = this.baseUrl+"/user-details";
    static UserUpdateDetails = this.baseUrl+"/user-details-update";
    static UserLogout = this.baseUrl+"/user-logout";

    static UserAddtoCart = this.baseUrl+"/add-to-cart";
    static UserCart = this.baseUrl+"/cart";
}
export default AppURL;