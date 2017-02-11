export const Types = {
  boolean: {
    type: Boolean,
    default: false
  },
  string: {
    type: String
  },
  number: {
    type: Number
  }
};

export const States = {
  loading: Types.boolean,
  disabled: Types.boolean,
  active: Types.boolean,
};

export const Colors = {
  red: Types.boolean,
  orange: Types.boolean,
  yellow: Types.boolean,
  olive: Types.boolean,
  green: Types.boolean,
  teal: Types.boolean,
  blue: Types.boolean,
  violet: Types.boolean,
  purple: Types.boolean,
  pink: Types.boolean,
  brown: Types.boolean,
  grey: Types.boolean,
  black: Types.boolean,
  inverted: Types.boolean,
};

export const Sizes = {
  mini: Types.boolean,
  tiny: Types.boolean,
  small: Types.boolean,
  large: Types.boolean,
  big: Types.boolean,
  huge: Types.boolean,
  massive: Types.boolean,
};

export default {
  Types,
  Colors,
  Sizes,
  States,
}
