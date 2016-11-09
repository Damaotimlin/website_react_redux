import React, { PropTypes } from 'react';

const BurgerBtn = ({ className }) => {
    return (
      <button></button>
    );
};

BurgerBtn.displayName = 'BurgerBtn';

BurgerBtn.propTypes = {
    className: PropTypes.string,
};

export default BurgerBtn;
