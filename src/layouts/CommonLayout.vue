<template>
    <div class="common">
        <ul class="nav justify-content-center">
            <li class="nav-item" v-for="(nav, idx) of navigation" :key="idx">
                <router-link class="nav-link" active-class="active"
                             :to="nav.link"
                             :exact="nav.exact"
                >{{ nav.name }}</router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Common",
        data: () => ({
            currentNav: 'Главная',
            navigation: [
                {name: 'Главная', link: '/', exact: true},
                {name: 'Список', link: '/list'},
                {name: 'Изучение', link: '/study'},
                {name: 'Тест', link: '/test'}
            ]
        })
    }
</script>

<style lang="scss" scoped>
    .nav {
        display: flex;
        flex-wrap: wrap;
        padding: 1em 0 1em;
        margin: 0;
        list-style: none;
        background-color: #f5f5f5;
        box-shadow: 1px 0 4px 2px rgba(0, 0, 0, 0.2);
        &-item {
            display: flex;
            flex-wrap: wrap;
            padding-left: 0;
            margin-bottom: 0;
            list-style: none;
        }
        &-link {
            display: block;
            padding: .5rem 1rem;
            color: #6c757d;
            text-transform: uppercase;
            &.active {
                color: #007bff;
            }
            &:hover {
                color: #0069b8;
            }
        }
    }

    a {
        text-decoration: none;
        background-color: transparent;
    }
</style>