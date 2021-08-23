// projects
export function getProjects(axios) {
    return axios.get('/projects');
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
export function getDaoRoundMetrics(axios) {
    return axios.get('/metrics'); // dont filter for data object
}
