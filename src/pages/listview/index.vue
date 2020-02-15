<template>
    <div>        
        <a-row type="flex" justify="space-around" align="middle">
            <a-col :span="24" :lg="14">
                <div class="mb-2">
                    <a-button type="primary" class="mr-2">Create</a-button>
                    <a-button type="primary" @click="start" :disabled="!hasSelected" :loading="loading">
                        Reload
                    </a-button>
                    <span class="ml-2 mr-2">
                        <template v-if="hasSelected">
                        {{`Selected ${selectedRowKeys.length} items`}}
                        </template>
                    </span>
                </div>
            </a-col>
            <a-col :span="24" :lg="10">
                <div class="mb-2">
                    <a-input-search placeholder="input search text" @search="onSearch" enterButton />
                </div>
            </a-col>
        </a-row>
    
        <a-table
            :rowSelection="{selectedRowKeys: selectedRowKeys, onChange: onSelectChange}"
            :columns="columns"
            :dataSource="data">
            <span slot="name" slot-scope="text, record">
                <a href="javascript:;" title="view detail" :data-name="record.name" class="text-primary">{{ text }}</a>                
            </span>
            <span slot="action" slot-scope="text, record">
                <a href="javascript:;" :data-name="record.name" class="text-primary">Edit</a>
                <a-divider type="vertical" />
                <a href="javascript:;" class="text-danger">Delete</a>
            </span>
        </a-table>
    </div>
</template>

<script>
// ref: https://www.antdv.com/components/table/

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        scopedSlots: { customRender: 'name' },
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
    {
        title: 'Action',
        dataIndex: 'action',
        width: '150px',
        scopedSlots: { customRender: 'action' },
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
        onSearch(value) {
            console.log(value);
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