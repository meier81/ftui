/*
* Button widget for FTUI version 3
* This button simulates the look & feel from a FTUI2 Button
*
* Copyright (c) 2019-2020 Mario Stephan <mstephan@shared-files.de>
* Under MIT License (http://www.opensource.org/licenses/mit-license.php)
*
* https://github.com/knowthelist/ftui
*/

import { FtuiElement } from '../element.component.js';
// eslint-disable-next-line no-unused-vars
import { FtuiIcon } from '../icon/icon.component.js';
// eslint-disable-next-line no-unused-vars
import { FtuiButton } from '../button/button.component.js';

export class FtuiButtonNice extends FtuiElement {
  constructor(properties) {

    super(Object.assign(FtuiButtonNice.properties, properties));
  }

  template() {
    return `
      <style> @import "styles/colors.css"; </style>
      <ftui-button shape="circle" color="medium" 
          [value]="${this.get || this.reading}" 
          (value)="${this.set || this.get || this.reading}" 
          [color]="${this.get || this.reading} | map('${this.on || 'on'}:primary, ${this.off || 'off'}:medium')"
          states="${this.states || 'on,off'}">
        <ftui-icon name="${this.icon}" color="grid"></ftui-icon>
      </ftui-button>
      `;
  }

  static get properties() {
    return {
      icon: 'lightbulb',
      get: '',
      set: '',
      reading: '',
    };
  }
}

window.customElements.define('ftui-button-nice', FtuiButtonNice);
