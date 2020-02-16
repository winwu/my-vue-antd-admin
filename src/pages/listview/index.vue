<template>
    <div>
        <a-row type="flex" justify="space-around" align="middle">
            <a-col :span="24" :lg="14">
                <div class="mb-2">
                    <a-button type="primary" class="mr-2" @click="showDrawer"><a-icon type="plus" /> Create</a-button>
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
                <a-popconfirm title="Are you sure？" okText="Yes" cancelText="No" @confirm="onDeleteConfirm(record.name)">
                    <a href="#">Delete</a>
                </a-popconfirm>
            </span>
        </a-table>

        <!-- create form -->

        <a-drawer
            title="Create a new account"
            :width="720"
            @close="onClose"
            :visible="visible"
            :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}"
            >
            <a-form :form="form" layout="vertical" hideRequiredMark>
                <a-row :gutter="16">
                    <a-col :span="12">
                        <a-form-item label="Name">
                        <a-input
                            v-decorator="['name', {
                            rules: [{ required: true, message: 'Please enter user name' }]
                            }]"
                            placeholder="Please enter user name"
                        />
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="Url">
                        <a-input
                            v-decorator="['url', {
                                rules: [{ required: true, message: 'please enter url' }]
                            }]"
                            style="width: 100%"
                            addonBefore="http://"
                            addonAfter=".com"
                            placeholder="please enter url"
                        />
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="16">
                    <a-col :span="12">
                        <a-form-item label="Owner">
                        <a-select
                            v-decorator="['owner', {
                            rules: [{ required: true, message: 'Please select an owner' }]
                            }]"
                            placeholder="Please a-s an owner"
                        >
                            <a-select-option value="xiao">Xiaoxiao Fu</a-select-option>
                            <a-select-option value="mao">Maomao Zhou</a-select-option>
                        </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="Type">
                        <a-select
                            v-decorator="['type', {
                            rules: [{ required: true, message: 'Please choose the type' }]
                            }]"
                            placeholder="Please choose the type"
                        >
                            <a-select-option value="private">Private</a-select-option>
                            <a-select-option value="public">Public</a-select-option>
                        </a-select>
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="16">
                    <a-col :span="12">
                        <a-form-item label="Approver">
                            <a-select
                                v-decorator="['approver', {
                                rules: [{ required: true, message: 'Please choose the approver' }]
                                }]"
                                placeholder="Please choose the approver"
                            >
                                <a-select-option value="jack">Jack Ma</a-select-option>
                                <a-select-option value="tom">Tom Liu</a-select-option>
                            </a-select>
                        </a-form-item>
                    </a-col>
                    <a-col :span="12">
                        <a-form-item label="DateTime">
                        <a-date-picker
                            v-decorator="['dateTime', {
                            rules: [{ required: true, message: 'Please choose the dateTime' }]
                            }]"
                            style="width: 100%"
                            :getPopupContainer="trigger => trigger.parentNode"
                        />
                        </a-form-item>
                    </a-col>
                </a-row>
                <a-row :gutter="16">
                    <a-col :span="24">
                        <a-form-item label="Description">
                        <a-textarea
                            v-decorator="['description', {
                            rules: [{ required: true, message: 'Please enter url description' }]
                            }]"
                            :rows="4"
                            placeholder="please enter url description"
                        />
                        </a-form-item>
                    </a-col>
                </a-row>
            </a-form>
            <div
                :style="{
                position: 'absolute',
                left: 0,
                bottom: 0,
                width: '100%',
                borderTop: '1px solid #e9e9e9',
                padding: '10px 16px',
                background: '#fff',
                textAlign: 'right',
                }"
            >
                <a-button :style="{marginRight: '8px'}" @click="onClose">
                Cancel
                </a-button>
                <a-button @click="onClose" type="primary">Submit</a-button>
            </div>
        </a-drawer>
    </div>
</template>

<script>
// ref: https://www.antdv.com/components/table/

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    scopedSlots: { customRender: 'name' }
  },
  {
    title: 'Age',
    dataIndex: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address'
  },
  {
    title: 'Action',
    dataIndex: 'action',
    width: '150px',
    scopedSlots: { customRender: 'action' }
  }
]

const data = []
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `user ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  })
}

export default {
  name: 'Listview',
  data () {
    return {
      data,
      columns,
      selectedRowKeys: [], // Check here to configure the default column
      loading: false,

      // create related
      form: this.$form.createForm(this),
      visible: false
    }
  },
  computed: {
    hasSelected () {
      return this.selectedRowKeys.length > 0
    }
  },
  methods: {
    start () {
      this.loading = true
      // ajax request after empty completing
      setTimeout(() => {
        this.loading = false
        this.selectedRowKeys = []
      }, 1000)
    },
    onSelectChange (selectedRowKeys) {
      console.log('selectedRowKeys changed: ', selectedRowKeys)
      this.selectedRowKeys = selectedRowKeys
    },
    onSearch (value) {
      console.log(value)
    },
    showDrawer () {
      this.visible = true
    },
    onClose () {
      this.visible = false
    },
    onDeleteConfirm (name) {
      alert(`delete ${name}`)
    }
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
