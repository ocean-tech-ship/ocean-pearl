// projects
export function getProjects(axios) {
  return axios.$get('/projects')
}

export function getFeaturedProjects(axios, limit) {
  return axios.$get(`/projects/paginated/1/${limit}`)
}

export function getProjectById(axios, id) {
  return axios.get(`/projects/detail/${id}`)
}

// dao-proposals
export function getDaoProposals(axios) {
  return axios.$get('/dao-proposals')
}

export function getFeaturedDaoProposals(axios, limit) {
  return axios.$get(`/dao-proposals/paginated/1/${limit}`)
}

// jobs
export function getJobs(axios) {
  return axios.$get('/jobs') // not implemented yet
}

//dao-projects-page
export function getDaoData(axios) {
  return axios.get('/index/info')
}