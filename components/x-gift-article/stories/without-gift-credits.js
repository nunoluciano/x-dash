const articleUrl = 'https://www.ft.com/content/blahblahblah';
const nonGiftArticleUrl = `${articleUrl}?shareType=nongift`;

exports.title = 'Without gift credits';

exports.data = {
	title: 'Share this article (without credit)',
	isFreeArticle: false,
	articleUrl,
	articleTitle: 'Title Title Title Title',
	id: 'base-gift-article-static-id'
};

// This reference is only required for hot module loading in development
// <https://webpack.js.org/concepts/hot-module-replacement/>
exports.m = module;

exports.fetchMock = fetchMock => {
	fetchMock
		.get(
			'/article-email/credits',
			{ 'credits':
				{
					'allowance': 20,
					'consumedCredits': 20,
					'remainingCredits': 0,
					'renewalDate': '2018-08-01T00:00:00Z'
				}
			}
		)
		.get(
			`/article/shorten-url/${ encodeURIComponent(nonGiftArticleUrl) }`,
			{ shortenedUrl: 'https://shortened-non-gift-url' }
		);
};
