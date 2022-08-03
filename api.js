// projects
export function getProjects(axios, params) {
  return axios.get('/projects', { params });
}

export function getFeaturedProjects(axios, limit) {
  return axios.$get(`/projects/paginated/1/${limit}`);
}

export function getProjectById(axios, id) {
  return axios.get(`/projects/${id}`); // dont filter for data object
}

// dao-proposals
export function getDaoProposals(axios, params) {
  return axios.get('/dao-proposals', { params });
}

// fulltext-proposal
export function getFulltextProposalHtml(axios, proposalId) {
  return axios.get(`/dao-proposals/${proposalId}/fulltext`);
}

export function getFeaturedDaoProposals(axios, limit) {
  return axios.$get(`/dao-proposals/paginated/1/${limit}`);
}

// jobs
export function getJobs(axios) {
  return axios.$get('/jobs'); // not implemented yet
}

// landing page
export function getLandingData(axios) {
  return axios.get('/pages/index'); // dont filter for data object
}

// dao round
export function getDaoRoundMetrics(axios, params) {
  return axios.get('/metrics', { params }); // dont filter for data object
}

// leaderboard
export function getLeaderboard(axios, params) {
  return axios.$get('/leaderboard', { params });
}

// account login
export function login(axios, payload) {
  return axios.post('/account/login', payload, { withCredentials: true });
}

// account logout
export function logout(axios) {
  return axios.post('/account/logout', null, { withCredentials: true });
}

// account retrieval
export function getAccount(axios) {
  return axios.get('/account', { withCredentials: true });
}

// update project data
export function updateProject(axios, payload) {
  return axios.put('/account/projects', payload, {
    withCredentials: true,
  });
}

// project creation
export function createProject(axios, payload) {
  return axios.post('/account/projects', payload, {
    withCredentials: true,
  });
}

// logo upload
export function uploadLogo(axios, file) {
  const data = new FormData();
  data.append('logo', file);

  return axios.$post('/account/logos', data, {
    withCredentials: true,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

// images upload
export function uploadImages(axios, files) {
  const data = new FormData();
  Array.from(files).forEach((file) => data.append('images', file));

  return axios.$post('/account/images', data, {
    withCredentials: true,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
