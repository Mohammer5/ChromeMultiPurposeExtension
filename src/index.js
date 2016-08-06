require('jquery');
require('jquery-ui');
require('jquery-ui/ui/widgets/draggable');
require('jquery-ui/themes/base/core.css');
require('jquery-ui/themes/base/draggable.css');
require('jquery.scrollbar');
require('jquery.scrollbar/jquery.scrollbar.css');

import App from './app/app';
new App(document.querySelector('#app'));