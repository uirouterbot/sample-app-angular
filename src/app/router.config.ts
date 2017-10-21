import { UIRouter, Category } from '@uirouter/core';

import { requiresAuthHook } from './global/auth.hook';

export function routerConfigFn(router: UIRouter) {
  const transitionService = router.transitionService;
  requiresAuthHook(transitionService);

  router.trace.enable(Category.TRANSITION);
}
