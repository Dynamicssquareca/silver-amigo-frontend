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
    static productunderpricerange(slug){
      return `${this.baseUrl}/product-price-range/${slug}`;
    }
    static UserRegisteration = this.baseUrl+"/register";
    static UserLogin = this.baseUrl+"/login";
    static UserForgotPassword = this.baseUrl+"/forgot-password";
    static UserResetPassword = this.baseUrl+"/reset-password";
    static UserDetails = this.baseUrl+"/user-details";
    static UserUpdateDetails = this.baseUrl+"/user-details-update";
    static UserLogout = this.baseUrl+"/user-logout";
    static UserAddtoCart = this.baseUrl+"/add-to-cart";
    static UserCart = this.baseUrl+"/cart";
    static UserGetCartItems = this.baseUrl+"/cart-items";
    static UserRemoveCartItem(productid){
      return `${this.baseUrl}/remove-cart-item/${productid}`
    }
    static UserUpdateCartItems = this.baseUrl+"/update-cart-items";
    static MergeGuestCart = this.baseUrl+"/merge-guest-cart";
    static UserCheckout = this.baseUrl+"/checkout";
    static UserVerifyPayment = this.baseUrl+"/verify-payment";
    static UserAddAddress = this.baseUrl+"/add-address";
    static UserGetAddress = this.baseUrl+"/get-addresses";
    static UserUpdateAddress(addressId) {
      return `${this.baseUrl}/update-address/${addressId}`;
  }


    static Countries = this.baseUrl+"/get-countries";
    static GetStatesByCountry(countryId) {
      return `${this.baseUrl}/get-states/${countryId}`;
      }
    static GetCitiesByState(stateId) {
      return `${this.baseUrl}/get-cities/${stateId}`;
      } 

      static UserOrderSuccess(OrderId) {
        return `${this.baseUrl}/order-success/${OrderId}`;
    }
    static UserOrders = this.baseUrl+"/my-orders";
    static UserOrderDetails(OrderId) {
      return `${this.baseUrl}/order-details/${OrderId}`;
  }
  static UserTrackOrder(OrderId) {
    return `${this.baseUrl}/track-order/${OrderId}`;
}

static TermsandConditions = this.baseUrl+"/terms-and-conditions";
static PrivacyPolicy = this.baseUrl+"/privacy-policy";
static ShippingPolicy = this.baseUrl+"/shipping-policy";
static RefundPolicy = this.baseUrl+"/refund-policy";

}
export default AppURL;