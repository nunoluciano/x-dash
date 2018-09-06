import { h } from '@financial-times/x-engine';
import Footer from './Footer';
import Meta from './Meta';

const Details = ({link, title, ...props}) => {

	return (
		<div className="event-promo-inarticle__blocks" aria-labelledby="details-header">
			<div id="details-header" hidden>Event details and information</div>
			<div className="event-promo__details">
				<a href={link} className="event-promo__title" data-trackable="event-promo">
					{title}
				</a>

				<Meta {...props} />
				<Footer url={link} />

			</div>
		</div>
	);
};

export default Details;