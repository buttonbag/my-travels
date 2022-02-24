import React from 'react';

function Cards(props) {
	return (
		<div className="card">
			<img src={props.imageUrl} alt="" />
			<div className="card--info">
				<div className="card--location">
					{props.location} <a href={props.googleMapsUrl}>View on Google Maps</a>
				</div>
				<h2 className="card--name">{props.title}</h2>
				<div className="card--date">
					{props.startDate} - {props.endDate}
				</div>
				<div className="card--description">{props.description}</div>
			</div>
		</div>
	);
}

export default Cards;
