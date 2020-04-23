module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);

  return {
    presets: [
      [
        "next/babel",
        {
          "styled-jsx": {
            plugins: ["styled-jsx-plugin-sass"],
          },
        },
      ],
    ],
    plugins: [["import", { libraryName: "antd", libraryDirectory: "lib" }]],
  };
};
