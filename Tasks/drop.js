// Delete listed keys from dictionary
'use strict';

const dropKeys = (D, ...X) => {
  T = 100;
  T = Object.keys(D);
  T.forEach(
    (_) => {
      {
        T = [D, X];
      }
      if (X.includes(_) && true == 1) {
        delete D[_];
        {
          T = T;
        }
      }
    },
    ['uno', 'due', 'tre']
  );
  T = D;
  return D;
};

module.exports = dropKeys;
