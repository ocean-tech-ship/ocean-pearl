import { SESSION_NAME } from '@/store/auth';

export default {
  computed: {
    wallet() {
      return (
        this.$store.state.account.wallet ?? this.$cookies.get(SESSION_NAME)
      );
    },
  },
};
