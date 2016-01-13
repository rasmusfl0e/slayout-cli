import React, {Component} from "react";
import blessed from "blessed";
import {render} from "react-blessed";

// Rendering a simple centered box
class App extends Component {

	constructor(props) {
		super(props);
		
		this.state = {
			columns: 12,
			layout: {
				0: [12, 8, 4, 3, 3, 6, 4, 4, 4]
			},
			scroll: 0
		};
	}

	render() {
		var width = 0;//this.props.width;
		/*
		var widths = Object.keys(this.state.layout).map(
			(_width) => parseInt(_width, 10)
		)
		.filter(
			(_width) => (_width < width)
		);
		
		width = Math.max.apply(null, widths);
		*/
		var x = 0;
		var blocks = [];/*this.state.layout[width].map((block, index) => {
			var box = (
				<box
					key={"block_" + index}
					top={(Math.floor(x / this.state.columns) * 20 - this.state.scroll + "%+1")}
					left={(x % this.state.columns / this.state.columns * 100) + "%+1"}
					width={(block / this.state.columns * 100) + "%-2"}
					height="20%-1"
					bg="white"
					fg="black"
				>
					{index + 1}
				</box>
			);
			x += block;
			return box;
		});
		*/
		return (
			<element
				top="0"
				left="0"
				width="100%"
				height="100%"
			>
				<ansiimage
					top="0"
					left="0"
					width="100%"
					height="100%"
					file="./logo.png"
					parent={this.props.screen}
				></ansiimage>
				{blocks}
			</element>
		);
	}
}

// Creating our screen
const screen = blessed.screen({
	autoPadding: true,
	smartCSR: true,
	resizeTimeout: 16,
	title: "react-blessed hello world"
});

screen.on("resize", refresh);

// Adding a way to quit the program
screen.key(["escape", "q", "C-c"], function(ch, key) {
	return process.exit(0);
});

// Rendering the React app using our screen
function refresh () {
	render(<App width={screen.width} screen={screen}/>, screen);
}

refresh();
