import Icon from './icon';
import icons from '../dist/icons.json';
import tags from './tags.json';

export default Object.keys(icons)
    .map(key => new Icon(key, icons[key].contents, icons[key].attrs, tags[key]))
    .reduce((object, icon) => {
        object[icon.name] = icon;
        return object;
    }, {});
