const WXLOAD = 'WX/LOAD';

const wxLoad = () => ({
  type: WXLOAD
});

const setWxLoad = (state='', action) => {
  switch(action.type) {
    case WXLOAD: 
      return 'load';
    default:
      return state;
  }
}

module.exports = {
  setWxLoad: setWxLoad,
  wxLoad: wxLoad
}