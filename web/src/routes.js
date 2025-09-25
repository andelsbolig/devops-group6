export const ROUTES = {
    HOME: "/",
    GALLERY: "/",
    PAINTING_DETAIL: (id = ":paintingId") => `/painting/${id}`,
    LOGIN: "/login",
    CREATE_ACCOUNT: "/create-account",
    FORGOT_PASSWORD: "/forgot-password",
    NOT_FOUND: "*",
};

