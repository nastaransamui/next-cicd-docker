'use client';

import Error from 'next/error';
import { Fragment } from 'react';

// Render the default Next.js 404 page when a route
// is requested that doesn't match the middleware and
// therefore doesn't have a locale associated with it.

export default function NotFound() {
  return (
    <Fragment>
      <Error statusCode={404} />
    </Fragment>
  );
}
