import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';

import css from './ListingPage.css';

const SectionViewMaybe = props => {
  const { options, publicData } = props;
  const selectedOption = publicData && publicData.view ? publicData.view : null;

  if (!publicData || !selectedOption) {
    return null;
  }

  // Find selected options label from filter config
  const optionConfig = options.find(o => o.key === selectedOption);
  const optionLabel = optionConfig ? optionConfig.label : null;
  return (
    <div className={css.sectionFeatures}>
      <h2>
        <FormattedMessage id="ListingPage.viewType" values={{ view: optionLabel.toLowerCase() }} />
      </h2>
    </div>
  );
};

export default SectionViewMaybe;
