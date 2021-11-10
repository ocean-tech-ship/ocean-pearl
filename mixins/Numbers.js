export default {
  methods: {
    addPunctuation(number) {
      return Number(number).toLocaleString('en-US'); // TODO choose locale dynamically
    },
  },
};
