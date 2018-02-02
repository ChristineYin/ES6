const getId = (id) => {
  const dom = document.getElementById(id);
  // dom && dom.setAttribute('id', dom.id + '-' + Math.floor(Math.random() * 100000))
  return dom;
}

export { getId as $ }