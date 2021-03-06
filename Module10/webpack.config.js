module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: { filename: "bundle.js" },
    resolve: { extensions: [".ts", "tsx", ".js", ".css"] },
    module: {
        rules: [
            { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ }
        ]
    },
    devServer: {
        static: "./assets",
        port: 4500
    }
};