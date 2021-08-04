// projects
export function getProjects(axios) {
  return axios.$get('/projects')
}

export function getFeaturedProjects(axios, limit) {
  return axios.$get(`/projects/paginated/1/${limit}`)
}

export function getProjectById(axios, id) {
  return axios.get(`/projects/detail/${id}`) // dont filter for data object
}

// dao-proposals
export function getDaoProposals(axios) {
  return axios.get('/dao-proposals') // dont filter for data object
}

export function getFeaturedDaoProposals(axios, limit) {
  return axios.$get(`/dao-proposals/paginated/1/${limit}`)
}

// jobs
export function getJobs(axios) {
  return axios.$get('/jobs') // not implemented yet
}

// landing page
export function getLandingData(axios) {
  return axios.get('/index/info') // dont filter for data object
}

// dao round
export function getDaoRoundMetrics(axios) {
  return axios.get('/metrics') // dont filter for data object
}

// account login
export function login(axios, payload) {
  return axios.post('/account/login', payload, { withCredentials: true })
}

// account logout
export function logout(axios) {
  return axios.post('/account/logout', null, { withCredentials: true })
}

// account retrieval
export function getAccount(axios) {
  return axios.get('/account', { withCredentials: true })
}

// account save changes
export function updateProject(axios, projectId, formData) {
  return axios.put(`/account/${projectId}`, formData, {
    withCredentials: true,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}
