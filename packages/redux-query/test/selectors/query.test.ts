import { getQueryKey } from '../../src/lib/query-key';
import * as querySelectors from '../../src/selectors/query';
import { State } from '../../src/reducers/entities';

describe('query selectors', () => {
  describe('isFinished', () => {
    test('should work with a config', () => {
      const queryConfig = {
        url: '/api/dashboard/1/rename',
        body: {
          name: 'My KPIs',
        },
      };
      const queryKey = getQueryKey(queryConfig);
      const isFinished = querySelectors.isFinished(
        {
          [queryKey]: {
            isFinished: true,
          },
        } as State,
        queryConfig,
      );
      expect(isFinished).toBe(true);
    });

    test('should work with a config with a queryKey field', () => {
      const queryConfig = {
        url: '/api/dashboard/1/rename',
        body: {
          name: 'My KPIs',
        },
        queryKey: 'myQueryKey',
      };
      const isFinished = querySelectors.isFinished(
        {
          myQueryKey: {
            isFinished: true,
          },
        } as State,
        queryConfig,
      );
      expect(isFinished).toBe(true);
    });
  });

  describe('isPending', () => {
    test('should work with a config', () => {
      const queryConfig = {
        url: '/api/dashboard/1/rename',
        body: {
          name: 'My KPIs',
        },
      };
      const queryKey = getQueryKey(queryConfig);
      const isPending = querySelectors.isPending(
        {
          [queryKey]: {
            isPending: true,
          },
        } as State,
        queryConfig,
      );
      expect(isPending).toBe(true);
    });

    test('should work with a config with a queryKey field', () => {
      const queryConfig = {
        url: '/api/dashboard/1/rename',
        body: {
          name: 'My KPIs',
        },
        queryKey: 'myQueryKey',
      };
      const isPending = querySelectors.isPending(
        {
          myQueryKey: {
            isPending: true,
          },
        } as State,
        queryConfig,
      );
      expect(isPending).toBe(true);
    });
  });

  describe('status', () => {
    test('should work with a config', () => {
      const queryConfig = {
        url: '/api/dashboard/1/rename',
        body: {
          name: 'My KPIs',
        },
      };
      const queryKey = getQueryKey(queryConfig);
      const status = querySelectors.status(
        {
          [queryKey]: {
            status: 200,
          },
        } as State,
        queryConfig,
      );
      expect(status).toEqual(200);
    });

    test('should work with a config with a queryKey field', () => {
      const queryConfig = {
        url: '/api/dashboard/1/rename',
        body: {
          name: 'My KPIs',
        },
        queryKey: 'myQueryKey',
      };
      const status = querySelectors.status(
        {
          myQueryKey: {
            status: 200,
          },
        } as State,
        queryConfig,
      );
      expect(status).toEqual(200);
    });
  });

  describe('lastUpdated', () => {
    test('should work with a config', () => {
      const queryConfig = {
        url: '/api/dashboard/1/rename',
        body: {
          name: 'My KPIs',
        },
      };
      const queryKey = getQueryKey(queryConfig);
      const lastUpdated = querySelectors.lastUpdated(
        {
          [queryKey]: {
            lastUpdated: 1488471746117,
          },
        } as State,
        queryConfig,
      );
      expect(lastUpdated).toEqual(1488471746117);
    });

    test('should work with a config with a queryKey field', () => {
      const queryConfig = {
        url: '/api/dashboard/1/rename',
        body: {
          name: 'My KPIs',
        },
        queryKey: 'myQueryKey',
      };
      const lastUpdated = querySelectors.lastUpdated(
        {
          myQueryKey: {
            lastUpdated: 1488471746117,
          },
        } as State,
        queryConfig,
      );
      expect(lastUpdated).toEqual(1488471746117);
    });
  });

  describe('queryCount', () => {
    test('should work with a config', () => {
      const queryConfig = {
        url: '/api/dashboard/1/rename',
        body: {
          name: 'My KPIs',
        },
      };
      const queryKey = getQueryKey(queryConfig);
      const queryCount = querySelectors.queryCount(
        {
          [queryKey]: {
            queryCount: 2,
          },
        } as State,
        queryConfig,
      );
      expect(queryCount).toEqual(2);
    });

    test('should work with a config with a queryKey field', () => {
      const queryConfig = {
        url: '/api/dashboard/1/rename',
        body: {
          name: 'My KPIs',
        },
        queryKey: 'myQueryKey',
      };
      const queryCount = querySelectors.queryCount(
        {
          myQueryKey: {
            queryCount: 2,
          },
        } as State,
        queryConfig,
      );
      expect(queryCount).toEqual(2);
    });
  });
});
