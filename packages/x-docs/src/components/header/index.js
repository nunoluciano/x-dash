import React from 'react'
import Link from 'gatsby-link'
import c from 'classnames';
import styles from './header.module.scss';

const Header = ({transparent}) => <header
	className={c('o-header-services', {[styles.transparent]: transparent})}
	data-o-component="o-header"
>
	<div className={c('o-header-services__top o-header-services__container', {[styles.transparent]: transparent})}>
		<div className="o-header-services__ftlogo"></div>
		<div className="o-header-services__title">
			<h1 className="o-header-services__product-name">
				<Link to="/">x-dash</Link>
			</h1>
		</div>
		<div className="o-header-services__related-content">
			<a className="o-header-services__related-content-link" href="https://origami.ft.com">
				Origami
			</a>
			<Link className="o-header-services__related-content-link" to="/components">
				Components
			</Link>
		</div>
	</div>
</header>

export default Header
