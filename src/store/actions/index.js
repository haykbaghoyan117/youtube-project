import { VIDEOS_LOADED } from "../action-types/action-type";

export const videosLoaded = ( payload ) => ({ type: VIDEOS_LOADED, payload })







// const booksLoaded = (newBooks) => {
//     return {
//       type: 'BOOKS_LOADED',
//       payload: newBooks
//     };
//   };
  
//   export {
//     booksLoaded
//   };






// const booksRequested = () => {
//     return {
//       type: 'FETCH_BOOKS_REQUEST'
//     }
//   };
  
//   const booksLoaded = (newBooks) => {
//     return {
//       type: 'FETCH_BOOKS_SUCCESS',
//       payload: newBooks
//     };
//   };
  
//   const booksError = (error) => {
//     return {
//       type: 'FETCH_BOOKS_FAILURE',
//       payload: error
//     };
//   };
  
//   export const bookAddedToCart = (bookId) => {
//     return {
//       type: 'BOOK_ADDED_TO_CART',
//       payload: bookId
//     };
//   };
  
//   export const bookRemovedFromCart = (bookId) => {
//     return {
//       type: 'BOOK_REMOVED_FROM_CART',
//       payload: bookId
//     };
//   };
  
//   export const allBooksRemovedFromCart = (bookId) => {
//     return {
//       type: 'ALL_BOOKS_REMOVED_FROM_CART',
//       payload: bookId
//     };
//   };
  
//   const fetchBooks = (bookstoreService, dispatch) => () => {
//     dispatch(booksRequested());
//     bookstoreService.getBooks()
//       .then((data) => dispatch(booksLoaded(data)))
//       .catch((err) => dispatch(booksError(err)));
//   };
  
//   export {
//     fetchBooks
//   };









//vahe
// import { INCREMENT, DECREMENT, RESET, CHANGE_VALUE, LIST } from '../action/conter';

// export const increment = () => ({type: INCREMENT})
// export const decrement = () => ({type: DECREMENT})
// export const reset = () => ({type: RESET})
// export const changeValue = (payload) => ({type: CHANGE_VALUE, payload})
// export const list = (payload) => ({type: LIST, payload})