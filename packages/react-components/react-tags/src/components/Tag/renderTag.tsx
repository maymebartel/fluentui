/** @jsxRuntime classic */
/** @jsx createElement */

import { createElement } from '@fluentui/react-jsx-runtime';

import { getSlotsNext } from '@fluentui/react-utilities';
import type { TagState, TagSlots } from './Tag.types';

/**
 * Render the final JSX of Tag
 */
export const renderTag_unstable = (state: TagState) => {
  const { slots, slotProps } = getSlotsNext<TagSlots>(state);

  // TODO Add additional slots in the appropriate place
  return <slots.root {...slotProps.root} />;
};
