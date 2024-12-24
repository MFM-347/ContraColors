import tinycolor from "tinycolor2";

const isDark = (color) => tinycolor(color).isDark();

const copyToClipboard = (color) => {
  navigator.clipboard
    .writeText(color)
    .then(() => {
      alert(`Copied color: ${color}`);
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
    });
};

const prClr = "#5c6bff";

export { isDark, copyToClipboard, prClr };
