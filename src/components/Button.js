import React, { Component } from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContex from '../context/ColorContext';

export default class Button extends Component {
	renderSubmit(value) {
		return value === 'english' ? 'Submit' : 'Voorleggen';
	}

	renderButtton(color) {
		return (
			<button className={`ui button ${color}`}>
				<LanguageContext.Consumer>{(value) => this.renderSubmit(value)}</LanguageContext.Consumer>
			</button>
		);
	}

	render() {
		return <ColorContex.Consumer>{(color) => this.renderButtton(color)}</ColorContex.Consumer>;
	}
}
