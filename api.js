export function getProjects() {
    return fetch(`${process.env.NUXT_ENV_BASE_URL}/api/projects`)
      .then((res) => res.json())
      .then((json) => {
        return json.projects
      })
}

export function getProjectById(id) {
  return fetch(`${process.env.NUXT_ENV_BASE_URL}/api/projects/${id}`)
    .then((res) => res.json())
    .then((json) => {
      return json.project
    })
}

export function getJobs() {
  return fetch(`${process.env.NUXT_ENV_BASE_URL}/api/jobs`)
    .then((res) => res.json())
    .then((json) => {
      return json.jobs
    })
}

export function getDaoProposals() {
  return fetch(`${process.env.NUXT_ENV_BASE_URL}/api/daoproposals`)
    .then((res) => res.json())
    .then((json) => {
      return json.daoproposals
    })
}


