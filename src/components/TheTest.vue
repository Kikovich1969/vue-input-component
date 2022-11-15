<script>
export default {
    props: ['expense', 'index'],
    emits: ['update:expense', 'addButton', 'removeButton'],
    data() {
        return {
            
        }
    },
}
</script>

<template>
    <div>
        <input type="number" :value="expense" @input="$emit('update:expense', $event.target.value)" >
        <button @click="$emit('addButton')">Add Expense</button>
        <button @click="$emit('removeButton', index)">Remove Expense</button>
    </div>
</template>