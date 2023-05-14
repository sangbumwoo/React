// let data = {
//   name: "누나네 식당",
//   category: "western",
//   address: {
//     city: "Inchon",
//     detail: "somewhere",
//     zipCode: 13432,
//   },
//   menu: [
//     { name: "Rose Pasta", category: "pasta", price: 2000 },
//     { name: "noodle", category: "noodle", price: 1000 },
//   ],
// };

// interface, type

export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};

export type Address = {
  city: string;
  detail: string;
  zipCode: number;
};



export type Menu = {
  name: string;
  price: number;
  category: string;
};

// export type AddressWithoutZipCode = {
//   city: string;
//   detail: string;
// }; 

export type AddressWithoutZipCode = Omit<Address, 'zipCode'>;
export type RestaurantOnlyCategory = Pick<Restaurant, 'category'>; 


export type ApiResponse<T> = {
    data: T[];
    totalPage: number;
    page: number;
}

export type RestaurantResponse = ApiResponse<Restaurant>;
export type MenuResponse = ApiResponse<Menu>;