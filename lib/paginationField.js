import { PAGINATION_QUERY } from '../components/Pagination';

export default function paginationField() {
  return {
    keyArgs: false, // Tells Apollo that we'll take care of Everything

    // Read the Cache for Items
    read(existing = [], { args, cache }) {
      // console.log({ existing, args, cache });
      const { skip, first } = args;

      // Read the number of items on the page from the Cache
      const data = cache.readQuery({ query: PAGINATION_QUERY });
      const count = data?._allProductsMeta?.count;
      const page = skip / first + 1;
      const pages = Math.ceil(count / first);

      // Check if there are existing items in the Cache
      const items = existing.slice(skip, skip + first).filter((x) => x);
      // If there are
      if (items.length && items.length !== first && page === pages) {
        return items;
      }
      // If there are no existing items, Fetch from the Network
      if (items.length !== first) {
        return false;
      }
      // If there are existing items, Send 'em to Apollo
      if (items.length) {
        // console.log(`There are ${items.length} items in the Cache!`);
        return items;
      }

      return false; // fallback to the network
    },

    // When Apollo returns with the Data from the Network
    merge(existing, incoming, { args }) {
      const { skip } = args;
      // If there are existing items in the Array
      const merged = existing ? existing.slice(0) : [];
      // eslint-disable-next-line no-plusplus
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip];
      }
      // console.log(`Merged`, merged);
      // console.log({ existing, incoming, args }, 'POST Merged');
      return merged;
    },
  };
}
