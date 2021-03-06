/* global chrome */
import {
  SET_IMAGES_FROM_LOCAL_STORAGE,
  SET_VIEW,
  SET_ACTIVE_IMAGE,
  SET_SLIDE_INDEX,
  GALLERY_INDEX,
  EDIT_INDEX
} from '../actions';

import { getStorageInfo } from '../utils/utils';

const DEFUALT_STATE = {
  version: chrome.runtime.getManifest().version,
  imagesLoadedFromStorage: false,
  slideIndex: 0,
  storage: {
    bytesInUse: 0,
    bytesTotal: 0
  }
};

function returnLog(obj, label = '', doLog = true) {
  doLog && console.log(label, obj);
  return obj;
}

export default (state = DEFUALT_STATE, action) => {
  switch (action.type) {
    case SET_IMAGES_FROM_LOCAL_STORAGE:
      return returnLog(
        {
          ...state,
          imagesLoadedFromStorage: true,
          slideIndex: GALLERY_INDEX,
          storage: action.storage
        },
        'new state'
      );

    case SET_SLIDE_INDEX:
      return { ...state, slideIndex: action.payload };
    case SET_ACTIVE_IMAGE:
      return { ...state, slideIndex: EDIT_INDEX };
    default:
      return state;
  }
};
