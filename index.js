// colors
const base00 = '#2C3E50';
const base01 = '#34495E';
const base02 = '#7F8C8D';
const base03 = '#95A5A6';
const base04 = '#BDC3C7';
const base05 = '#e0e0e0';
const base06 = '#f5f5f5';
const base07 = '#ECF0F1';
const base08 = '#E74C3C';
const base09 = '#E67E22';
const base0A = '#F1C40F';
const base0B = '#2ECC71';
const base0C = '#1ABC9C';
const base0D = '#3498DB';
const base0E = '#9B59B6';
const base0F = '#be643c';

const foregroundColor = base07;
const backgroundColor = base00;
const borderColor = backgroundColor;
const cursorColor = foregroundColor;

const colors = {
  black: backgroundColor,
  red: base08,
  green: base0B,
  yellow: base0A,
  blue: base0D,
  magenta: base0E,
  cyan: base0C,
  white: base06,
  lightblack: base01,
  lightRed: base08,
  lightGreen: base0B,
  lightYellow: base0A,
  lightBlue: base0D,
  lightMagenta: base0E,
  lightCyan: base0C,
  lightWhite: base06
};

exports.decorateConfig = (config) => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors,
    css: `
      ${config.css || ''}
      .tabs_nav {
        background-color: ${base01};
      }
      .tabs_nav .tab_tab.tab_active {
        background-color: ${base00};
        border-radius: 4px 4px 0 0;
      }
      .tabs_nav .tabs_list .tab_tab {
        color: ${base02};
        border-color: transparent !important;
      }
      // Tab text colors
      .tabs_nav .tabs_list .tab_text {
        color: ${base02};
      }
      .tabs_nav .tabs_list .tab_active .tab_text {
        color: ${base0D};
      }
      .tabs_nav .tabs_list .tab_active::before {
        border: none;
      }
      .tabs_nav .tabs_title {
        color: ${base0D};
      }
    `
  });
};
