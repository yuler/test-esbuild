require("esbuild")
	.build({
		entryPoints: ["src/app.jsx"],
		outfile: "public/bundle.js",
		bundle: true,
		minify: true,
	})
	.catch(() => process.exit(1));
