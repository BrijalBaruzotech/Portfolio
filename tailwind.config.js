
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navyBlue: "rgb(11, 11, 69)",
        grey: "rgba(226, 232, 240, 0.3)",
        greyOff : "rgb(229, 228, 226)",
        smoke : "rgb(132, 136, 132,0.4)"
      },
      width: {
        100: "100px",
        180: "180px",
        230: "230px",
        280: "280px",
        320: "320px",
        350: "350px",
        380: "380px",
        400: "400px",
        450: "450px",
        480: "480px",
        500: "500px",
        520: "520px",
        580: "580px",
        680: "680px",
      },
      height: {
        2: "2px",
        70: "70px",
        80: "80px",
        180: "180px",
        230: "230px",
        280: "280px",
        250: "250px",
        200: "200px",
        350: "350px",
        380: "380px",
        400: "400px",
        401: "401px",
        480: "480px",
        500: "500px",
        680: "680px",
      },
      variants: {
        width: ["responsive", "hover", "focus"],
      },
      backgroundImage: {
        messageImage: "url(Images/mailz.jpeg)",
      },
    },
  },
  plugins: [],
};
