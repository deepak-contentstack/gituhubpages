import React from 'react';
import { storiesOf } from '@storybook/react';
import notes from './Help.md';
import Help from './Help';


export default {
  title: 'Components / Help',
  component: Help,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/proto/ovlEsic8nr81y5BOu1OlqD/ui-inventory-v2?node-id=22%3A3&scaling=min-zoom',
    },
    notes: { notes }
  }
}

export const Default = () => <div className="Help-wrapper"><Help text="This is helptext for field"> Helptext text here </Help></div>

