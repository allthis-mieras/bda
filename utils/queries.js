import { Client } from './prismicHelpers'

const client = Client();

async function fetchDocs(page = 1, routes = []) {
  const response = await Client().query('', { pageSize: 100, lang: '*', page });
  const allRoutes = routes.concat(response.results);
  if (response.results_size + routes.length < response.total_results_size) {
    return fetchDocs(page + 1, allRoutes);
  }
  return [...new Set(allRoutes)];
};

export const queryRepeatableDocuments = async (filter) => {
  const allRoutes = await fetchDocs()
  return allRoutes.filter(filter)
}

export const querySingleDocument = async (type) => {
  const data = await client.getSingle(type, null) || {};
  return data;
}

export const queryIDs = async (ids) => {
  const data = await client.getByIDs(ids,  null) || {};
  return data;
}

export const queryID = async (id) => {
  const data = await client.getByID(id, null) || {};
  return data;
}

export const queryUID = async (type, uid) => {
  const data = await client.getByUID(type, uid,  null) || {};
  return data;
}

export async function getProjectFromUID(type, uid) {
  const data = await client.getByUID(type, uid,  null) || {};
  return data;
}
