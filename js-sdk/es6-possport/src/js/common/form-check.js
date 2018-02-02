const rules = {
  mobile: (v) => {
    return
  },
  email: (v) => {
    return
  },
  present: (v) => {
    if (!v.trim()) {
      return {
        type: 'present',
        message: '必填'
      }
    }
  }
}

const check = (form) => {
  console.log('start check form');

  if (!(form && form.elements)) {
    return
  }
  const elements = form.elements;  
  let checkResults = [];

  Array.from(elements).filter( item => {
    return item.getAttribute('valid');
  }).map(item => {
    const valids = item.getAttribute('valid').split(', ');
    const value = item.value;
    let errorArr = [];
    valids.forEach(valid => {
      if (rules[valid]) {
        let result = rules[valid](value);
        result && errorArr.push(result)
      }
    });

    if (errorArr.length) {
      checkResults.push({
        dom: item,
        errorArr: errorArr,
        name: item.name,
        message: errorArr[0].message,
        type: errorArr[0].type
      })
    }
  })

  return checkResults
}

export { check }