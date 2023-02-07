import { Operators } from '@http-query/core';

class TypeormOperators implements Operators {
  public LIKE: () => 'LIKE';

  public EQUAL: () => 'EQUAL';

  public NOT_EQUAL: () => 'NOT_EQUAL';

  public LESS_THAN: () => 'LESS_THAN';

  public LESS_THAN_OR_EQUAL: () => 'LESS_THAN_OR_EQUAL';

  public GREATER_THAN: () => 'GREATER_THAN';

  public GREATER_THAN_OR_EQUAL: () => 'GREATER_THAN_OR_EQUAL';
}

export { TypeormOperators };
