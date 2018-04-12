import h from '@financial-times/x-engine';
import Link from './Link.jsx';

export default ({ title, altTitle, headlineTesting, relativeUrl, url, indicators, ...props }) => {
	const displayTitle = headlineTesting && altTitle ? altTitle : title;
	const displayUrl = relativeUrl || url;

	return (
		<div className="o-teaser__heading">
			{displayTitle ? (
				<Link {...props} url={displayUrl} attrs={{
					'data-trackable': 'js-teaser-heading-link',
					className: 'heading-link',
				}}>
					{` ${displayTitle} `}
				</Link>
			) : null}
			{indicators && indicators.accessLevel === 'premium' ? (
				<span className="o-labels o-labels--premium" aria-label="Premium content">
					Premium
				</span>
			) : null}
		</div>
	);
};
