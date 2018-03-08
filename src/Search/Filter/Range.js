import React from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';

export default function () {
  return (
    <div>
      <Range
        defaultValue={[0, 100]}
        handleStyle={[{ borderColor: '#D6D9DA' }, { borderColor: '#D6D9DA' }]}
        trackStyle={[{ backgroundColor: '#00ACDE', height: '2px' }]}
        railStyle={{ backgroundColor: '#edf5f7', height: '2px' }}
      />
    </div>
  );
}
