import {newAd} from '../newAd';
import actions from '../../actions';

export const adsDefault = (state = [], action) => {
	const {type, ads, newAd: addedAd, deleteId} = action;
	switch (type) {
		case ACTIONS.LOAD_ADS:
			return [
				...ads,
			]
		case ACTIONS.NEW_AD:
			return [
				...state,
				newAd({}, addedAd)
			]
		case ACTIONS.DELETE_AD:
			return state.filter(ad => ad.pk !== deleteId)
		case ACTIONS.EDIT_AD:
			return state.map((ad) => {
				if (ad.pk !== action.adId) {
					return ad;
				}

				return {
					...ad,
					...action.newFields
				}
			})
		case actions.LOGOUT_USER:
			return []
		default:
			return state
	}
}

const ACTIONS = {
	LOAD_ADS: "DEFAULT_LOAD_ADS",
	NEW_AD: "DEFAULT_NEW_AD",
	DELETE_AD: "DEFAULT_DELETE_AD",
	EDIT_AD: "DEFAULT_EDIT_AD"
}

export const REDUCERS = {
	LOAD: (ads) => ({
		type: ACTIONS.LOAD_ADS,
		ads
	}),
	ADD: (newAd) => ({
		type: ACTIONS.NEW_AD,
		newAd
	}),
	DELETE: (deleteId) => ({
		type: ACTIONS.DELETE_AD,
		deleteId
	}),
	EDIT: (adId, newFields) => ({
		type: ACTIONS.EDIT_AD,
		adId, newFields
	})
}

export default ACTIONS;
