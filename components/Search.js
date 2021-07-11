import { gql, useLazyQuery } from '@apollo/client';
import { resetIdCounter, useCombobox } from 'downshift';
import debounce from 'lodash/debounce';
import { useRouter } from 'next/router';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';
import LoadingScreen from './styles/Loading';
import { SearchSvg } from './styles/Svg';

// ------------------------------------Search-Query

const SEARCH_PRODUCTS_QUERY = gql`
  query SEARCH_PRODUCTS_QUERY($searchTerm: String!) {
    searchTerm: allProducts(
      where: {
        OR: [
          { name_contains_i: $searchTerm }
          { description_contains_i: $searchTerm }
        ]
      }
    ) {
      id
      name
      photo {
        image {
          publicUrlTransformed(
            transformation: { width: "180", crop: "limit", quality: "auto" }
          )
        }
      }
    }
  }
`;

// ------------------SEARCH COMPONENT------------------

export default function Search() {
  const router = useRouter();
  resetIdCounter();

  // ----useLazyQuery Hook----
  const [findItems, { data, error, loading }] = useLazyQuery(
    SEARCH_PRODUCTS_QUERY,
    {
      // save no cache
      fetchPolicy: 'no-cache',
    }
  );

  // Array of all the items returned
  const items = data?.searchTerm || [];

  const findItemDebounce = debounce(findItems, 1000);

  // ----Dropshift.js----

  const {
    isOpen,
    inputValue,
    highlightedIndex,
    getComboboxProps,
    getInputProps,
    getMenuProps,
    getItemProps,
  } = useCombobox({
    // OPTIONS/METHODS
    items,

    // ----onChange----
    onInputValueChange() {
      // Waiting 1000 ms before running the Query a.k.a NotDDOSingUrOwnSite
      findItemDebounce({
        variables: { searchTerm: inputValue },
      });
    },

    // ----onSelect----
    onSelectedItemChange({ selectedItem }) {
      router.push({
        pathname: `/product/${selectedItem.id}`,
      });
    },

    // Changes [object, Object] i.e. ({someObject}).toString
    itemToString: (item) => (item ? item.name : ''),
  });

  if (error) return console.log(`Search Error! ${error.message}`);

  return (
    <SearchStyles>
      <div {...getComboboxProps()}>
        <div className="inputBox">
          <SearchSvg />
          <input
            aria-label="Search Bar"
            {...getInputProps({
              type: 'search',
              placeholder: 'Search...',
              id: 'search',
              className: loading ? 'loading' : '',
            })}
          />
        </div>
      </div>
      <DropDown {...getMenuProps()}>
        {isOpen && loading ? (
          <DropDownItem>
            <LoadingScreen />
          </DropDownItem>
        ) : (
          isOpen &&
          items.map((item, index) => (
            <DropDownItem
              {...getItemProps({ item, index })}
              key={item?.id}
              highlighted={index === highlightedIndex}
            >
              <img
                width="60"
                src={item?.photo?.image?.publicUrlTransformed}
                alt={item?.name}
              />
              {item?.name || ''}
            </DropDownItem>
          ))
        )}

        {isOpen && !loading && !items.length && (
          <DropDownItem>Sorry, No items found for {inputValue}</DropDownItem>
        )}
      </DropDown>
    </SearchStyles>
  );
}
