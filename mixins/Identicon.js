import jdenticon from 'jdenticon/standalone'

export default {
  methods: {
    createIcon(input, size) {
      return jdenticon.toSvg(input, size)
    },
  },
}
