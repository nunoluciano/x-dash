import createMailtoLink from './create-mailto-link';
import getNextAllowanceDate from './get-next-allowance-date';

export class GiftArticlePropsComposer {
	constructor(props, isCopySupported) {
		this.title = props.title || 'Share this article';
		this.isFreeArticle = props.isFreeArticle;
		this.articleTitle = props.articleTitle;
		this.articleUrl = props.articleUrl;
		this.articleId = props.articleId;
		this.sessionId = props.sessionId;
		this.isGiftUrlCreated = false;
		this.credit = undefined;
		this.monthlyAllowance = undefined;
		this.showCopyButton = isCopySupported;
		this.showMobileShareLinks = props.showMobileShareLinks;
		this.isGiftUrlShortened = false;
		this.isNonGiftUrlShortened = false;

		this.urls = {
			dummy: 'https://on.ft.com/gift_link',
			gift: undefined,
			nonGift: this.articleUrl
		};

		this.urlTypes = {
			dummy: 'example-gift-link',
			gift: 'gift-link',
			nonGift: 'non-gift-link'
		};

		this.mailtoLinks = {
			gift: undefined,
			nonGift: createMailtoLink(this.articleTitle, this.articleUrl)
		};

		this.types = {
			gift: 'giftLink',
			nonGift: 'nonGiftLink'
		};

		this.mobileShareLinks = this.showMobileShareLinks ? {
			facebook: `http://www.facebook.com/sharer.php?u=${encodeURIComponent(this.articleUrl)}&amp;t=${encodeURIComponent(this.articleTitle)}`,
			twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(this.articleUrl)}&amp;text=${encodeURIComponent(this.articleTitle)}&amp;via=financialtimes`,
			linkedin: `http://www.linkedin.com/shareArticle?mini=true&amp;url=${encodeURIComponent(this.articleUrl)}&amp;title=${encodeURIComponent(this.articleTitle)}&amp;source=Financial+Times`,
			whatsapp: `whatsapp://send?text=${encodeURIComponent(this.articleTitle)}%20-%20${encodeURIComponent(this.articleUrl)}`
		} : undefined;
	}

	getDefault() {
		return  {
			title: this.title,
			isFreeArticle: this.isFreeArticle,
			isGift: this.isFreeArticle ? false : true,
			url: this.isFreeArticle ? this.urls.nonGift : this.urls.dummy,
			urlType: this.isFreeArticle ? this.urlTypes.nonGift : this.urlTypes.dummy,
			mailtoLink: this.isFreeArticle ? this.mailtoLinks.nonGift : undefined,
			isGiftUrlCreated: this.isGiftUrlCreated,
			type: this.isFreeArticle ? this.types.nonGift : this.types.gift,
			articleId: this.articleId,
			articleUrl: this.articleUrl,
			sessionId: this.sessionId,
			showCopyButton: this.showCopyButton,
			showShareButtons: this.showMobileShareLinks,
			mobileShareLinks: this.mobileShareLinks
		};
	}

	displayGiftUrlSection() {
		return {
			isGift: true,
			url: this.urls.gift || this.urls.dummy,
			urlType: this.urls.gift ? this.urlTypes.gift : this.urlTypes.dummy,
			mailtoLink: this.mailtoLinks.gift,
			type: this.types.gift
		};
	}

	displayNonGiftUrlSection() {
		return {
			isGift: false,
			url: this.urls.nonGift,
			urlType: this.urlTypes.nonGift,
			mailtoLink: this.mailtoLinks.nonGift,
			type: this.types.nonGift
		};
	}

	setGiftUrl(url, limit, isShortened) {
		this.urls.gift = url;
		this.isGiftUrlCreated = true;
		this.isGiftUrlShortened = isShortened;
		this.mailtoLinks.gift = createMailtoLink(this.articleTitle, url);

		return {
			isGiftUrlCreated: this.isGiftUrlCreated,
			url: this.urls.gift,
			urlType: this.urlTypes.gift,
			mailtoLink: this.mailtoLinks.gift,
			redemptionLimit: limit
		};
	}

	setAllowance(credit, monthlyAllowance) {
		let dateText = undefined;
		this.credit = credit;
		this.monthlyAllowance = monthlyAllowance;
		if (credit === 0) {
			const nextAllowanceDate = getNextAllowanceDate();
			dateText = `${nextAllowanceDate.monthName} ${nextAllowanceDate.day}`;
		}

		return {
			credit: this.credit,
			monthlyAllowance: this.monthlyAllowance,
			dateText
		};
	}

	setShortenedNonGiftUrl(shortenedUrl) {
		this.isNonGiftUrlShortened = true;
		this.urls.nonGift = shortenedUrl;
	}
}
