import CategoryEnum from '@/enums/Category.enum';
import GrantPoolTypeEnum from '~/enums/GrantPoolType.enum';

const DELIMITER = ',';

export function replaceQueryParams(
  _this: Record<string, any>,
  query: any,
): void {
  query = { ...query };
  if (query.round === 0) {
    delete query.round;
  }

  if (query.pools) {
    if (query.pools.length === 0) {
      delete query.pools;
    } else {
      query.pools = query.pools.join(DELIMITER);
    }
  }

  _this.$router.push({
    path: _this.$route.path,
    query,
  });
}

export function getFirstInstanceParam(
  queryParam: string | (string | null)[],
): string | null {
  return Array.isArray(queryParam) ? queryParam[0] : queryParam;
}

export function processQueryToFilter(
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
          break;
        case 'pools':
          newFilter.pools =
            paramValue
              .split(DELIMITER)
              .filter((pool: any) =>
                Object.values(GrantPoolTypeEnum).includes(pool),
              ) ?? filter.pools;
          break;
      }
    }
  });
  return newFilter;
}
