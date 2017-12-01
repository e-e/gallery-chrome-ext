import { combineReducers } from 'redux';
import AppStateReducer from './AppStateReducer';
import ImagesReducer from './ImagesReducer';
import ActiveImageReducer from './ActiveImageReducer';

import GalleryImages from '../components/GalleryImages';
import GalleryTags from '../components/GalleryTags';
import AddImageForm from '../components/AddImageForm';
import EditImage from '../components/EditImage';

const rootReducer = combineReducers({
  activeImage: ActiveImageReducer,
  appState: AppStateReducer,
  images: ImagesReducer,
  views: state => [
    { view: 'gallery', label: 'Gallery', component: GalleryImages, menu: true },
    { view: 'tags', label: 'Tags', component: GalleryTags, menu: true },
    {
      view: 'add-url',
      label: 'Add From URL',
      component: AddImageForm,
      menu: true
    },
    {
      view: 'edit-image',
      label: 'Edit Image',
      component: EditImage,
      menu: false
    }
  ]
});

export default rootReducer;
