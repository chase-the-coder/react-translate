import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContex from '../context/ColorContext';

export default class Button extends Component {
	renderSubmit(language) {
		return language === 'english' ? 'Submit' : 'Voorleggen';
	}

	renderButtton(color) {
		return (
			<button className={`ui button ${color}`}>
				<LanguageContext.Consumer>{({ language }) => this.renderSubmit(language)}</LanguageContext.Consumer>
			</button>
		);
	}

	render() {
		return <ColorContex.Consumer>{(color) => this.renderButtton(color)}</ColorContex.Consumer>;
	}
}
