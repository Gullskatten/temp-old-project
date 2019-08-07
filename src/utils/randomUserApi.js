const APPLICATION_SEED = "seed=ABC";
const INCLUDED_FIELDS = "inc=id,name,gender,picture,email";
const RESULTS_PER_PAGE = "results=10";
const RANDOM_USER_API_PATH = "https://randomuser.me/api/";
const RANDOM_USER_API = `${RANDOM_USER_API_PATH}?${INCLUDED_FIELDS}&${RESULTS_PER_PAGE}&${APPLICATION_SEED}`;

const executeUrlQuery = async (url) => {

   const response = await fetch(url);

   if(response && response.ok) {

    const responseBody = await response.json();
    
    const { results } = responseBody;

       return {
           data: results,
           isOk: response.ok,
           failureReason: '',
           code: 200
       }
   } else {
       console.log(response);
       return {
         isOk: false,
         failureReason: response.body,
         code: response.status,
       }
   }
}

const randomUserApi = {
    getUsersByPage: async (page = 1) => {
        const usersByPageUrl = RANDOM_USER_API + `&page=${page}`;
        return await executeUrlQuery(usersByPageUrl);
    },
}

export default randomUserApi;