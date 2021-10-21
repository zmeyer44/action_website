import React from 'react';
import PropTypes from 'prop-types';

const ParallaxInner = React.forwardRef(({ children }, ref) => {
  return <div ref={ref}>{children}</div>;
});

ParallaxInner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default React.memo(ParallaxInner);
