const tpl = (opts = {}) => {
  return `<div></div>`
}

export default (conf) => {
  conf.container.innerHTML = tpl;
}