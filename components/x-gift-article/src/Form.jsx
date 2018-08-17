import { h } from '@financial-times/x-engine';
import Title from './Title';
import RadioButtonsSection from './RadioButtonsSection';
import UrlSection from './UrlSection';
import MobileShareButtons from './MobileShareButtons';
import CopyConfirmation from './CopyConfirmation';
import styles from './GiftArticle.css';

const formClassNames = [
	'o-forms',
	styles.form
].join(' ');

export default (props) => (
	<form name="gift-form" className={ styles.container }>
		<fieldset className={ formClassNames }>

			<Title title={ props.title }/>

			{ !props.isFreeArticle && <RadioButtonsSection
					shareType={ props.shareType }
					showGiftUrlSection={ props.actions.showGiftUrlSection }
					showNonGiftUrlSection={ props.actions.showNonGiftUrlSection }/>
			}

			<UrlSection
				shareType={ props.shareType }
				isGiftUrlCreated={ props.isGiftUrlCreated }
				isFreeArticle={ props.isFreeArticle }
				url={ props.url }
				urlType={ props.urlType }
				giftCredits={ props.giftCredits }
				monthlyAllowance={ props.monthlyAllowance }
				dateText={ props.dateText }
				mailtoUrl={ props.mailtoUrl }
				createGiftUrl={ props.actions.createGiftUrl }
				copyGiftUrl={ props.actions.copyGiftUrl }
				copyNonGiftUrl={ props.actions.copyNonGiftUrl }
				emailGiftUrl={ props.actions.emailGiftUrl }
				emailNonGiftUrl={ props.actions.emailNonGiftUrl }
				redemptionLimit={ props.redemptionLimit }
				showCopyButton={ props.showCopyButton }
				showNativeShareButton={ props.showNativeShareButton }
				shareByNativeShare={ props.actions.shareByNativeShare }/>

		</fieldset>

		{ props.showCopyConfirmation &&
			<CopyConfirmation hideCopyConfirmation={ props.actions.hideCopyConfirmation }/> }

		{ props.showShareButtons &&
			<MobileShareButtons mobileShareLinks={ props.mobileShareLinks }/> }

	</form>
);