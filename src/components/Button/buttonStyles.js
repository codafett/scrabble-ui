import colours from '../../styles/colours';

const disabledStyle = {
  backgroundColour: colours.BASE.NORMAL,
  colour: colours.GREY.LIGHTER,
  borderColour: colours.BORDER.NORMAL.NORMAL,
};

const ButtonStyles = {
  default: {
    backgroundColour: colours.BASE.NORMAL,
    colour: colours.TEXT.NORMAL,
    borderColour: colours.BORDER.NORMAL,
    hover: {
      backgroundColour: colours.CONTENT_BG.NORMAL,
      colour: colours.TEXT.NORMAL,
      borderColour: colours.BORDER.NORMAL,
    },
    disabled: {
      ...disabledStyle,
    },
  },

  primary: {
    backgroundColour: colours.PRIMARY.NORMAL,
    colour: colours.BASE.NORMAL,
    borderColour: colours.PRIMARY.NORMAL,
    hover: {
      backgroundColour: colours.PRIMARY.DARKER,
      colour: colours.BASE.NORMAL,
      borderColour: colours.PRIMARY.DARKER,
    },
    disabled: {
      ...disabledStyle,
    },
  },

  primaryOutlined: {
    backgroundColour: colours.BASE.NORMAL,
    colour: colours.PRIMARY.NORMAL,
    borderColour: colours.PRIMARY.NORMAL,
    hover: {
      backgroundColour: colours.PRIMARY.NORMAL,
      colour: colours.BASE.NORMAL,
      borderColour: colours.PRIMARY.NORMAL,
    },
    disabled: {
      ...disabledStyle,
    },
  },

  secondary: {
    backgroundColour: colours.SECONDARY.NORMAL,
    colour: colours.BASE.NORMAL,
    borderColour: colours.SECONDARY.NORMAL,
    hover: {
      backgroundColour: colours.SECONDARY.DARKER,
      colour: colours.BASE.NORMAL,
      borderColour: colours.SECONDARY.DARKER,
    },
    disabled: {
      ...disabledStyle,
    },
  },

  secondaryOutlined: {
    backgroundColour: colours.BASE.NORMAL,
    colour: colours.SECONDARY.NORMAL,
    borderColour: colours.SECONDARY.NORMAL,
    hover: {
      backgroundColour: colours.SECONDARY.NORMAL,
      colour: colours.BASE.NORMAL,
      borderColour: colours.SECONDARY.NORMAL,
    },
    disabled: {
      ...disabledStyle,
    },
  },

  red: {
    backgroundColour: colours.RED.NORMAL,
    colour: colours.BASE.NORMAL,
    borderColour: colours.RED.NORMAL,
    hover: {
      backgroundColour: colours.RED.DARKER,
      colour: colours.BASE.NORMAL,
      borderColour: colours.RED.DARKER,
    },
    disabled: {
      ...disabledStyle,
    },
  },

  redOutlined: {
    backgroundColour: colours.BASE.NORMAL,
    colour: colours.RED.NORMAL,
    borderColour: colours.RED.NORMAL,
    hover: {
      backgroundColour: colours.RED.NORMAL,
      colour: colours.BASE.NORMAL,
      borderColour: colours.RED.NORMAL,
    },
    disabled: {
      ...disabledStyle,
    },
  },

  green: {
    backgroundColour: colours.GREEN.NORMAL,
    colour: colours.BASE.NORMAL,
    borderColour: colours.GREEN.NORMAL,
    hover: {
      backgroundColour: colours.GREEN.DARKER,
      colour: colours.BASE.NORMAL,
      borderColour: colours.GREEN.DARKER,
    },
    disabled: {
      ...disabledStyle,
    },
  },

  greenOutlined: {
    backgroundColour: colours.BASE.NORMAL,
    colour: colours.GREEN.NORMAL,
    borderColour: colours.GREEN.NORMAL,
    hover: {
      backgroundColour: colours.GREEN.NORMAL,
      colour: colours.BASE.NORMAL,
      borderColour: colours.GREEN.NORMAL,
    },
    disabled: {
      ...disabledStyle,
    },
  },

  amber: {
    backgroundColour: colours.AMBER.NORMAL,
    colour: colours.BASE.NORMAL,
    borderColour: colours.AMBER.NORMAL,
    hover: {
      backgroundColour: colours.AMBER.DARKER,
      colour: colours.BASE.NORMAL,
      borderColour: colours.AMBER.DARKER,
    },
    disabled: {
      ...disabledStyle,
    },
  },

  amberOutlined: {
    backgroundColour: colours.BASE.NORMAL,
    colour: colours.AMBER.NORMAL,
    borderColour: colours.AMBER.NORMAL,
    hover: {
      backgroundColour: colours.AMBER.NORMAL,
      colour: colours.BASE.NORMAL,
      borderColour: colours.AMBER.NORMAL,
    },
    disabled: {
      ...disabledStyle,
    },
  },

};

export default ButtonStyles;
