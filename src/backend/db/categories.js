import { v4 as uuid } from 'uuid';

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
	{
		_id: uuid(),
		categoryName: 'Action',
	},
	{
		_id: uuid(),
		categoryName: 'RPG',
	},
	{
		_id: uuid(),
		categoryName: 'Racing',
	},
	{
		_id: uuid(),
		categoryName: 'Strategy',
	},
];
