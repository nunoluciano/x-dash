const path = require('path');

const nodeTypesToSlug = new Set(['MarkdownRemark', 'NpmPackage', 'Stories']);

const ignoreFileName = new Set(['index.md', 'readme.md', 'package.json']);

const createSlug = (file) => {
	const { dir = '', base, name } = path.parse(file.relativePath);

	// If the file is an index file, readme or manifest then use the parent directory name
	return path.posix.join(file.sourceInstanceName, dir, ignoreFileName.has(base) ? '' : name);
};

module.exports = (node, actions, getNode) => {
	if (nodeTypesToSlug.has(node.internal.type)) {
		const file = getNode(node.parent);

		// Group files by source type (currently: docs, components, packages)
		actions.createNodeField({
			node,
			name: 'sourceName',
			value: file.sourceInstanceName
		});

		actions.createNodeField({
			node,
			name: 'slug',
			value: '/' + createSlug(file)
		});
	}
};
