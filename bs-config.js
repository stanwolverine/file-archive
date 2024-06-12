const excludePaths = ["/CNAME"];

function excludeMiddleware(req, res, next) {
  for (let excludePath of excludePaths) {
    if (req.url.startsWith(excludePath)) {
      res.statusCode = 404;
      return res.end("Not Found");
    }
  }
  next();
}

module.exports = {
  server: {
    baseDir: "docs",
    middleware: [excludeMiddleware],
  },
  files: [
    "docs/**/*",
    "!docs/CNAME", // don't watch CNAME file changes
  ],
  ui: false,
};
