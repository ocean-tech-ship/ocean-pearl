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

// account save changes
export function updateProject(axios, projectId, formData) {
  return axios.put(`/account/project/${projectId}`, formData, {
    withCredentials: true,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}
