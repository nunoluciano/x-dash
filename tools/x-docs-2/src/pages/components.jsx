import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layouts/basic';
import Sidebar from '../components/sidebar/module-menu';
import { List, ListItem } from '../components/module-list';

export const query = graphql`
	query {
		modules: allSitePage(
			filter: { context: { type: { eq: "npm-package-components" } } }
		) {
			edges {
				node {
					path
					context {
						title
						packageName
						packageDescription
					}
				}
			}
		}
	}
`;

export default ({ data }) => (
	<Layout title="Components" sidebar={<Sidebar heading="Components" modules={data.modules.edges} />}>
		<h1>Components</h1>
		<List>
			{data.modules.edges.map(({ node }, i) => <ListItem key={`module-${i}`} node={node} />)}
		</List>
	</Layout>
);
