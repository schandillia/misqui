/**
 * An array of routes accessible to guest users
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = ["/"]

/**
 * An array of routes used for authentication
 * These routes redirect logged users to /settings
 * @type {string[]}
 */
export const authRoutes = ["/auth/login"]

/**
 * The prefix for API authentication routes
 * These routes will never be blocked
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth"

/**
 * The default rediect path after sign-in
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/"
