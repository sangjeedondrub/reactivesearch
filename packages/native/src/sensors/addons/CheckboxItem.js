import React, { Component } from 'react';
import { View } from 'react-native';
import {
	CheckBox,
	Text,
} from 'native-base';
import TouchableItem from './TouchableItem';
import types from '@appbaseio/reactivecore/lib/utils/types';

class CheckboxItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			selected: props.checked,
		};
	}

	handlePress = () => {
		this.setState({
			selected: !this.state.selected,
		});

		this.props.onPress(this.props.label);
	};

	render() {
		return (
			<TouchableItem
				pressOpacity={0.5}
				delayPressIn={0}
				onPress={this.handlePress}
			>
				<View style={{
					flex: 1,
					flexDirection: 'row',
					padding: 15,
					borderBottomColor: '#c9c9c9',
					borderBottomWidth: 0.5,
				}}
				>
					<CheckBox
						onPress={this.handlePress}
						checked={this.state.selected}
					/>
					<Text style={{ marginLeft: 20 }}>{this.props.label}</Text>
				</View>
			</TouchableItem>
		);
	}
}

CheckboxItem.propTypes = {
	checked: types.checked,
	onPress: types.onPress,
	label: types.label,
};

export default CheckboxItem;
