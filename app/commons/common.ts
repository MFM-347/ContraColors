import tinycolor from "tinycolor2";

const isDark = (color: string): boolean => tinycolor(color).isDark();

const copyToClipboard = (color: string): void => {
  navigator.clipboard
    .writeText(color)
    .then(() => {
      console.log(`Copied color: ${color}`);
    })
    .catch((err) => {
      console.error(`Failed to copy: ${err.message}`);
    });
};

const prClr = "#244bf9";

export { isDark, copyToClipboard, prClr };
