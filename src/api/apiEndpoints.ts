import makeRequest from "./api";

export const getCharity = (id: string) => {
  const url = `/nonprofit/${id}`;
  return makeRequest(url);
};
export const getCharityCauses = (cause: string) => {
  const url = `/browse/${cause}`;
  return makeRequest(url);
};

export const searchCauses = (searchTerm: string) => {
  const url = `/search/${searchTerm}`;
  console.log(makeRequest(url));
  return makeRequest(url);
};

// You can add more functions for other API endpoints
