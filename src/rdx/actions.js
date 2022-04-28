export const actName = {
  CHANGE_STEP: 'CHANGE_STEP',
  UPLOAD_FILE: 'UPLOAD_FILE',
  CLEAR: 'CLEAR',
}

export default {
  changeStep: (step) => {
		return (dispatch) => {
			dispatch({
        type: actName.CHANGE_STEP,
        step
      });
		}
  },
  uploadFile: (name,file) => {
		return (dispatch) => {
			dispatch({
        type: actName.UPLOAD_FILE,
        name,
        file
      });
		}
  },
  clear: () => {
		return (dispatch) => {
			dispatch({
        type: actName.CLEAR
      });
		}
  }
};
