/* eslint-disable camelcase */
import axios from 'axios';
import { IFilter } from '../../components/mainContent/filter';

const headers = {
    'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
    'x-rapidapi-key': 'Insira a x-rapidapi-key',
};
export const services = {
    getGames: async () => {
        try {
            const resp = await axios.get(
                'https://mmo-games.p.rapidapi.com/games',
                {
                    headers,
                },
            );

            return resp;
        } catch (err) {
            return console.error(err);
        }
    },

    filterGames: async (lista: IFilter[]) => {
        const params = new URLSearchParams();

        if (lista.length > 0) {
            lista.forEach((item: any) => {
                if (item.paramType === 'platform') {
                    params.append('platform', item.inputName);
                } else {
                    params.append('category', item.inputName);
                }
            });
        }

        try {
            const resp = await axios.get(
                'https://mmo-games.p.rapidapi.com/games',
                {
                    params,
                    headers,
                },
            );

            return resp;
        } catch (err) {
            return console.error(err);
        }
    },

    getEspecificGame: async (genre: string) => {
        const params = {
            id: genre,
        };
        try {
            const resp = await axios.get(
                'https://mmo-games.p.rapidapi.com/game',
                {
                    params,
                    headers,
                },
            );

            return resp;
        } catch (err) {
            return console.error(err);
        }
    },
};
