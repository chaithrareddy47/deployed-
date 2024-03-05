import React from 'react';
import ReactDOM from 'react-dom/client';

const resObj = [
	{
		info: {
			id: '230460',
			name: 'Nandhana Palace',
			cloudinaryImageId: '195876a3181ef63f76e45e3a7b49b585',
			locality: '3rd Phase',
			areaName: 'Bommasandra',
			costForTwo: '₹500 for two',
			cuisines: ['Biryani', 'Andhra', 'South Indian', 'North Indian'],
			avgRating: 4.2,
			parentId: '2120',
			avgRatingString: '4.2',
			totalRatingsString: '5K+',
			sla: {
				deliveryTime: 18,
				lastMileTravel: 1.8,
				serviceability: 'SERVICEABLE',
				slaString: '18 mins',
				lastMileTravelString: '1.8 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2024-01-04 01:00:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: '₹100 OFF',
				subHeader: 'ABOVE ₹179',
				discountTag: 'FLAT DEAL',
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/nandhana-palace-3rd-phase-bommasandra-bangalore-230460',
			type: 'WEBLINK',
		},
	},
	{
		info: {
			id: '78644',
			name: 'Pizza Hut',
			cloudinaryImageId: '2b4f62d606d1b2bfba9ba9e5386fabb7',
			locality: 'Hosur Main Road',
			areaName: 'Bommasandra',
			costForTwo: '₹350 for two',
			cuisines: ['Pizzas'],
			avgRating: 4.2,
			parentId: '721',
			avgRatingString: '4.2',
			totalRatingsString: '1K+',
			sla: {
				deliveryTime: 35,
				lastMileTravel: 4,
				serviceability: 'SERVICEABLE',
				slaString: '35 mins',
				lastMileTravelString: '4.0 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2024-01-04 04:00:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: '50% OFF',
				subHeader: 'UPTO ₹100',
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/pizza-hut-hosur-main-road-bommasandra-bangalore-78644',
			type: 'WEBLINK',
		},
	},
	{
		info: {
			id: '46879',
			name: "McDonald's",
			cloudinaryImageId: 'bb7ae131544c7d37e10fc5faf76f09d6',
			locality: 'Doddatogur Village',
			areaName: 'Electronic City',
			costForTwo: '₹400 for two',
			cuisines: ['Burgers', 'Beverages', 'Cafe', 'Desserts'],
			avgRating: 4.3,
			parentId: '630',
			avgRatingString: '4.3',
			totalRatingsString: '10K+',
			sla: {
				deliveryTime: 44,
				lastMileTravel: 8.3,
				serviceability: 'SERVICEABLE',
				slaString: '44 mins',
				lastMileTravelString: '8.3 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2024-01-04 03:45:00',
				opened: true,
			},
			badges: {
				textExtendedBadges: [
					{
						iconId: 'guiltfree/GF_Logo_android_3x',
						shortDescription: 'options available',
						fontColor: '#7E808C',
					},
				],
			},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: '',
									fontColor: '#7E808C',
									iconId: 'guiltfree/GF_Logo_android_3x',
									shortDescription: 'options available',
								},
							},
						],
					},
				},
			},
			aggregatedDiscountInfoV3: {
				header: '10% OFF',
				subHeader: 'ABOVE ₹1000',
				discountTag: 'FLAT DEAL',
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/mcdonalds-doddatogur-village-electronic-city-bangalore-46879',
			type: 'WEBLINK',
		},
	},
	{
		info: {
			id: '41784',
			name: 'Faasos - Wraps, Rolls & Shawarma',
			cloudinaryImageId: 'af33b81798b11deba338e94b7585d348',
			locality: 'Bommasandra',
			areaName: 'Vidyanagar',
			costForTwo: '₹200 for two',
			cuisines: [
				'Kebabs',
				'Fast Food',
				'Snacks',
				'American',
				'Healthy Food',
				'Desserts',
				'Beverages',
			],
			avgRating: 4.2,
			parentId: '21809',
			avgRatingString: '4.2',
			totalRatingsString: '5K+',
			sla: {
				deliveryTime: 33,
				lastMileTravel: 4,
				serviceability: 'SERVICEABLE',
				slaString: '33 mins',
				lastMileTravelString: '4.0 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2024-01-03 23:59:00',
				opened: true,
			},
			badges: {
				textExtendedBadges: [
					{
						iconId: 'guiltfree/GF_Logo_android_3x',
						shortDescription: 'options available',
						fontColor: '#7E808C',
					},
				],
			},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {
						badgeObject: [
							{
								attributes: {
									description: '',
									fontColor: '#7E808C',
									iconId: 'guiltfree/GF_Logo_android_3x',
									shortDescription: 'options available',
								},
							},
						],
					},
				},
			},
			aggregatedDiscountInfoV3: {
				header: '60% OFF',
				subHeader: 'UPTO ₹110',
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-bommasandra-vidyanagar-bangalore-41784',
			type: 'WEBLINK',
		},
	},
	{
		info: {
			id: '41788',
			name: 'Oven Story Pizza - Standout Toppings',
			cloudinaryImageId: 'f986df6f1a1fcf2ff24d2eaf44d570a7',
			locality: 'Bommasandra',
			areaName: 'Vidyanagar',
			costForTwo: '₹400 for two',
			cuisines: ['Pizzas', 'Pastas', 'Italian', 'Desserts', 'Beverages'],
			avgRating: 4.5,
			parentId: '3534',
			avgRatingString: '4.5',
			totalRatingsString: '1K+',
			sla: {
				deliveryTime: 27,
				lastMileTravel: 4,
				serviceability: 'SERVICEABLE',
				slaString: '23-31 mins',
				lastMileTravelString: '4.0 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2024-01-03 23:59:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: '50% OFF',
				subHeader: 'UPTO ₹100',
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-bommasandra-vidyanagar-bangalore-41788',
			type: 'WEBLINK',
		},
	},
	{
		info: {
			id: '41793',
			name: 'Sweet Truth - Cake and Desserts',
			cloudinaryImageId: '81cf6bfe2760a45a0caf2e28716ca4d7',
			locality: 'Bommasandra',
			areaName: 'Vidyanagar',
			costForTwo: '₹450 for two',
			cuisines: ['Snacks', 'Bakery', 'Desserts', 'Beverages'],
			avgRating: 4.2,
			parentId: '4444',
			avgRatingString: '4.2',
			totalRatingsString: '500+',
			sla: {
				deliveryTime: 29,
				lastMileTravel: 4,
				serviceability: 'SERVICEABLE',
				slaString: '29 mins',
				lastMileTravelString: '4.0 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2024-01-03 23:59:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: '60% OFF',
				subHeader: 'UPTO ₹110',
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-bommasandra-vidyanagar-bangalore-41793',
			type: 'WEBLINK',
		},
	},
	{
		info: {
			id: '156089',
			name: 'The Good Bowl',
			cloudinaryImageId: '6e04be27387483a7c00444f8e8241108',
			locality: 'Bommasandra',
			areaName: 'Vidyanagar',
			costForTwo: '₹400 for two',
			cuisines: ['Biryani', 'Pastas', 'Punjabi', 'Desserts', 'Beverages'],
			avgRating: 4.3,
			parentId: '7918',
			avgRatingString: '4.3',
			totalRatingsString: '1K+',
			sla: {
				deliveryTime: 33,
				lastMileTravel: 4,
				serviceability: 'SERVICEABLE',
				slaString: '33 mins',
				lastMileTravelString: '4.0 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2024-01-03 23:59:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: '60% OFF',
				subHeader: 'UPTO ₹110',
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/the-good-bowl-bommasandra-vidyanagar-bangalore-156089',
			type: 'WEBLINK',
		},
	},
	{
		info: {
			id: '230460',
			name: 'Nandhana Palace',
			cloudinaryImageId: '195876a3181ef63f76e45e3a7b49b585',
			locality: '3rd Phase',
			areaName: 'Bommasandra',
			costForTwo: '₹500 for two',
			cuisines: ['Biryani', 'Andhra', 'South Indian', 'North Indian'],
			avgRating: 4.2,
			parentId: '2120',
			avgRatingString: '4.2',
			totalRatingsString: '5K+',
			sla: {
				deliveryTime: 26,
				lastMileTravel: 1.8,
				serviceability: 'SERVICEABLE',
				slaString: '26 mins',
				lastMileTravelString: '1.8 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2024-01-04 01:00:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: '₹100 OFF',
				subHeader: 'ABOVE ₹179',
				discountTag: 'FLAT DEAL',
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/nandhana-palace-3rd-phase-bommasandra-bangalore-230460',
			type: 'WEBLINK',
		},
	},
	{
		info: {
			id: '20686',
			name: 'Burger King',
			cloudinaryImageId: 'e33e1d3ba7d6b2bb0d45e1001b731fcf',
			locality: 'Neeladri Road',
			areaName: 'Electronic City',
			costForTwo: '₹350 for two',
			cuisines: ['Burgers', 'American'],
			avgRating: 4.2,
			parentId: '166',
			avgRatingString: '4.2',
			totalRatingsString: '10K+',
			sla: {
				deliveryTime: 45,
				lastMileTravel: 8.6,
				serviceability: 'SERVICEABLE',
				slaString: '45 mins',
				lastMileTravelString: '8.6 km',
				iconType: 'ICON_TYPE_EMPTY',
			},
			availability: {
				nextCloseTime: '2024-01-04 02:00:00',
				opened: true,
			},
			badges: {},
			isOpen: true,
			type: 'F',
			badgesV2: {
				entityBadges: {
					imageBased: {},
					textBased: {},
					textExtendedBadges: {},
				},
			},
			aggregatedDiscountInfoV3: {
				header: 'ITEMS',
				subHeader: 'AT ₹129',
			},
			differentiatedUi: {
				displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
				differentiatedUiMediaDetails: {
					mediaType: 'ADS_MEDIA_ENUM_IMAGE',
					lottie: {},
					video: {},
				},
			},
			reviewsSummary: {},
			displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
			restaurantOfferPresentationInfo: {},
		},
		analytics: {},
		cta: {
			link: 'https://www.swiggy.com/restaurants/burger-king-neeladri-road-electronic-city-bangalore-20686',
			type: 'WEBLINK',
		},
	},
];

const Header = () => {
	return (
		<div className='header-component'>
			<div className='nav-logo'>
				<img
					src={'logo.png'}
					alt=''
				/>
			</div>
			<div className='nav-links'>
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Cart</li>
					<li>User</li>
				</ul>
			</div>
		</div>
	);
};
const Body = () => {
	return (
		<div className='body-component'>
			<div className='btn'>
				<button className='btns'>Top Rated Restro</button>
				<input
					type='text'
					placeholder='Search for restros...'
				/>
			</div>

			<div className='restro-container'>
				{resObj.map((resList) => (
					<RestroCard
						key={resList.info.id}
						resData={resList}
					/>
				))}
			</div>
		</div>
	);
};

const RestroCard = (props) => {
	const { resData } = props;
	const { name, cloudinaryImageId, avgRating, cuisines } = resData.info;
	return (
		<div className='restro-card'>
			<img
				src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
				alt=''
			/>
			<div className='restro-desc'>
				<h3>{name}</h3>
				<p>{avgRating}</p>
				<p>{cuisines.join(', ')}</p>
			</div>
		</div>
	);
};

const Footer = () => {
	return <div className='footer'>Footer</div>;
};

const App = () => {
	return (
		<div>
			<Header />
			<Body />
			<Footer />
		</div>
	);
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
