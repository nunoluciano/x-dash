import { h } from '@financial-times/x-engine';
import { ArticleSaveButton } from '@financial-times/x-article-save-button';
import { Teaser, presets } from '@financial-times/x-teaser';
import { getGroupAndIndex, getItemGroups } from './lib/transform';
import styles from './TeaserTimeline.scss';
import classNames from 'classnames';

const TeaserTimeline = props => {
	const {
		csrfToken = null,
		customSlotContent,
		customSlotPosition = 2,
		items,
		showSaveButtons = true
	} = props;
	const itemGroups = getItemGroups(props);

	if (customSlotContent) {
		const insertPosition = Math.min(customSlotPosition, items.length);
		const insert = getGroupAndIndex(itemGroups, insertPosition);

		itemGroups[insert.group].items.splice(insert.index, 0, customSlotContent);
	}

	return itemGroups.length > 0 && (
		<div>
			{itemGroups.map(group => (
				<section key={group.date} className={classNames(styles.itemGroup)}>
					<h2 className={classNames(styles.itemGroup__heading)}>{group.title}</h2>
					<ul className={classNames(styles.itemGroup__items)}>
						{group.items.map(item => {
							if (item.id) {
								return (
									<li key={item.id} className={styles.item}>
										<Teaser
											{...item}
											{...presets.SmallHeavy}
											theme="timeline-teaser"
										/>
										{showSaveButtons &&
										<div className={classNames(styles.itemActions)}>
											<ArticleSaveButton
												id={`${item.id}-save-button`}
												contentId={item.id}
												contentTitle={item.title}
												csrfToken={csrfToken}
												saved={item.saved || false}
											/>
										</div>}
									</li>
								);
							}
							if (typeof item === 'string') {
								return (<li key="custom-slot" dangerouslySetInnerHTML={{ __html: item }} />);
							}
						})}
					</ul>
				</section>
			))}
		</div>
	);
};

export { TeaserTimeline };
