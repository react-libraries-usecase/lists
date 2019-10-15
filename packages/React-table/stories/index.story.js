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
  .add('Sorting', () => {
    const BasicForm = lazy(() => import('../src/Sorting/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  })
  .add('Filtering', () => {
    const BasicForm = lazy(() => import('../src/Filtering/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  })
  .add('Grouping', () => {
    const BasicForm = lazy(() => import('../src/Grouping/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  })
  .add('Pagination', () => {
    const BasicForm = lazy(() => import('../src/Pagination/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  })
  .add('Virtual-row', () => {
    const BasicForm = lazy(() => import('../src/Virtual-row/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  })

  .add('Animated', () => {
    const BasicForm = lazy(() => import('../src/Animated/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  })

  .add('Complex', () => {
    const BasicForm = lazy(() => import('../src/Complex/index'));
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <BasicForm />
      </Suspense>
    );
  })
