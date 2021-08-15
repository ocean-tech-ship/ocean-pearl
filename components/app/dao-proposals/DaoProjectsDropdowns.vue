<template>
    <div class="text-primary">
        <ButtonEmitWithDropdown
            button-name="Rounds"
            class="rounded my-2 mr-2 w-44"
            :menu-items="roundItems"
            @selected="setItems"
        />
        <ButtonEmitWithDropdown
            button-name="Category"
            class="rounded my-2 mr-2 w-44"
            :menu-items="categoryItems"
            @selected="setItems"
        />
    </div>
</template>

<script>
import ButtonEmitWithDropdown from '@/components/common/ButtonEmitWithDropdown.vue';
import EnumCategory from '../../enums/Category.enum';

export default {
    components: {
        ButtonEmitWithDropdown,
    },
    props: {
        rounds: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            watching: false,
            roundItems: [
                {
                    type: 'rounds',
                    content: `All`,
                    id: 0,
                    selected: true,
                },
            ],
            categoryItems: [],
        };
    },
    watch: {
        $data: {
            deep: true,
            handler: function emit() {
                if (this.watching) {
                    const selectedItems = Object.values(
                        this.roundItems.reduce((accumulator, current) => {
                            if (current.selected) accumulator.push(current.id);
                            return accumulator;
                        }, []),
                    );

                    selectedItems.push(
                        Object.values(
                            this.categoryItems.reduce(
                                (accumulator, current) => {
                                    if (current.selected)
                                        accumulator.push(current.id);
                                    return accumulator;
                                },
                                [],
                            ),
                        )[0],
                    );

                    this.$emit('selected-items', {
                        round: selectedItems[0],
                        category: selectedItems[1],
                    });
                }
            },
        },
    },
    created() {
        // set categories button content
        Object.keys(EnumCategory).forEach((value, i) => {
            this.categoryItems = [
                ...this.categoryItems,
                {
                    type: 'categories',
                    content: value,
                    id: value,
                    // eslint-disable-next-line no-unneeded-ternary
                    selected: i === 0 ? true : false,
                },
            ];
        });

        // set rounds button content
        for (let i = 1; i <= this.rounds; i++) {
            this.roundItems = [
                ...this.roundItems,
                {
                    type: 'rounds',
                    content: `Round ${i}`,
                    id: i,
                    selected: false,
                },
            ];
        }
    },
    methods: {
        setItems(payload) {
            this.watching = true;

            const { type, id } = payload;

            switch (type) {
                case 'rounds':
                    this.roundItems.forEach((roundItem) => {
                        roundItem.selected = false;
                        if (roundItem.id === id) roundItem.selected = true;
                    });
                    break;
                case 'categories':
                    this.categoryItems.forEach((categoryItem) => {
                        categoryItem.selected = false;
                        if (categoryItem.id === id)
                            categoryItem.selected = true;
                    });
                    break;
            }
        },
    },
};
</script>

<style></style>
