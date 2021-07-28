import axios from 'axios';

import { GET_CHARACTERS_URL } from '../utils/api-urls';

export const getCharacters = async () => {
  const { data } = await axios.get(GET_CHARACTERS_URL);

  return data.filter((element) => element.name);
};
