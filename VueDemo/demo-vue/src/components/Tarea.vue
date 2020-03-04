<template>
    <tr>
        <td>{{ texto }}</td>
        <td><button v-on:click="borrarTarea()">Borrar</button></td>
    </tr>
    
</template>

<script>
export default {
    name: 'Tarea',
    props: {
        texto: String
    },
    methods: {
        borrarTarea: function() {
            this.$emit('ItemBorrado', this.$vnode.key);
        },
    }
}
</script>

<style lang="stylus" scoped>

</style>