import React, { useState } from "react";

//create your first component
const Home = () => {
	const [selectedColor, setSelectedColor] = useState("red");
	const [colors, setColors] = useState(["red", "yellow", "green"]);

	// Función para alternar entre los colores rojo, amarillo y verde
	const toggleColor = () => {
		const currentIndex = colors.indexOf(selectedColor);
		const nextIndex = (currentIndex + 1) % colors.length;
		setSelectedColor(colors[nextIndex]);
	};

	// Función para añadir el color púrpura
	const addPurple = () => {
		if (!colors.includes("purple")) {
			setColors([...colors, "purple"]);
		}
	};

	return (
		<div className="traffic-light-container">
			<div className="traffic-light">
				{colors.map((color) => (
					<div
						key={color}
						onClick={() => setSelectedColor(color)}
						className={"light " + color + (selectedColor === color ? " glow" : "")}
					></div>
				))}
			</div>
			<button onClick={toggleColor} className="toggle-button">
				Toggle Color
			</button>
			<button onClick={addPurple} className="add-button">
				Add Purple
			</button>
		</div>
	);
};

export default Home;
