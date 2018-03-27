const h = require('@financial-times/x-engine');
const TimeStamp = require('./TimeStamp');
const RelativeTime = require('./RelativeTime');
const LiveBlogStatus = require('./LiveBlogStatus');

module.exports = (props) => {
	if (props.status) {
		return <LiveBlogStatus {...props} />;
	}

	if (props.publishedDate) {
		if (props.useRelativeTime) {
			return <RelativeTime {...props} />;
		} else {
			return <TimeStamp {...props} />;
		}
	}

	return null;
};
