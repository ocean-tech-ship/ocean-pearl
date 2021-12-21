import CategoryEnum from '@/enums/Category.enum';

export default function replaceQueryParams(_this: any, query: object): void {
  if (!process.server) {
    const url =
      window.location.origin +
      _this.$nuxt.$router.resolve({
        query,
      }).href;
    // eslint-disable-next-line
    history.replaceState({}, '', url);
  }
}

export function getFirstInstanceParam(
  queryParam: string | (string | null)[],
): string | null {
  const fistInstance = Array.isArray(queryParam) ? queryParam[0] : queryParam;
  return fistInstance;
}

export function processQueryToNewFilter(
  queryParams: Record<string, string | (string | null)[]>,
  filter: Record<string, any>,
): Record<string, any> {
  const queryParamsSingle = Object.entries(queryParams).reduce(
    (acc: Record<string, any>[], curr) => {
      const single = { [curr[0]]: getFirstInstanceParam(curr[1]) };
      acc.push(single);
      return acc;
    },
    [],
  );

  const newFilter: Record<string, any> = {};
  queryParamsSingle.forEach((param) => {
    const paramKey = Object.keys(param)[0];
    const paramValue = Object.values(param)[0];
    if (paramValue) {
      switch (paramKey) {
        case 'page':
          newFilter.page =
            paramValue && parseInt(paramValue)
              ? parseInt(paramValue)
              : filter.page;
          break;
        case 'round':
          newFilter.round =
            paramValue && parseInt(paramValue)
              ? parseInt(paramValue)
              : filter.round;
          break;
        case 'category':
          newFilter.category = Object.values(CategoryEnum).includes(paramValue)
            ? paramValue
            : filter.category;
          break;
        case 'search':
          newFilter.search =
            paramValue || paramValue === '' ? paramValue : filter.search;
      }
    }
  });

  return newFilter;
}
