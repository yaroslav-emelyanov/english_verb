<template>
    <div class="test">
        <div class="card">
           <component :is="step"></component>
        </div>
    </div>
</template>

<script>
    import Start from '@/components/Start.vue'
    import Verb from '@/components/Verb.vue'
    import Result from '@/components/Result.vue'
    export default {
        name: "Test",
        computed: {
          step () {
              return this.$store.getters.step
          }
        },
        components: {
            Start, Verb , Result
        }
    }
</script>

<style lang="scss">
    .test {
        height: 90vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .card {
        width: 400px;
        height: 400px;
        box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.21);
        border-radius: 1em;
    }

    .btn-success {
        color: #fff;
        background-color: #0084FF;
        &:hover {
            background-color: #006cd7;
        }
    }
    .btn {
        display: block;
        font-weight: 400;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        user-select: none;
        border: 1px solid transparent;
        padding: .375rem .75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: .25rem;
        color: white;
        text-transform: uppercase;
        &:focus {
            outline: none;
        }
    }
</style>