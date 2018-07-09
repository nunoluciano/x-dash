import { h } from '@financial-times/x-engine';
import { media, theme } from './concerns/rules';

const YES = '';

const NO = 'not-';

const PREFIX = {
	yes: '',
	no: 'not-',
	verify: 'verify-'
};

const dynamicModifiers = (props) => {
	const modifiers = [];

	const mediaRule = media(props);

	if (mediaRule) {
		modifiers.push(`has-${mediaRule}`);
	}

	// Any defined theme takes precendence. The "basic" theme should be ignored upstream.
	const themeRule = props.theme || theme(props);

	if (themeRule) {
		modifiers.push(themeRule);
	}

	if (props.indicators && props.indicators.canBeSyndicated) {
		modifiers.push(`${PREFIX[props.indicators.canBeSyndicated]}syndicatable`);
	}

	if (props.indicators && props.indicators.canBeDistributed) {
		modifiers.push(`${PREFIX[props.indicators.canBeDistributed]}distributable`);
	}

	return modifiers;
};

export default (props) => {
	const computed = dynamicModifiers(props);
	// Modifier props may be a string rather than a string[] so concat, don't spread.
	const variants = [props.type, props.layout].concat(props.modifiers, computed);

	const classNames = variants
		.filter(Boolean)
		.map((mod) => `o-teaser--${mod}`)
		.join(' ');

	return (
		<div className={`o-teaser ${classNames} js-teaser`} data-id={props.id}>
			{props.children}
		</div>
	);
};
