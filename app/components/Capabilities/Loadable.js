/**
 *
 * Asynchronously loads the component for Capabilities
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
