// projects
export function getProjects(axios) {
  return axios.$get('/project')
}

export function getFeaturedProjects(axios) {
  return axios.$get('/project/featured')
}

export function getProjectById(axios, id) {
  return axios.$get(`/project/detail/${id}`)
}

// dao-proposals
export function getDaoProposals(axios) {
  return axios.$get('/dao-proposal')
}

export function getFeaturedDaoProposals(axios) {
  return axios.$get('/dao-proposal/featured')
}

// jobs
export function getJobs(axios) {
  return axios.$get('/job')
}
