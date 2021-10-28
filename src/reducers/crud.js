export default function reducer(data = [], action) {
  switch (action.type) {
    case 'FETCH_ALL':
      console.log('Hello');
      return action.payload;

    case 'CREATE':
      return [...data, action.payload];
    case 'UPDATE':
      return data.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );

    case 'DELETE':
      return data.filter((post) => post._id !== action.payload);
    default:
      return data;
  }
}
