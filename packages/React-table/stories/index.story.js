import React, { lazy, Suspense } from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('React-table', module)
  .add('Router', () => {
    const BasicForm = lazy(() => import('../src/Basic/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  })
