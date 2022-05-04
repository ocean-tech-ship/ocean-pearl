export default {
  methods: {
    addPunctuation(number, numberOfDecimals = 0) {
      number = +Number(number).toFixed(numberOfDecimals);
      return Number(number).toLocaleString(this.$i18n.locale);
    },
  },
};
