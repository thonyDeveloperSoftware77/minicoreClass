/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    API_KEY: "AIzaSyBIxX65lCkiutQw4q2CjdL1l3MnSNoh8So",
    AUTH_DOMAIN: "webminicore.firebaseapp.com",
    PROJECT_ID: "webminicore",
    STORAGE_BUCKET: "webminicore.appspot.com",
    MESSAGING_SENDER_ID: "866467684329",
    APP_ID: "1:866467684329:web:19e933f1317c03da263578"
}
}

module.exports = nextConfig
