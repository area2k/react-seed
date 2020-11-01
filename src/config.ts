// typescript globals
declare var __BUILD_COMMIT: string
declare var __BUILD_VERSION: string
declare var __BUILD_BRANCH: string
declare var __BUILD_DATE: string

export default {
  BUILD_COMMIT: __BUILD_COMMIT.substring(0, 7),
  BUILD_VERSION: __BUILD_VERSION,
  BUILD_BRANCH: __BUILD_BRANCH,
  BUILD_DATE: __BUILD_DATE,
  GRAPHQL_ENDOINT: process.env.GRAPHQL_ENDOINT!
}
