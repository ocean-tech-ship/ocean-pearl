export function getProjects() {
  console.log(process.env.NUXT_ENV_BASE_URL)
    fetch(`${process.env.NUXT_ENV_BASE_URL}/api/projects`)
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        return json.projects
      })
}

// export default {
//   getProjects
// }




