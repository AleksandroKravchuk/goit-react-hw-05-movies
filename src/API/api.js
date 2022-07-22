import axios from "axios";

// export const ApiService {
    // constructor() {
    //   this.searchQuery = '';
    //   this.page = 1;
    //   this.per_page = 12;
    // }
export async function fetchImages(){
    const API_KEY = `419c8d7d79cbcac22c5520f1ac14d2c7`;
    // const options =  new URLSearchParams({
    //     key: API_KEY,
    //     image_type: "photo",
    //     q: this.searchQuery,
    //     orientation: "horizontal",
    //     per_page: this.per_page,
    //     page:  this.page,
    // })
     const { data } = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
      return data;     
};
  export async function fetchSearchImages(searchName){
    const API_KEY = `419c8d7d79cbcac22c5520f1ac14d2c7`;

     const { data } = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${searchName}`);
      return data;     
  };
//     get query() {
//       return  this.searchQuery;
//     };
//     set query(newQuery) {
//         this.searchQuery = newQuery;
//   };
//   setAddNewPage(newPage) {
//         this.page = newPage;
//   };
//   getPer_page() {
//     return this.per_page;
//   }
// }