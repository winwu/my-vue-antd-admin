<template>
    <div>
        <div style="margin-bottom: 16px">
            <a-button type="primary" @click="start" :disabled="!hasSelected" :loading="loading">
                Reload
            </a-button>
            <span style="margin-left: 8px">
                <template v-if="hasSelected">
                {{`Selected ${selectedRowKeys.length} items`}}
                </template>
            </span>
        </div>
        <a-table
            :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
            :columns="columns"
            :dataSource="data"
        />
    </div>
</template>

<script>
// ref: https://www.antdv.com/components/table/

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    }
];

const data = [];
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        name: `user ${i}`,
        age: 32,
        address: `London, Park Lane no. ${i}`,
    });
}

export default {
    name: 'Listview',
    data() {
        return {
            data,
            columns,
            selectedRowKeys: [], // Check here to configure the default column
            loading: false,
        };
    },
    computed: {
        hasSelected() {
            return this.selectedRowKeys.length > 0;
        },
    },
    methods: {
        start() {
            this.loading = true;
            // ajax request after empty completing
            setTimeout(() => {
                this.loading = false;
                this.selectedRowKeys = [];
                }, 1000);
        },
        onSelectChange(selectedRowKeys) {
            console.log('selectedRowKeys changed: ', selectedRowKeys);
            this.selectedRowKeys = selectedRowKeys;
        },
    }
}
</script>

<style lang="scss" scoped>
.extra-item {
    display: inline-block;
    margin-right: 24px;
    a {
        margin-left: 24px;
    }
}
</style>