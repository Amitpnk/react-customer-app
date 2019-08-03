const dev = {
    api: {
        URL: "http://localhost:3004"
    }
};
const prod = {
    api: {
        URL: "http://produrl:3004"
    }
};

const envConfig = process.env.NODE_ENV === 'production' ? prod : dev;

export default {
    commonValue: "common",
    ...envConfig
}