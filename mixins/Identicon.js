import jdenticon from 'jdenticon/standalone'

export default {
  methods: {
    updateIcons(input, size) {
      return jdenticon.toSvg(input, size)
    },
  },
}
