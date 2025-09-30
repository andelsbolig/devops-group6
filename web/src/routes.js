export const ROUTES = {
    GALLERY: "/",
    PAINTING_DETAIL: (id = ":paintingId") => `/painting/${id}`,
    LOGIN: "/login",
    CREATE_ACCOUNT: "/create-account",
    FORGOT_PASSWORD: "/forgot-password",
    NOT_FOUND: "*",
    ARTISTS: "/artists",
    ARTIST_DETAIL: (id = ":artistId") => `/artists/${id}`,
};

