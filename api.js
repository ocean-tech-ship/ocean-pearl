// projects
export function getProjects(axios) {
  return axios.$get('/projects')
}

export function getFeaturedProjects(axios) {
  return axios.$get('/projects/featured')
}

export function getProjectById(axios, id) {
  return axios.$get(`/projects/detail/${id}`)
}

// dao-proposals
export function getDaoProposals(axios) {
  return axios.$get('/dao-proposals')
}

export function getFeaturedDaoProposals(axios) {
  return axios.$get('/dao-proposals/featured')
}

// jobs
export function getJobs(axios) {
  return axios.$get('/jobs')
}
