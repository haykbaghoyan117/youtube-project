
export default class VideoStoreService {

    getVideos() {
        return [
            {id: 1, videoId: 'fvHJnqJKPAs'},
            {id: 2, videoId: 'PAjD4GFi3Ko'},
            {id: 3, videoId: 'VNJTDZgx540'},
            {id: 4, videoId: 'LP7qvA7etBo'},
            {id: 5, videoId: 'PczERN-BQeo'},
            {id: 6, videoId: 'unUXGT0cmZQ'}
        ]
    }
}



// export default class BookstoreService {

//     data = [
//       {
//         id: 1,
//         title: 'Production-Ready Microservices',
//         author: 'Susan J. Fowler',
//         price: 32,
//         coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'},
//       {
//         id: 2,
//         title: 'Release It!',
//         author: 'Michael T. Nygard',
//         price: 45,
//         coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'}
//     ];
  
//     getBooks() {
//       return new Promise((resolve, reject) => {
//         setTimeout(() => {
//           if (Math.random() > 0.75) {
//             reject(new Error('Something bad happened'));
//           } else {
//             resolve(this.data);
//           }
//         }, 700);
//       });
//     }
//   }