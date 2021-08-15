<template>
    <section class="relative flex border w-full">
        <button
            id="dropdown-emit"
            tabindex="0"
            :class="{ open: open }"
            class="flex items-center small-text relative w-full py-1 pl-3 pr-3"
            @click="toggleOpen"
            @blur="handleBlur"
        >
            {{ selectedName }}
        </button>
        <label for="dropdown-emit" class="label absolute p-1 z-10">{{
            buttonName
        }}</label>
        <section
            v-if="open"
            class="border bg-grey rounded shadow absolute top-10 z-40"
        >
            <ul>
                <li
                    v-for="menuItem of menuItems"
                    :key="menuItem.value"
                    :class="{ isActive: menuItem.selected }"
                    class="menuItem"
                    tabindex="0"
                    @click="handleSelection(menuItem)"
                >
                    {{ menuItem.content }}
                </li>
            </ul>
        </section>
    </section>
</template>

<script>
export default {
    name: 'ButtonWithDropdown',
    components: {},
    props: {
        buttonName: {
            type: String,
            required: true,
            default() {},
        },
        menuItems: {
            type: Array,
            required: true,
            default() {},
        },
    },
    data() {
        return {
            open: false,
            selectedName: 'All',
        };
    },
    methods: {
        setselectedName(selected) {
            this.selectedName = selected;
        },
        toggleOpen() {
            this.open = !this.open;
        },
        handleSelection(menuItem) {
            this.setselectedName(menuItem.content);
            this.$emit('selected', menuItem);
            this.toggleOpen();
        },
        handleBlur(e) {
            if (
                (!e.relatedTarget && this.open) ||
                (!e.relatedTarget?.classList.contains('menuItem') && this.open)
            )
                this.toggleOpen();
        },
    },
};
</script>

<style lang="scss" scoped>
label {
    font-size: 0.7rem;
    top: -13px;
    left: 12px;
    transition: 200ms;
    background: #fff;
}

button::before {
    content: '';
    background: url('@/assets/images/icons/dropdown.svg') center center
        no-repeat;
    display: block;
    width: 23px;
    height: 26px;
}
button.open::before {
    transform: rotate(180deg);
}

ul {
    min-width: 140px;
    max-width: auto;
    max-height: 222px;
    overflow-y: scroll;
    background: white;
    border-radius: 7px;
}
li {
    padding: 0.5rem;
}
li:hover {
    background: #bb2c7636;
    transition: 200ms;
    cursor: pointer;
}
.isActive {
    background: lighten(#bb2c7636, 25);
}
</style>
