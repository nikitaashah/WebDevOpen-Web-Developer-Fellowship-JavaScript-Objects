// getting information out of an object
let categories = {
    'best picture': 'Shrek',
    'best director': 'Shrek 2'
  };
  
  // we can't do these
  // categories.best director;  ===> error
  // categories.best picture;   ===> error
  
  // so we use bracket notation
  categories['best picture']; // 'Shrek'
  categories['best director']; // 'Shrek 2'