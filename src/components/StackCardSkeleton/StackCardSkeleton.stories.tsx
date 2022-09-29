import React from 'react'

import StackCardSkeleton from './StackCardSkeleton'

import { withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import notes from './StackCardSkeleton.md'

export default {
  title: 'Components / StackCardSkeleton',
  component: StackCardSkeleton,
  parameters: {
    componentSubtitle:
      'Component can render in place of StackCard while data is being fetched',
    notes: { notes },
  },
  decorators: [withKnobs, withA11y],
}

export const Default = () => <StackCardSkeleton />