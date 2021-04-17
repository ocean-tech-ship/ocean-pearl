<template>
  <main-dropdown>
    <template slot-scope="context">
      <img
        @click="context.toggleOpen"
        class="h-10 w-10 cursor-pointer rounded-full object-cover"
        src="@/assets/images/icons/bitcoin-badge.png"
        alt="profile image"
      >
      <transition
        enter-active-class="transition-all duration-100 ease-out"
        leave-active-class="transition-all duration-100 ease-in"
        enter-class="opacity-0 scale-75"
        enter-to-class="opacity-100 scale-100"
        leave-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-75"
      >
        <div
          v-if="context.open"
          class="origin-top-right absolute right-0 mt-2 w-64 bg-white border overflow-hidden rounded-lg shadow-md"
        >
          <ul>
            <li class="hover:bg-gray-100">
              <a class="font-semibold block px-4 py-3" to="/profile">Profile</a>
            </li>
            <li class="hover:bg-gray-100">
              <a class="font-semibold block px-4 py-3" to="/profile">Sign Out</a>
            </li>
          </ul>
        </div>
      </transition>
    </template>
  </main-dropdown>
</template>

<script>
import MainDropdown from "@/components/common/MainDropdown";
export default {
  name: "button-with-dropdown",
  data() {
    return {
      username: "John Wick",
      email: "dontkillmydog@johnwick.com"
    };
  },
  components: { MainDropdown }
};
</script>