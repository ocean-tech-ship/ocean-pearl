export default {
  methods: {
    addPunctuation(number, fractionDigits = 2) {
      number = +Number(number).toFixed(fractionDigits);
      return Number(number).toLocaleString(this.$i18n.locale);
    },
  },
};
