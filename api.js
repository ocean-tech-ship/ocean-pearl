export function getProjects(axios) {
  return axios.$get('https://oceanpear-api.herokuapp.com/project')
}

export function getFeaturedProjects(axios) {
  return axios.$get(`https://oceanpear-api.herokuapp.com/project/featured`)
}

export function getProjectById(axios, id) {
  return axios.$get(`https://oceanpear-api.herokuapp.com/project/detail/${id}`)
}



export function getJobs(axios) {
}

export function getDaoProposals(axios) {
}


