export const hexToRgb = (hex: string) => {
  const _hex = hex.slice(1);

  let red, green, blue, alpha;
  switch (_hex.length) {
    case 3:
    case 4: {
      [red, green, blue, alpha] = [..._hex].map((v) => {
        return v.repeat(2);
      });
      break;
    }
    case 6:
    case 8:
    default: {
      [red, green, blue, alpha] = [
        _hex.slice(0, 2),
        _hex.slice(2, 4),
        _hex.slice(4, 6),
        _hex.slice(6, 8),
      ];
      break;
    }
  }
  return [red, green, blue, alpha];
};

export const toPadHex = (n: number) => `${(n).toString(16)}`.padStart(2, '0');

export const rgbToHex = (red: number, green: number, blue: number, alpha?: number) => {
  return `#${[red, green, blue].map(v => toPadHex(v)).join('')}${alpha ? toPadHex(alpha * 255) : ''}`;
};

export const hslToRgb = (hue: number, sat: number, light: number) => {
  hue = hue % 360;

  if (hue < 0)
    hue += 360;

  sat /= 100;
  light /= 100;

  const f = (n: number) => {
    const k = (n + hue / 30) % 12;
    const a = sat * Math.min(light, 1 - light);
    return light - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
  };

  return [f(0) * 255, f(8) * 255, f(4) * 255];
};

export const rgbToHsl = (red: number, green: number, blue: number) => {
  red = red / 255;
  green = green / 255;
  blue = blue / 255;

  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  let [hue, sat, light] = [NaN, 0, (min + max) / 2];
  const d = max - min;

  if (d !== 0) {
    sat = (light === 0 || light === 1) ? 0 : (max - light) / Math.min(light, 1 - light);

    switch (max) {
      case red: {
        hue = (green - blue) / d + (green < blue ? 6 : 0);
        break;
      }
      case green: {
        hue = (blue - red) / d + 2;
        break;
      }
      case blue: {
        hue = (red - green) / d + 4;
      }
    }

    hue = hue * 60;
  }
  return [hue, sat * 100, light * 100];
};
