import { error, defaults } from '@pnotify/core';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

export default function errorMessage() {
  error({
    text: 'Too many matches found. Please enter a more spesific query!',
  });
}

defaults.delay = '2000';